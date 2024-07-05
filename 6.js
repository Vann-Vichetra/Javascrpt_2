function strongPassword(password){
    const big_latter = /[A,Z]/.test(password);
    const small_latter = /[a,z]/.test(password);
    const maxlength = 8;
    const number = /\d/.test(password);


    return password.length >= big_latter && small_latter && maxlength && number;
}

const password_a = "123arenOt";

console.log(strongPassword(password_a));