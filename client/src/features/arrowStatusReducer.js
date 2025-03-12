const initializeState = ({
    status: true
})

const statusReducer = (state = initializeState, action) => {
    // console.log(action)
    switch (action.type) {
        case ("status"):
            return {...state,status : action.payload}
        default:
            return state
    }

}
export default statusReducer