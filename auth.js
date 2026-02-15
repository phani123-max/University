// ================= LOGIN FUNCTION =================

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const res = await apiRequest("/auth/login", "POST", { email, password });

    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);

      redirectByRole(res.role);
    } else {
      alert(res.message || "Login failed");
    }

  } catch (error) {
    alert("Server error");
  }
}

// ================= ROLE REDIRECT =================

function redirectByRole(role) {
  if (role === "student") {
    window.location.href = "student-dashboard.html";
  } else if (role === "faculty") {
    window.location.href = "faculty-dashboard.html";
  }
}

// ================= CHECK LOGIN STATUS =================

function checkLoginPage() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If already logged in → redirect
  if (token && role) {
    redirectByRole(role);
  }
}

// ================= PROTECT DASHBOARD =================

function protectPage(requiredRole) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    window.location.href = "login.html";
  }

  if (requiredRole && role !== requiredRole) {
    alert("Unauthorized Access");
    window.location.href = "login.html";
  }
}

// ================= LOGOUT =================

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
