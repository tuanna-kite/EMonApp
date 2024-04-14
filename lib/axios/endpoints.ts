import http from './http';
import {
  DataResponse,
  ProductModel,
  SigninModel,
  UserModel,
  UserRegisterOrUpdateModel,
} from './model';

class ApiService {
  signup(data: UserRegisterOrUpdateModel) {
    return http.post<UserModel>('/v1/signup', data);
  }

  signin(data: SigninModel) {
    return http.post<DataResponse<{ token: string; user: UserModel }>>(
      '/api/Auth/login',
      data
    );
  }

  updateUser(data: UserRegisterOrUpdateModel) {
    return http.post<UserModel>('/v1/user/update', data);
  }

  getUsers() {
    return http.get<DataResponse<UserModel[]>>('/api/User');
  }

  deleteUser(id?: number) {
    return http.delete<DataResponse<UserModel>>(`/api/User/${id}`);
  }

  postUser(data: UserModel) {
    return http.post<DataResponse<UserModel>>('/api/User', data);
  }

  patchUser(data: UserModel) {
    return http.patch<DataResponse<UserModel>>(
      `/api/User/${data.userId}`,
      data
    );
  }

  getUserById(id?: number) {
    return http.get<DataResponse<UserModel[]>>(`/api/User/${id}`);
  }

  postImage(formData: FormData) {
    console.log('data', formData);
    return http.post<DataResponse<string>>('/api/Image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: (data, headers) => {
        return formData; // this is doing the trick
      },
    });
  }

  getProduct() {
    return http.get<DataResponse<ProductModel[]>>(`/api/Product`);
  }
}

export default new ApiService();
