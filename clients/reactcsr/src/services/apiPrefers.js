//import env from '../../env';
const env = { API_URL:'http://xxx/' }

export const DEV_URL = env.API_URL;

export function getTokenInfo() {
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}`}; // for Spring Boot
    // return { 'x-access-token': user.accessToken }; // for Node.js Express 
  } 
  else return {};
} 