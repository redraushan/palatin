import './App.css';

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
                <a href='index.html' className='nav-brand'>
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
                        <a href='index.html'>Home</a>
                      </li>
                      <li>
                        <a href='about-us.html'>About Us</a>
                      </li>
                      <li>
                        <a href='#'>Pages</a>
                        <ul className='dropdown'>
                          <li>
                            <a href='index.html'>Home</a>
                          </li>
                          <li>
                            <a href='about-us.html'>About Us</a>
                          </li>
                          <li>
                            <a href='services.html'>Services</a>
                          </li>
                          <li>
                            <a href='rooms.html'>Rooms</a>
                          </li>
                          <li>
                            <a href='blog.html'>News</a>
                          </li>
                          <li>
                            <a href='contact.html'>Contact</a>
                          </li>
                          <li>
                            <a href='elements.html'>Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>Mega Menu</a>
                        <div className='megamenu'>
                          <ul className='single-mega cn-col-4'>
                            <li>
                              <a href='index.html'>Home</a>
                            </li>
                            <li>
                              <a href='about-us.html'>About Us</a>
                            </li>
                            <li>
                              <a href='services.html'>Services</a>
                            </li>
                            <li>
                              <a href='rooms.html'>Rooms</a>
                            </li>
                            <li>
                              <a href='blog.html'>News</a>
                            </li>
                            <li>
                              <a href='contact.html'>Contact</a>
                            </li>
                            <li>
                              <a href='elements.html'>Elements</a>
                            </li>
                          </ul>
                          <ul className='single-mega cn-col-4'>
                            <li>
                              <a href='index.html'>Home</a>
                            </li>
                            <li>
                              <a href='about-us.html'>About Us</a>
                            </li>
                            <li>
                              <a href='services.html'>Services</a>
                            </li>
                            <li>
                              <a href='rooms.html'>Rooms</a>
                            </li>
                            <li>
                              <a href='blog.html'>News</a>
                            </li>
                            <li>
                              <a href='contact.html'>Contact</a>
                            </li>
                            <li>
                              <a href='elements.html'>Elements</a>
                            </li>
                          </ul>
                          <ul className='single-mega cn-col-4'>
                            <li>
                              <a href='index.html'>Home</a>
                            </li>
                            <li>
                              <a href='about-us.html'>About Us</a>
                            </li>
                            <li>
                              <a href='services.html'>Services</a>
                            </li>
                            <li>
                              <a href='rooms.html'>Rooms</a>
                            </li>
                            <li>
                              <a href='blog.html'>News</a>
                            </li>
                            <li>
                              <a href='contact.html'>Contact</a>
                            </li>
                            <li>
                              <a href='elements.html'>Elements</a>
                            </li>
                          </ul>
                          <ul className='single-mega cn-col-4'>
                            <li>
                              <a href='index.html'>Home</a>
                            </li>
                            <li>
                              <a href='about-us.html'>About Us</a>
                            </li>
                            <li>
                              <a href='services.html'>Services</a>
                            </li>
                            <li>
                              <a href='rooms.html'>Rooms</a>
                            </li>
                            <li>
                              <a href='blog.html'>News</a>
                            </li>
                            <li>
                              <a href='contact.html'>Contact</a>
                            </li>
                            <li>
                              <a href='elements.html'>Elements</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href='services.html'>Services</a>
                      </li>
                      <li>
                        <a href='contact.html'>Contact</a>
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

      {/* <!-- ##### Hero Area Start ##### --> */}
      <section className='hero-area'>
        <div className='hero-slides owl-carousel'>
          {/* <!-- Single Hero Slide --> */}
          <div className='single-hero-slide d-flex align-items-center justify-content-center'>
            {/* <!-- Slide Img --> */}
            <div
              className='slide-img bg-img'
              style={{ backroundImage: 'url(img/bg-img/bg-1.jpg)' }}
            ></div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-lg-9'>
                  {/* <!-- Slide Content --> */}
                  <div
                    className='hero-slides-content'
                    data-animation='fadeInUp'
                    data-delay='100ms'
                  >
                    <div
                      className='line'
                      data-animation='fadeInUp'
                      data-delay='300ms'
                    ></div>
                    <h2 data-animation='fadeInUp' data-delay='500ms'>
                      The Vacation Heaven
                    </h2>
                    <p data-animation='fadeInUp' data-delay='700ms'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus.
                    </p>
                    <a
                      href='#'
                      className='btn palatin-btn mt-50'
                      data-animation='fadeInUp'
                      data-delay='900ms'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single Hero Slide --> */}
          <div className='single-hero-slide d-flex align-items-center justify-content-center'>
            {/* <!-- Slide Img --> */}
            <div
              className='slide-img bg-img'
              style={{ backroundImage: 'url(img/bg-img/bg-2.jpg)' }}
            ></div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-lg-9'>
                  {/* <!-- Slide Content --> */}
                  <div
                    className='hero-slides-content'
                    data-animation='fadeInUp'
                    data-delay='100ms'
                  >
                    <div
                      className='line'
                      data-animation='fadeInUp'
                      data-delay='300ms'
                    ></div>
                    <h2 data-animation='fadeInUp' data-delay='500ms'>
                      A place to remember
                    </h2>
                    <p data-animation='fadeInUp' data-delay='700ms'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus.
                    </p>
                    <a
                      href='#'
                      className='btn palatin-btn mt-50'
                      data-animation='fadeInUp'
                      data-delay='900ms'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single Hero Slide --> */}
          <div className='single-hero-slide d-flex align-items-center justify-content-center'>
            {/* <!-- Slide Img --> */}
            <div
              className='slide-img bg-img'
              style={{ backroundImage: 'url(img/bg-img/bg-3.jpg)' }}
            ></div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-lg-9'>
                  {/* <!-- Slide Content --> */}
                  <div
                    className='hero-slides-content'
                    data-animation='fadeInUp'
                    data-delay='100ms'
                  >
                    <div
                      className='line'
                      data-animation='fadeInUp'
                      data-delay='300ms'
                    ></div>
                    <h2 data-animation='fadeInUp' data-delay='500ms'>
                      Enjoy your life
                    </h2>
                    <p data-animation='fadeInUp' data-delay='700ms'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus.
                    </p>
                    <a
                      href='#'
                      className='btn palatin-btn mt-50'
                      data-animation='fadeInUp'
                      data-delay='900ms'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Hero Area End ##### --> */}

      {/* <!-- ##### Book Now Area Start ##### --> */}
      <div className='book-now-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10'>
              <div className='book-now-form'>
                <form action='#'>
                  {/* <!-- Form Group --> */}
                  <div className='form-group'>
                    <label htmlFor='select1'>Check In</label>
                    <select className='form-control' id='select1'>
                      <option>19 June</option>
                      <option>20 June</option>
                      <option>21 June</option>
                      <option>22 June</option>
                      <option>23 June</option>
                      <option>24 June</option>
                      <option>25 June</option>
                    </select>
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className='form-group'>
                    <label htmlFor='select2'>Check Out</label>
                    <select className='form-control' id='select2'>
                      <option>20 June</option>
                      <option>21 June</option>
                      <option>22 June</option>
                      <option>23 June</option>
                      <option>24 June</option>
                      <option>25 June</option>
                      <option>26 June</option>
                      <option>27 June</option>
                    </select>
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className='form-group'>
                    <label htmlFor='select3'>Adults</label>
                    <select className='form-control' id='select3'>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                    </select>
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className='form-group'>
                    <label htmlFor='select4'>Childrens</label>
                    <select className='form-control' id='select4'>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                    </select>
                  </div>

                  {/* <!-- Button --> */}
                  <button type='submit'>Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Book Now Area End ##### --> */}

      {/* <!-- ##### About Us Area Start ##### --> */}
      <section className='about-us-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-6'>
              <div className='about-text text-center mb-100'>
                <div className='section-heading text-center'>
                  <div className='line-'></div>
                  <h2>A place to remember</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris sceleri sque, at rutrum nulla
                  dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                  finibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Donec malesuada lorem maximus mauris sceleri sque, at
                  rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus
                  faucibus finibus.
                </p>
                <div className='about-key-text'>
                  <h6>
                    <span className='fa fa-check'></span> Donec malesuada lorem
                    maximus mauris sceleri
                  </h6>
                  <h6>
                    <span className='fa fa-check'></span> Malesuada lorem
                    maximus mauris sceleri
                  </h6>
                </div>
                <a href='#' className='btn palatin-btn mt-50'>
                  Read More
                </a>
              </div>
            </div>

            <div className='col-12 col-lg-6'>
              <div className='about-thumbnail homepage mb-100'>
                {/* <!-- First Img --> */}
                <div className='first-img wow fadeInUp' data-wow-delay='100ms'>
                  <img src='img/bg-img/5.jpg' alt='' />
                </div>
                {/* <!-- Second Img --> */}
                <div className='second-img wow fadeInUp' data-wow-delay='300ms'>
                  <img src='img/bg-img/6.jpg' alt='' />
                </div>
                {/* <!-- Third Img--> */}
                <div className='third-img wow fadeInUp' data-wow-delay='500ms'>
                  <img src='img/bg-img/7.jpg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### About Us Area End ##### --> */}

      {/* <!-- ##### Pool Area Start ##### --> */}
      <section
        className='pool-area section-padding-100 bg-img bg-fixed'
        style={{ backroundImage: 'url(img/bg-img/4.png)' }}
      >
        <div className='container'>
          <div className='row justify-content-end'>
            <div className='col-12 col-lg-7'>
              <div
                className='pool-content text-center wow fadeInUp'
                data-wow-delay='300ms'
              >
                <div className='section-heading text-center white'>
                  <div className='line-'></div>
                  <h2>Infinity Pool</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris sceleri sque, at rutrum
                    nulla dictum. Ut ac ligula sapien. Suspendisse cursus
                    faucibus finibus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec malesuada lorem maximus mauris
                    sceleri sque, at rutrum nulla dictum.
                  </p>
                </div>

                <div className='row'>
                  <div className='col-12 col-sm-4'>
                    <div className='pool-feature'>
                      <i className='icon-cocktail-1'></i>
                      <p>Pool Beachbar</p>
                    </div>
                  </div>
                  <div className='col-12 col-sm-4'>
                    <div className='pool-feature'>
                      <i className='icon-swimming-pool'></i>
                      <p>Infinity Pool</p>
                    </div>
                  </div>
                  <div className='col-12 col-sm-4'>
                    <div className='pool-feature'>
                      <i className='icon-beach'></i>
                      <p>Sunbeds</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Button --> */}
                <a href='#' className='btn palatin-btn mt-50'>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Pool Area End ##### --> */}

      {/* <!-- ##### Rooms Area Start ##### --> */}
      <section className='rooms-area section-padding-100-0'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <div className='section-heading text-center'>
                <div className='line-'></div>
                <h2>Choose a room</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris sceleri sque, at rutrum nulla
                  dictum. Ut ac ligula sapien.
                </p>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            {/* <!-- Single Rooms Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div
                className='single-rooms-area wow fadeInUp'
                data-wow-delay='100ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backroundImage: 'url(img/bg-img/1.jpg)' }}
                ></div>
                {/* <!-- Price --> */}
                <p className='price-from'>From $150/night</p>
                {/* <!-- Rooms Text --> */}
                <div className='rooms-text'>
                  <div className='line'></div>
                  <h4>Deluxe Room</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris sceleri sque.
                  </p>
                </div>
                {/* <!-- Book Room --> */}
                <a href='#' className='book-room-btn btn palatin-btn'>
                  Book Room
                </a>
              </div>
            </div>

            {/* <!-- Single Rooms Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div
                className='single-rooms-area wow fadeInUp'
                data-wow-delay='300ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backroundImage: 'url(img/bg-img/8.jpg)' }}
                ></div>
                {/* <!-- Price --> */}
                <p className='price-from'>From $150/night</p>
                {/* <!-- Rooms Text --> */}
                <div className='rooms-text'>
                  <div className='line'></div>
                  <h4>Double Suite</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris sceleri sque.
                  </p>
                </div>
                {/* <!-- Book Room --> */}
                <a href='#' className='book-room-btn btn palatin-btn'>
                  Book Room
                </a>
              </div>
            </div>

            {/* <!-- Single Rooms Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div
                className='single-rooms-area wow fadeInUp'
                data-wow-delay='500ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backroundImage: 'url(img/bg-img/9.jpg)' }}
                ></div>
                {/* <!-- Price --> */}
                <p className='price-from'>From $100/night</p>
                {/* <!-- Rooms Text --> */}
                <div className='rooms-text'>
                  <div className='line'></div>
                  <h4>Single Room</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris sceleri sque.
                  </p>
                </div>
                {/* <!-- Book Room --> */}
                <a href='#' className='book-room-btn btn palatin-btn'>
                  Book Room
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Rooms Area End ##### --> */}

      {/* <!-- ##### Contact Area Start ##### --> */}
      <section className='contact-area d-flex flex-wrap align-items-center'>
        <div className='home-map-area'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137'
            allowFullScreen
          ></iframe>
        </div>
        {/* <!-- Contact Info --> */}
        <div className='contact-info'>
          <div className='section-heading wow fadeInUp' data-wow-delay='100ms'>
            <div className='line-'></div>
            <h2>Contact Info</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris sceleri sque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
          </div>
          <h4 className='wow fadeInUp' data-wow-delay='300ms'>
            Los Angeles 1481 Creekside Lane Avila Beach, CA 931
          </h4>
          <h5 className='wow fadeInUp' data-wow-delay='400ms'>
            +53 345 7953 32453
          </h5>
          <h5 className='wow fadeInUp' data-wow-delay='500ms'>
            yourmail@gmail.com
          </h5>
          {/* <!-- Social Info --> */}
          <div
            className='social-info mt-50 wow fadeInUp'
            data-wow-delay='600ms'
          >
            <a href='#'>
              <i className='fa fa-pinterest' aria-hidden='true'></i>
            </a>
            <a href='#'>
              <i className='fa fa-facebook' aria-hidden='true'></i>
            </a>
            <a href='#'>
              <i className='fa fa-twitter' aria-hidden='true'></i>
            </a>
            <a href='#'>
              <i className='fa fa-dribbble' aria-hidden='true'></i>
            </a>
            <a href='#'>
              <i className='fa fa-behance' aria-hidden='true'></i>
            </a>
            <a href='#'>
              <i className='fa fa-linkedin' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ##### Contact Area End ##### --> */}

      {/* <!-- ##### Footer Area Start ##### --> */}
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
