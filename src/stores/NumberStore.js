import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';

let _currentKey = '';

class NumberStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register( action => {
      let {type,payload} = action;

      switch(type) {
        case 'KEY_PRESSED':
              _currentKey += payload.keyPressed;
              this.emit('CHANGE')
              break;
        case 'KEY_CLEAR': 
              _currentKey = ''
              this.emit('CHANGE');
               break;
        case 'TOTAL_PRESS' : 
              _currentKey = eval(_currentKey);
              this.emit('CHANGE');
              break;
        case 'OPERATOR_PRESS':
              let lastChar = _currentKey.charAt(_currentKey.length-1);
              _currentKey += payload.operatorPressed;
              _currentKey = isNaN(lastChar) ? _currentKey.slice(0,1) : _currentKey;
              this.emit('CHANGE')
              break;      
      }//end of switch
    }) //end of AppDispatcher
  } //end of constructor

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getVal() {
    return _currentKey;
  }
} //end of class

export default new NumberStore();

              //_currentKey = _currentKey.charAt(_currentKey.length) === NaN  && 
              // _currentKey.charAt(_currentKey.length - 1) === NaN ? 
              // _currentKey.slice(0,-1) : _currentKey;
