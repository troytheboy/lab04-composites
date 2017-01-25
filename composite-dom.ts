interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  private element:string;
  private child:IDomElement;

  constructor(element:string, child:IDomElement) {
    this.element = element;
    this.child = child;
  }

  toString = () => {
    return `<${this.element}>\n${this.child}\n</${this.element}>`;
  }

  print() {
    console.log(`<${this.element}>\n${this.child.toString()}\n</${this.element}>`);
  }
}

class TextNode implements IDomElement {
  private text;

  constructor(text:string) {
    this.text = text;
  }

  toString() {
    return `${this.text}`;
  }
}

TextNode t = new TextNode("Hi, I am a TextNode being printed!");
DomElement p = new DomElement("p", t);
DomElement div = new DomElement("div", p);
DomElement html = new DomElement("html", div);

html.print();
