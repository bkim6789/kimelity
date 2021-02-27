import {
    SET_ACTIVE_USERNAME,
    SET_PORTFOLIO,
    TOGGLE_IS_TICKET_OPEN,
} from './action-types';
import mockPortfolio from './mock/mock-portfolio';

const initialState = {
    activeUsername: 'bkim',
    portfolio: mockPortfolio,
    totalValue: 14 * 1000,
    isTicketOpen: true,
};

export default function appReducer(state = initialState, action) {
    const {payload} = action;

    switch(action.type) {
        case SET_ACTIVE_USERNAME:
            return {
                ...state,
                activeUsername: payload.username,
            };
        case SET_PORTFOLIO:
            return {
                ...state,
                portfolio: payload.portfolio,
            };
        case TOGGLE_IS_TICKET_OPEN:
            return {
                ...state,
                isTicketOpen: !state.isTicketOpen,
            };
        default:
            return state;
    }
}
