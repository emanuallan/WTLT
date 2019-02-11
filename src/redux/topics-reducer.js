const SET_TOPIC = "SET_TOPIC";

function topic(newTopic) {
    return { type: SET_TOPIC, newTopic };
}

export function setTopic(newTopic) {
    return dispatch => {
        dispatch(topic(newTopic));
    };
}

export default function topics_reducer(
    state = { isMath: true, isHistory: false },
    action
) {
    switch (action.type) {
        case SET_TOPIC:
            return Object.assign({}, state, { topic: action.newTopic });
        default:
            return state;
    }
}
