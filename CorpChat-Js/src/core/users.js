export class Users{
    constructor(users){
            localStorage.setItem('usersObject', JSON.stringify(users))
    }
}