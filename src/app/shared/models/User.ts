import Validation from './../utils/validation';
import GUID from './../utils/guid';

export default class User {
    id: string;
    accountId: string | null;
    firstName: string;
    lastName: string;
    email: string | null;
    isAdmin = false;

    constructor(firstName, lastName, email = null, isAdmin = false, accountId = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
        this.accountId = accountId;
        this.id = GUID.generate();
    }

    addId(): string {
        this.id = GUID.generate();
        return this.id;
    }

    hasId(): boolean {
        return Validation.idIsValid(this.id);
    }

    validate(): boolean {
        return Validation.idIsValid(this.id) &&
            Validation.validateEmail(this.email) &&
            Validation.validateName(this.firstName) &&
            Validation.validateName(this.lastName);
    }
}
