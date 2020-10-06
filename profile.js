var list_button = document.getElementsByTagName("button")[0];
list_button.addEventListener("click", function() {
    console.log("Hit button!");
    var next_read = prompt("Enter a name for your next read:");
    console.log(next_read);

    list_item = document.createElement("li");
    list_item.appendChild(document.createTextNode(next_read));
    
    ongoing_list = document.getElementsByTagName("ol")[0];
    ongoing_list.appendChild(list_item);
})

var list_button = document.getElementsByTagName("button")[1];
list_button.addEventListener("click", function() {
    console.log("Hit button!");
    var next_read = prompt("Enter a name for your next read:");
    console.log(next_read);

    list_item = document.createElement("li");
    list_item.appendChild(document.createTextNode(next_read));
    
    ongoing_list = document.getElementsByTagName("ol")[1];
    ongoing_list.appendChild(list_item);
})

var list_button = document.getElementsByTagName("button")[2];
list_button.addEventListener("click", function() {
    console.log("Hit button!");
    var next_read = prompt("Enter a name for your next read:");
    console.log(next_read);

    list_item = document.createElement("li");
    list_item.appendChild(document.createTextNode(next_read));
    
    ongoing_list = document.getElementsByTagName("ol")[2];
    ongoing_list.appendChild(list_item);
})