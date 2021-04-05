export interface UserRegisterInterface {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: Array<string>;
}

export interface UserInterface {
    _id: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: Array<string>;
}

export class User implements UserInterface {
    _id: string;
    name: string;
    firstName: string;
    lastName: string;
    roles: Array<string>;
    email: string;

    constructor(data: UserInterface) {
        this._id = data._id;
        this.name = data.name;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.roles = data.roles;
        this.email = data.email;
    }

    get isTeacher(): boolean {
        return this.roles.includes('teacher');
    }
}

export interface ProfileState {
    user?: User;
}
