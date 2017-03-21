addEventListener('load', function() {
    //övning 7
    function changeColor() {
        document.getElementsByTagName('body')[0].style.backgroundColor = document.getElementById("colorInput").value;
    }
    //övning 8
    document.getElementById("colorButton").addEventListener('click', changeColor);
    
    //övning 9
    function putTogether(elt) {
        var result = "";
        result += elt.nodeValue;
        var nodes = elt.childNodes;
        for(var i=0; i<nodes.length; i++) {
            if (nodes[i].nodeType === Node.TEXT_NODE) {
                result += nodes[i].nodeValue;
            }
        }
        return result;
    }
    var elt = document.getElementById("theElement");
    document.getElementById("newStuff").innerHTML = putTogether(elt);
});

