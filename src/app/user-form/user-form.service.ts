import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    getUsers(): any[]{
        return [
        {
            "id": 1,
            "name": "John Doe",
            "email": 'jd@email.com',
            "age": 24
        },
        {
            "id": 2,
            "name": "Vick Duck",
            "email": "vd@email.com",
            "age": 29
        }
        ]
    }
}