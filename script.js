
var elements = [];
var contents = [];

$(document).ready(function() {
    $.when($.get("style.css"))
    .done(function(response) {
        handleResponse(response);
    });
});


function handleResponse (response){
    // remove line breaks
    response = response.split(/[}{]/);
    for (var i = 0; i < response.length; i++) {
        if(i % 2 === 0) { // index is even
            elements.push(response[i]);
        } else {
            contents.push(response[i]);
        }
    }
    
    elements = elements.filter(entry => entry.trim() != '');
    injectIt();
}


function injectIt() {

    elements.map(function (item, i) {
        var item = item.replace(/\s+/g, '');
        var el = document.createElement(item);
        el.textContent = item + ' ' + contents[i];
        el.setAttribute('class', 'note');
        document.body.appendChild(el);
    });
}
