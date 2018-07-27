const initialState = []

export default function posts(state = initialState, action) {
    switch (action.type) {
        //fetch posts
        case 'fetchAll':
            return action.data
        default:
            return state
    }
}