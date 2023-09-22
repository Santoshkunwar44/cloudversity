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
export type Coursetype={

    title:string,
    noOfDays:number,
    duration:number,
    startTime:number,
    price?:number,
    course:string,
    feeType:"Free"|"Paid",
    tutor:UserType|string,
    _id?:string,
    createdAt?:string,
    description:string,

}