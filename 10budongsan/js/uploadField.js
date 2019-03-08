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