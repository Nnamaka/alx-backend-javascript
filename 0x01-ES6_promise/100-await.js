import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const upload = await uploadPhoto();
    const userr = await createUser();

    return ({ photo: upload, user: userr });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
