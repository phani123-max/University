async function loadAttendance() {
  const data = await apiRequest("/attendance");

  const table = document.getElementById("attendanceTable");

  data.forEach(record => {
    const row = table.insertRow();
    row.insertCell(0).innerText = record.subject;
    row.insertCell(1).innerText = record.status;
    row.insertCell(2).innerText = record.date;
  });
}

