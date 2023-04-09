const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload.hits,
        isLoading: false,
        nbPages: action.payload.nbPages,
        page: action.payload.page
      };

    case "SEARCH_POSTS":
      console.log(action);
      return{
        ...state,
        query: action.payload
      }
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
      case "NO_DATA":
        return {
          isLoading: false,
        };
    default:
      return state;
  }
};

export default postReducer;
