$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $body = $('body');
  const $loading = ` <div class="loading">
  <div class="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>`;

  // body에 마지막부분에 집어넣기
  $body.append($loading);
  const $target = $('.loading');

  // 로딩이 완료되면 (load)
  $window.on('load', function () {
    // 너무 빨리 사라지므로 조금있다가 사라지게끔
    // setTimeout(동작, 시간)
    setTimeout(function () {
      $target.fadeOut();

      // 1초후에 loading요소 지우기
      setTimeout(function () {
        $target.remove();
      }, 1000);
    });
  });
});
