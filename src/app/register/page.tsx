import { FormComponent } from "../../components/form"

export default function Page () {
    return (
        <main className="flex flex-col items-center py-10">
            <h1 className="text-3xl my-4">Registration</h1>
            <FormComponent /> 
        </main>
    )
}
