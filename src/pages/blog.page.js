import React from 'react';

export default function Blog() {
  return (
    <>
      {/* <!-- ##### Breadcumb Area Start ##### --> */}
      <section
        className='breadcumb-area bg-img d-flex align-items-center justify-content-center'
        style={{ backgroundImage: 'url(img/bg-img/bg-7.jpg)' }}
      >
        <div className='bradcumbContent'>
          <h2>Blog</h2>
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

      {/* <!-- ##### Blog Area Start ##### --> */}
      <div className='blog-area section-padding-0-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='palatin-blog-posts'>
                {/* <!-- ##### Single Blog Post ##### --> */}
                <div
                  className='single-blog-post mb-100 wow fadeInUp'
                  data-wow-delay='100ms'
                >
                  {/* <!-- Post Thumb --> */}
                  <div className='blog-post-thumb'>
                    <img src='img/blog-img/1.jpg' alt='' />
                  </div>
                  {/* <!-- Post Content --> */}
                  <div className='post-content'>
                    {/* <!-- Post Date--> */}
                    <a href='#' className='post-date btn palatin-btn'>
                      June 25, 2018
                    </a>
                    {/* <!-- Post Title --> */}
                    <a href='#' className='post-title'>
                      The program for the Summer of 2018
                    </a>
                    {/* <!-- Post Meta --> */}
                    <div className='post-meta d-flex justify-content-center'>
                      {/* <!-- Catagory --> */}
                      <a href='#' className='post-catagory'>
                        In Hotel
                      </a>
                      {/* <!-- Comments --> */}
                      <a href='#' className='post-comments'>
                        3 comments
                      </a>
                    </div>
                    {/* <!-- Post Excerpt --> */}
                    <p>
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus. Integer tempus ligula sem, id
                      feugiat quam egestas et. Donec porttitor varius diam in
                      vulputate. Fusce blandit consequat elit non egestas. Donec
                      tortor odio, consectetur eu justo ut, auctor
                    </p>
                  </div>
                </div>

                {/* <!-- ##### Single Blog Post ##### --> */}
                <div
                  className='single-blog-post mb-100 wow fadeInUp'
                  data-wow-delay='300ms'
                >
                  {/* <!-- Post Thumb --> */}
                  <div className='blog-post-thumb'>
                    <img src='img/blog-img/2.jpg' alt='' />
                  </div>
                  {/* <!-- Post Content --> */}
                  <div className='post-content'>
                    {/* <!-- Post Date--> */}
                    <a href='#' className='post-date btn palatin-btn'>
                      June 25, 2018
                    </a>
                    {/* <!-- Post Title --> */}
                    <a href='#' className='post-title'>
                      June opening for our Pool Bar
                    </a>
                    {/* <!-- Post Meta --> */}
                    <div className='post-meta d-flex justify-content-center'>
                      {/* <!-- Catagory --> */}
                      <a href='#' className='post-catagory'>
                        In Hotel
                      </a>
                      {/* <!-- Comments --> */}
                      <a href='#' className='post-comments'>
                        3 comments
                      </a>
                    </div>
                    {/* <!-- Post Excerpt --> */}
                    <p>
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus. Integer tempus ligula sem, id
                      feugiat quam egestas et. Donec porttitor varius diam in
                      vulputate. Fusce blandit consequat elit non egestas. Donec
                      tortor odio, consectetur eu justo ut, auctor
                    </p>
                  </div>
                </div>

                {/* <!-- ##### Single Blog Post ##### --> */}
                <div
                  className='single-blog-post mb-100 wow fadeInUp'
                  data-wow-delay='500ms'
                >
                  {/* <!-- Post Thumb --> */}
                  <div className='blog-post-thumb'>
                    <img src='img/blog-img/3.jpg' alt='' />
                  </div>
                  {/* <!-- Post Content --> */}
                  <div className='post-content'>
                    {/* <!-- Post Date--> */}
                    <a href='#' className='post-date btn palatin-btn'>
                      June 25, 2018
                    </a>
                    {/* <!-- Post Title --> */}
                    <a href='#' className='post-title'>
                      3 Tip for the perfect vacation
                    </a>
                    {/* <!-- Post Meta --> */}
                    <div className='post-meta d-flex justify-content-center'>
                      {/* <!-- Catagory --> */}
                      <a href='#' className='post-catagory'>
                        In Hotel
                      </a>
                      {/* <!-- Comments --> */}
                      <a href='#' className='post-comments'>
                        3 comments
                      </a>
                    </div>
                    {/* <!-- Post Excerpt --> */}
                    <p>
                      Donec malesuada lorem maximus mauris sceleri sque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus. Integer tempus ligula sem, id
                      feugiat quam egestas et. Donec porttitor varius diam in
                      vulputate. Fusce blandit consequat elit non egestas. Donec
                      tortor odio, consectetur eu justo ut, auctor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12'>
              <div
                className='load-more-btn text-center wow fadeInUp'
                data-wow-delay='700ms'
              >
                <a href='#' className='btn palatin-btn'>
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Blog Area End ##### --> */}
    </>
  );
}
