const MATH = "MATH";
const HISTORY = "HISTORY";
const WRITING = "FRENCH";
const SCIENCE = "SCIENCE";
const OTHER = "OTHER";

function math(isMath) {
    return { type: MATH, isMath };
}

function history(isHistory) {
    return { type: HISTORY, isHistory };
}

function writing() {
    return {};
}

function science() {
    return {};
}

function other() {
    return {};
}

export function setTopic(topic) {
    return dispatch => {
        if (topic === "math") {
            dispatch(math(true));
        } else if (topic === "history") {
            dispatch(history(true));
        }
    };
}

export default function topics_reducer(
    state = { isMath: true, isHistory: false },
    action
) {
    switch (action.type) {
        case MATH:
            return Object.assign({}, state);
        case HISTORY:
            return Object.assign({}, state);
        default:
            return state;
    }
}
