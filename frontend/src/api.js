const API_URL = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://class-5-project.appspot.com/api';
    default:
      return 'http://localhost:8080/api';
  }
};

export default API_URL
