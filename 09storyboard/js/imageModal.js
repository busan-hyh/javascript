var modal = $("#myModal"); //팝업 div
var imgsUrl; //이미지 url
var altText; //이미지안 alt값

$(".view li>a").on("click", function () {
    var _index = $("li").index(this); //해당 index 찾기
    var _indexTar = $(this).parent().eq(_index); //해당 인덱스
    var seq = $(this).children('.picSeq').attr("value");
    var mId = $(this).children('.myId').attr("value");
    var yId = $(this).children('.yourId').attr("value");
    
    $(".view li").removeClass("open"); //"open" 클래스 삭제
    _indexTar.addClass("open"); //"open" 클래스 추가

    imgsUrl = _indexTar.find(".myImg").attr("src"); //이미지 경로에 src경로 찾기
    altText = _indexTar.find(".myImg").attr("alt"); //이미지 경로에 alr값 찾기

    modal.find(".modal-content").attr("src", imgsUrl); //해당 팝업 안에 이미지 넣기
    modal.find(".caption").text(seq+mId+yId); // 팝업 텍스트 출력, 하트누르면 온클릭 액션/ 북마크 누르면 북맠저장/ 프로필 누르면 해당 보드로 이동

    modal.show(); //팝업 열기
})

$("span").on("click", function () {
    modal.hide(); //팝업 닫기
})