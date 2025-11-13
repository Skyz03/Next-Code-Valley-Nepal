import React from 'react';
import blogData from '@/data/home_2/blogs';

function Blog() {
  return (
    <section className="tc-blog-st1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title text-center mb-60 js-splittext-lines">
              <h6 className="fsz-18 fw-300 mb-15">
                <span className="icon cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </h6>
              <h2 className="fsz-50"> Latest News & blogs </h2>
              <p className="fsz-16 mt-15">
                Integer vehicula diam et sollicitudin scelerisque. Vestibulum
                pellentesque bibendum magna, et bibendum turpis lacinia id.
                Praesent egestas tincidunt risus.
              </p>
            </div>
          </div>
        </div>
        <div className="posts">
          <div className="row">
            {blogData.map((post, index) => (
              <div key={index} className="col-lg-4">
                <div
                  className="post-card wow fadeInUp slow"
                  data-wow-delay={`${0.2 + index * 0.2}s`}
                >
                  <a href={post.link} className="img">
                    <img src={post.image} alt="" className="img-cover" />
                    <span className="float-arrow">
                      <i className="fal fa-arrow-down-right"></i>
                    </span>
                  </a>
                  <div className="info">
                    <div className="tags fsz-16 mb-15">
                      <a href="#" className="me-4">
                        <i className="fal fa-user me-1"></i> by {post.author}
                      </a>
                      <a href="">
                        <i className="fal fa-comment me-1"></i> {post.comments}{' '}
                        comments
                      </a>
                    </div>
                    <h4>
                      <a href={post.link} className="fsz-24 hover-orange1">
                        {post.title}
                      </a>
                    </h4>
                    <a
                      href="#"
                      className={`butn ${post.color} rounded-pill text-white fsz-16 mt-20 py-2`}
                    >
                      <span> {post.date} </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
