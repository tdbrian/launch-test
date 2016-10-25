import * as Validation from '../../utils/validation.functions';

export default class User {
    _id: string | null;
    accountId: string | null;
    firstName: string;
    lastName: string;
    email: string | null;
    password: string | null;
    isAdmin = false;

    constructor(firstName, lastName, email?, password?, isAdmin = false, accountId?) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
        this.accountId = accountId;
        this.password = password;
    }

    hasId(): boolean {
        return this._id !== null;
    }

    clensePassword(): void {
        this.password = null;
    }

    hasPassword(): boolean {
        return Validation.validatePassword(this.password);
    }

    isValid(validatePassword: boolean): boolean {
        if (validatePassword && !this.hasPassword()) return false;
        return Validation.validateEmail(this.email) &&
            Validation.validateName(this.firstName) &&
            Validation.validateName(this.lastName);
    }
}
