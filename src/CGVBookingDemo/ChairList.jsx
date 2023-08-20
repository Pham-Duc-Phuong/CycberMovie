import React from 'react';
import BookingProcess from './BookingProcess';
import ResultBooking from './ResultBooking';

const ChairList = () => {
    return (
        <div>
            <h1 className='bg-[#231d1c] text-white font-bold text-lg text-center p-1.5'>BOOKING ONLINE</h1>
            <div className='mt-5'>
                <BookingProcess />
                <ResultBooking direct={'next'} />
            </div>
        </div>
    );
};

export default ChairList;
