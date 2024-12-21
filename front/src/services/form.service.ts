import { IForm } from "@/interfaces/form.interface";

export const formService = async(form:IForm) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/app/form`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
        return await res.json()
    } catch (e:unknown) {
        return e
    }
}