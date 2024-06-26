function calculateWorkingHours(loginTime, logoutTime) {
    if (!logoutTime) return 0;
    const login = new Date(`1970-01-01T${loginTime}:00Z`);
    const logout = new Date(`1970-01-01T${logoutTime}:00Z`);
    return (logout.getTime() - login.getTime()) / (1000 * 60 * 60);
}

function renderAttendanceLog(attendanceLog) {
    const tableBody = document.getElementById('attendance-table').querySelector('tbody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    attendanceLog.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.loginTime}</td>
            <td>${record.logoutTime ?? 'N/A'}</td>
            <td>${record.totalHours}</td>
            <td>${record.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

export { renderAttendanceLog, calculateWorkingHours };
