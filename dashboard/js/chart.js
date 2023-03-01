// // Chart JS
// var ctx = document.getElementById('barChart').getContext('2d');
// var myChart = new Chart (ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//         datasets: [{
//             label: 'Bar Dataset',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 "rgba(220 ,38 ,38,1.0)",
//                 "rgba(0,0,255,0.9)",
//                 "rgba(234,179,8,0.9)",
//                 "rgba(22,163,74,0.9)",
//                 "rgba(126,34,206,0.9)"
//             ],
//             // borderColor: [
//             //     'rgba(255, 99, 132, 1)',
//             //     'rgba(54, 162, 235, 1)',
//             //     'rgba(255, 206, 86, 1)',
//             //     'rgba(75, 192, 192, 1)',
//             //     'rgba(153, 102, 255, 1)'
//             // ],
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
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//         datasets: [{
//             label: 'Line Dataset',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 "rgba(220 ,38 ,38,0.6)",
//                 "rgba(0,0,255,1)",
//                 "rgba(253, 255, 0,1)",
//                 "rgba(22, 255, 0,1)",
//                 "rgba(126,34,206,1)"
//             ],
//             borderColor: [
//                 'rgba(0,0,0)'
              
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

// var ctx = document.getElementById('scatterChart').getContext('2d');
// var scatterChart = new Chart(ctx, {
//     type: 'scatter',
//     data: {
//         datasets: [{
//             pointRadius: 4,
//             pointBackgroundColor: "rgba(251,113,133,1)",
//             label: 'Scatter Dataset',
//             data: [{
//                 x:50, y:7},
//                 {x:60, y:8},
//                 {x:70, y:8},
//                 {x:80, y:9},
//                 {x:90, y:9},
//                 {x:100, y:9},
//                 {x:110, y:10},
//                 {x:120, y:11},
//                 {x:130, y:14},
//                 {x:140, y:14},
//                 {x:150, y:15}
//             ]
//         }]
//     },
//     options: {
//         scales: {
//             xAxes: [{
//                 type: 'linear',
//                 position: 'bottom'
//             }]
//         }
//     }
// });
// var ctx = document.getElementById('bubbleChart').getContext('2d');
// var myChart = new Chart (ctx, {
//     type: 'bubble',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//         datasets: [{
//             label: 'Bubble Dataset',
//             data: [{
//               x: 10,
//               y: 20,
//               r: 15
//             }, {
//               x: 30,
//               y: 10,
//               r: 10
//             },{
//                 x: 15,
//                 y: 25,
//                 r: 15
//               },{
//                 x: 12,
//                 y: 20,
//                 r: 15
//               }],
//             backgroundColor: 'rgba(253, 255, 0)'
//           }]
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
// // var ctx = document.getElementById('lineChart').getContext('2d');
// // var myChart = new Chart (ctx, {
// //     type: 'Line',
// //     data: {
// //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
// //         datasets: [{
// //             label: '# of Votes',
// //             data: [12, 19, 3, 5, 2, 3],
// //             backgroundColor: [
// //                 "rgba(0,0,255,1.0)",
// //                 "rgba(0,0,255,0.8)",
// //                 "rgba(0,0,255,0.6)",
// //                 "rgba(0,0,255,0.4)",
// //                 "rgba(0,0,255,0.2)"
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },
// //     options: {
// //         scales: {
// //             yAxes: [{
// //                 ticks: {
// //                     beginAtZero: true
// //                 }
// //             }]
// //         }
// //     }
// // });
// // var ctx = document.getElementById('lineChart').getContext('2d');
// // var myChart = new Chart (ctx, {
// //     type: 'Line',
// //     data: {
// //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
// //         datasets: [{
// //             label: '# of Votes',
// //             data: [12, 19, 3, 5, 2, 3],
// //             backgroundColor: [
// //                 "rgba(0,0,255,1.0)",
// //                 "rgba(0,0,255,0.8)",
// //                 "rgba(0,0,255,0.6)",
// //                 "rgba(0,0,255,0.4)",
// //                 "rgba(0,0,255,0.2)"
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },
// //     options: {
// //         scales: {
// //             yAxes: [{
// //                 ticks: {
// //                     beginAtZero: true
// //                 }
// //             }]
// //         }
// //     }
// // });

var xyValues = [
    {x:50, y:7},
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
  ];
  
  new Chart("scatterChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });

  var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("multipleChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});