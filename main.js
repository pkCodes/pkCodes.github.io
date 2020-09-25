var root = document.createElement('div');
root.classList.add('root');
document.body.appendChild(root);

class CreateElement {
  constructor(elementTag) {
    this._elementTag = elementTag;
    this.create = function (elementNames, elementValues, buttons, screenInputs) {
      for (let i = 1; i < elementNames.length; i++) {
        elementNames[i] = document.createElement(this._elementTag);
        elementNames[i].innerText = elementValues[i];
        elementNames[i].style.cssText = 'flex: 1 80px; border-radius: 10px; background-color: #fcba03; border: none; margin: 5px; font-size: 40px; color: white;';
        i < 17 ? elementNames[i].addEventListener('click', () => screenInputs.innerText += elementValues[i]): 0;
        buttons.append(elementNames[i]);
      }
      elementNames[17].addEventListener('click', () => screenInputs.innerText = '');
      elementNames[18].addEventListener('click', () => CreateElement.calculate());
    };
  }

  creatediv(props) {
    var newEle = document.createElement(this._elementTag);
    newEle.style.cssText = props.s;
    props.p.appendChild(newEle);
    this.newEle2 = newEle;
  }

  static calculate () {
    screenInputs.innerText = eval(screenInputs.innerText)
  }
}

class CreateButton extends CreateElement {
  constructor(buttons, screenInputs) {
    super('button');
    this.buttonValues = [' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '+', '-', '*', '/', '%', 'C', '='];
    this.buttonNames = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'point', 'plus', 'minus', 'into', 'slash', 'percentage', 'clear', 'equal'];
    this.create(this.buttonNames, this.buttonValues, buttons, screenInputs);
  }
}

class CreateDiv extends CreateElement {
  constructor(parent) {
    super('div');
    this.creatediv(parent);
  }
}

var app = new CreateDiv({p: root, s: 'height: 500px; width: 400px; background-color: lightblue; text-align: center; border-radius: 20px;'}).newEle2;
var screen = new CreateDiv({p:app, s: 'height: 100px; background-color: ivory; margin: 10px; border-radius: 10px; position: relative; overflow: hidden; direction: rtl;'}).newEle2;
var screenInputs = new CreateDiv({p:screen, s: 'position: absolute; bottom: 0; right: 10px; color: #2e302f; font-size: 55px;'}).newEle2;
var buttons = new CreateDiv({p:app, s: 'width: 380px; height: 370px; margin: 0 10px 10px 10px; border-radius: 10px; background-color: orange; display: flex; flex-wrap: wrap;'}).newEle2;
var btn = new CreateButton(buttons, screenInputs);