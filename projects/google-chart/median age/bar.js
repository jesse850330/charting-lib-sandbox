var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    datasets: [{
      label: 'Median age of males in New Zealand over 10 years',
      data: [35, 35.3, 35.6, 35.8, 35.9, 36.1, 36.3, 36.4, 36.3, 36, 35.8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.1)',
        'rgba(54, 162, 235, 0.1)',
        'rgba(255, 206, 86, 0.1)',
        'rgba(75, 192, 192, 0.1)',
        'rgba(153, 102, 255, 0.1)',
        'rgba(255, 159, 64, 0.1)',
        'rgba(25, 159, 64, 0.8)',
        'rgba(100, 59, 64, 0.8)',
        'rgba(120, 9, 64, 0.8)',
        'rgba(80, 139, 4, 0.1)',
        'rgba(20, 159, 64, 0.1)',
      ],
      borderColor: [
      'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(25, 159, 64, 1)',
        'rgba(100, 59, 64, 1)',
        'rgba(120, 9, 64, 1)',
        'rgba(80, 139, 4, 1)',
        'rgba(20, 159, 64, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    boxWidth:0,
    responsive: false,
    scales: {
    
            yAxes: [{
        ticks: {
          min:34,
          max:37,
        }
      }]
    }
  }
});