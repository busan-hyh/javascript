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