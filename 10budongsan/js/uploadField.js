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

$(document).ready(function(){
    var managerCount = 1;
    var sellerCount = 1;

    // 담당자 추가 삭제
    $('#managerPlus').bind('click', function(){
        managerCount += 1;

        var manager = $(this).parent().parent();
        var managerClone = manager.clone();
        managerClone.find('input').val('');
        managerClone.find('input:first').val('1');
        managerClone.find('input').attr('name','manager'+managerCount);
        managerClone.find('#managerPlus').attr('value','-');
        managerClone.find('#managerPlus').attr('id','managerMinus');
        
        $(this).closest('tr').after(managerClone);
    })
    $(document).on('click','#managerMinus',function(){
        managerCount -= 1;
        $(this).closest('tr').remove();
    })

    // 명의자 추가 삭제
    $('#sellerPlus').bind('click',function(){
        sellerCount += 1;

        var seller = $(this).parent().parent();
        var sellerClone = seller.clone();
        sellerClone.find('input').val('');
        sellerClone.find('select').attr('name','seller'+sellerCount);
        sellerClone.find('input').attr('name','seller'+sellerCount);
        sellerClone.find('#sellerPlus').attr('value','-');
        sellerClone.find('#sellerPlus').attr('id','sellerMinus');
        
        $(this).closest('tr').after(sellerClone);
    })
    $(document).on('click','#sellerMinus',function(){
        sellerCount -= 1;
        $(this).closest('tr').remove();
    })
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
// form 두개 submit
$('#uploadSubmit').on('click', function(){
    var form1=JSON.stringify($('.uploadForm1').serializeObject());
    console.log(form1);

    var form2=JSON.stringify($('.uploadForm2').serializeObject());
    console.log(form2);

    // json으로 만들어 ajax를 통해 form1, form2 업로드
    // seccess는 필요없나?? 리턴 안받아도 되니까..가 아니라 seq를 받아서
    // 리다이렉트 view?seq=? 해야겠네

    // ajax 내용 : 셀렉트는 숫자로 들어옴.(나중에 표시할때는 if써서 1은 매물 2는 진행 3은 완료 이렇게 표시)
    //             대략주소는 아예 한글로 넣음.
    //             가격은 매매/전세/월세/임대 경우별로 나눠서 정렬용 가격필드(완전숫자)에 매매가격*단위/전세가격*단위.. 해서
    //             json에 key는 "price", val은 "해당가격"으로 넣기
})
// 주소 구이름/동이름 선택시 submit 비활성화등 필수입력란 채우기 강제하기. required는 다른 submit 버튼이라 안먹히는듯