import axios from 'axios';
import { createContext, useReducer, useState } from 'react';
import { postReducer } from '../reducers/postReducer';
import { apiUrl, POSTS_LOADED_FAIL, POSTS_LOADED_SUCCESS } from './constants';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  // State
  const [postState, dispatch] = useReducer(postReducer, {
    posts: [],
    postsLoading: true,
  });

  // state of modal
  const [showAddPostModal, setShowAddPostModal] = useState(false);

  // Get all posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      if (response.data.success) {
        dispatch({
          type: POSTS_LOADED_SUCCESS,
          payload: response.data.posts,
        });
      }
    } catch (error) {
      dispatch({ type: POSTS_LOADED_FAIL });
    }
  };

  // Post context data
  const postContextData = {
    getPosts,
    postState,
    showAddPostModal,
    setShowAddPostModal,
  };

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
