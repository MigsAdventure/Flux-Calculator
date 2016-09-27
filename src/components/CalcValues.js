import React, {Component} from 'react';
import NumberActions from '../actions/NumberActions';
import NumberStore from '../stores/NumberStore';

export default class CalcValues extends Component {
  constructor() {
    super();
    this.state = {
      currEval: NumberStore.getVal()
    }

    this._onChange = this._onChange.bind(this);
  } //end of constructor

  componentDidMount() {
    NumberStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    NumberStore.stopListening(this._onChange);

  }

  _onChange() {
    this.setState({
      currEval: NumberStore.getVal()
    })
  }


  render() {
    let {currEval} = this.state;
    return (
    <thead>
      <tr>
        <th>
          <input type='text' id="calcValues" value={currEval}/>
        </th>
      </tr>
    </thead>
    )
  } //end of render
} //end of class