$(document).ready(function(){
    $('#forSale').show();
    $('#forJeonse').hide();
    $('#forRent').hide();

    $('#case').change(function(){
        var state = $('#case option:selected').val();

        if(state == '매매') {
            $('#forSale').show();
            $('#forJeonse').hide();
            $('#forRent').hide();
        } else if(state == '전세') {
            $('#forSale').hide();
            $('#forJeonse').show();
            $('#forRent').hide();
        } else {
            $('#forSale').hide();
            $('#forJeonse').hide();
            $('#forRent').show();
        }
    })
})
// 엔터키 막기
$('input[type="text"]').keydown(function() {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});
// numberOnly 텍스트필드에 숫자만 허용하기
$("input:text[numberOnly]").on("keyup", function() {
    $(this).val($(this).val().replace(/[^0-9.]/g,""));
});
// 담당자, 명의자 추가 삭제
$('#managerPlus').bind('click', function(){
    var managerInner = '<tr><td>담당자</td><td><input type="text"></td><td><input type="text"></td><td><input id="managerMinus" type="button" value="-" /></td></tr>';
    $(this).closest('tr').after(managerInner);
})
$(document).on('click','#managerMinus',function(){
    $(this).closest('tr').remove();
})

$('#sellerPlus').bind('click',function(){
    var sellerInner = '<tr><td><select name="seller" id="seller"><option value="명의자">명의자</option><option value="관리자">관리자</option></select></td><td><input type="text"></td><td><input type="text"></td><td><input id="sellerMinus" type="button" value="-" /></td></tr>';
    $(this).closest('tr').after(sellerInner);
})
$(document).on('click','#sellerMinus',function(){
    $(this).closest('tr').remove();
})
// 메인카드 제곱미터 ↔ 평형
$('.mSMeter').on('keyup',function(){
    var mSMter = $(this).val();

    $(this).siblings('input').val((mSMter*0.3025).toFixed(2));
})
$('.mPyung').on('keyup',function(){
    var mPyung = $(this).val();

    $(this).siblings('input').val((mPyung/0.3025).toFixed(2));
})
// 제곱미터 to 평형
$(document).on('keyup','.sMeter',function(){
    var sMeter = $(this).val();

    $(this).siblings('span').text((sMeter*0.3025).toFixed(2));
})