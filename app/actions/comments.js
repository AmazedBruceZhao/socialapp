export function showComments(data) {
    return {
        type: 'showComments',
        data
    }
}

export function closeComments() {
    return {
        type: 'closeComments'
    }
}