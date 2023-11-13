// userService.js
const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/usuarios/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };
  
  export { fetchUserData };
  