var root = document.createElement('div');
root.classList.add('root');
document.body.appendChild(root);

class CreateElement {
  constructor(elementTag) {
    this._elementTag = elementTag;
    let powerState = false;
    this.create = function (elementNames, elementValues, screenInputs, digits, operators, clrBtns, dotZero, powerSwitch) {
      for (let i = 1; i < elementNames.length; i++) {
        elementNames[i] = document.createElement(this._elementTag);
        elementNames[i].innerText = elementValues[i];
        elementNames[i].style.cssText = i > 0 && i < 10 ? this.digitStyle() : i > 11 && i < 17 ? this.operatorStyle() : i == 10 || i == 11 || i == 18 ? this.dotzeroStyle() : i == 17 || i == 19 ? this.clrBtnstyle() : i == 20 ? this.pwrBtnstyle() : 0;
        i > 0 && i < 10 ? digits.append(elementNames[i]) : i > 11 && i < 17 ? operators.append(elementNames[i]) : i == 10 || i == 11 || i == 18 ? dotZero.append(elementNames[i]) : i == 17 || i == 19 ? clrBtns.append(elementNames[i]) : i == 20 ? powerSwitch.append(elementNames[i]) : 0;
      }
      elementNames[17].addEventListener('click', () => (screenInputs.innerText = ''));
      elementNames[19].addEventListener('click', () => (screenInputs.innerText = screenInputs.innerText.slice(0, -1)));
      elementNames[20].addEventListener('click', () => {
        powerState = !powerState;
        for (let i = 1; i < 20; i++) {
          if (powerState) {
            document.body.style.backgroundColor = 'azure';
            app.style.cssText += 'background-color: #4d4d4d;';
            screen.style.cssText += 'background-color: azure';
            elementNames[i].style.cssText = i > 0 && i < 10 ? this.digitStyle() : i > 11 && i < 17 ? this.operatorStyle() : i == 10 || i == 11 || i == 18 ? this.dotzeroStyle() : i == 17 || i == 19 ? this.clrBtnstyle() : i == 20 ? this.pwrBtnstyle() : 0;
            elementNames[i].eventListeners = () => (i < 17 ? (screenInputs.innerText += elementValues[i]) : 0);
            elementNames[i].addEventListener('click', elementNames[i].eventListeners);
            if (i == 18) elementNames[18].addEventListener('click', () => CreateElement.calculate());
          } else {
            screenInputs.innerText = '';
            elementNames[i].removeEventListener('click', elementNames[i].eventListeners);
            elementNames[i].style.cssText = i > 0 && i < 10 ? this.digitStyle() : i > 11 && i < 17 ? this.operatorStyle() : i == 10 || i == 11 || i == 18 ? this.dotzeroStyle() : i == 17 || i == 19 ? this.clrBtnstyle() : i == 20 ? this.pwrBtnstyle() : 0;
            app.style.cssText += 'background-color: gray;';
            document.body.style.backgroundColor = '#272727';
            let oC = 'background-color: #3a3a3a';
            screen.style.cssText += oC;
            clrBtns.style.cssText += oC;
            digits.style.cssText += oC;
            operators.style.cssText += oC;
            dotZero.style.cssText += oC;
          }
        }
      });
    };
    this.digitStyle = function () {
      let temp = 'width: 80px; height: 50px;';
      powerState ? (digits.style.cssText += 'background-color: #ffc629;') : 0;
      return powerState ? temp + 'background-color: orange; color: white;' : temp + 'background-color: #60625d';
    };
    this.operatorStyle = function () {
      let temp = 'width: 70px; height: 45px; font-size: 35px;';
      powerState ? (operators.style.cssText += 'background-color: #3bb8a8;') : 0;
      return powerState ? temp + 'background-color: #2a9d8f; color: white;' : temp + 'background-color: #60625d';
    };
    this.dotzeroStyle = function () {
      let temp = 'width: 80px; height: 50px;';
      powerState ? (dotZero.style.cssText += 'background-color: #b388eb;') : 0;
      return powerState ? temp + 'background-color: #7554a1; color: white;' : temp + 'background-color: #60625d';
    };
    this.clrBtnstyle = function () {
      let temp = 'width: 135px; height: 60px;';
      powerState ? (clrBtns.style.cssText += 'background-color: #99c1de;') : 0;
      return powerState ? temp + 'background-color: #698fc2; color: white;' : temp + 'background-color: #60625d';
    };
    this.pwrBtnstyle = function () {
      return 'color: #ffaaaa; background-color: #ff3636;';
    };
  }

  creatediv(props) {
    var newEle = document.createElement(this._elementTag);
    newEle.style.cssText = props.s;
    props.p.appendChild(newEle);
    this.newEle2 = newEle;
  }

  static calculate() {
    let op = eval(screenInputs.innerText);
    typeof op == 'undefined' ? (screenInputs.innerText = '') : (screenInputs.innerText = op);
  }
}

class CreateButton extends CreateElement {
  constructor(screenInputs, digits, operators, clrBtns, dotZero, powerSwitch) {
    super('button');
    this.buttonValues = [' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '+', '-', '*', '/', '%', 'C', '=', '<', 'I O'];
    this.buttonNames = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'point', 'plus', 'minus', 'into', 'slash', 'percentage', 'clear', 'equal', 'delete', 'power'];
    this.create(this.buttonNames, this.buttonValues, screenInputs, digits, operators, clrBtns, dotZero, powerSwitch);
  }
}

class CreateDiv extends CreateElement {
  constructor(parent) {
    super('div');
    this.creatediv(parent);
  }
}

var app = new CreateDiv({ p: root, s: 'height: 505px; width: 400px; background-color: gray; text-align: center; border-radius: 20px;' }).newEle2;
var screen = new CreateDiv({ p: app, s: 'height: 100px; background-color: #3a3a3a; margin: 10px; border-radius: 10px; position: relative;text-align: right;' }).newEle2;
var screenInputs = new CreateDiv({ p: screen, s: 'position: absolute; bottom: 0; right: 10px; color: #335c67; font-size: 55px;' }).newEle2;
var clrBtns = new CreateDiv({ p: app, s: 'height: 75px; width: 300px; background-color: #3a3a3a; margin: 0 0 10px 10px; border-radius: 10px; display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; float: left;' }).newEle2;
var powerSwitch = new CreateDiv({ p: app, s: 'width: 70px; height: 75px; background-color: #ff3636; float: right; margin: 0 10px; border-radius: 10px;  display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center;' }).newEle2;
var digits = new CreateDiv({ p: app, s: 'width: 280px; height: 210px; margin: 0 10px 10px 10px; border-radius: 10px; background-color: #3a3a3a; display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; float: left;' }).newEle2;
var operators = new CreateDiv({ p: app, s: 'width: 90px; height: 290px; background-color: #3a3a3a; border-radius: 10px; display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; float: right; margin-right: 10px;' }).newEle2;
var dotZero = new CreateDiv({ p: app, s: 'width: 280px; height: 70px; background-color: #3a3a3a; margin-left: 10px; border-radius: 10px; display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center;' }).newEle2;
var btn = new CreateButton(screenInputs, digits, operators, clrBtns, dotZero, powerSwitch);
