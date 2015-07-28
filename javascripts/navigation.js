(function () {
  var
    $menuHamBurger    = $('.menu-humburger'),
    $closeNavigation  = $('.close-menu'),
    $navigation       = $('.main-nav');
  
    $menuHamBurger.on('click', function () {
      $navigation.addClass('open-menu');
      $menuHamBurger.addClass('hide');
    })

    $closeNavigation.on('click', function () {
      $navigation.removeClass('open-menu');
      $menuHamBurger.removeClass('hide')
    })
})()
