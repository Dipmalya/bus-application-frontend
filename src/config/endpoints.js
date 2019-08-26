const baseUrlDev = 'http://localhost:8080';
const baseUrlProd = '';
const baseUrl = process.env.NODE_ENV === 'development' ? baseUrlDev : baseUrlProd;

export const endpoints = {
    AllUsers: `${baseUrl}/user/`
}