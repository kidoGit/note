import createDataContext from './createDataContext';
let id = 0;
const COLORS = ['#facaca', '#cadefa', '#f9faca', '#cafae6', '#fadfca'];

const noteReducer = (state, action) => {
    const colorIndex = Math.floor(Math.random() * 5);
    switch(action.type) {
        case 'add_note':
            return [...state, { title: action.payload.title, content: action.payload.content, id: ++id, color: COLORS[colorIndex] }];
        case 'edit_note':
            return state.map((note) => {
                return note.id === action.payload.id ? action.payload : note;
            });
        case 'delete_note':
            return state.filter((note) => note.id !== action.payload)
        default:
            return state;
    };
};

const addNote = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_note', payload: { title, content } });
        if (callback) {
            callback();
        }
    };
};

const editNote = (dispatch) => {
    return (id, title, content, color, callback) => {
        dispatch({ type: 'edit_note', payload: { id, title, content, color } });
        if (callback) {
            callback();
        }
    };
};

const deleteNote = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_note', payload: id })
    };
};

export const { Context, Provider } = createDataContext(
    noteReducer,
    { addNote, deleteNote, editNote },
    []
);