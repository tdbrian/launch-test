export default class Validation {

    static idIsValid(id: string): boolean {
        return id !== null;
    }

    static validateName(name: string): boolean {
        return name !== null && name.length > 2;
    }

    static validateEmail(email: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
}