export const addCounter = (payload) => ({
    type: "ADD_COUNTER",
    payload
});

export const subCounter = (payload) => ({
    type: "SUB_COUNTER",
    payload
});

export const doAddCounter = (value) => {
    console.log("action doAddCounter start ", value)
    return dispatch => {
        dispatch(addCounter());
    }
}

export const doSubCounter = () => {
    return dispatch => {
        dispatch(subCounter());
    }
}