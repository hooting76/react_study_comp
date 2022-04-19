$('.nav>ul>li>a').on('focus', function(){
    $('.nav>ul>li').find('ul').stop().slideDown()
});
$('.nav>ul>li').on('mouseover', function(){
    $('.nav>ul>li').find('ul').stop().slideDown()
});
$('.nav>ul>li').on('mouseout blur', function(){
    $('.nav>ul>li').find('ul').stop().slideUp()
});


/* 슬라이드 */
let banner=$('.banner>ul>li');
let current=0;

setInterval(function(){
    let prev=banner.eq(current);
    move(prev, 0, '-100%');
    current++;
    if(current==banner.size()) current=0;
    let next=banner.eq(current);
    move(next, '100%', 0);

},3000);

function move(tg, start, end){
    tg.css('top', start).stop().animate({top:end});
}


/* tab */
let tab=$('.tab>li');
let tabContent=$('.tabContent>div');
tabContent.eq(0).css('display','block');
tab.click(function(e){
    e.preventDefault();
    let tg=$(this)
    let idx=tg.index();
    tab.find('a').removeClass('active');
    tg.find('a').addClass('active');
    
    tabContent.css('display','none');
    tabContent.eq(idx).css('display','block');

})

//팝업
$('.popup').click(function(){
    $('.pop').show();
});

$('.close').click(function(){
    $('.pop').hide();
});
