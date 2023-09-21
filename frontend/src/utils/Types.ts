export enum ConstantVar {
    EMAIL_TAB= "EMAIL_TAB",
    PHONE_TAB= "PHONE_TAB"
}




export type UserType={
    username:string,
    email:string,
    image:string,
    star?:number,
    createdAt?:string,
    updatedAt?:string,
    _id?:string,
}