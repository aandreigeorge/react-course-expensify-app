import React from 'react';
import ExpenseForm from './ExpenseForm';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editExpense, removeExpense } from '../actions/expenses';


const EditExpensePage = () => {

    const expenses = useSelector(state => state.expenses);
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const expense = expenses.find((expense) => expense.id === id);
    console.log(expense);
  
    return (
        <div>
            <ExpenseForm
                expense = { expense }
                onSubmit = {(expense) => {
                    dispatch(editExpense(id, expense))
                    navigate('/');
                }}   
            />
            <button onClick={ () => {
                dispatch(removeExpense({id}));
                navigate('/');
              }}
            >Remove Expense</button>
        </div>
    );
};


export default EditExpensePage;