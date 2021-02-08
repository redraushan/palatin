import React from 'react';

export default function About() {
  return (
    <>
      {/* <!-- ##### Breadcumb Area Start ##### --> */}
      <section
        className='breadcumb-area bg-img d-flex align-items-center justify-content-center'
        style={{ backgroundImage: 'url(img/bg-img/bg-2.jpg)' }}
      >
        <div className='bradcumbContent'>
          <h2>About us</h2>
        </div>
      </section>
      {/* <!-- ##### Breadcumb Area End ##### --> */}

      {/* <!-- ##### Book Now Area Start ##### --> */}
      <div className='book-now-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10'>
              <div className='book-now-form'>
                <form action='#'>
                  {/* <!-- Form Group --> */}
                  <div className='form-group'>
                    <label for='select1'>Check In</label>
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
                    <label for='select2'>Check Out</label>
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
                    <label for='select3'>Adults</label>
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
                    <label for='select4'>Childrens</label>
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
              <div className='about-text mb-100'>
                <div className='section-heading'>
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
                <a href='#' className='btn palatin-btn mt-50'>
                  Read More
                </a>
              </div>
            </div>

            <div className='col-12 col-lg-6'>
              <div className='about-thumbnail mb-100'>
                <img src='img/bg-img/2.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### About Us Area End ##### --> */}

      {/* <!-- ##### Milestones Area Start ##### --> */}
      <section
        className='our-milestones section-padding-100-0 bg-img bg-overlay bg-fixed'
        style={{ backgroundImage: 'url(img/bg-img/bg-4.jpg)' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8'>
              <div className='section-heading text-center white'>
                <div className='line-'></div>
                <h2>Our Milestones</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris sceleri sque, at rutrum nulla
                  dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                  finibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Donec malesuada lorem maximus mauris sceleri sque, at
                  rutrum nulla dictum.
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            {/* <!-- Single Cool Facts --> */}
            <div className='col-12 col-sm-6 col-lg-3'>
              <div
                className='single-cool-fact mb-100 wow fadeInUp'
                data-wow-delay='300ms'
              >
                <div className='scf-text'>
                  <i className='icon-cocktail-1'></i>
                  <h2>
                    <span className='counter'>231</span>
                  </h2>
                  <p>Cocktails/day</p>
                </div>
              </div>
            </div>

            {/* <!-- Single Cool Facts --> */}
            <div className='col-12 col-sm-6 col-lg-3'>
              <div
                className='single-cool-fact mb-100 wow fadeInUp'
                data-wow-delay='500ms'
              >
                <div className='scf-text'>
                  <i className='icon-swimming-pool'></i>
                  <h2>
                    <span className='counter'>3</span>
                  </h2>
                  <p>Pools</p>
                </div>
              </div>
            </div>

            {/* <!-- Single Cool Facts --> */}
            <div className='col-12 col-sm-6 col-lg-3'>
              <div
                className='single-cool-fact mb-100 wow fadeInUp'
                data-wow-delay='700ms'
              >
                <div className='scf-text'>
                  <i className='icon-resort'></i>
                  <h2>
                    <span className='counter'>79</span>
                  </h2>
                  <p>Rooms</p>
                </div>
              </div>
            </div>

            {/* <!-- Single Cool Facts --> */}
            <div className='col-12 col-sm-6 col-lg-3'>
              <div
                className='single-cool-fact mb-100 wow fadeInUp'
                data-wow-delay='900ms'
              >
                <div className='scf-text'>
                  <i className='icon-restaurant'></i>
                  <h2>
                    <span className='counter'>25</span>
                  </h2>
                  <p>Apartments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Milestones Area End ##### --> */}

      {/* <!-- ##### Hotels Area Start ##### --> */}
      <section className='our-hotels-area section-padding-100-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading text-center'>
                <div className='line-'></div>
                <h2>Our Hotel</h2>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            {/* <!-- Single Hotel Info --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='single-hotel-info mb-100'>
                <div className='hotel-info-text'>
                  <h6>
                    <span className='fa fa-check'></span> Donec malesuada lorem
                    maximus mauris
                  </h6>
                  <h6>
                    <span className='fa fa-check'></span> Integer tempus ligula
                    sem, id feugiat
                  </h6>
                  <h6>
                    <span className='fa fa-check'></span> Malesuada lorem
                    maximus mauris sceleri{' '}
                  </h6>
                </div>
                <div className='hotel-img'>
                  <img src='img/bg-img/3.jpg' alt='' />
                </div>
              </div>
            </div>
            {/* <!-- Single Hotel Info --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='single-hotel-info mb-100'>
                <div className='hotel-info-text'>
                  <h6>
                    <span className='fa fa-check'></span> Tempus ligula sem, id
                    feugiat quam
                  </h6>
                  <h6>
                    <span className='fa fa-check'></span> Integer tempus ligula
                    sem, id feugiat
                  </h6>
                  <h6>
                    <span className='fa fa-check'></span> Esuada lorem maximus
                    mauris sceleri
                  </h6>
                </div>
                <div className='hotel-img'>
                  <img src='img/bg-img/10.jpg' alt='' />
                </div>
              </div>
            </div>
            {/* <!-- Single Hotel Info --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='single-hotel-info mb-100'>
                <div className='hotel-info-text'>
                  <h6>
                    <span className='fa fa-check'></span> Tempus ligula sem, id
                    feugiat quam
                  </h6>
                  <h6>
                    <span className='fa fa-check'></span> Integer tempus ligula
                    sem, id feugiat
                  </h6>
                  <h6>
                    <span className='fa fa-check'></span> Esuada lorem maximus
                    mauris sceleri
                  </h6>
                </div>
                <div className='hotel-img'>
                  <img src='img/bg-img/11.jpg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Hotels Area End ##### --> */}

      {/* <!-- ##### Testimonial Area Start ##### --> */}
      <section
        className='testimonial-area section-padding-100 bg-img'
        style={{ backgroundImage: 'url(img/core-img/pattern.png)' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='testimonial-content'>
                <div className='section-heading text-center'>
                  <div className='line-'></div>
                  <h2>What Clients Say</h2>
                </div>

                {/* <!-- Testimonial Slides --> */}
                <div className='testimonial-slides owl-carousel'>
                  {/* <!-- Single Testimonial --> */}
                  <div className='single-testimonial'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec malesuada lorem maximus
                      mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula
                      sapien. Suspendisse cursus faucibus finibus.
                    </p>
                    <h6>
                      Michael Smith, <span>Client</span>
                    </h6>
                    <img src='img/core-img/trip.png' alt='' />
                  </div>

                  {/* <!-- Single Testimonial --> */}
                  <div className='single-testimonial'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec malesuada lorem maximus
                      mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula
                      sapien. Suspendisse cursus faucibus finibus.
                    </p>
                    <h6>
                      Nazrul Islam, <span>Developer</span>
                    </h6>
                    <img src='img/core-img/trip.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
