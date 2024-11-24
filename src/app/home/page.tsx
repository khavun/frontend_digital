"use client"; 
import Dashboard from '@/components/dashboards/dashboard'
import Navbar from '@/components/layout/navbar';
import BudgetSummary from '@/components/dashboards/budgetSummary';

const HomePage = () =>{
    return(
        <>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
        </>
    );
}

export default HomePage