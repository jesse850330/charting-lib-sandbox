var ctx = document.getElementById("lineChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Age',
                    borderColor: 'rgba(255, 0, 0, 0.6)',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    pointBorderColor: ['rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)',
                                        'rgba(0, 0, 0, 0.8)'],
                    pointRadius: [5,5,5,5,5,5,5,5,5,5],
                    data: [{
                        x: 2007,
                        y: 35.3
                    }, {
                        x: 2008,
                        y: 35.6
                    }, {
                        x: 2009,
                        y: 35.8
                    }, {
                        x: 2010,
                        y: 35.9
                    }, {
                        x: 2011,
                        y: 36.1
                    }, {
                        x: 2012,
                        y: 36.3
                    }, {
                        x: 2013,
                        y: 36.4
                    }, {
                        x: 2014,
                        y: 36.3
                    }, {
                        x: 2015,
                        y: 36
                    }, {
                        x: 2016,
                        y: 35.8
                    }]
                }],
            },
            options: {
                title: {
                    text: 'Median age of males in New Zealand over the past ten years',
                    display: true
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Year'
                        },
                        type: 'linear',
                        position: 'bottom',
                        display: true
                    }],
                    yAxes: [{
                        ticks: {
                            max: 36.6
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Age'
                        },
                        type: 'linear',
                        position: 'left',
                        display: true
                    }]
                }
            }
        });