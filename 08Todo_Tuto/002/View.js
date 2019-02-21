(function(exports){
    function SpinboxView(){}
     exports.SpinboxView = SpinboxView;

     SpinboxView.prototype = {
        render : function(value) {
             $('.result').val(value);
        }
   };
 
})(this);
