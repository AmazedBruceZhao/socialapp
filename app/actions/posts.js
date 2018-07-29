export function fetchAll(data) {
    return {
        type: 'fetchAll',
        data
    }
}

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