import React, { useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { LoginRequest, RegisterRequest } from './interface/Auth';
import { GetFrdListReq } from './interface/Friend';

 export interface API {
  '/slimarveous/login': LoginRequest,
  '/slimarveous/register': RegisterRequest,
  '/slimarveous/get_friend_list': GetFrdListReq,
}

const url: string = "http://localhost:19999";

// 定义接口用于处理请求返回结果
interface ApiResponse<T extends keyof API> {
  success: boolean;
  data?: any;
  error?: string;
}

// 定义一个函数用于发送请求并返回处理后的数据
async function sendRequest<T extends keyof API>(
  route: T,
  obj: API[T]
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse = await axios.post(url + route, obj);
    
    // 在这里根据实际接口返回的数据结构进行处理
    const responseData: ApiResponse<T> = {
      success: true,
      data: response.data
    };

    return responseData;
  } catch (error) {
    // 处理请求错误
    const errorResponse: ApiResponse<T> = {
      success: false,
      error: "An error occurred while processing your request."
    };

    return errorResponse;
  }
}
export default sendRequest;