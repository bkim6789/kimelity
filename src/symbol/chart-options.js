const chartOptions = {
    spanGaps: true,
    elements: {
        point: {
            radius: 0,
        },
    },
    scales: {
        xAxes: [{
            type: 'time',
            time: {
                unit: 'month',
            },
            gridLines: {
                display: false
            },
        }],
    },
};

export default chartOptions;
