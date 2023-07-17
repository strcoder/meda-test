// Función de validación para verificar si un campo está vacío
export const validateFieldNotEmpty = (value) => {
  return value.trim() !== '';
};

// Función de validación para verificar si un campo cumple con un formato de correo electrónico válido
export const validateEmailFormat = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Otras funciones de validación...

export default {
  validateFieldNotEmpty,
  validateEmailFormat,
  // Otras funciones de validación...
};
