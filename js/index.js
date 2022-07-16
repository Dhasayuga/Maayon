$(function() {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true && clickover.closest('.navbar').length === 0) {
            $(".navbar-collapse").collapse('hide');
        }
    });
});
