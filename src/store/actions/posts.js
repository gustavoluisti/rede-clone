import { ADD_POST } from './actionsTypes'

export const addPost = post => {
    return {
        type: ADD_POST,
        payload: post 
    }
}