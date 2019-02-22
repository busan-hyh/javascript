(function(exports){
    function todoModel(){
        // 이 경우는 기본값이 없으므로 생략
    }
    exports.todoModel = todoModel;

    todoModel.prototype = {
        removeItem : function(item) { 
            var parent = item.parentElement;
            parent.parentElement.removeChild(parent);
        },
        removeAll : function(ul) {
            ul.innerHTML = "";
        }
    }
})(this);