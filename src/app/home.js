var React = require('react') ;

require('./css/home.scss');

var Home = React.createClass({
    render:function(){
      return(
        <div id="home" className="home winheight">
          <div className="text">
            <h1>Hello, I’m <span>Wikan Wicaksono, </span>
  a curious & passionate <span>Frontend
  Developer</span>.</h1>
          </div>
        </div>
      );
    }
});

module.exports = Home ;
