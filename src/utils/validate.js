export const validate = ({ type = '', value = '' }) => {
    switch (type) {
        case 'email': {
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(value);
        }
        case 'password': {
            return value.length > 6;
        }
        default: { }
    }
}