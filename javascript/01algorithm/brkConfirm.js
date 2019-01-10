function brkConfirm(a){
    aCount = 0;
    aOpen = "(";
    aClose = ")";
    for(i=0; i<a.length; i++){
        
        if(a[i]==aOpen){
            aCount += 10;
        } else if(a[i]==aClose){
            aCount += -10;
        } else {
            aCount += 5;
        }
    }
    if(aCount == 0){
        document.write("True");
    } else {
        document.write("False");
    }
}
brkConfirm('()((())');//false
brkConfirm("()(())");//true