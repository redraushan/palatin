import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='header-area'>
      {/* <!-- Navbar Area --> */}
      <div className='palatin-main-menu'>
        <div className='classy-nav-container breakpoint-off'>
          <div className='container'>
            {/* <!-- Menu --> */}
            <nav
              className='classy-navbar justify-content-between'
              id='palatinNav'
            >
              {/* <!-- Nav brand --> */}

              <a href='/' className='nav-brand'>
                <img src='img/core-img/logo.png' alt='' />
              </a>

              {/* <!-- Navbar Toggler --> */}
              <div className='classy-navbar-toggler'>
                <span className='navbarToggler'>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>

              {/* <!-- Menu --> */}
              <div className='classy-menu'>
                {/* <!-- close btn --> */}
                <div className='classycloseIcon'>
                  <div className='cross-wrap'>
                    <span className='top'></span>
                    <span className='bottom'></span>
                  </div>
                </div>

                {/* <!-- Nav Start --> */}
                <div className='classynav'>
                  <ul>
                    <li className='active'>
                      <a href='/home'>Home</a>
                    </li>
                    <li>
                      <a href='/about'>About Us</a>
                    </li>
                    <li>
                      <a href='#'>Pages</a>
                      <ul className='dropdown'>
                        <li>
                          <a href='/'>Home</a>
                        </li>
                        <li>
                          <a href='/about'>About Us</a>
                        </li>
                        <li>
                          <a href='/services'>Services</a>
                        </li>
                        <li>
                          <a href='/rooms'>Rooms</a>
                        </li>
                        <li>
                          <a href='/blog'>News</a>
                        </li>
                        <li>
                          <a href='/contact'>Contact</a>
                        </li>
                        <li>
                          <a href='/elements'>Elements</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>Mega Menu</a>
                      <div className='megamenu'>
                        <ul className='single-mega cn-col-4'>
                          <li>
                            <a href='/'>Home</a>
                          </li>
                          <li>
                            <a href='/about'>About Us</a>
                          </li>
                          <li>
                            <a href='/services'>Services</a>
                          </li>
                          <li>
                            <a href='/rooms'>Rooms</a>
                          </li>
                          <li>
                            <a href='/blog'>News</a>
                          </li>
                          <li>
                            <a href='/contact'>Contact</a>
                          </li>
                          <li>
                            <a href='/elements'>Elements</a>
                          </li>
                        </ul>
                        <ul className='single-mega cn-col-4'>
                          <li>
                            <a href='/'>Home</a>
                          </li>
                          <li>
                            <a href='/about'>About Us</a>
                          </li>
                          <li>
                            <a href='/services'>Services</a>
                          </li>
                          <li>
                            <a href='/rooms'>Rooms</a>
                          </li>
                          <li>
                            <a href='/blog'>News</a>
                          </li>
                          <li>
                            <a href='/contact'>Contact</a>
                          </li>
                          <li>
                            <a href='/elements'>Elements</a>
                          </li>
                        </ul>
                        <ul className='single-mega cn-col-4'>
                          <li>
                            <a href='/'>Home</a>
                          </li>
                          <li>
                            <a href='/about'>About Us</a>
                          </li>
                          <li>
                            <a href='/services'>Services</a>
                          </li>
                          <li>
                            <a href='/rooms'>Rooms</a>
                          </li>
                          <li>
                            <a href='/blog'>News</a>
                          </li>
                          <li>
                            <a href='/contact'>Contact</a>
                          </li>
                          <li>
                            <a href='/elements'>Elements</a>
                          </li>
                        </ul>
                        <ul className='single-mega cn-col-4'>
                          <li>
                            <a href='/'>Home</a>
                          </li>
                          <li>
                            <a href='/about'>About Us</a>
                          </li>
                          <li>
                            <a href='/services'>Services</a>
                          </li>
                          <li>
                            <a href='/rooms'>Rooms</a>
                          </li>
                          <li>
                            <a href='/blog'>News</a>
                          </li>
                          <li>
                            <a href='/contact'>Contact</a>
                          </li>
                          <li>
                            <a href='/elements'>Elements</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href='/services'>Services</a>
                    </li>
                    <li>
                      <a href='/contact'>Contact</a>
                    </li>
                  </ul>

                  {/* <!-- Button --> */}
                  <div className='menu-btn'>
                    <a href='#' className='btn palatin-btn'>
                      Make a Reservation
                    </a>
                  </div>
                </div>
                {/* <!-- Nav End --> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
