var React = require('react') ,
    ReactDOM = require('react-dom');

import{Router , Route , browserHistory ,IndexRoute,
      IndexLink, Link} from 'react-router';

require('./css/reset.scss');
require('./css/index.scss');

// Module requires

var SideBar = require('./sidebar') ,
    Homes = require('./home') ,
    About = require('./about') ,
    Work = require('./work') ,
    Workhome = require('./workhome') ,
    Chlorine = require('./chlorine') ,
    Premiro = require('./premiro') ,
    Portfolio = require('./component/function.js').Portfolio_function ;

// Create Component

var Changepage = React.createClass({
    render:function(){
      return(
        <Router history={browserHistory}>
          <Route path={'/'} component={Apps}>
            <IndexRoute component={Homes}/>
            <Route path={"about"} component={About} />
            <Route path={"work"} component={Work} >
              <IndexRoute component={Workhome}/>
              <Route path={"chlorine"} component={Chlorine} />
              <Route path={"premiro"} component={Premiro} />
            </Route>
          </Route>
        </Router>
      );
    }
});

var Apps = React.createClass({
  componentWillUpdate:function(){
    Portfolio.willchange();
  } ,
  componentDidUpdate(){
    setTimeout(function(){
      Portfolio.haschange();
    }, 100 );
    Portfolio.winheight();
    Portfolio.moving_nav();
  } ,
  componentDidMount:function(){
    Portfolio.loadfin();
    setTimeout(function(){
      Portfolio.haschange();
    }, 1600 );
    Portfolio.winheight();
    Portfolio.moving_nav();
  } ,
  render:function(){
    return (
      <div className="body_wrapper">
        <SideBar />
        <div id="content" className="winheight">
            {this.props.children}
        </div>
      </div>
    )
  }
});

ReactDOM.render(<Changepage /> , document.getElementById('app'));
