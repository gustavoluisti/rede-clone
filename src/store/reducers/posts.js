import { ADD_POST } from '../actions/actionsTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Rafael Pereira Filho',
        email: 'rafael@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'John Ray Sheldon',
            comment: 'Stunning'
        }, {
            nickname: 'Ana Julia Arruda',
            comment: 'Foto linda Onde foi ?'
        }]
    }, {
        id: Math.random(),
        nickname: 'Francisco Leandro Lima',
        email: 'filima@gmail.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
            default:
                return state
    }
}

export default reducer
