const data = [
  {
    task: "clean the room",
    hasItBeenDone: false
  },
  {
    task: "finish this app",
    hasItBeenDone: true
  }
]
export default function TodoReducer  (state = data, action)  {
  switch (action.type) {
    case 'add': {
      const tempState = [...state];
      const index = state.findIndex(({task}) => task === action.payload.task)
      if (index > -1) {
        return state;
      }
      return [...state, action.payload];
    }
    case'update': {
      const index =action.payload.index;
      const tempState = [...state];
      tempState[index] = {...tempState[index], ...action.payload.todo};
      return tempState;
    }
    case'remove':{

      const index =action.payload.index;
      const tempState = [...state];
      tempState.splice(index, 1);

      return tempState;

    }
    default:
      return ([...state]);

  }

}