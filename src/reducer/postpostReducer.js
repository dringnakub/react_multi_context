
export const postpostReducer = (state, action) => {
    console.log(`postpost reducer state: ${JSON.stringify(state)}`)
    console.log(`postpost reducer payload: ${JSON.stringify(action)}`)
    switch (action.type) {
        case "ADD_POST":
            return [...state, {
                id: Math.random(),
                title: action.payload.title,
                content: action.payload.content
            }]
        default:
            return state
    }
}
