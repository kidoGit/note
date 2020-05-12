import createDataContext from './createDataContext';
let id = 0;
const noteReducer = (state, action) => {
    switch(action.type) {
        case 'add_note':
            return [...state, { title: action.payload.title, content: action.payload.content, id: ++id }];
        case 'delete_note':
            return state.filter((note) => note.id !== action.payload)
        default:
            return state;
    };
};

const addNote = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_note', payload: { title, content } });
        callback();
    };
};

const deleteNote = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_note', payload: id })
    };
};

export const { Context, Provider } = createDataContext(
    noteReducer,
    { addNote, deleteNote },
    []
);