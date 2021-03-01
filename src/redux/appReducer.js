import {singInProcessCheck} from "./authReducer";

const INITILIZATION_SUCCESFULL = "init_app";

let initialState = {
    initialized: false
}

export let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITILIZATION_SUCCESFULL: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

const initial_status = () => ({type: INITILIZATION_SUCCESFULL});

export const initialization_App = () => {

    return (dispatch) => {
        let promise = dispatch(singInProcessCheck());
        Promise.all([promise])
            .then(() => {
                    dispatch(initial_status());
                }
            );
    }
}