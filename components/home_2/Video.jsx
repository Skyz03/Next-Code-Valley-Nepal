import React from 'react';

function Video() {
  return (
    <section className="tc-video-st2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="info">
              <a
                href="https://www.youtube.com/watch?v=qYgdnM3BC3g"
                className="play-btn"
                data-lity="video"
              >
                {' '}
                <i className="fas fa-play"></i>{' '}
              </a>
              <h2> Collaborate with your team anytime, anywhere. </h2>
            </div>
          </div>
        </div>
      </div>
      <img src="/home_2/assets/img/video_back.png" alt="" className="bg" />
    </section>
  );
}

export default Video;
