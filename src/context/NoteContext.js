import createDataContext from './createDataContext';

const noteReducer = (state, action) => {
    switch(action.type) {
        case 'add_note':
            return [...state, { title: `note number ${state.length + 1}` }];
        default:
            return state;
    };
};

const addNote = (dispatch) => {
    return () => {
        dispatch({ type: 'add_note' });
    };
};

export const { Context, Provider } = createDataContext(
    noteReducer,
    { addNote },
    []
);