export interface User {
    firstName:string , 
    lastName:string , 
    email :string , 
    phone:number ,
     dob:Date , 
     password:string , 
     confirmPassword:string ,
     address:Address
}

export interface Address{
    country:string , state:string , city:string 
}