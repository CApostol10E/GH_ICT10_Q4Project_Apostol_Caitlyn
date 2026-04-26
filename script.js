const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const inputDiv = document.getElementById("inputs");

days.forEach(day => {
    const label = document.createElement("label");
    label.innerText = `${day} Absences`;

    const input = document.createElement("input");
    input.type = "number";
    input.id = day;

    inputDiv.appendChild(label);
    inputDiv.appendChild(input);
});

let chart;

document.getElementById("attendanceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = days.map(day => Number(document.getElementById(day).value) || 0);
    generateGraph(data);
});

function generateGraph(data) {
    if (chart) chart.destroy();

    const ctx = document.getElementById("chart").getContext("2d");

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: days,
            datasets: [{
                label: "Absences",
                data: data
            }]
        }
    });
}