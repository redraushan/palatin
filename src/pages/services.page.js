import React from 'react';

export default function Services() {
  return (
    <>
      {/* <!-- ##### Breadcumb Area Start ##### --> */}
      <section
        className='breadcumb-area bg-img d-flex align-items-center justify-content-center'
        style={{ backgroundImage: 'url(img/bg-img/bg-5.jpg)' }}
      >
        <div className='bradcumbContent'>
          <h2>Services</h2>
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

      {/* <!-- ##### Service Intro Area Start ##### --> */}
      <section className='services-intro'>
        <div className='container'>
          <div className='row align-items-center'>
            {/* <!-- Service Intro Text --> */}
            <div className='col-12 col-lg-6'>
              <div className='service-intro-text mb-100'>
                <div className='section-heading'>
                  <div className='line-'></div>
                  <h2>Amazing Services</h2>
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

            {/* <!-- Services Features --> */}
            <div className='col-12 col-lg-6'>
              <div className='row mb-100'>
                {/* <!-- Single Cool Facts --> */}
                <div className='col-12 col-sm-4'>
                  <div className='single-cool-fact'>
                    <div className='scf-text'>
                      <i className='icon-cocktail-1'></i>
                      <p>Pool Beachbar</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Single Cool Facts --> */}
                <div className='col-12 col-sm-4'>
                  <div className='single-cool-fact'>
                    <div className='scf-text'>
                      <i className='icon-swimming-pool'></i>
                      <p>Infinity Pool</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Single Cool Facts --> */}
                <div className='col-12 col-sm-4'>
                  <div className='single-cool-fact'>
                    <div className='scf-text'>
                      <i className='icon-beach'></i>
                      <p>Sunbeds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Service Intro Area End ##### --> */}

      {/* <!-- ##### Core Features Start ##### --> */}
      <section className='core-features-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            {/* <!-- Single Core Feature Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='single-core-feature mb-100'>
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/12.jpg)' }}
                ></div>
                {/* <!-- Content --> */}
                <div className='feature-content'>
                  <i className='icon-sunset'></i>
                  <h3>Wellness</h3>
                  <p>
                    Malesuada lorem maximus mauris sceleri sque, at rutrum nulla
                    dictum. Ut ac ligula sapien. Suspendisse cursus. faucibus
                    finibus.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Single Core Feature Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='single-core-feature mb-100'>
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/13.jpg)' }}
                ></div>
                {/* <!-- Content --> */}
                <div className='feature-content'>
                  <i className='icon-sunset'></i>
                  <h3>Spa Center</h3>
                  <p>
                    Malesuada lorem maximus mauris sceleri sque, at rutrum nulla
                    dictum. Ut ac ligula sapien. Suspendisse cursus. faucibus
                    finibus.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Single Core Feature Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='single-core-feature mb-100'>
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/14.jpg)' }}
                ></div>
                {/* <!-- Content --> */}
                <div className='feature-content'>
                  <i className='icon-island'></i>
                  <h3>Lounge Bar</h3>
                  <p>
                    Malesuada lorem maximus mauris sceleri sque, at rutrum nulla
                    dictum. Ut ac ligula sapien. Suspendisse cursus. faucibus
                    finibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Core Features End ##### --> */}

      {/* <!-- ##### Services Area Start ##### --> */}
      <section className='services-area'>
        <div className='container'>
          <div className='row'>
            {/* <!-- Single Service Area --> */}
            <div className='col-12 col-sm-6 col-lg-4'>
              <div
                className='single-service-area mb-100 wow fadeInUp'
                data-wow-delay='100ms'
              >
                <i className='icon-trekking'></i>
                <h4>Bike Rentals</h4>
                <p>
                  Nulla massa dui, posuere non erat in, eleifend mattis dui.
                  Vivamus luctus luctus rhoncus. Donec sagittis nulla id finibus
                  iaculis. Mauris odio tortor.
                </p>
              </div>
            </div>

            {/* <!-- Single Service Area --> */}
            <div className='col-12 col-sm-6 col-lg-4'>
              <div
                className='single-service-area mb-100 wow fadeInUp'
                data-wow-delay='200ms'
              >
                <i className='icon-boat'></i>
                <h4>Boat Trips</h4>
                <p>
                  Nulla massa dui, posuere non erat in, eleifend mattis dui.
                  Vivamus luctus luctus rhoncus. Donec sagittis nulla id finibus
                  iaculis. Mauris odio tortor.
                </p>
              </div>
            </div>

            {/* <!-- Single Service Area --> */}
            <div className='col-12 col-sm-6 col-lg-4'>
              <div
                className='single-service-area mb-100 wow fadeInUp'
                data-wow-delay='300ms'
              >
                <i className='icon-restaurant'></i>
                <h4>Restaurants</h4>
                <p>
                  Nulla massa dui, posuere non erat in, eleifend mattis dui.
                  Vivamus luctus luctus rhoncus. Donec sagittis nulla id finibus
                  iaculis. Mauris odio tortor.
                </p>
              </div>
            </div>

            {/* <!-- Single Service Area --> */}
            <div className='col-12 col-sm-6 col-lg-4'>
              <div
                className='single-service-area mb-100 wow fadeInUp'
                data-wow-delay='400ms'
              >
                <i className='icon-beach'></i>
                <h4>Massages</h4>
                <p>
                  Nulla massa dui, posuere non erat in, eleifend mattis dui.
                  Vivamus luctus luctus rhoncus. Donec sagittis nulla id finibus
                  iaculis. Mauris odio tortor.
                </p>
              </div>
            </div>

            {/* <!-- Single Service Area --> */}
            <div className='col-12 col-sm-6 col-lg-4'>
              <div
                className='single-service-area mb-100 wow fadeInUp'
                data-wow-delay='500ms'
              >
                <i className='icon-boarding-pass'></i>
                <h4>Event Tikets</h4>
                <p>
                  Nulla massa dui, posuere non erat in, eleifend mattis dui.
                  Vivamus luctus luctus rhoncus. Donec sagittis nulla id finibus
                  iaculis. Mauris odio tortor.
                </p>
              </div>
            </div>

            {/* <!-- Single Service Area --> */}
            <div className='col-12 col-sm-6 col-lg-4'>
              <div
                className='single-service-area mb-100 wow fadeInUp'
                data-wow-delay='600ms'
              >
                <i className='icon-sign'></i>
                <h4>Hiking</h4>
                <p>
                  Nulla massa dui, posuere non erat in, eleifend mattis dui.
                  Vivamus luctus luctus rhoncus. Donec sagittis nulla id finibus
                  iaculis. Mauris odio tortor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Services Area End ##### --> */}
    </>
  );
}
