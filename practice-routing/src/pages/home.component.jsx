import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Invoices from './invoices.component';
import Expenses from './expenses.component';

import React from "react";

const Home = () => {
    return (
        <React.Fragment>
            <h1>This is the home page</h1>
            <Routes>
                <Route path='invoices' element={<Invoices />} />
                <Route path='expenses' element={<Expenses />} /> 
            </Routes>

            <Link to='invoices'>Invoices</Link> | {" "}
            <Link to='expenses'>Expenses</Link>
        </React.Fragment>
        
    );
}

export default Home;