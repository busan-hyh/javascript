function countNums(numIn){
    document.write(numIn + " : ");
    count = 0;
    for(i=0; numIn!=0; i++){
        
        if(numIn%2===0){
            numIn /= 2;
            count += 1;
        } else if(numIn%3===0){
            numIn /= 3;
            count += 1;
        } else {
            numIn -=1;
            count += 1;
        }
    }
    document.write(count + "<br>");
}

countNums(15);
countNums(9);