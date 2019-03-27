var urlPath = 'http://35.243.64.219:3000'

$("#dolist li").on('click', function(){
    var seq = $(this).children('input')[0].value; // seq 넘버

    // js로 리다이렉트
    window.location.replace(urlPath+'/doToDone?seq='+seq);
    
});
$("#donelist li").on('click', function(){
    var seq = $(this).children('input')[0].value;

    window.location.replace(urlPath+'/doneToDo?seq='+seq);
});