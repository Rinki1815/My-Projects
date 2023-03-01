// Chart JS
var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Bar Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(220 ,38 ,38,1.0)",
                "rgba(0,0,255,0.9)",
                "rgba(234,179,8,0.9)",
                "rgba(22,163,74,0.9)",
                "rgba(126,34,206,0.9)"
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)'
            // ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart (ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Line Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(220 ,38 ,38,0.6)",
                "rgba(0,0,255,1)",
                "rgba(253, 255, 0,1)",
                "rgba(22, 255, 0,1)",
                "rgba(126,34,206,1)"
            ],
            borderColor: [
                'rgba(0,0,0)'
              
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

