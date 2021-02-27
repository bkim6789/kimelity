import mockPortfolioHistory from './mock-portfolio-history';
import symbolToCompany from './mock-companies';

export const mockPortfolio = {
    cash: 42069.00,
    cashStates: mockPortfolioHistory.prices,
    stocks: [
        {
            symbol: 'AAPL',
            quantity: 100,
            last: symbolToCompany['AAPL'].price,
            percentChange: 2.14,
        },
        {
            symbol: 'CAT',
            quantity: 100,
            last: symbolToCompany['CAT'].price,
            percentChange: -2.14,
        },
        {
            symbol: 'MSFT',
            quantity: 220,
            last: symbolToCompany['MSFT'].price,
            percentChange: 5.14,
        },
        {
            symbol: 'DIS',
            quantity: 40,
            last: symbolToCompany['DIS'].price,
            percentChange: -6.14,
        },
        {
            symbol: 'MAA',
            quantity: 40,
            last: symbolToCompany['MAA'].price,
            percentChange: 6.14,
        },
        {
            symbol: 'MHK',
            quantity: 40,
            last: symbolToCompany['MHK'].price,
            percentChange: 6.14,
        },
    ],
};

export default mockPortfolio;