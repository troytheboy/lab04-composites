var DomElement = (function () {
    function DomElement(element, child) {
        var _this = this;
        this.toString = function () {
            return "<" + _this.element + ">\n" + _this.child + "\n</" + _this.element + ">";
        };
        this.element = element;
        this.child = child;
    }
    DomElement.prototype.print = function () {
        console.log("<" + this.element + ">\n" + this.child.toString() + "\n</" + this.element + ">");
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.toString = function () {
        return "" + this.text;
    };
    return TextNode;
}());
TextNode;
t = new TextNode("Hi, I am a TextNode being printed!");
DomElement;
p = new DomElement("p", t);
DomElement;
div = new DomElement("div", p);
DomElement;
html = new DomElement("html", div);
html.print();
