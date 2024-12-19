import { z } from "zod"
import axios from "axios"
import { FormData, FormDataEnum, FinalMessage } from "./types"
import React, { Dispatch, SetStateAction } from "react"

const formSchema = z.object({
    fname: z.string()
        .nonempty({message: "First Name cannot be empty"}),
    lname: z.string()
        .nullable()
        .optional(),
    empid: z.string()
        .nonempty({message: "Employee ID cannot be empty"})
        .length(10,{message: "ID must have 10 characters"}),
    email: z.string()
        .nonempty({message: "E-Mail cannot be empty"})
        .email({message: "Invalid Email"}),
    dept: z.string(),
    phone: z.string()
        .nonempty({message: "Phone number cannot be empty"})
        .length(10,{message: "Invalid phone number"}),
    role: z.string().nullable(),
    joind: z.string().date()
})

export default async function formHandler (e: React.SyntheticEvent, formData: FormData, setter: Dispatch<SetStateAction<string[]>>, final: Dispatch<SetStateAction<FinalMessage>>) {
    e.preventDefault();
        const res:z.SafeParseReturnType<z.input<typeof formSchema>,z.output<typeof formSchema>> = formSchema.safeParse(formData);
        if (res["success"]){
            try{
                const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL||"http://localhost:6969"}/register`, {
                    ...formData, joind: formData["joind"]
                })
                console.log(response.data);
                final({message: response.data.message, flag: response.data.flag})
            } catch (error){
                alert(error)
            }
            setter(() => new Array(8).fill(""))
        } else {
            const ex:string = res.error.issues[0].path[0].toString();
            const ix:number = FormDataEnum[ex as keyof typeof FormDataEnum];
            setter((arr) => arr.map( (val,i) => {
                    if (i==ix) return res.error.issues[0].message;
                    return ""
                } )
            );
        }
}
