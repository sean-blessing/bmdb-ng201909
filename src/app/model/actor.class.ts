export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    gender: string;

    constructor(id: number = 0, firstName: string = "",
        lastName: string = "", birthDate: Date = new Date(), gender: string = "") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
    }
}
