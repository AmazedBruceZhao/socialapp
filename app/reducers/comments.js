const initialState = {};

export default function post(state = initialState, action) {
    switch (action.type) {
        case 'showComments':
            return action.data;
        case 'closeComments':
            return state;
        default:
            return state
    }
}