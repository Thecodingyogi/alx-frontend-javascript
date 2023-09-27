export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const gotAPI = true;
    if (gotAPI) {
      resolve('API data response');
    } else {
      reject(new Error('API request failed.'));
    }
  });
}
