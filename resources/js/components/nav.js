import React from 'react';

export default function Nav() {
    return ( //Simpel navbar
        <div className='nav-bar'>
            <a href='/'><h2>Sunnanå Bastu</h2></a>
            <ul>
                <a href='/bookings'><li>Boka Tider</li></a>
                <a href='/admin'><li>Admin interface</li></a>
            </ul>
        </div>

    );
}
