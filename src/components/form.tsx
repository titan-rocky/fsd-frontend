"use client"

import { useState } from "react"
import React from "react"
import formHandler from "../utils/formHandler"
import { FormData, FinalMessage } from "../utils/types"
import axios from "axios";

function FinalMessageDisplay(props: FinalMessage){
    if (props.flag==0) return (<span className="text-green font-bold">{props.message}</span>);
    else return (<span className="text-red font-bold">{props.message}</span>);
}

export function FormComponent () {
    const [formData,setFormData] = useState<FormData>({
        fname: "",
        lname: "",
        empid: "",
        email: "",
        dept: "",
        phone: "",
        role: "",
        joind: "",
    });
    const [formError,setFormError] = useState<Array<string>>(["","","","","","","",""]);
    const [finalMsg, setFinalMsg] = useState<FinalMessage>({message: "", flag: 0});

    const today = new Date().toISOString().split("T")[0]
    function clearVld(e:React.SyntheticEvent){
        const clrRes = confirm("There are unsaved changes. Continue ?");
        if (clrRes) {
            setFormError(() => new Array(8).fill(""))
        } else {
            e.preventDefault();
        }
    }

    return (
        <form className="grid grid-cols-1 lg:grid-cols-2 place-center min-w-[50vw] gap-x-20 rounded-xl" noValidate 
            onSubmit={(e:React.SyntheticEvent) => formHandler(e,formData,setFormError,setFinalMsg)}
        >
            <div className="flex flex-col p-6">
                <label htmlFor="fname" className="text-lg text-black">First Name <span className="text-red">*</span></label>
                <input type="text" id="fname" 
                    className="px-2 py-1 my-1 rounded-lg bg-snow"
                    onChange={
                        (el:React.ChangeEvent<HTMLInputElement>) => {
                            setFormData((fd) => ({...fd, fname: el.target.value}));
                        }
                } />
                <span className="text-red font-bold my-1">{formError[0]}</span>
            </div>
            <div className="flex flex-col p-6">
                <label htmlFor="lname" className="text-lg text-black">Last Name</label>
                <input type="text" id="lname" 
                    className="px-2 py-1 my-1 rounded-lg bg-snow"
                    onChange={
                        (el:React.ChangeEvent<HTMLInputElement>) => {
                            setFormData((fd) => ({...fd, lname: el.target.value}));
                        }
                } />
                <span className="text-red font-bold my-1">{formError[1]}</span>
            </div>
            <div className="flex flex-col p-6">
                <label htmlFor="empid" className="text-lg text-black">Employee ID <span className="text-red">*</span></label>
                <input type="text" id="empid" 
                    className="px-2 py-1 my-1 rounded-lg bg-snow"
                    onChange={
                        (el:React.ChangeEvent<HTMLInputElement>) => {
                            setFormData((fd) => ({...fd, empid: el.target.value}));
                        }
                } />
                <span className="text-red font-bold my-1">{formError[2]}</span>
            </div>
            <div className="flex flex-col p-6">
                <label htmlFor="email" className="text-lg text-black">E-Mail <span className="text-red">*</span></label>
                <input type="email" id="email" 
                    className="px-2 py-1 my-1 rounded-lg bg-snow"
                    onChange={
                        (el:React.ChangeEvent<HTMLInputElement>) => {
                            setFormData((fd) => ({...fd, email: el.target.value}));
                        }
                } />
                <span className="text-red font-bold my-1">{formError[3]}</span>
            </div>
            <div className="flex flex-col p-6">
                <label htmlFor="dept" className="text-lg text-black">Department <span className="text-red">*</span></label>
                <select id="dept" defaultValue=""
                    className="px-2 py-1 my-1 rounded-lg bg-snow"
                    onChange={
                        (el:React.ChangeEvent<HTMLSelectElement>) => {
                            setFormData((fd) => ({...fd, dept: el.target.value}));
                        }
                }>
                    <option value="" className="text-gray" disabled>Select</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketting">Marketting</option>
                    <option value="Other">Other</option>
                </select>
                <span className="text-red font-bold my-1">{formError[4]}</span>
            </div>
            <div className="flex flex-col p-6">
                <label htmlFor="mobile" className="text-lg text-black">Phone <span className="text-red">*</span></label>
                <input type="tel" id="mobile" 
                    className="px-2 py-1 my-1 rounded-lg bg-snow"
                    onChange={
                        (el:React.ChangeEvent<HTMLInputElement>) => {
                            setFormData((fd) => ({...fd, phone: el.target.value}));
                        }
                } />
                <span className="text-red font-bold my-1">{formError[5]}</span>
            </div>
            <div className="flex flex-col p-6">
                <label htmlFor="role" className="text-lg text-black">Role <span className="text-red">*</span></label>
                <input type="text" id="role" 
                    className="px-2 py-1 my-1 rounded-lg bg-snow"
                    onChange={
                        (el:React.ChangeEvent<HTMLInputElement>) => {
                            setFormData((fd) => ({...fd, role: el.target.value}));
                        }
                } />
                <span className="text-red font-bold my-1">{formError[6]}</span>
            </div>
            <div className="flex flex-col p-6">
                <label htmlFor="joind" className="text-lg text-black">Joining Date <span className="text-red">*</span></label>
                <input type="date" id="joind" max={today}  
                    className="px-2 py-1 my-1 rounded-lg bg-snow"
                    onChange={
                        (el:React.ChangeEvent<HTMLInputElement>) => {
                            setFormData((fd) => ({...fd, joind: el.target.value}));
                        }
                } />
                <span className="text-red font-bold my-1">{formError[7]}</span>
            </div>
            <div className="flex justify-around lg:col-span-2 py-10">
                <button type="submit" className="bg-accent rounded-lg px-4 py-2 text-white">Submit</button>
                <button type="reset" onClick = {clearVld} className="bg-accent rounded-lg px-4 py-2 text-white">Reset</button>
            </div>
            <div className="flex justify-around lg:col-span-2">
                <FinalMessageDisplay flag={finalMsg.flag} message={finalMsg.message} />
            </div>
        </form>
    );
}
