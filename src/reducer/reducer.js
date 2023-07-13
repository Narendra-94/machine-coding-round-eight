export const initialState = {
  meetupData: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULL_DATA": {
      return { ...state, meetupData: action.payload };
    }
    default:
      return state;
  }
};
