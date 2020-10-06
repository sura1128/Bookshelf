var list_button = document.getElementsByTagName("button")[0];
list_button.addEventListener("click", function() {
    addToList(0);
})

var list_button = document.getElementsByTagName("button")[1];
list_button.addEventListener("click", function() {
    addToList(1);
})

var list_button = document.getElementsByTagName("button")[2];
list_button.addEventListener("click", function() {
    addToList(2);
})

function addToList(index) {
    var next_read = prompt("Enter a name for your next read:");
    console.log(next_read);

    list_item = document.createElement("li");
    list_item.appendChild(document.createTextNode(next_read));
    
    ongoing_list = document.getElementsByTagName("ol")[index];
    ongoing_list.appendChild(list_item);
}