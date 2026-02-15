const API = "http://localhost:5000/api";

async function apiRequest(endpoint, method="GET", data=null) {
  const token = localStorage.getItem("token");

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": token ? `Bearer ${token}` : ""
    }
  };

  if (data) options.body = JSON.stringify(data);

  const res = await fetch(`${API}${endpoint}`, options);
  return await res.json();
}
