import { createContext, useContext, useEffect, useReducer } from "react";
import postReducer from "./postReducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  posts: [],
  query: "HTML",
  nbPages: 0,
  page: 0,
};

export const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  console.log(state);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "GET_POSTS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchQuery = (userData) => {
    return dispatch({
      type: "SEARCH_POSTS",
      payload: userData,
    });
  };

  useEffect(() => {
    fetchData(`${API}query=${state.query}?page=${state.page}`);
  }, [state.query]);

  return (
    <PostsContext.Provider value={{ ...state, searchQuery  }}>
      {children}
    </PostsContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PostsContext);
};

export default PostsContextProvider;
