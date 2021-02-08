import React from 'react';

export default function Rooms() {
  return (
    <>
      <section
        className='breadcumb-area bg-img d-flex align-items-center justify-content-center'
        style={{ backgroundImage: 'url(img/bg-img/bg-6.jpg)' }}
      >
        <div className='bradcumbContent'>
          <h2>Rooms</h2>
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

      {/* <!-- ##### Rooms Area Start ##### --> */}
      <section className='rooms-area section-padding-0-100'>
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

          <div className='row'>
            {/* <!-- Single Rooms Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div
                className='single-rooms-area wow fadeInUp'
                data-wow-delay='100ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/1.jpg)' }}
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
                data-wow-delay='200ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/8.jpg)' }}
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
                data-wow-delay='300ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/9.jpg)' }}
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

            {/* <!-- Single Rooms Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div
                className='single-rooms-area wow fadeInUp'
                data-wow-delay='100ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/15.jpg)' }}
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
                data-wow-delay='200ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/16.jpg)' }}
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
                data-wow-delay='300ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/17.jpg)' }}
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

            {/* <!-- Single Rooms Area --> */}
            <div className='col-12 col-md-6 col-lg-4'>
              <div
                className='single-rooms-area wow fadeInUp'
                data-wow-delay='100ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/18.jpg)' }}
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
                data-wow-delay='200ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/19.jpg)' }}
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
                data-wow-delay='300ms'
              >
                {/* <!-- Thumbnail --> */}
                <div
                  className='bg-thumbnail bg-img'
                  style={{ backgroundImage: 'url(img/bg-img/20.jpg)' }}
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

            <div className='col-12'>
              {/* <!-- Pagination --> */}
              <div
                className='pagination-area wow fadeInUp'
                data-wow-delay='400ms'
              >
                <nav>
                  <ul className='pagination'>
                    <li className='page-item active'>
                      <a className='page-link' href='#'>
                        01.
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        02.
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        03.
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Rooms Area End ##### --> */}
    </>
  );
}
