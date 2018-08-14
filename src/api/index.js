import axios from 'axios';

// export const fetchProducts =  () => {
//   return axios.get('http://localhost:3001/get-items')
//     .then(response => {
//       console.log("products api", response.data);
//       return response.data;
//   })
//   .catch(err => {
//   console.log(err);
// });
// };

export const instance = axios.create({
  basuURL: 'http://localhost:3001'
});