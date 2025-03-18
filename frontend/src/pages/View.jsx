import React from 'react';
import { NavLink } from 'react-router';

function View() {
  return (
    <div className='container mx-auto px-4 pt-4'>
      <nav className='border-b-2 border-[#0A192F] pb-4'>
        <ul className='flex flex-wrap justify-center gap-2 md:gap-4'>
          <NavLink>
            <li className='btn-royal'>All</li>
          </NavLink>
          <NavLink to={'Finance-Business'}>
            <li className='btn-royal'>Finance & Business</li>
          </NavLink>
          <NavLink to={'Health'}>
            <li className='btn-royal'>Health</li>
          </NavLink>
          <NavLink to={'Travel'}>
            <li className='btn-royal'>Travel</li>
          </NavLink>
          <NavLink to={'Food'}>
            <li className='btn-royal'>Food</li>
          </NavLink>
          <NavLink to={'General'}>
            <li className='btn-royal'>General & Others</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default View;