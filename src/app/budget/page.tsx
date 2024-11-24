"use client"; 
import Navbar from '@/components/layout/navbar';
import BudgetView from '@/components/budget/bugetView';

const Budget = () =>{
    return(
        <>
            <Navbar></Navbar>
            <BudgetView></BudgetView>
        </>
    );
}

export default Budget