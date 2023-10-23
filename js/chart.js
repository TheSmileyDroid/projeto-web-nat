function setChart(ctx, label, yLabel) {
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: label,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          data: [],
          fill: true,
        },
      ],
    },
    options: {
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      // Set Y to be 0-100
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 100,
            },
            scaleLabel: {
              display: true,
              labelString: yLabel,
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Time (s)",
            },
          },
        ],
      },
    },
    responsive: true,
  });

  for (var i = 0; i < 10; i++) {
    chart.data.labels.push(i);
    chart.data.datasets[0].data.push(0);
  }
  return chart;
}

function loadChart() {
  var ctxCpu = $("#cpu-chart");
  const labelCpu = "CPU Usage";
  const yLabelCpu = "CPU Usage (%)";
  var chartCpu = setChart(ctxCpu, labelCpu, yLabelCpu);
  var ctxRam = $("#ram-chart");
  const labelRam = "RAM Usage";
  const yLabelRam = "RAM Usage (%)";
  var chartRam = setChart(ctxRam, labelRam, yLabelRam);

  var i = 0;
  var interval = setInterval(function () {
    $.ajax({
      url: "info/index.php",
      success: function (data) {
        var json = JSON.parse(data);
        chartCpu.data.labels.push(i);
        chartCpu.data.datasets[0].data.push(json.cpu_usage);

        // Remove first element
        chartCpu.data.labels.shift();
        chartCpu.data.datasets[0].data.shift();

        var json = JSON.parse(data);
        chartRam.data.labels.push(i);
        chartRam.data.datasets[0].data.push(json.memory_usage);

        // Remove first element
        chartRam.data.labels.shift();
        chartRam.data.datasets[0].data.shift();

        
        chartCpu.update();

				chartRam.update();
        i++;
      },
    });
  }, 1000);
}
loadChart();