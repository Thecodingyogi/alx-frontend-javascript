import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body: photo } = photoResponse;
      const { firstName, lastName } = userResponse;
      console.log(`${photo} ${firstName} ${lastName}`);
    })
    .catch((error) => console.log('Signup system offline', error));
}
