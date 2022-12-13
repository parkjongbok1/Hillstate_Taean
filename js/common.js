$(document).ready(function(){
    let didScroll = 10;
    let lastScrollTop = 0;
    const delta = 5;
    const headerHeight = $(".header").outerHeight();
    const sec1_Height = $(".sec01").innerHeight();
    
    setInterval(function(){
        if(didScroll) {
            scrollHeaderEvent();
            didScroll = false
        }

    }, 500);

    $(window).on("scroll", function(){
        didScroll = true
    });

    function scrollHeaderEvent(){

        const scrollTop = $(this).scrollTop();

        if ( Math.abs(lastScrollTop - scrollTop) <= delta){
            return;
        }

        // 이전 스크롤 보다 스크롤을 내였을때
        if(scrollTop > lastScrollTop && scrollTop > sec1_Height - headerHeight) {

            $(".header").addClass("sticky")
            
        // 이전 스크롤 보다 스크롤을 올렸을때
        } else {

            if(scrollTop + $(window).innerHeight() < $(document).innerHeight()){
                $(".header").removeClass("sticky")
            }

        }

        lastScrollTop = scrollTop;
    }

});