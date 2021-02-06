import {request} from './index';
import {baseUrl} from '../configs';
export const userSignUp = async ({name, email, password}) => {
  const url = `${baseUrl}/api/user/register`;
  const body = {
    method: 'POST',
    data: {
      name,
      email,
      password,
    },
  };
  return await request(url, body);
};

export const userLogin = async ({password, email}) => {
  const url = `${baseUrl}/api/user/register`;
  const body = {
    method: 'POST',
    data: {
      email,
      password,
    },
  };
  return await request(url, body);
};
