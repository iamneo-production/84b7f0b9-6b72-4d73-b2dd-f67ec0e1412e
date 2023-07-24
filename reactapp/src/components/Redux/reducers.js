// reducers.js
import { SET_ROLE } from "../Redux/action";

const initialState = {
  role: "",
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default roleReducer;
