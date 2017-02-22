var React = require('react');

import{Link} from 'react-router'; 

var Workbox = React.createClass({
  render:function(){
    return (
      <Link to={'/work/'+this.props.item}>
        <div  className={'smaller_box '+this.props.item+'_'} onClick={this.handleClick} style={{backgroundImage:"url(images/img/"+this.props.item+"-work.jpg)"}}>
          <div className={'p_name '+this.props.item+'_'}>
            <span>{this.props.item}</span>
          </div>
        </div>
      </Link>
    )
  } ,
  handleClick:function(){
    this.props.onChangePage(this.props.item);
  }
});

module.exports = Workbox ;
