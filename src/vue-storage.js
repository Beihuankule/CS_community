import VueCookies from 'vue-cookies';

export const getItem = (name) => {
    // const data = window.localStorage.getItem(name);
    const data = VueCookies.get(name);
    try {
        return JSON.parse(data);
    } catch (err) {
        return data;
    }
};

export const setItem = (name, value) => {
    if (typeof value === "object") {
        value = JSON.stringify(value);
    }
    // window.localStorage.setItem(name, value);
    VueCookies.set(name, value);
};

export const removeItem = (name) => {
    // window.localStorage.removeItem(name);
    VueCookies.remove(name);
};
