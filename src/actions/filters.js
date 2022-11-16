//ACTIONS for FILTERS REDUCER 

//SET_TEXT_FILTER ACTION
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE ACTION
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT ACTION
export const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});

//SET_START_DATE ACTION
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE ACTION
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
