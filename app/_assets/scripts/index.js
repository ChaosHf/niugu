'use strict';
$(document).on('pageInit', '#page-index', function (e, id, page) {
  //$('.j-havecode').click(function () {
  //    if($('.qr-block').hasClass('disnone') && $('.icon-block').hasClass('disblock')){
  //      $('.qr-block').removeClass('disnone').addClass('disblock');
  //      $('.icon-block').removeClass('disblock').addClass('disnone');
  //    }else if($('.qr-block').hasClass('disblock') && $('.icon-block').hasClass('disnone')){
  //      $('.icon-block').removeClass('disnone').addClass('disblock');
  //      $('.qr-block').removeClass('disblock').addClass('disnone');
  //    }
  //});
  $('.j-rule_click').click(function () {
    $('.j-plate_rule').show();
  });
  $('.j-close').on('click', function () {
    var close_obj = $(this).data('close-obj');
    $(close_obj).hide();
  });
  $('.new-box').each(function(){
    $(this).click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
  });
  $('.tab-niu').each(function(){
    $(this).click(function(){
      var hide_obj = $(this).data('show-obj');
      var ohide_obj = $(this).siblings().data('show-obj');
      if($(this).hasClass('active')){
        $(hide_obj).show();
        $(ohide_obj).hide();
      }else{
        $(hide_obj).hide();
        $(ohide_obj).show();
      }
    });
  });
});
