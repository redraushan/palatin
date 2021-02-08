import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './pages/blog.page';
import Rooms from './pages/rooms.page';
import Services from './pages/services.page';
import Contact from './pages/contact.page';
import Elements from './pages/elements.page';
import Home from './pages/home.page';
import About from './pages/about.page';

function App() {
  return (
    <>
      <div className='preloader d-flex align-items-center justify-content-center'>
        <div className='cssload-container'>
          <div className='cssload-loading'>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>

      {/* <!-- ##### Header Area Start ##### --> */}
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
                        <a href='/'>Home</a>
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
      {/* <!-- ##### Header Area End ##### --> */}

      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/rooms'>
              <Rooms />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/elements'>
              <Elements />
            </Route>
          </Switch>
        </div>
      </Router>

      <footer className='footer-area'>
        <div className='container'>
          <div className='row'>
            {/* <!-- Footer Widget Area --> */}
            <div className='col-12 col-lg-5'>
              <div className='footer-widget-area mt-50'>
                <a href='#' className='d-block mb-5'>
                  <img src='img/core-img/logo.png' alt='' />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris sceleri sque, at rutrum nulla
                  dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                  finibus.{' '}
                </p>
              </div>
            </div>

            {/* <!-- Footer Widget Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='footer-widget-area mt-50'>
                <h6 className='widget-title mb-5'>Find us on the map</h6>
                <img src='img/bg-img/footer-map.png' alt='' />
              </div>
            </div>

            {/* <!-- Footer Widget Area --> */}
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='footer-widget-area mt-50'>
                <h6 className='widget-title mb-5'>
                  Subscribe to our newsletter
                </h6>
                <form action='#' method='post' className='subscribe-form'>
                  <input
                    type='email'
                    name='subscribe-email'
                    id='subscribeemail'
                    placeholder='Your E-mail'
                  />
                  <button type='submit'>Subscribe</button>
                </form>
              </div>
            </div>

            {/* <!-- Copywrite Text --> */}
            <div className='col-12'>
              <div className='copywrite-text mt-30'>
                <p>
                  <a href='#' />
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{' '}
                  <i className='fa fa-heart-o' aria-hidden='true'></i> by{' '}
                  <a href='https://colorlib.com' target='_blank'>
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
