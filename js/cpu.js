function loadChartCPU() {
  var ctx = $("#cpu-chart");
  const label = "CPU Usage";
  const yLabel = "CPU Usage (%)";
  var { i, chart } = setChart(ctx, label, yLabel);

  var i = 0;
  var interval = setInterval(function () {
    $.ajax({
      url: "info/cpu.php",
      success: function (data) {
        var json = JSON.parse(data);
        chart.data.labels.push(i);
        chart.data.datasets[0].data.push(json.cpu_usage);

        // Remove first element
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();

        console.log(json.cpu_usage);
        chart.update();
        i++;
      },
    });
  }, 1000);
}

loadChartCPU();
