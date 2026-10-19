function isValidCreditCardNumber(cardNumber){
    if(cardNumber.length !== 16) {
        return false;
    }
    
    const allowedCharacters = "0123456789";
    for(let i = 0; i < cardNumber.length; i++) {
        const character = cardNumber[i];
        if(!allowedCharacters.includes(character)){
            return false;
        }
    }
}