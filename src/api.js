import axios from "axios";


export const baseURL = 'https://api.smartshark.ru';

const registerRequest = (login, password) => axios({
    method: 'post',
    url: `${baseURL}/auth/registration`,
    data: {
        email: login,
        password: password,
    }
});
const loginRequest = (login, password) => axios({
    method: 'post',
    url: `${baseURL}/auth/login`,
    data: {
        email: login,
        password: password,
    }
});

const historyRequest = (token) => axios({
    method: 'get',
    url: `${baseURL}/generate/history`,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

const myInfoRequest = (token) => axios({
    method: 'get',
    url: `${baseURL}/users/myInfo`,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

const getByIdRequest = (token, id) => axios({
    method: 'get',
    responseType: 'arraybuffer',
    url: `${baseURL}/generate/getById?id=${id}`,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

const createGeneration = (token, theme, workType, paragraphs) => axios({
    method: 'post',
    url: `${baseURL}/generate/createGeneration`,
    headers: {
        'Authorization': `Bearer ${token}`
    },
    data: {
        theme: theme,
        workType: workType,
        paragraphs: paragraphs,
    }
});


export {registerRequest, loginRequest, historyRequest, myInfoRequest, createGeneration, getByIdRequest};