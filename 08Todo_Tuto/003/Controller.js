(function(exports){
    function todoController(){
        // 모버튼.on(클릭,모액션) -> 모버튼 클릭시 모액션 실행
        console.log("Controller.js 실행!");
        
    }
    exports.todoController = todoController;
    // todoController 이름으로 exports

    todoController.prototype = {
        // 모액션{모델의 모모액션} 정의
    };

})(this);