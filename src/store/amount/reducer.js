/*const initialState = {
    total: 0
}*/

export default (state = {total: 0}, action) => {
    //vale switch
    if(action.type === 'DEPOSIT_MONEY'){
        return {
            ...state,
            total: state.total + action.payload
        }
    }

    if(action.type === 'WITHDRAW_MONEY'){
        return {
            ...state,
            total: state.total - action.payload
        }
    }
    return state
}