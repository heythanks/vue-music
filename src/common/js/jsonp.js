import originJsonp from 'jsonp'
//url上不带参数，将请求参数放在data中
//将jsonp的请求promise化
export default function jsonp(url, data, option) {
  //url后的参数有问号就加&没问号就加？
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
//将data对象拼接在url参数中
export function param(data) {
  let url = ''
  for (var k in data) {
    //当data中有数值返回数值，如果有个字段为undefined则替换成''空字符串
    let value = data[k] !== undefined ? data[k] : '';
    //url拼接
    // url += '&' + k + '=' + encodeURIComponent(value);
    //es6字符串拼接,用`反引号标识，encodeURIComponent该函数将字符串作为uri组件进行编码
    url += `&${k}=${encodeURIComponent(value)}`;
  }
  return url ? url.substring(1) : ''
}
