import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
// Create axios instance for api calls
var instance = null;
// localStorage.setItem('jwt', "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqaW5hbGl3QGdtYWlsLmNvbSIsInJvbGUiOnsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0sImV4cCI6MTU3MTY3MjIxOCwidXNlcklkIjoiMiIsImlhdCI6MTU3MTQ3MjIxOCwiZW1haWwiOiJqaW5hbGl3QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiamluYWxpd0BnbWFpbC5jb20ifQ.QkSrtv3GE3gfQHtFvqtytm612rs5ZgZE32FRgRS3jcg8Y6J0slu1Qail79aklFV2VR0lSDpWQWW0sfAAHJnIiQ");

// localStorage.setItem('jwt', "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqaW5hbGl3QGdtYWlsLmNvbSIsInJvbGUiOnsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0sImV4cCI6MTU3MTY3NjMzNSwidXNlcklkIjoiMiIsImlhdCI6MTU3MTQ3NjMzNSwiZW1haWwiOiJqaW5hbGl3QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiamluYWxpd0BnbWFpbC5jb20ifQ.uB1izvidzLftU-hvF9tOTPfl3bxroFu9hNu88rxm3beWU4a1dgPEHrpoYpt-QA_QFWq3QlB-9kQ6GQTLFAri6w");

export const setAuth = () => {
  if (localStorage.jwt) {
    instance = axios.create({
      baseURL: "",
      timeout: 30000,
      headers: {
        Authorization: "Bearer " + localStorage.jwt,
        "Content-Type": "application/json"
      }
    });
  } else {
    instance = axios.create({
      baseURL: "",
      timeout: 30000,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.data.path === "/v1/login") {
        return Promise.reject(error);
      } else if ( error.response.status !== undefined && error.response.status === 401 ) {
        localStorage.clear();
        window.location = "/login";
      } else {
        return Promise.reject(error);
      }
    }
  );
};

export default {
  Get: (route, data) => {
    // instance || setAuth();
    instance;
    return instance.get(route, data === {} ? null : JSON.stringify(data));
  },
  Post: (route, data) => {
    instance;
    return instance.post(route, JSON.stringify(data));
  },
  Put: (route, data) => {
    instance;
    return instance.put(route, JSON.stringify(data));
  }
};
