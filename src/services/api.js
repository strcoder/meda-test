const API_URL = 'https://jsonplaceholder.typicode.com';

// Función para obtener los posts desde la API
export const getPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Otras funciones relacionadas con la API...

export default {
  getPosts,
  // Otras funciones relacionadas con la API...
};
