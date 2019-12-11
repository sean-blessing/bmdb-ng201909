export class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    isReviewer: boolean;

    constructor(username: string = "",
        password: string = "",
        firstName: string = "",
        lastName: string = "",
        admin: boolean = false,
        reviewer: boolean = true) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAdmin = admin;
        this.isReviewer = reviewer;
    }
}
