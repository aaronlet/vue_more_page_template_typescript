import {Request} from "common";

const request = new Request({});
request.interceptors({
  request: (config:any) => {
    //  添加token
    config.headers.token = window.token;
    //  返回数据
    return config;
  },
  response: (config:any) => {
    //  消息，结果，状态码
    let { message, result, statusCode } = config.data;
    //  成功
    if (statusCode === 1000) {
      //  更新全局token;
      let { pragma } = config.headers;
      pragma && localStorage.setItem("token", pragma);
      //  返回结果
      return Promise.resolve(result || config.data);
    } else {
      //  其他返回错误结果
      return Promise.reject({ message, statusCode });
    }
  },
  error: (error:Error) => {
    //  抛出错误
    return Promise.reject(error);
  }
})

export default request;
