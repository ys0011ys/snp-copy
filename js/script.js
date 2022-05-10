 
  $(document).ready(function(){
    $(".main-banner").slick({

      slide: "div",
      slidesToShow: 1,
      speed: 1000,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 1000,
      vertical: false,
    });

     $(".banner2").slick({

       slide: "div",
       slidesToShow: 1,
       speed: 1000,
       arrows: true,
       autoplay: false,
       autoplaySpeed: 1000,
       vertical: false,
     });
     
     $(".slide-box-wrap").slick({

      slide: "div",
      slidesToShow: 3,
      speed: 1000,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 1000,
      vertical: false,
    });

    $(".inst-imgs").slick({

      slide: "div",
      slidesToShow: 5,
      speed: 1000,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 1000,
      vertical: false,
    });



  });