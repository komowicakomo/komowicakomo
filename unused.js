var el_load = document.getElementById("loader") ,
    el_app = document.getElementById("app");

function willchange(){
  var el_app = document.getElementById("app");
  el_app.classList.remove('active');
}

function haschange(){
  var el_app = document.getElementById("app");
  el_app.classList.add('active');
}

function winheight(disclass){
  var target = document.querySelectorAll(disclass);
  var  outerh = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
  for(var x=0 ; x < target.length ; x++)
  {
    target[x].style.minHeight = outerh + 'px';
  }
}

function removeClass(disclass){
  var target = document.querySelectorAll(disclass);
  for(var x=0 ; x < target.length ; x++)
  {
    target[x].classList.remove("active");
  }
}

var Portfolio_function = function(type){
  var el_load = document.getElementById("loader") ,
      el_app = document.getElementById("app");
    if(type == 'loadstart'){
      return (
        el_app.classList.add("onload"),
        el_load.classList.remove("hide"),
        setTimeout(function()
        {
            el_load.classList.add("active")
        }, 50)
      )
    } if(type == 'loadfin') {
      return (
          setTimeout(function()
          {
              el_load.classList.remove("active");
              el_app.classList.remove("onload");
          }, 800) ,
          setTimeout(function()
          {
              el_load.classList.add("hide");
          }, 1600)
        )
    } else {
      return alert('no function');
    }
}
