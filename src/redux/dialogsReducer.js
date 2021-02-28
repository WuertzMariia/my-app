
    const update_textarea_dialogs = "update_textarea_dialogs";
    const add_message = "add_message";

    let initialState = {
        
            dialog: [
                { name: "Maria", id: "/1", src: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg" },
                { name: "Nelii", id: "/2", src: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg" },
                { name: "Vova", id: "/3", src: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg" },
                { name: "Volodja", id: "/4", src: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg" },
                { name: "Kostja", id: "/5", src: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg" },
            ],

            messag: [
                { mess: "Hi" },
                { mess: "Hello" },
                { mess: "How are you" },
                { mess: "I am fine" }
            ],

           // updatedTextArea: ""

        
    }



let dialogsReducer = (state = initialState, action) => {


    switch(action.type) {
    /*    case update_textarea_dialogs :
        return {
            ...state,
            updatedTextArea : action.newvalue
        };
*/
        case add_message :
        { let newmess = state.updatedTextArea; 
            
            return {
            ...state,

            messag: [...state.messag, {mess: action.message}]
        }
    };

       default: return state; 
    }
}
// export const actioncreatorUpdateTextareaDialog = (text) => ({ type: update_textarea_dialogs, newvalue: text });
export const actioncreatorAddMessage = (message) => ({ type: add_message, message });

export const sendMessage = (message) => {
    return (dispatch) => {
        dispatch(actioncreatorAddMessage(message));
    }
}

export default dialogsReducer; 