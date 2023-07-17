import { useState } from "react";
import Button from "../components/Button";
import EmployeeList from "../components/EmployeeList";
import { useStateValue } from "../context";
import CompanyLoginScreen from "./CompanyLoginScreen";
import { View, StyleSheet } from 'react-native';
import EmployeeForm from "../components/EmployeeFomr";

const CompanyScreen = ({ onReturn }) => {
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const { user, isLoggedIn, employees, dispatch } = useStateValue();

  const handleLogin = ({ username }) => {
    dispatch({
      type: 'LOGIN',
      user: {
        type: 'company',
        username: username,
      }
    });
  };

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT_REQUEST',
    });
    onReturn();
  };

  const handleSaveEmployee = (employee) => {
    dispatch({
      type: 'ADD_EMPLOYEE',
      employee,
    });
    setShowEmployeeForm(false);
  };

  const handleShowEmployeeForm = () => {;
    setShowEmployeeForm(!showEmployeeForm);
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn && <CompanyLoginScreen onLogin={handleLogin} onReturn={onReturn} />}

      {isLoggedIn && user.type === 'company' && !showEmployeeForm && (
        <>
          <EmployeeList employees={employees} />
          <Button title='Agregar empleado' onPress={handleShowEmployeeForm} />
        </>
      )}

      {isLoggedIn && user.type === 'company' && showEmployeeForm && (
        <>
          <EmployeeForm onSubmit={handleSaveEmployee} />
          <Button title='Cancelar' onPress={handleShowEmployeeForm} />
        </>
      )}

      {isLoggedIn && (
        <Button title='Cerrar sesión' onPress={handleLogout} variant='outline' />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
  },
});

export default CompanyScreen;