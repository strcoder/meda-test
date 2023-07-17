import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, variant }) => {
  const style = variant === 'outline' ? styles.buttonOutline : styles.button;
  const styleText = variant === 'outline' ? styles.buttonTextOutline : styles.buttonText;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
  },
  buttonOutline: {
    background: 'none',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonTextOutline: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Button;
