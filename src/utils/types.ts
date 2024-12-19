export interface FormData {
    fname: string,
    lname: string,
    empid: string,
    email: string,
    dept: string
    phone: string,
    role: string,
    joind: string,
};

export enum FormDataEnum {
    fname = 0,
    lname,
    empid,
    email,
    dept,
    phone,
    role,
    joind
};

export type ChkQry = {
    empid: string,
    email: string
}

export type FinalMessage = {
    message: string,
    flag: number
}
