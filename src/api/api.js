import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": ""
    }
})

export const usersApi = {
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    getSubscription(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },

    deleteSubscription(id) {

        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },

    getUserProfile(userId) {

        console.log("Obsolete API. Use profileAPI.getUserProfile instead");
        return profileAPI.getUserProfile(userId);
    }

}

export const profileAPI = {
    getUserProfile(userId) {

        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then(response => {
            return response.data
        })
    },

    updateUserStatus(status) {
        return instance.put(`/profile/status`, {status: status}).then(response => {
            return response.data
        })
    },

    savePhoto(file) {
        let formData = new FormData();
        formData.append("image", file);
        const config = {
            headers: {'content-type': 'multipart/form-data'}
        }
        return instance.put(`/profile/photo`, formData, config).then(response => {
            return response;
        })
    },

    setProfData(values) {
        return instance.put(`/profile`, values).then(response => {
            return response
        })
    }

}


export const authAPI = {
    getLoginData() {

        return instance.get("auth/me").then(response => {

            return response
        });
    }

}

export const captchaAPI = {
    getCaptchaUrl() {

        return instance.get("/security/get-captcha-url").then(response => {

            return response
        });
    }

}


export const loginAPI = {
    signInData(data) {
        return instance.post(`auth/login`, {
            email: data.login,
            password: data.password,
            rememberMe: data.remember_me[0],
            captcha: data.captcha
        }).then(response => {
            return response
        })
    },

    signOutData() {
        return instance.delete(`auth/login`).then(response => {
            return response
        });
    }
}
