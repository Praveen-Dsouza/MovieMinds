import { VALIDATION_REG_EX } from "./Constants/Constants"

export const checkValidData = (email, password) => {
    const isEmailValid = VALIDATION_REG_EX['EMAIL'].test(email);
    const isPasswordValid = VALIDATION_REG_EX['PASSWORD'].test(password)

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid"

    return null;
}