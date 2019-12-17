$(function(){

  var $container = $("#sample-slideshow");
  var $title = $container.find(".title");
  var $imgs = $container.find(".photo img");
  var $nextBtn = $container.find(".nextBtn");
  var $prevBtn = $container.find(".prevBtn");

  function showPhoto(index){
    var $current=$imgs.filter(":visible");
    var $target =$imgs.eq(index);
    var title = $target.attr("alt");
    var viewNumber = index + 1;
    $title.text('[' + viewNumber +']' +title);
    $current.fadeOut();
    $target.fadeIn();
  }

var len = $imgs.Length;

var currentIndex = 0;

$nextBtn.click(function(){
  currentIndex++;
  if(currentIndex >= len){
    currentIndex = 0;
  }
  showPhoto(currentIndex);
});

$prevBtn.click(function(){
    currentIndex--;
    if(currentIndex < 0){
      currentIndex = len - 1;
        }
  showPhoto(currentIndex);
});

showPhoto(currentIndex);
});
