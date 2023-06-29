import { LocalStorage } from 'shared';

import { authAxiosInstance } from './authAxiosInstance';

const apiPath = `/users/refresh-password/`;

interface ChangePasswordType {
  email?: string;
  password?: string;
  newPassword?: string;
}
interface ChangePasswordResponseType {
  message: string;
}

export async function changePassword(querryParams: ChangePasswordType): Promise<ChangePasswordResponseType> {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken && authAxiosInstance.post(apiPath, querryParams).then(({ data }) => data);
}
