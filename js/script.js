console.log("script loaded");

// 텍스트 마우스올리면 글로우효과
$(".text1").on("mouseenter", function () {
  $(this).addClass("glow");
});

$(".text1").on("mouseleave", function () {
  $(this).removeClass("glow");
});

// 텍스트 마우스올리면 팝업창
$(document).ready(function () {
  $(".text1").on("mouseenter", function () {
    $(".poster").addClass("active");
  });

  $(".text1").on("mouseleave", function () {
    $(".poster").removeClass("active");
  });
});

// 캐릭터 누르면 gif 재생
$(".boy").on("mousedown", function () {
  $(".boy_gif").addClass("active");
});

$(".boy").on("mouseup mouseleave", function () {
  $(".boy_gif").removeClass("active");
});

$(".girl").on("mousedown", function () {
  $(".girl_gif").addClass("active");
});

$(".girl").on("mouseup mouseleave", function () {
  $(".girl_gif").removeClass("active");
});
