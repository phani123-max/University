async function uploadAssignment() {
  const formData = new FormData();
  formData.append("student_name", document.getElementById("student").value);
  formData.append("course", document.getElementById("course").value);
  formData.append("file", document.getElementById("file").files[0]);

  const res = await fetch("http://localhost:5000/api/assignment/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  document.getElementById("feedback").innerText = data.feedback;
}
