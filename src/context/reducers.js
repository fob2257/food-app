import constants from './constants';

export const initialState = {
  userPosition: null,
};

export default function reducer(state, { type, payload }) {
  switch (type) {
    case constants.SET_USER_POSITION: {
      return {
        ...state,
        userPosition: payload,
      };
    }

    default: { return state; }
  }
};
