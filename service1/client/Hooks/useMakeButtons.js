import { useReducer } from 'react';

export const useMakeOptionButtons = (options = []) => {
  const selectorReducer = (state, action) => {
    let [option, status] = action;
    status = status[option] === 'selected' ? 'unselected' : 'selected';
    if (status === 'unselected') {
      return {
        ...initialState,
        [option]: status,
        selected: false
      }
    } else {
      return {
        ...initialState,
        [option]: status,
        selected: true
      }
    }
  }

  const select = (action) => {
    dispatch(action);
  }

  const initialState = options.reduce((acc, curr) => {
    acc[curr] = 'unselected';
    return acc;
  }, {selected: false});

  const [state, dispatch] = useReducer(selectorReducer, initialState);

  return [select, state];
};