export const options = {
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

export const getUpDownColor = prices => {
    const firstPrice = prices[0];
    const lastPrice = prices[prices.length - 1];
    const isUp = lastPrice >= firstPrice;

    const greenColor = 'rgba(52, 168, 83, 1)';
    const redColor = 'rgba(217, 48, 37, 1)';
    const upDownColor = isUp ? greenColor : redColor;

    return upDownColor;
}
