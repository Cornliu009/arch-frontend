export interface EmailConfirmation {
    confirmed: boolean;
    hash: string;
}

export interface UserRegisterInterface {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    countryName: string;
}

export interface UserInterface {
    _id: string;
    emailConfirmation: EmailConfirmation;
    name: string;
    firstName: string;
    lastName: string;
    roles: Array<string>;
    email: string;
    countryName: string;
    phone: string;
}

export class User implements UserInterface {
    _id: string;
    emailConfirmation: EmailConfirmation;
    name: string;
    firstName: string;
    lastName: string;
    roles: Array<string>;
    email: string;
    countryName: string;
    phone: string;

    constructor(data: UserInterface) {
        this._id = data._id;
        this.emailConfirmation = data.emailConfirmation;
        this.name = data.name;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.roles = data.roles;
        this.email = data.email;
        this.countryName = data.countryName;
        this.phone = data.phone;
    }
}

export interface ProfileState {
    user?: User;
}
