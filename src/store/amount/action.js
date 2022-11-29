//que se va hacer
export const deposit = (quantity) => {
    return {
        type: "DEPOSIT_MONEY",
        payload: quantity
    } 
}

export const withdraw = (quantity) => {
    return {
        type: "WITHDRAW_MONEY",
        payload: quantity
    }
}
