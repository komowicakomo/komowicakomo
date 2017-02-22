var React = require('react');

import{Link} from 'react-router';

var Workbox = require('./component/workbox') ,
    WorkComponent = React.createClass({
      getInitialState:function(){
        return {
          workitem:['chlorine','premiro','famous']
        }
      } ,
      render:function(){

        var workitem = this.state.workitem ;
        workitem = workitem.map(function(item , index){
          return(
            <Workbox item={item} key={index} onChangePage={this.onChangePage} />
          )
        }.bind(this));

        return (
          <div className="work_nav_box">
            {workitem}
            <div className="smaller_box unique">
              <div className="word">
                <span>SELECTED</span> WORK
              </div>
            </div>
          </div>
        )

      } ,
      onChangePage:function(item){
        setTimeout(function(){
          body.classList.add(item);
        } , 800);
      }
    });


module.exports = WorkComponent ;
