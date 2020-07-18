import immer from "immer";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    posts: [],
    filteredPosts: [],
    filter: ""
};

let nextId = uuidv4();

const reducer = (state = initialState, action) => {
    const sync = () => (state.filteredPosts = state.posts);

    switch (action.type) {
        case "ADD_POST":
            state.posts.push({name: action.name, title: action.title,
                content: action.content, id: nextId});
            nextId = uuidv4();
            sync();
            return state;
        case "DELETE_POST":
            state.todos = state.todos.filter(post => post.id !== action.id);
            sync();
            return state;
        case "SET_FILTER":
            state.filter = action.filter;
            state.filteredPosts = state.posts.filter(post =>
                post.name.includes(state.filter)
            );
            return state;
        default:
            return state;
    }
};

export default immer(reducer);