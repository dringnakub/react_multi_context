const initialState = {
    counter: 0
}

export const counterReducer =  (state , action ) => {
    console.log(`reducer state: ${JSON.stringify(state)}`)
    console.log(`reducer payload: ${JSON.stringify(action)}`)
    switch (action.type) {
        case "ADD_COUNTER":
            return { ...state, counter : state.counter + action.payload }
        case "SUB_COUNTER":
            return { ...state, counter : state.counter - action.payload}
        default:
            return state
    }
}
