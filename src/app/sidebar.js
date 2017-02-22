var React = require('react');

require('./css/sidebar.scss');

import{Link , IndexRoute,
      IndexLink} from 'react-router';

var Sidebar = React.createClass({
  render:function(){
    return(
      <div className="sidebar" role="navigation">
        <ul>
          <div id="navigation_bar" className="moving_nav">

          </div>
          <IndexLink to={'/'} activeClassName="active">
            <li className="logo">
              <span>Home</span>
              <svg width="64px" height="36px" viewBox="0 0 80 46" version="1.1">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="logo" transform="translate(-600.000000, -337.000000)" fill="#FFFFFF">
                          <g id="inner-logo" transform="translate(600.000000, 337.000000)">
                              <path d="M28.3966121,33.1373561 L12.4610592,0.498442368 L0,0.498442368 L21.9022586,45.3582555 L28.3966121,45.3582555 L22.4299065,45.3582555 L28.3966121,33.1373561 Z M39.9853972,9.40141443 L35.6386293,0.498442368 L23.1775701,0.498442368 L33.7548676,22.1626734 L39.9853972,9.40141443 Z M46.2159268,22.1626734 L57.5408879,45.3582555 L45.0798287,45.3582555 L39.9853972,34.9239323 L46.2159268,22.1626734 Z" id="Combined-Shape"></path>
                              <polygon id="Rectangle-3" points="35.617942 45.0848985 57.3531091 0.77179931 55.9377434 0.77179931 34.3310809 45.0848985"></polygon>
                              <polygon id="Rectangle-3" points="57.9154498 45.0848985 79.7830156 0.77179931 78.6632461 0.225085425 56.7609875 45.0848985"></polygon>
                          </g>
                      </g>
                  </g>
              </svg>
            </li>
          </IndexLink>
          <Link to={'/work'} activeClassName="active work_">
            <li className="link">
              <span>Work</span>
            </li>
          </Link>
          <Link to={'/about'} activeClassName="active">
            <li className="link">
              <span>About</span>
            </li>
          </Link>
          <li className="link">
            <span><a href="mailto:komowicakomo@gmail.com">Contact</a></span>
          </li>
        </ul>
      </div>
    );

  } ,
});

module.exports = Sidebar ;
