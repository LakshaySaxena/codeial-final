export function getFormBody(params) {
    let formBody = [];
  
    for (let property in params) {
      let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
      let encodedValue = encodeURIComponent(params[property]); // lakshay 123 => lakshay%2020123
  
      formBody.push(encodedKey + '=' + encodedValue);
    }
  
    return formBody.join('&'); // 'username=lakshay&password=123213'
  }
  
  export function getAuthTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }