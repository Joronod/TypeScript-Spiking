export default function sumDigits(number) {
    const numStr = number.toString();
    const regex = /[0-9]/;

    const filteredArr = numStr.split("").filter(str => regex.test(str));
    return filteredArr.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
}
