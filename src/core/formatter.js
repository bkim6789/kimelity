export function formatCurrency(value) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return currencyFormatter.format(value);
}

export function formatPercent(value) {
    return value.toFixed(2) + '%';
}