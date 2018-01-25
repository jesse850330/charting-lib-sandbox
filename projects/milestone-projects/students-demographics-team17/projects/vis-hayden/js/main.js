var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Data',
                    borderColor: 'rgba(255, 0, 0, 0.6)',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    data: [{
                        x: 215,
                        y: 14.2
                    }]
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