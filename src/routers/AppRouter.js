import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <Header/> 
        <Routes> 
            <Route path="/" element={<ExpenseDashboardPage/>}/>
            <Route path="/create" element ={<AddExpensePage/>}/>
            <Route path="/edit/:id" element ={<EditExpensePage/>}/>
            <Route path="/help" element ={<HelpExpensePage/>}/>
            <Route path="*" element= {<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
);


export default AppRouter;
 