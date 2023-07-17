import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PostList = ({ posts }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts:</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postBody: {
    color: '#555',
  },
});

export default PostList;
