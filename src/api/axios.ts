import axios , { AxiosInstance, AxiosStatic, AxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise} from 'axios'
import { getToken } from '@U/index.ts'
import { Option } from 'ant-design-vue/lib/vc-select'
interface Option {
  url: string,
  data: unknown,
  method: string,
  baseURL: string,
  headers: unknown
}
type Options = Partial<Option> & AxiosRequestConfig

interface APIInteface {
  baseURL?: string,
  queue?: Object,
  HeadConfig<Option>(),
  Destroy(url: string): void,
  RefreshToken(option: any): void,
  LoginOut(): void,
  Interceptors(axiosApi: AxiosInstance, options: Options): void,
  ResError(error: AxiosError): void,
  Api(options: Options): AxiosPromise<any>
}

// 1 创建Api class实例

class API implements APIInteface {
  // 基础的ip地址，一般代理使用
  public baseURL?: string
  // 收集当前请求中的api---url地址
  public queue?: object
  constructor(baseURL: string) {
    this.baseURL = baseURL
    this.queue = {}
  }

  // 配置请求头
  HeadConfig <Option>()  {
    let headConfig = {
      baseURL: this.baseURL,
      headers: {
        'x-access-token': getToken(),
      }
    }
    return headConfig
  }

  // 销毁请求生命周期
  Destroy (url: string) {
    delete this.queue[url]
  }

  // 无缝换取新token
  RefreshToken (option: any) {
    /**
     * A. 解题思路
     * 1. 获取换取token的参数
     * 2. 发送axios请求
     * 3. 继续执行未完成的请求
     * 
     */
    let token = getToken()
  }

  // 退出登录函数
  LoginOut () {
    /**
     * 1. 封装成退出登录util工具函数
     * 2. 两种情况 1. 需要请求退出登录api 2. 直接清空本地信息
     * 3. 跳转指定路径 如： login页，或者回跳主站指定域名
     */
  }

  // 请求处理如：请求拦截响应拦截

  Interceptors (axiosApi: AxiosInstance, options: any) {
    // 请求拦截
    axiosApi.interceptors.request.use((config: AxiosRequestConfig) => {
      // 添加全局的loading...
      console.log(config)
      return config
    }, error => {
      // 请求拦截出错抛出错误栈
      // 是否添加全局错误栈吐司 （吐司最好做一下等级区分）

      return Promise.reject(error)
    })

    // 响应拦截
    axiosApi.interceptors.response.use((res: AxiosResponse<any>) => {
      debugger
      return Promise.resolve(res)
    }, (error: AxiosError) => {
      this.ResError(error)
    })
  }
  
  // 响应错误处理函数
  ResError (error: AxiosError) {

    let ErrorInfo: any = error.response
    // 判断请求异常信息中是否含有超时timeout字符串 处理请求超时 
    if (error && error.message && error.message.includes('timeout')) {
      // (window as any).$message.error('网络请求超时')
    }
    // 判断错误码返回逻辑
    switch(ErrorInfo) {
      case 401:
        // (window as any).$message.error('网络请求无权限')
        break
      case 404:
        // (window as any).$message.error('网络接口找不到')
        break
      default :
        // (window as any).$message.error('网络接口找不到')
    }
  }

  // 创建请求抛出方法request
  Api (options: Options) {
    const axiosApi: AxiosInstance = axios.create()
    options = Object.assign(this.HeadConfig(), options, { timeout: 60000 })
    this.Interceptors(axiosApi, options )
    return axiosApi(options)
  }

}


export {
  APIInteface
}
export default API

