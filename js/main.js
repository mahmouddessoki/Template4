/**wait for all to be ready (UX is low)
window.onload = function(){

} */
//wait for except objects that needs to be rendered (img)(CDN)(UX is better)
$(document).ready(function(){
    $(".forLoading").fadeOut(2000, function(){
        $("body").css("overflow-y","auto")
    })
})
//addClass toggleClass removeClass 
$(".test").click(function(){
    $(".test").toggleClass("forTest")
})

//scroll event
let section2Top = $("#section2").offset().top
let section1Top = $("#section1").offset().top;
let section3Top = $("#section3").offset().top;
let section4Top = $("#client").offset().top;
let section5Top = $("#section5").offset().top;
let section6Top = $("#blog").offset().top;
let section7Top = $("#section7").offset().top;


$(window).scroll(function(){
    let scrollBar = $(window).scrollTop()
    $(".navbar").addClass("navbarScroll")
    $(".link1").removeClass("text-warning")
    if(scrollBar >= section2Top && scrollBar < section3Top)
    {
        $(".link2").addClass("text-warning")
        $(".link1").removeClass("text-warning")
        $(".link3").removeClass("text-warning")
        $(".navbar").addClass("navbarScroll")
        $(".scrollingUp").fadeIn(500);

    }
    else if(scrollBar >= section3Top && scrollBar<section4Top)
    {
        $(".link2").removeClass("text-warning")
        $(".link3").addClass("text-warning")
        $(".link4").removeClass("text-warning")
    }

    else if( scrollBar >= section4Top & scrollBar < section5Top)
    {
        $(".link3").removeClass("text-warning")
        $(".link4").addClass("text-warning")
        $(".link5").removeClass("text-warning")
    }

    else if( scrollBar >= section5Top & scrollBar < section6Top)
    {
        $(".link5").addClass("text-warning") 
        $(".link4").removeClass("text-warning")
        $(".link6").removeClass("text-warning")
    }
    else if( scrollBar >= section6Top & scrollBar < section7Top)
    {
        $(".link6").addClass("text-warning") 
        $(".link5").removeClass("text-warning")
        $(".link7").removeClass("text-warning")
    }
    else if( scrollBar >= section7Top )
    {
        $(".link7").addClass("text-warning") 
        $(".link6").removeClass("text-warning")
    }
    else
    {
        $(".link2").removeClass("text-warning")
        $(".link1").addClass("text-warning")
        $(".navbar").removeClass("navbarScroll")
        $(".scrollingUp").fadeOut(500);
    }
    
    
})

//any this in website has mkan
//$("...").offset()==> {top:...,left:....}
//$(window).scrollTop()


$(".fa-arrow-up").click(function(){
 
        $("html,body").animate({scrollTop : "0"},1000)
 
})

$("a[href^='#']").click(function(){
    let currentId = $(this).attr("href")
    if(currentId.includes("pills") == false)
    {
        let sectionTop = $(currentId).offset().top;
        
        $("html,body").animate({scrollTop : sectionTop},1000)
    }
    

})



let w = $(".forcolors").outerWidth()
$(".forcolors").css({left : `-${w}`})
$("#section1 .setting").css({left:"0"}) 

$("#section1 .setting").click(function(){

    if($("#section1 .setting").css("left") === "0px")
    {
        $(".forcolors").animate({left : `0`},500)
        $("#section1 .setting").animate({left:`${w}`},500) 
    }
    else
    {
        $(".forcolors").animate({left : `-${w}`},500)
        $("#section1 .setting").animate({left:`0`},500) 
    }
    
})


$(".forcolors .color").click(function()
{
    let cColor = $(this).css("background-color")
    $(".headerBtn").css("background-color",cColor)
    $("h2").css("color",cColor)
})


new WOW().init();

