function isValidCreditCardNumber(cardNumber){
    if(cardNumber.length !== 16) {
        return false;
    }

    const allowedCharacters = "0123456789";
    for(let i = 0; i < cardNumber.length; i++) {
        const character = cardNumber[i];
        if(!allowedCharacters.includes(character)) {
            return false;
        }
    }

    const firstDigit = cardNumber[0];
    let foundDifferentDigit = false;
    for(let i = 0; i < cardNumber.length; i++) {
        if(cardNumber[i] !== firstDigit) {
            foundDifferentDigit = true;
        }
    }
    if(foundDifferentDigit === false){
        return false;
    }

    const lastDigit = Number(cardNumber[15]);
    if(lastDigit % 2 !== 0) {
        return false;
    }

    let sum = 0;
    for(let i = 0; i < cardNumber.length; i++){
        sum += Number(cardNumber[i]);
    }
    if(sum <= 16){
        return false;
    }

    return true;
}