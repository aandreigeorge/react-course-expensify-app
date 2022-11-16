import { v4 as uuidv4 } from 'uuid';

//ACTIONS for EXPENSES REDUCER

//ADD_EXPENSE ACTION
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE ACTION
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE ACTION
export const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});