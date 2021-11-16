export class User{
    public firstName:string;
    public lastName:string;
    protected email:string;
    public readonly hometown:string;

    get fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }

    checkEmail(email:string):boolean{
        return this.email===email;
    }
}

class Admin extends User{
    constructor(firstName:string,lastName:string,email:string){
        super();
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }

    private getEmail():string{
        return this.email;
    }
}

const admin = new Admin('huo','ge','sssss');




