function loadChartRAM() {
  var ctx = $("#ram-chart");
  const label = "RAM Usage";
  const yLabel = "RAM Usage (%)";
  var { i, chart } = setChart(ctx, label, yLabel);

  var i = 0;
  var interval = setInterval(function () {
    $.ajax({
      url: "info/ram.php",
      success: function (data) {
        var json = JSON.parse(data);
        chart.data.labels.push(i);
        chart.data.datasets[0].data.push(json.memory_usage);

        // Remove first element
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();

        console.log(json.memory_usage);
        chart.update();
        i++;
      },
    });
  }, 1000);
}

loadChartRAM();
