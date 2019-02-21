(function(exports){
    function SpinboxModel(value){
        // value인자에 값이 없으면 100
        value = value || 100;
        this.data = value;
        // 전역객체인 this(window)의 data메소드를 value로 선언함
    }
     exports.SpinboxModel = SpinboxModel;

     SpinboxModel.prototype = {
        increase : function(value){
            value = value || 1;
            this.data += value;
            return this.data;
        },
        decrease : function(value){
            value = value || 1;
            this.data -= value;
            return this.data;
        },
        getData : function(){
            return this.data;
        }
    };
 
})(this);