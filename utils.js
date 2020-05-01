
const EVENTS={
    click:"click",
    scroll:"scroll",
    mouseover:"mouseover"
}

var body = {}

function createElement(tag,content){
    var h=document.createElement(tag)
    var t=document.createTextNode(content)
    h.appendChild(t);
    return h;
}

function Element(selector=""){
    if(selector instanceof String) this.el=document.querySelector(selector);
    if(selector instanceof Node) this.el= selector;
}
Element.prototype.listener = function(event="",callback){
    this.el.addEventListener(event,callback);
}

Node.prototype.add = function (param) {
    if(param instanceof Node) this.appendChild(param)
}

const createChildObjects = function(){
    var ids=document.querySelectorAll('*[id]');
    ids.forEach(element => {
        body[element.id]=new Element(element);
    });
}

Element.prototype.remove = function(){
    if(this.el.parentNode != null) this.el.parentNode.removeChild(this.el)
}

Element.prototype.addChild = function(child) {
    //Supports strings and elements
    if(child instanceof Element) child=child.el;
    if(child.parentNode == null) this.el.appendChild(child)
}