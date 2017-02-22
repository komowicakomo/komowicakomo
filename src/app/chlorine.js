var React = require('react');

require('./css/work_detail.scss');

var Portfolio = require('./component/function.js').Portfolio_function ;

var Chlorine = React.createClass({
  componentWillUnmount(){
    // Portfolio('loadstart');
    Portfolio.loadstart();
    setTimeout(function(){
    // Portfolio('loadfin');
    Portfolio.loadfin();
    }, 1800);
    setTimeout(function(){
      body.className='';
    },700);
  },
    render:function(){
      return(
        <div className="w_work_detail winheight">
          <div className="w_heroimg" style={{backgroundImage:"url(img/chlorine_hero.png)"}}>

          </div>
          <div className="work_detail_desc">
            <div className="left">
              <h1>Chlorine</h1>
              <p>as a frontend developer my job is to create light animation and simple effect
  to make website more apealing and not to much make-up is fitting for chlorine
  as it is an e-commerce. </p>
              <a href="">VIEW <span>WEBSITE</span></a>
            </div>
            <div className="right">
              <div className="label">
                CATEGORY
              </div>
              <div className="p_desc">
                Website
              </div>
              <div className="label">
                AGENCY
              </div>
              <div className="p_desc">
                Weekendinc
              </div>
              <div className="label">
                ROLE
              </div>
              <div className="p_desc">
                Frontend Developer
              </div>
              <div className="label">
                YEAR
              </div>
              <div className="p_desc">
                2016
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Chlorine ;
