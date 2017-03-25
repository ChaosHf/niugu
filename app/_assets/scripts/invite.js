/**
 * Created by 炼 on 2017/3/25.
 */
'use strict';
$(document).on('pageInit', '#page-invite', function (e, id, page) {
  $('.j-havecode').click(function () {
      if($('.qr-block').hasClass('disnone') && $('.icon-block').hasClass('disblock')){
        $('.qr-block').removeClass('disnone').addClass('disblock');
        $('.icon-block').removeClass('disblock').addClass('disnone');
      }else if($('.qr-block').hasClass('disblock') && $('.icon-block').hasClass('disnone')){
        $('.icon-block').removeClass('disnone').addClass('disblock');
        $('.qr-block').removeClass('disblock').addClass('disnone');
      }
  });
});
