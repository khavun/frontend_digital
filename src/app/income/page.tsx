"use client"; 
import Navbar from '@/components/layout/navbar';
import BudgetSummary from '@/components/dashboards/budgetSummary';
import Imcome from '@/components/imcome/imcome'

const Index = () =>{
    return(
        <>
            <Navbar></Navbar>
            <Imcome/>
        </>
    );
}

export default Index