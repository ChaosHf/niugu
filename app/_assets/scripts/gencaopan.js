'use strict';
$(document).on('pageInit', '#page-mine', function (e, id, page) {
  $('.j-show-info').each(function () {
    $(this).click(function () {
      var show_obj = $(this).data('show-obj');
      var close_obj = $(this).siblings('.j-show-info').data('show-obj');
      $(show_obj).show();
      $(close_obj).hide();
    });
  });
});
$(document).on('pageInit', '#page-media-info', function (e, id, page) {
  $('.j-red_click').click(function () {
    $('.j-plate_red').show();
  });
  $('.j-close').on('click', function () {
    var close_obj = $(this).data('close-obj');
    $(close_obj).hide();
  });
  $('.j-share_click').click(function () {
    $('.j-plate_share').show();
  });
  $('.j-plate_share').click(function () {
    $('.j-plate_share').hide();
  });
});
