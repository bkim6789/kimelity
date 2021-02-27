export function priceStatesToChartState(priceStates, finalPrice = 0) {
    const priceStateToDate = priceState => new Date(priceState.date * 1000);

    const labels = priceStates.map(priceState => {
        const date = priceStateToDate(priceState);
        return date;
    }).reverse();

    const recentPrice = priceStates[0].close;
    const multiplier = finalPrice ? finalPrice / recentPrice : 1;

    const prices = priceStates.map(priceState => {
        return multiplier * priceState.close;
    }).reverse();

    return {labels, prices};
}