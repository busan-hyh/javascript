function alphaCount(input){
    a = 0;    b = 0;    c = 0;    d = 0;    e = 0;    f = 0;

    for(i=0; i<input.length; i++){
        //document.write(input[i]);
        if(input[i] == "a"){
            a += 1;
        } else if(input[i] == "b") {
            b += 1;
        } else if(input[i] == "c") {
            c += 1;
        } else if(input[i] == "d") {
            d += 1;
        } else if(input[i] == "e") {
            e += 1;
        } else if(input[i] == "f") {
            f += 1;
        } else {

        }
    }
    document.write(a + " " + b + " " + c + " " + d + " " + e + " " + f + " " );
}

alphaCount('aaaabbcddffff');