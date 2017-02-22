const el_load = document.getElementById("loader") ,
      el_app = document.getElementById("app") ,
      win_width = window.outerWidth ;

class portfolio {
  // start loading
  static loadfin(){
    setTimeout(function()
    {
        el_load.classList.remove("active");
        el_app.classList.remove("onload");
    }, 800) ;
    setTimeout(function()
    {
        el_load.classList.add("hide");
    }, 1600) ;
  }
  // finish loading
  static loadstart(){
    el_app.classList.add("onload"),
    el_load.classList.remove("hide"),
    setTimeout(function()
    {
        el_load.classList.add("active")
    }, 50)
  }

  static willchange(){
    el_app.classList.remove('active');
  }

  static haschange(){
    el_app.classList.add('active');
  }

  static winheight(){
    var target = document.querySelectorAll('.winheight');
    var  outerh = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    for(var x=0 ; x < target.length ; x++)
    {
      target[x].style.minHeight = outerh + 'px';
      if(win_width <= 800){
        if( target[x].classList.contains('right') ){
          target[x].style.minHeight = outerh - 174 + 'px';
        }
      }
    }
  }

  static moving_nav(){
    var target = document.getElementById('navigation_bar') ,
        source = document.querySelectorAll('.sidebar .active li'),
        source_ = document.querySelectorAll('.sidebar .active '),
        s_height = source[0].offsetHeight ,
        s_width = source[0].offsetWidth,
        distance_top = source[0].offsetTop ,
        distance_left = source_[0].offsetLeft ;

        if(win_width <= 800){
          target.style.maxWidth = s_width + 'px';
          target.style.left = distance_left + 'px';
        } else {
          target.style.minHeight = s_height + 'px';
          target.style.top = distance_top + 'px';
        }

  }
}

exports.Portfolio_function = portfolio ;
