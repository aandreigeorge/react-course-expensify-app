import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';     


const AddExpensePage = (props) => {
    
    const navigate = useNavigate();

    return (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit = {(expense) => {
                props.dispatch(startAddExpense(expense));
                navigate('/');
            }}
        />
    </div>
)};


export default connect()(AddExpensePage);