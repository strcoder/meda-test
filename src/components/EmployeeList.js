import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const EmployeeList = ({ employees }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de empleados:</Text>
      <FlatList
        data={employees}
        renderItem={({ item }) => (
          <View style={styles.employeeItem}>
            <Text>{`Nombre: ${item.name}`}</Text>
            <Text>{`usuario: ${item.username}`}</Text>
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
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  employeeItem: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default EmployeeList;
