/*
 * @Author: luobei luobei@seewintech.com
 * @Date: 2023-07-12 14:10:33
 * @LastEditors: luobei luobei@seewintech.com
 * @LastEditTime: 2023-07-12 16:15:23
 * @FilePath: \vue2sass\src\apis\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000'
})
export function getFileBlob(type) {
  return request({ 
    url: '/getDemo?type='+ type, 
    method: 'get',
    responseType: "blob",
  })
}
