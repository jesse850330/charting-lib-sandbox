var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Data',
                    borderColor: 'rgba(255, 0, 0, 0.6)',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    data: [{
                        x: 215,
                        y: 14.2
                    }, {
                        x: 325,
                        y: 16.4
                    }, {
                        x: 185,
                        y: 11.9
                    }, {
                        x: 332,
                        y: 15.2
                    }, {
                        x: 406,
                        y: 18.5
                    }, {
                        x: 522,
                        y: 22.1
                    }, {
                        x: 412,
                        y: 19.4
                    }, {
                        x: 614,
                        y: 25.1
                    }, {
                        x: 544,
                        y: 23.4
                    }, {
                        x: 421,
                        y: 18.1
                    }, {
                        x: 445,
                        y: 22.6
                    }, {
                        x: 408,
                        y: 17.2
                    },]
                }],
            },
            options: {
                title: {
                    text: 'Amount of ice cream bought based on temperature',
                    display: true
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Ice cream sales ($)'
                        },
                        type: 'linear',
                        position: 'bottom',
                        display: true
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Temperature ℃'
                        },
                        type: 'linear',
                        position: 'left',
                        display: true
                    }]
                }
            }
        });