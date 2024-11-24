"use client"; 
import Dashboard from '@/components/dashboards/dashboard'
import Navbar from '@/components/layout/navbar';
import ExpenseView from '@/components/expense/expenseView';

const Expense = () =>{
    return(
        <>
            <Navbar></Navbar>
            <ExpenseView></ExpenseView>
        </>
    );
}

export default Expense