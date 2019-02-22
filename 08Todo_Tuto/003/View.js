(function(exports){
    function todoView(){
        // 뷰는 html에 초기화 되어있으므로 생략
    }
    exports.todoView = todoView;

    todoView.prototype = {
        getById : function(value){
            document.getElementById(value);
        },
        createEle : function(value){
            document.createElement(value);
        },
        addChild : function(parent, child){
            parent.appendChild(child);
        }
    }
})(this);