export const validateName = (name:string): string => {
    let validation = ""
    const regexCountry = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/

    if(!regexCountry.test(name)) validation = "Debe tener entre 1 y 50 letras."
    return validation
}

export const validatePhone = (name:string): string => {
    let validation = ""
    const regexCountry = /^\d{9,15}$/

    if(!regexCountry.test(name)) validation = " Ingresa Sólo números entre 9 y 15 dígitos"
    return validation
}
export const validateNumberAddress = (name:string): string => {
    let validation = ""
    const regexCountry = /^\d{1,7}$/

    if(!regexCountry.test(name)) validation = " Ingresa Sólo numeros"
    return validation
}

export const validateStartHour = (hour:string):string => {
    let validation = ""
    if(!hour) validation = "Ingresa una hora de comienzo"
    return validation
}

export const validateCity = (city:string):string => {
    let validation = ""
    const regexAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if(!regexAddress.test(city)) validation = "Ingresa la ciudad correctamente"

    return validation
}

export const validateAddress = (address: string): string => {
    let validation = "";
    const regexAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;

    if (!regexAddress.test(address)) {
        validation = "Formato de dirección no válido. Debe tener al menos 3 letras";
    }

    return validation;
};