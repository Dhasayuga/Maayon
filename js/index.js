$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggler") && clickover.parents('.navbar-collapse').length == 0) {
            $("button.navbar-toggler").click();
        }
    });
});
