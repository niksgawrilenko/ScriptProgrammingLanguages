const axios = require('axios');

const getUser = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3001/user');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getUser();
