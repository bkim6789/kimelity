import {
    SET_ACTIVE_USERNAME,
    SET_PORTFOLIO,
    TOGGLE_IS_TICKET_OPEN,
} from './action-types';

export const setActiveUsername = username => ({
    type: SET_ACTIVE_USERNAME,
    payload: {username},
});

export const setPortfolio = portfolio => ({
    type: SET_PORTFOLIO,
    payload: { portfolio },
});

export const toggleIsTicketOpen = () => ({
    type: TOGGLE_IS_TICKET_OPEN,
});
