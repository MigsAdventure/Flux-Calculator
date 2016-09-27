import React, {Component} from 'react';
import NumberStore from '../stores/NumberStore'
import NumberActions from '../actions/NumberActions'
import CalcValues from './CalcValues'

export default class Layout extends Component {
  constructor() {
    super();
   }

  keyClicked(e) {
    let press = e.target.innerHTML;
    NumberActions.keyPress(press);
  }

  clearClicked() {
    NumberActions.clearPress();
  }

  totalClicked() {
    NumberActions.totalPress();
  }

  operatorClicked(e) {
    let operatorPress = e.target.innerHTML;
    NumberActions.operatorPress(operatorPress);
  }

  render() {
    return (
      <div id="image">
          <table>
            <CalcValues/>
            <tbody>
              <tr>
                <td onClick={this.clearClicked} className= "btn btn-primary key" type="button">AC</td>
                <td onClick={this.operatorClicked} className= "btn btn-primary key" type="button">+/-</td>
                <td onClick={this.operatorClicked} className= "btn btn-primary key" type="button">%</td>
                <td onClick={this.operatorClicked} className= "btn btn-primary key" type="button">/</td>
              </tr>
              <tr>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">7</td>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">8</td>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">9</td>
                <td onClick={this.operatorClicked} className= "btn btn-primary key" type="button">*</td>
              </tr>
              <tr>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">4</td>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">5</td>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">6</td>
                <td onClick={this.operatorClicked} className= "btn btn-primary key" type="button">-</td>
              </tr>
              <tr>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">1</td>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">2</td>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">3</td>
                <td onClick={this.operatorClicked} className= "btn btn-primary key" type="button">+</td>
              </tr>
                <tr>
                <td onClick={this.keyClicked} className= "btn btn-primary key" type="button">0</td>
                <td                           className= "btn btn-primary key" type="button">=D</td>
                <td onClick={this.operatorClicked} className= "btn btn-primary key" type="button">.</td>
                <td onClick={this.totalClicked} className= "btn btn-primary key" type="button">=</td>
              </tr>
            </tbody>
          </table>
      </div>
      )
  } //end of render
}//end of Layout class