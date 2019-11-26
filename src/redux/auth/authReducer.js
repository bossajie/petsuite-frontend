

const initialState = {
    user: false,
    token: false
}
export const authReducer =  (state = initialState, action) =>{
    console.log(action)
    switch (action.type) {
        case 'LOGIN_SUCCESS' : {
            const res = action.payload
            return {
                ...state,
                user: res.user,
                token : res.token
            }
        }
        default : return state
    }
}