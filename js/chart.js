function setChart(ctx, label, yLabel) {
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: label,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: [],
                fill: true,
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            // Set Y to be 0-100
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 100
                    },
                    scaleLabel: {
                        display: true,
                        labelString: yLabel
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Time (s)'
                    }
                }]
            },
        },
        responsive: true,
    });

    for (var i = 0; i < 10; i++) {
        chart.data.labels.push(i);
        chart.data.datasets[0].data.push(0);
    }
    return { i, chart };
}
