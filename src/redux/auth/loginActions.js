import { sendRequest } from '../globalActions'



export const login = (user) =>{
    return async dispatch =>{
            console.log(user)
            const res =  await sendRequest('POST', 'login', user)
            if (res.status){
                dispatch({ type: 'LOGIN_SUCCESS', payload :  res})
                return res
            }
            else {
                return res
            }
        }
}
