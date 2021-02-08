import React from 'react';

export default function Contact() {
  return (
    <>
      <section
        className='breadcumb-area bg-img d-flex align-items-center justify-content-center'
        style={{ backgroundImage: 'url(img/bg-img/bg-8.jpg)' }}
      >
        <div className='bradcumbContent'>
          <h2>Contact</h2>
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

      {/* <!-- ##### Contact Area Start ##### --> */}
      <section className='contact-information-area'>
        <div className='container'>
          <div className='row'>
            {/* <!-- Single Contact Information --> */}
            <div className='col-12 col-lg-4'>
              <div className='single-contact-information mb-100'>
                <div className='section-text'>
                  <h3>Ibiza</h3>
                  <p>
                    Donec malesuada lorem maximus mauris sceleri sque, at rutrum
                    nulla dictum.
                  </p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>Address</p>
                  <p>
                    1481 Creekside Lane <br />
                    Avila Beach, CA 931
                  </p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>Phone</p>
                  <p>+36 345 7953 4994</p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>E-mail</p>
                  <p>yourmail@gmail.com</p>
                </div>
              </div>
            </div>

            {/* <!-- Single Contact Information --> */}
            <div className='col-12 col-lg-4'>
              <div className='single-contact-information mb-100'>
                <div className='section-text'>
                  <h3>Los Angeles</h3>
                  <p>
                    Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
                    Integer tempus ligula sem.
                  </p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>Address</p>
                  <p>
                    245 Principe Lane <br />
                    Avila Beach, Spain
                  </p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>Phone</p>
                  <p>+36 345 7953 4994</p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>E-mail</p>
                  <p>yourmail@gmail.com</p>
                </div>
              </div>
            </div>

            {/* <!-- Single Contact Information --> */}
            <div className='col-12 col-lg-4'>
              <div className='single-contact-information mb-100'>
                <div className='section-text'>
                  <h3>Dubai</h3>
                  <p>
                    Fusce blandit consequat elit non egestas. Donec tortor odio,
                    consectetur eu justo ut.
                  </p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>Address</p>
                  <p>
                    889 Creekside Lane <br />
                    Avila Beach, Dubai
                  </p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>Phone</p>
                  <p>+77 345 7953 2406</p>
                </div>
                {/* <!-- Single Contact Information --> */}
                <div className='contact-content d-flex'>
                  <p>E-mail</p>
                  <p>yourmail@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Contact Area End ##### --> */}

      {/* <!-- ##### Contact Form Area Start ##### --> */}
      <section className='contact-form-area mb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading'>
                <div className='line-'></div>
                <h2>Get in touch</h2>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              {/* <!-- Contact Form --> */}
              <form action='#' method='post'>
                <div className='row'>
                  <div className='col-lg-4'>
                    <input
                      type='text'
                      className='form-control'
                      name='text'
                      placeholder='Your Name'
                    />
                  </div>
                  <div className='col-lg-4'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='E-mail'
                    />
                  </div>
                  <div className='col-lg-4'>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      placeholder='Subject'
                    />
                  </div>
                  <div className='col-12'>
                    <textarea
                      name='message'
                      className='form-control'
                      id='message'
                      cols='30'
                      rows='10'
                      placeholder='Message'
                    ></textarea>
                  </div>
                  <div className='col-12'>
                    <button type='submit' className='btn palatin-btn mt-50'>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Contact Form Area End ##### --> */}

      {/* <!-- ##### Google Maps ##### --> */}
      <div className='map-area mb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
