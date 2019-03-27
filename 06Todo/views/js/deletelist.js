var urlPath = 'http://35.243.64.219:3000'

$('#dolist span').on('click', function(){
    var parent = $(this).parent();
    var children = parent.children();
    var seq = children.children('input')[0].value;
    
    parent.remove(); // js로 html에서 삭제하고 db에서 삭제ㄱ
    delDo(urlPath+'/delDo?seq='+seq);
});
$('#donelist span').on('click', function(){
    var parent = $(this).parent();
    var children = parent.children();
    var seq = children.children('input')[0].value;
    
    parent.remove(); // js로 html에서 삭제하고 db에서 삭제ㄱ
    delDone(urlPath+'/delDone?seq='+seq);
});

// get방식으로 새로고침 없이 url실행하기
function delDo(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
}
function delDone(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
}