$(document).ready(function(){
    $("a").click(function(event) {
        event.preventDefault();

        var cambio = this.hash;

        $("html").animate(
            {
                scrollTop: $(cambio).offset().top,
            },
            800
        );
    })
})
