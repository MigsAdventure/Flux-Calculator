import AppDispatcher from '../AppDispatcher'

const NumberActions = {
  keyPress(keyPressed) {
    AppDispatcher.dispatch({
      type: 'KEY_PRESSED',
      payload: {keyPressed}
    }) 
  },

  clearPress() {
    AppDispatcher.dispatch({
      type: 'KEY_CLEAR'
    })
  },

  totalPress() {
    AppDispatcher.dispatch({
      type: 'TOTAL_PRESS'
    })
  },

  operatorPress(operatorPressed) {
    AppDispatcher.dispatch({
       type: 'OPERATOR_PRESS',
       payload: {operatorPressed}
    }) 
   
  }

}

export default NumberActions;