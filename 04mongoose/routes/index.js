//schema를 만든다
//몽고DB에 저장할 데이터의 구조를 명시적으로 정하기.

var todoSchema = mongoose.Schema({
    date:Date,
    task:String,
    done:Boolean
});

var todo = mongoose.model("todo", todoSchema);
//만들어진 스키마는 model로 컴파일.

