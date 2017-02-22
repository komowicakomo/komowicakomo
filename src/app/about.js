var React = require('react') ;

require('./css/about.scss');

var SideBar = require('./sidebar') ;

var About = React.createClass({
  render:function(){
    return (
      <div className="about">
        <div className="winheight right">
          <img className="me_img" src="images/img/portfolio_me.png" alt="Wikan Wicaksono"/>
        </div>
        <div className="left winheight">
          <div className="desc-cont">
            <div className="name">
              <span>WIKAN</span> WICAKSONO
            </div>
            <div className="job">
              Frontend Developer
            </div>
            <div className="desc">
              <div className="ttl">
                ABOUT <span>ME</span>
              </div>
              <p>Hello i’m a 24 year oldish <span>Indonesian dude</span>,
  currently working at <span>Weekendinc</span> as Frontend
  Developer and <span>studying UI & UX Design.</span></p>
              <p><span>love</span> to draw something absurd , playing games
  ( any games not just video games )  , fan of
  anything related to <span>horror story</span> etc.</p>
            </div>
            <div className="contact">
              Feel free to contact me about everything.
            </div>
            <div className="social_place">
              <div className="ico">
                <a href=""><img src="images/aset/dribble.svg" alt="dribble"/></a>
              </div>
              <div className="ico">
                <a href=""><img src="images/aset/instagram.svg" alt="instagram"/></a>
              </div>
              <div className="ico">
                <a href=""><img src="images/aset/linkedin.svg" alt="linkedin"/></a>
              </div>
              <div className="ico">
                <a href=""><img src="images/aset/twitter.svg" alt="twitter"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About ;
