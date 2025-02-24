import { axiosInstance } from "../../shared/lib/axiosinstance"

export default class QwestApi {
  static async getQwests() {
    const response = await axiosInstance.get('/qwest')
  return response.data.data
  }
}