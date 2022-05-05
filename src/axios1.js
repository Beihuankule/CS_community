import axios from "axios";
axios.defaults.withCredentials = true
import qs from 'qs';//处理参数
import router from "./router";
import {
    getItem,
    removeItem,
    setItem
} from './vue-storage.js';
import {
    Notification
} from 'element-ui';
const baseURL = "https://sx.water-mind.com/cs_s";



//const baseURL = "http://192.168.199.223:8081/cs_s";
const request = axios.create({
    baseURL: baseURL,
});

// 请求拦截器
request.interceptors.request.use(
    function(config) {
        config.headers['content-type'] = 'application/x-www-form-urlencoded';
        if(config.url != '/login/loginAP'){
            config.headers['csToken'] = getItem('csToken');
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);


request.interceptors.response.use(
    // 在2xx范围内的任何状态代码都会触发此函数，这里主要用于处理响应数据
    (response) => {
        return response;
    },
    // 任何超出2xx范围的状态码都会触发此函数，这里主要用于处理响应错误
    (error) => {
        if(error == 'Error: Network Error'){
            Notification({
                title: '错误',
                message: "错误",
                type: 'error'
            });
            return Promise.reject( {success:false,msg:"网络异常"});
        } else {
            if(error.response == undefined){
                setTimeout(function() {
                    router.replace('/login')
                }, 500);
                return;
            }
            const {
                status,
                data,
            } = error.response;
            if (status == 500) {
                if (data.success == false) {
                    if (data.obj.code == 'error0002') {
                        removeItem("csToken");
                        Notification({
                            title: '错误',
                            message: data.obj.message,
                            type: 'error'
                        });
                        console.log("错误输出！");
                        setTimeout(function() {
                            router.replace('/login')
                        }, 500);
                    } else if (data.obj.code == 'error9999') {
                        return Promise.reject(data);

                    }
                }
            }
            // 将未处理的异常往外抛
            return Promise.reject(error);
        }

    }
);

const post = function(url, data) {
    return request({
        method: "post",
        url: url,
        data: qs.stringify(data)
    });
}
const get = function(url, data) {
    return request({
        method: "get",
        url: url,
        data: qs.stringify(data)
    });
}

const updateFile = function(url, params) {
    return axios.post(baseURL + url, params, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'csToken': getItem('csToken')
        }
    });
}

export default {
    post,
    get,
    updateFile,
    getItem,
    removeItem,
    setItem,
    baseURL
};