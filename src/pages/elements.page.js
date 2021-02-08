import React from 'react';

export default function Elements() {
  return (
    <>
      {/* <!-- ##### Breadcumb Area Start ##### --> */}
      <section
        className='breadcumb-area bg-img d-flex align-items-center justify-content-center'
        style={{ backgroundImage: 'url(img/bg-img/bg-9.jpg)' }}
      >
        <div className='bradcumbContent'>
          <h2>Elements</h2>
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

      {/* <!-- ##### Elements Area Start ##### --> */}
      <section className='elements-area'>
        <div className='container'>
          <div className='row'>
            {/* <!-- ##### Buttons ##### --> */}
            <div className='col-12'>
              <div className='elements-title'>
                <h2>Buttons</h2>
              </div>
              {/* <!-- Buttons --> */}
              <div className='palatin-buttons-area mb-100'>
                <a href='#' className='btn palatin-btn m-2'>
                  Send message
                </a>
                <a href='#' className='btn palatin-btn btn-2 m-2'>
                  Send message
                </a>
                <a href='#' className='btn palatin-btn btn-3 m-2'>
                  Send message
                </a>
              </div>
            </div>

            {/* <!-- ##### Progress Bars & Accordions ##### --> */}
            <div className='col-12'>
              <div className='elements-title'>
                <h2>Accordians &amp; Tabs</h2>
              </div>
            </div>

            {/* <!-- ##### Accordians ##### --> */}
            <div className='col-12 col-lg-6'>
              <div
                className='accordions mb-100'
                id='accordion'
                role='tablist'
                aria-multiselectable='true'
              >
                {/* <!-- single accordian area --> */}
                <div className='panel single-accordion'>
                  <h6>
                    <a
                      role='button'
                      className=''
                      aria-expanded='true'
                      aria-controls='collapseOne'
                      data-toggle='collapse'
                      data-parent='#accordion'
                      href='#collapseOne'
                    >
                      Sceleri sque, at rutrum nulla dictum. Ut ac ligula
                      <span className='accor-open'>
                        <i className='fa fa-plus' aria-hidden='true'></i>
                      </span>
                      <span className='accor-close'>
                        <i className='fa fa-minus' aria-hidden='true'></i>
                      </span>
                    </a>
                  </h6>
                  <div
                    id='collapseOne'
                    className='accordion-content collapse show'
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                {/* <!-- single accordian area --> */}
                <div className='panel single-accordion'>
                  <h6>
                    <a
                      role='button'
                      className='collapsed'
                      aria-expanded='true'
                      aria-controls='collapseTwo'
                      data-parent='#accordion'
                      data-toggle='collapse'
                      href='#collapseTwo'
                    >
                      Consectetur adipiscing elit. Donec malesuada
                      <span className='accor-open'>
                        <i className='fa fa-plus' aria-hidden='true'></i>
                      </span>
                      <span className='accor-close'>
                        <i className='fa fa-minus' aria-hidden='true'></i>
                      </span>
                    </a>
                  </h6>
                  <div id='collapseTwo' className='accordion-content collapse'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                {/* <!-- single accordian area --> */}
                <div className='panel single-accordion'>
                  <h6>
                    <a
                      role='button'
                      aria-expanded='true'
                      aria-controls='collapseThree'
                      className='collapsed'
                      data-parent='#accordion'
                      data-toggle='collapse'
                      href='#collapseThree'
                    >
                      Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
                      <span className='accor-open'>
                        <i className='fa fa-plus' aria-hidden='true'></i>
                      </span>
                      <span className='accor-close'>
                        <i className='fa fa-minus' aria-hidden='true'></i>
                      </span>
                    </a>
                  </h6>
                  <div
                    id='collapseThree'
                    className='accordion-content collapse'
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ##### Tabs ##### --> */}
            <div className='col-12 col-lg-6'>
              <div className='palatin-tabs-content'>
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      id='tab--1'
                      data-toggle='tab'
                      href='#tab1'
                      role='tab'
                      aria-controls='tab1'
                      aria-selected='false'
                    >
                      Mauris diam
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      id='tab--2'
                      data-toggle='tab'
                      href='#tab2'
                      role='tab'
                      aria-controls='tab2'
                      aria-selected='false'
                    >
                      Ttristique sed posuere
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link active'
                      id='tab--3'
                      data-toggle='tab'
                      href='#tab3'
                      role='tab'
                      aria-controls='tab3'
                      aria-selected='true'
                    >
                      Lobortis eget metus
                    </a>
                  </li>
                </ul>

                <div className='tab-content mb-100' id='myTabContent'>
                  <div
                    className='tab-pane fade'
                    id='tab1'
                    role='tabpanel'
                    aria-labelledby='tab--1'
                  >
                    <div className='palatin-tab-content'>
                      {/* <!-- Tab Text --> */}
                      <div className='palatin-tab-text'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec malesuada lorem maximus mauris sceleri
                          sque, at rutrum nulla dictum. Ut ac ligula sapien.
                          Suspendisse cursus faucibus finibus. Lorem ipsum dolor
                          sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='tab2'
                    role='tabpanel'
                    aria-labelledby='tab--2'
                  >
                    <div className='palatin-tab-content'>
                      {/* <!-- Tab Text --> */}
                      <div className='palatin-tab-text'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec malesuada lorem maximus mauris sceleri
                          sque, at rutrum nulla dictum. Ut ac ligula sapien.
                          Suspendisse cursus faucibus finibus. Lorem ipsum dolor
                          sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade show active'
                    id='tab3'
                    role='tabpanel'
                    aria-labelledby='tab--3'
                  >
                    <div className='palatin-tab-content'>
                      {/* <!-- Tab Text --> */}
                      <div className='palatin-tab-text'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec malesuada lorem maximus mauris sceleri
                          sque, at rutrum nulla dictum. Ut ac ligula sapien.
                          Suspendisse cursus faucibus finibus. Lorem ipsum dolor
                          sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ##### Milestones ##### --> */}
            <div className='col-12'>
              <div className='elements-title'>
                <h2>Milestones</h2>
              </div>
            </div>

            <div className='col-12'>
              <div className='palatin-cool-facts-area'>
                <div className='row'>
                  {/* <!-- Single Cool Facts --> */}
                  <div className='col-12 col-sm-6 col-lg-3'>
                    <div className='single-cool-fact mb-100'>
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
                    <div className='single-cool-fact mb-100'>
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
                    <div className='single-cool-fact mb-100'>
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
                    <div className='single-cool-fact mb-100'>
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
            </div>

            {/* <!-- ##### Loaders ##### --> */}
            <div className='col-12'>
              <div className='elements-title'>
                <h2>Loaders</h2>
              </div>
            </div>

            <div className='col-12'>
              {/* <!-- Loaders Area Start --> */}
              <div className='our-skills-area'>
                <div className='row'>
                  {/* <!-- Single Skills Area --> */}
                  <div className='col-12 col-sm-6 col-lg-3'>
                    <div className='single-skils-area mb-100'>
                      <div id='circle' className='circle' data-value='0.90'>
                        <div className='skills-text'>
                          <span>90%</span>
                          <p>Tourists</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Skills Area --> */}
                  <div className='col-12 col-sm-6 col-lg-3'>
                    <div className='single-skils-area mb-100'>
                      <div id='circle2' className='circle' data-value='0.75'>
                        <div className='skills-text'>
                          <span>75%</span>
                          <p>Passion</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Skills Area --> */}
                  <div className='col-12 col-sm-6 col-lg-3'>
                    <div className='single-skils-area mb-100'>
                      <div id='circle3' className='circle' data-value='1'>
                        <div className='skills-text'>
                          <span>100%</span>
                          <p>Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Skills Area --> */}
                  <div className='col-12 col-sm-6 col-lg-3'>
                    <div className='single-skils-area mb-100'>
                      <div id='circle4' className='circle' data-value='0.80'>
                        <div className='skills-text'>
                          <span>80%</span>
                          <p>Fun</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ##### Icon Boxes ##### --> */}
            <div className='col-12'>
              <div className='elements-title'>
                <h2>Icon Boxes</h2>
              </div>
            </div>

            <div className='col-12'>
              <div className='row'>
                {/* <!-- Single Service Area --> */}
                <div className='col-12 col-sm-6 col-lg-4'>
                  <div className='single-service-area mb-100'>
                    <i className='icon-trekking'></i>
                    <h4>Bike Rentals</h4>
                    <p>
                      Nulla massa dui, posuere non erat in, eleifend mattis dui.
                      Vivamus luctus luctus rhoncus. Donec sagittis nulla id
                      finibus iaculis. Mauris odio tortor.
                    </p>
                  </div>
                </div>

                {/* <!-- Single Service Area --> */}
                <div className='col-12 col-sm-6 col-lg-4'>
                  <div className='single-service-area mb-100'>
                    <i className='icon-boat'></i>
                    <h4>Boat Trips</h4>
                    <p>
                      Nulla massa dui, posuere non erat in, eleifend mattis dui.
                      Vivamus luctus luctus rhoncus. Donec sagittis nulla id
                      finibus iaculis. Mauris odio tortor.
                    </p>
                  </div>
                </div>

                {/* <!-- Single Service Area --> */}
                <div className='col-12 col-sm-6 col-lg-4'>
                  <div className='single-service-area mb-100'>
                    <i className='icon-restaurant'></i>
                    <h4>Restaurants</h4>
                    <p>
                      Nulla massa dui, posuere non erat in, eleifend mattis dui.
                      Vivamus luctus luctus rhoncus. Donec sagittis nulla id
                      finibus iaculis. Mauris odio tortor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ##### Icon Boxes ##### --> */}
            <div className='col-12'>
              <div className='elements-title'>
                <h2>All Icons</h2>
              </div>
            </div>

            <div className='col-12 mb-100'>
              <div className='row'>
                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-wallet'></i>
                    <span>icon-wallet</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-trekking'></i>
                    <span>icon-trekking</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-boarding-pass'></i>
                    <span>icon-boarding-pass</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-train'></i>
                    <span>icon-train</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-binoculars'></i>
                    <span>icon-binoculars</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-swimming-pool'></i>
                    <span>icon-swimming-pool</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-sunset'></i>
                    <span>icon-sunset</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-sunglasses'></i>
                    <span>icon-sunglasses</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-suitcase'></i>
                    <span>icon-suitcase</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-goggle'></i>
                    <span>icon-goggle</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-restaurant'></i>
                    <span>icon-restaurant</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-postcard'></i>
                    <span>icon-postcard</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-adaptor'></i>
                    <span>icon-adaptor</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-photo'></i>
                    <span>icon-photo</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-passport'></i>
                    <span>icon-passport</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-navigation'></i>
                    <span>icon-navigation</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-mountain'></i>
                    <span>icon-mountain</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-map-1'></i>
                    <span>icon-map-1</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-limousine'></i>
                    <span>icon-limousine</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-landmark'></i>
                    <span>icon-landmark</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-resort'></i>
                    <span>icon-resort</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-sign'></i>
                    <span>icon-sign</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-flip-flops'></i>
                    <span>icon-flip-flops</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-map'></i>
                    <span>icon-map</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-take-off'></i>
                    <span>icon-take-off</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-boat'></i>
                    <span>icon-boat</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-compass'></i>
                    <span>icon-compass</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-cocktail-1'></i>
                    <span>icon-cocktail-1</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-cocktail'></i>
                    <span>icon-cocktail</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-credit-card'></i>
                    <span>icon-credit-card</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-camera'></i>
                    <span>icon-camera</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-calendar'></i>
                    <span>icon-calendar</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-island'></i>
                    <span>icon-island</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-beach'></i>
                    <span>icon-beach</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-around'></i>
                    <span>icon-around</span>
                  </div>
                </div>

                {/* <!-- Single Icon --> */}
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <div className='single-icon mb-30'>
                    <i className='icon-plane'></i>
                    <span>icon-plane</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Elements Area End ##### --> */}
    </>
  );
}
