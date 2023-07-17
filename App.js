import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './src/components/Button';
import { Provider } from './src/context';
import PostScreen from './src/screens/PostScreen';
import EmployeeScreen from './src/screens/EmployeeScreen';
import CompanyScreen from './src/screens/CompanyScreen';

const App = () => {
  const [isLogByEnterprise, setIsLogByEnterprise] = useState(false);
  const [isLogEmployee, setIsLogEmployee] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const showWelcomePage = !isLogByEnterprise && !isLogEmployee && !showPost;
  const initialState = {
    isLoggedIn: false,
    user: null,
    posts: [],
    employees: [],
  };

  const handleLoginAsEnterprise = () => {
    setIsLogByEnterprise(!isLogByEnterprise);
  };

  const handleLoginAsEmployee = () => {
    setIsLogEmployee(!isLogEmployee);
  };

  const handleViewPosts = async () => {
    setShowPost(!showPost);
  };

  const handleReturn = () => {
    setIsLogByEnterprise(false);
    setIsLogEmployee(false);
    setShowPost(false);
  };

  return (
    <Provider initialState={initialState}>
      <View style={styles.container}>
        {showWelcomePage && (
          <>
            <Text style={styles.title}>Bienvenido</Text>
            <Button
              title="Inicia sesión como empresa"
              onPress={handleLoginAsEnterprise}
            />
            <Button
              title="Inicia sesión como empleado"
              onPress={handleLoginAsEmployee}
            />
            <Button
              title="Ver posts"
              onPress={handleViewPosts}
            />
          </>
        )}

        {isLogByEnterprise && (
          <CompanyScreen onReturn={handleReturn} />
          )}

        {isLogEmployee && (
          <EmployeeScreen onReturn={handleReturn} />
        )}

        {showPost && (
          <PostScreen onReturn={handleReturn} />
        )}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;