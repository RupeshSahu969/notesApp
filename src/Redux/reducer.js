import * as types from "./actiontype";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
      case types.GOOGLE_SIGN_IN_START:
        return {
          ...state,
          loading: true,
        };
      case types.GOOGLE_SIGN_IN_SUCCESS:
        return {
          ...state,
          loading: false,
          currentUser: action.payload,
        };
      case types.GOOGLE_SIGN_IN_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default useReducer;
