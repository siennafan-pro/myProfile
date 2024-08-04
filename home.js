  $(".nav-link").click(function(){
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

//   $(document).ready(function() {
//     var index = localStorage.getItem("activeNavIndex");
//     if (index !== null) {
//         $("#nav2 .nav-link").eq(index).addClass("active");
//     }
// });