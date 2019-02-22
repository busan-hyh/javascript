var ul = document.getElementById('list');
var removeall = document.getElementById('removeall');
var add = document.getElementById('add');

add.onclick = function(){
    addLi(ul)
}

function addLi(targetUl){
    var inputText = document.getElementById('text').value;
    var li = document.createElement('li');
    var h3 = document.createElement('h3');
    var textNode = document.createTextNode(inputText + " ");
    var removeButton = document.createElement("button");

    // text input 초기화
    document.getElementById('text').value = "";

    if(inputText.length === 0){
        alert("글을 입력하세요");
        return false;
    }

    removeButton.className = 'removeMe';
    removeButton.innerHTML = "DONE!";
    removeButton.setAttribute("onclick", "removeMe(this);");

    h3.appendChild(textNode);
    li.appendChild(h3);
    li.appendChild(removeButton);

    targetUl.appendChild(li);
}

function removeMe(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

removeall.onclick = function(){
    ul.innerHTML = "";
}

// 요걸 MVC로 나눠보면
// 뷰 : getById(매개변수) 를 통해 document.getElementById(매개변수) 가져옴
//      getByIdValue(매개변수) 를 통해 .value까지 가져옴
//      createEle(매개변수) 를 통해 document.createElement(매개변수) 실행
//      addChild(부모,자식) 를 통해 부모.appendChild(getById(자식)) 실행
// 모 : removeItem(item) 지우기 실행..
//      removeAll(ul) 모두 지우기 실행..