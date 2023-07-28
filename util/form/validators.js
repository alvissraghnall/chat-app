export const emailValidator = email => {
    if (!email) return "E-mail is required."
    else if (!new RegExp(/\S+@\S+\.\S+/).test(email) || email.length < 6) return "Incorrect email format."

    return "";
}

export const usernameValidator = username => {
    if (!username) return "Name is required."
    else if (!/^[a-zA-Z0-9.\-_$@*!]{4,30}$/.test(username)) return "Username invalid!"

    return "";
}

export const passwordValidator = password => {
    if (!password) return "Password is required."
    else if (password.length < 8) return "Password must have at least 8 characters."

    return "";
}


export const confirmPasswordValidator = (confirmPassword, { password }) => {
    if (!confirmPassword) return "Confirm Password is required."
    else if (confirmPassword.length < 8) return "Confirm Password must have at least 8 characters."
    else if (confirmPassword !== password) return "Passwords do not match."

    return "";
}

export const allValidate = ({ email, name}) => {
    const errors = [emailValidator(email), usernameValidator(name)];
    if (errors.every(val => val === "")) {
        return true;
    } else {
        return false;
    }
}