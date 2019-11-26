

export const userReducer = (state ='' , action) => {
    switch (action.type){
        case 'USER_LIST' : {
             return 'userREDUCER RETURN'
        }
        default : return state
    }
}