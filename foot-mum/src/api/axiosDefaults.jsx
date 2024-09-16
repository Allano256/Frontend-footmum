import axios from 'axios';


axios.defaults.baseURL ='https://footmum-api.herokuapp.com/'
axios.defaults.headers.post['Content-Type']= 'multipart/form-data'

// is used to configure Axios to send cookies and other credentials with every request by default. This is often required when making requests to APIs that use sessions or require authentication through cookies.
axios.defaults.withCredentials = true

// This will enable the user to stay logged in longer,about 24hrs even on refreshing the page

export const axiosReq= axios.create();
export const axiosRes = axios.create();
