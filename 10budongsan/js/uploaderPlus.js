$('#managerPlus').bind('click', function(){
    var managerInner = '<tr><td>담당자</td><td><input type="text"></td><td><input type="text"></td><td><input id="managerMinus" type="button" value="-" /></td></tr>';
    $(this).closest('tr').after(managerInner);
})
$('#managerMinus').bind('click', function(){
    var parent = $(this).parent();
    parent.css('background','green');
})