import Button from "../components/Button";
import EmployeeList from "../components/EmployeeList";
import { useStateValue } from "../context";
import { View, StyleSheet } from 'react-native';
import EmployeeLoginScreen from "./EmployeeLoginScreen";
import EmployeeProfile from "../components/EmployeeProfile";

const CompanyScreen = ({ onReturn }) => {
  const { user, isLoggedIn, dispatch, employees } = useStateValue();
  const employee = employees?.find((employee) => employee?.username === user?.username);

  const handleLogin = ({ username }) => {
    dispatch({
      type: 'LOGIN',
      user: {
        type: 'employee',
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

  return (
    <View style={styles.container}>
      {!isLoggedIn && <EmployeeLoginScreen onLogin={handleLogin} onReturn={onReturn} />}

      {isLoggedIn && user?.type === 'employee' && (
        <EmployeeProfile employee={employee} />
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