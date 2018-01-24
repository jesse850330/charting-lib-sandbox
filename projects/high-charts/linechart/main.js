Highcharts.chart('container-mix', {
    title: {
        text:'Median age of males in New Zealand over the past ten years'
    },
    subtitle: {
        text: 'Source: http://archive.stats.govt.nz/infoshare/?url=/infoshare/ <br> <strong> Studies show that over the last 10 years, the average age of male population in NZ is increasing',
    },
    xAxis: [{
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001]
        
    }],
    yAxis: [{ // Primary yAxis
        title: {
            text: 'Age',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
    }],
    series: [{
        type: 'column',
        data: [31, 31, 31, 32, 32, 32,  33, 33, 33, 34, 34]
    },
    {
        type: 'spline',
        data: [31, 31, 31, 32, 32, 32,  33, 33, 33, 34, 34]
    }]
});