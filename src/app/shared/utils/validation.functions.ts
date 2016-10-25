export function idIsValid(id: string): boolean {
    return id !== null;
}

export function validateName(name: string): boolean {
    return name !== null && name.length > 2;
}

export function validateEmail(email: string | null): boolean {
    if (!email) {
        return false;
    }
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function validatePassword(password: string | null) {
    return !(!password || password.length < 8);
}
