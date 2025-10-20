// anotherReducer.js
const initialState = {
    text: '',
  };
  
  export default function anotherReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_TEXT':
        return { ...state, text: action.payload };
      default:
        return state;
    }
  }
  