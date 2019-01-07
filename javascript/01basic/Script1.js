function wordCutter(a){

    for(i=1; i<a.length; i++){
        if(i % 10 == 0){
            document.write(a[i-1]);
            document.write('<br>');
        } else {
            document.write(a[i-1]);
        }
    }
}

wordCutter('abcde12345QWERT67890');