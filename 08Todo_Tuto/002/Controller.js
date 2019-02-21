(function(exports){
    function SpinboxController(){
        this.spinboxModel = new SpinboxModel();
        this.spinboxView = new SpinboxView();
        this.spinboxView.render(this.spinboxModel.getData());
    
        $(".btn-increase").on("click", $.proxy(this.onClickIncrease, this));
        $(".btn-decrease").on("click", $.proxy(this.onClickDecrease, this));
        
    }
     exports.SpinboxController = SpinboxController; 
     // SpinboxController라는 이름으로 export

     SpinboxController.prototype = {
        onClickIncrease: function(){
            this.spinboxModel.increase(); 
            // Model의 increase()를 가져옴
            this.spinboxView.render(this.spinboxModel.getData()); 
            // View의 render를 가져옴(매개변수는 Model의 getData())
        },
        onClickDecrease: function(){
            this.spinboxModel.decrease();
            this.spinboxView.render(this.spinboxModel.getData());
        }
    };
 
})(this); // this(window)로 export하는게 기본 구조.