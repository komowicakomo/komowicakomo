var React = require('react');

require('./css/work.scss');

var Portfolio = require('./component/function.js').Portfolio_function ;


var Work = React.createClass({
  componentWillUpdate:function(){
    Portfolio.loadstart();
  } ,
  componentDidUpdate(){
    setTimeout(function(){
      Portfolio.loadfin();
    }, 1000);
  } ,
  render:function(){
    return (
      <div className="work_parents maxheight">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Work ;
