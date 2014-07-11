$(document).ready(function(){

  var sectionCount = $("section").length;
	count = 0;
	while(count < sectionCount){
		count++;
		$("nav").append('<a href="#smithsonian-'+count+'" class="nav-'+count+'"><span></span></a>');
	}
  $(".nav-1").addClass("nav-active");
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var height = $("section").height();
  width = $( window ).width();
  if(width <= 767){
    /*$("section").css("height", height+"px");*/
    $(".header-caption").show();
    $("nav a").click(function(){
      $("nav a").removeClass("nav-active");
      $(this).addClass("nav-active");
    });
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
      if(scrollTop < 200){
        $("#fixed-footer").hide('slide',{direction:'down'});
      }
      if(scrollTop > 200 && scrollTop > 8799){
        $("#fixed-footer").show('slide',{direction:'down'});
      }
    });

  }else{
    $(window).resize(function(){
      height = $("section").height();
      $(".bottom-logo").css("margin-top", (height-151)+"px");
      
    });
    $(".bottom-logo").css("margin-top", (height-151)+"px");
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
     
      //NAV SELECT
      if(scrollTop <= 200){
        $("nav a").removeClass("nav-active");
        $(".nav-1").addClass("nav-active");
      }
      if(scrollTop >= 683){
        $("nav a").removeClass("nav-active");
        $(".nav-2").addClass("nav-active");
      }
      if(scrollTop >= 1366){
        $("nav a").removeClass("nav-active");
        $(".nav-3").addClass("nav-active");
      }
      if(scrollTop >= 2049){
        $("nav a").removeClass("nav-active");
        $(".nav-4").addClass("nav-active");
      }
      if(scrollTop >= 2732){
        $("nav a").removeClass("nav-active");
        $(".nav-5").addClass("nav-active");
      }
      if(scrollTop >= 3415){
        $("nav a").removeClass("nav-active");
        $(".nav-6").addClass("nav-active");
      }
      if(scrollTop >= 4098){
        $("nav a").removeClass("nav-active");
        $(".nav-7").addClass("nav-active");
      }
      if(scrollTop >= 4781){
        $("nav a").removeClass("nav-active");
        $(".nav-8").addClass("nav-active"); 
      }
      if(scrollTop >= 5464){
        $("nav a").removeClass("nav-active");
        $(".nav-9").addClass("nav-active");
      }
      if(scrollTop >= 6147){
        $("nav a").removeClass("nav-active");
        $(".nav-10").addClass("nav-active");
      }
      if(scrollTop >= 6830){
        $("nav a").removeClass("nav-active");
        $(".nav-11").addClass("nav-active");
      }
      if(scrollTop >= 7513){
        $("nav a").removeClass("nav-active");
        $(".nav-12").addClass("nav-active");
      }
      if(scrollTop >= 8196){
        $("nav a").removeClass("nav-active");
        $(".nav-13").addClass("nav-active");
      }
      if(scrollTop >= 8879){
        $("nav a").removeClass("nav-active");
        $(".nav-14").addClass("nav-active");
      }
      //CIRCLE ANIMATIONS
      if(scrollTop <= 500){
        $("#fixed-footer").hide('slide',{direction:'down'});
        $("#smithsonian-2 .circle").hide("scale",{percent: 0, direction: 'center'}, 1000);
      }
      if(scrollTop >= 501){
        $("#fixed-footer").show('slide',{direction:'down'});
        $("#smithsonian-2 .circle").show("scale",{percent: 100, direction: 'vertical'}, 1000);
      }
      if(scrollTop < 1850){
        $("#smithsonian-4 .circle").hide("scale",{percent: 0, direction: 'center'}, 1000);
      }
      if(scrollTop > 1855  ){
        $("#smithsonian-4 .circle").show("scale",{percent: 100, direction: 'vertical'}, 1000);
      }
      if(scrollTop < 3150){
        $("#smithsonian-6 .circle").hide("scale",{percent: 0, direction: 'center'}, 1000);
      }
      if(scrollTop > 3162){
        $("#smithsonian-6 .circle").show("scale",{percent: 100, direction: 'vertical'}, 1000);
      }
      if(scrollTop < 4435){
        $("#smithsonian-8 .circle").hide("scale",{percent: 0, direction: 'center'}, 1000);
      }
      if(scrollTop > 4540){
        $("#smithsonian-8 .circle").show("scale",{percent: 100, direction: 'vertical'}, 1000);
      }
      if(scrollTop < 5813){
        $("#smithsonian-10 .circle").hide("scale",{percent: 0, direction: 'center'}, 1000);
      }
      if(scrollTop > 5918){
        $("#smithsonian-10 .circle").show("scale",{percent: 100, direction: 'vertical'}, 1000);
      }
      if(scrollTop < 7236){
        $("#smithsonian-12 .circle").hide("scale",{percent: 0, direction: 'center'}, 1000);
      }
      if(scrollTop > 7296){
        $("#smithsonian-12 .circle").show("scale",{percent: 100, direction: 'vertical'}, 1000);
      }
    });
  }

  function preloader(){

    var preloadcount=$('section').length;
    var pageCount=2;
    
    while(pageCount<=preloadcount){
    var img=$("<img/>");

    img.attr("src",$("#smithsonian-"+pageCount).data("uri"));

    var bg = 'url('+img.attr('src')+')';

    function deploy(count){
      var test=$("#smithsonian-"+count).css("background-image",bg);
      $("#smithsonian-"+count).css("background-image",bg);
        console.log(test);
    }

    img.load(deploy(pageCount));

    pageCount++;
    }
    disappear();
  }

preloader();

  function disappear(){
      $('.spinner').fadeOut('slow');
      $('.preloader').delay(350).fadeOut('slow');
  }


});
