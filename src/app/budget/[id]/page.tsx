"use client";
import Navbar from '@/components/layout/navbar';
import BudgetDetail from '@/components/budget/budgetDetail';

const Detail = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <Navbar />
            <BudgetDetail params={Promise.resolve(params)} />
        </>
    );
};

export default Detail;
