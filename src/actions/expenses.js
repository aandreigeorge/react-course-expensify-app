import { child, onValue, push, ref } from 'firebase/database';
import db from '../firebase/firebase';
import { _ } from 'numeral';


//ACTIONS for EXPENSES REDUCER

//ADD_EXPENSE ACTION
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = {description, note, amount, createdAt};

        return push(ref(db, 'expenses'), expense).then((ref) =>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//SET_EXPENSES -gets the data from firebase and sets it to the Redux Store
export const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return(dispatch) => {
        return onValue(ref(db, 'expenses'), (snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};


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

