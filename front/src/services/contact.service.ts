import { IContact } from "@/interfaces/contact.interface";

export const contactForm = async(newContact: IContact) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/app/contact`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newContact)
        })

        return await response.json()
    } catch (error:unknown) {
        console.log(error);
        return error
    }
}