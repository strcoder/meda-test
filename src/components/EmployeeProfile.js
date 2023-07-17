import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeProfile = ({ employee }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del empleado</Text>
      <Text>Nombre: {employee.name}</Text>
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
});

export default EmployeeProfile;
