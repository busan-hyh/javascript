// list to view 셀렉터
$(document).on('click','.list tr',function(){
    var seq = $(this).children('td').children('input[name=seq]').val();
    // cate = sale / jeonsae / rent
    var cate = $(this).children('td').children('input[name=case]').val();
    
    location.href = './'+cate+'view.html';
})

// 제곱미터 to 평형
$(document).ready(function(){
    var sMeter0 = $('.sMeter0').text();
    $('.sMeter0').next('span').text(' ㎡ = '+(sMeter0*0.3025).toFixed(2)+' 평');

    var sMeter1 = $('.sMeter1').text();
    $('.sMeter1').next('span').text(' ㎡ = '+(sMeter1*0.3025).toFixed(2)+' 평');
    var sMeter2 = $('.sMeter2').text();
    $('.sMeter2').next('span').text(' ㎡ = '+(sMeter2*0.3025).toFixed(2)+' 평');
    var sMeter3 = $('.sMeter3').text();
    $('.sMeter3').next('span').text(' ㎡ = '+(sMeter3*0.3025).toFixed(2)+' 평');

})