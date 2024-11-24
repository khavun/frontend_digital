"use client";
import Navbar from '@/components/layout/navbar';
import Edit from '@/components/budget/edit';

const BudgetEdit = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <Navbar />
            <Edit/>
        </>
    );
};

export default BudgetEdit;