import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import PostList from '../components/PostList';
import api from '../services/api';
import { useStateValue } from '../context';

const PostScreen = ({ onReturn }) => {
  const { posts, dispatch } = useStateValue();
  const [postsList, setPostsList] = useState(posts);

  const handleGetPosts = async () => {
    try {
      const postsData = await api.getPosts();
      setPostsList(postsData);
      dispatch({ type: 'SET_POSTS', posts: postsData });
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts([]);
    }
  };

  useEffect(() => {
    if (!posts || posts.length === 0) {
      handleGetPosts();
    }
  }, []);

  return (
    <View style={styles.container}>

      <PostList posts={postsList} />

      <Button title="Página principal" onPress={onReturn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default PostScreen;
