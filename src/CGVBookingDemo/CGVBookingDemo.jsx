import React from 'react';
import Header from './Header';
import BookingOnline from './BookingOnline';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import CheckoutConfirm from './CheckoutConfirm';

const CGVBookingDemo = () => {
    return (
        <div>
            <Header />

            <Routes>
                <Route index path='/' element={<BookingOnline />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>


            {/* Modal checkout confirm */}
            <CheckoutConfirm/>
        </div>
    );
};

export default CGVBookingDemo;
