function countAlph(input){
    sum = 0;
    for(i=0;i<input.length;i++){
        if (input[i] != " "){
            sum += 1;
        } else {
        }
    }
    document.write(input + " 문자열 갯수는 " + sum);
}

countAlph("danawa b anana");