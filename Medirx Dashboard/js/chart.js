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

var ctx = document.getElementById('scatterChart').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgba(251,113,133,1)",
            label: 'Scatter Dataset',
            data: [{
                x:50, y:7},
                {x:60, y:8},
                {x:70, y:8},
                {x:80, y:9},
                {x:90, y:9},
                {x:100, y:9},
                {x:110, y:10},
                {x:120, y:11},
                {x:130, y:14},
                {x:140, y:14},
                {x:150, y:15}
            ]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
var ctx = document.getElementById('bubbleChart').getContext('2d');
var myChart = new Chart (ctx, {
    type: 'bubble',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Bubble Dataset',
            data: [{
              x: 10,
              y: 20,
              r: 15
            }, {
              x: 30,
              y: 10,
              r: 10
            },{
                x: 15,
                y: 25,
                r: 15
              },{
                x: 12,
                y: 20,
                r: 15
              }],
            backgroundColor: 'rgba(253, 255, 0)'
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
// var ctx = document.getElementById('lineChart').getContext('2d');
// var myChart = new Chart (ctx, {
//     type: 'Line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 "rgba(0,0,255,1.0)",
//                 "rgba(0,0,255,0.8)",
//                 "rgba(0,0,255,0.6)",
//                 "rgba(0,0,255,0.4)",
//                 "rgba(0,0,255,0.2)"
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
// var ctx = document.getElementById('lineChart').getContext('2d');
// var myChart = new Chart (ctx, {
//     type: 'Line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 "rgba(0,0,255,1.0)",
//                 "rgba(0,0,255,0.8)",
//                 "rgba(0,0,255,0.6)",
//                 "rgba(0,0,255,0.4)",
//                 "rgba(0,0,255,0.2)"
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });