$(".nav-link").click(function() {
    // Remove 'active' class from all elements
    $(".nav-link").removeClass("active");

    // Add 'active' class to the clicked element
    $(this).addClass("active");

    // Store the index of the active element
    // var index = $(this).index();
    // localStorage.setItem("activeNavIndex",index);
});

// On page load, reflect the active state from localStorage
// $(document).ready(function() {
//     var index = localStorage.getItem("activeNavIndex");
//     if (index !== null) {
//         $("#nav1 .nav-link").eq(index).addClass("active");
//     }
// });