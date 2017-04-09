'use strict';
$(document).on('pageInit', '#page-mine', function (e, id, page) {
  $('.j-jump_account').click(function () {
    window.location.href = 'account.html';
  });
});
