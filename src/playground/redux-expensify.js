import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';


//ACTIONS for EXPENSES REDUCER

//ADD_EXPENSE ACTION
const addExpense = (
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
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE ACTION
const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});


//EXPENSES REDUCER
const expsenseReducerDefaultState = [];

const expensesReducer = (state = expsenseReducerDefaultState, action) => {
    switch(action.type) {

        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({id}) =>  id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            }); 

        default:
            return state;
    }
};


//ACTIONS for FILTERS REDUCER 

//SET_TEXT_FILTER ACTION
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE ACTION
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

//SORT_BY_AMOUNT ACTION
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

//SET_START_DATE ACTION
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE ACTION
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

 
//FILTERS REDUCER
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_DATE':
             return {
                ...state, 
                sortBy: action.sortBy
             };

        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: action.sortBy
            };

        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE' :
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
};


//GET VISIBLE EXPENSES -> FILTERING and SORTING
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } 
    });
};


//STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


//STORE CALLS-> Expenses Reducer
const expsenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));
// store.dispatch((removeExpense({id:expsenseOne.expense.id})));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));


//STORE CALLS -> Filters Reducer
// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

 store.dispatch(setStartDate(1009));

// store.dispatch(setStartDate()); //default value undefined

// store.dispatch(setEndDate(1250));




//DEMO
const demoState = {
    expenses: [{
        id:'myFirstExpense',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
};
console.log({...user, location: 'Iasi'});


//ADDITIONAL COMMENTS
//We are going to use multiple reducers. In this case we will use 2 reducers. One for the expenses array and another one for the filters object. 
//We are using a reducer for each ROOT PROPERTY. So we have the demoState object with two root properties. We're going to combine the reduces to 
//create the app.
//const expensesReducer = (state = [], action) => {  -> aici setam valoarea default pentru state ul arrayului expenses. E usor pentru ca in acest
//caz dorim pur si simplu sa incepem cu un array gol. In cazul valorii default pentru obiectul filters e mai complicat deoarece avem multe propietati 
//pentru care trebuie sa stabilim valori default asa ca vom defini o variabila in care vom seta valori default pentru toate valorile obiectului 
//filters si dupa vom reference acea variabila ca valoare default pentru obiectul filters la argumentul state la reducer function. 
//Practic definim valorile default state pentru un anumit obiect intr o variabila pe care o reference dupa in reducer.

