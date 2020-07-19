import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import InputPost from "./Input/InputPost";
import Post from "./Post";

const ListPosts = (props) =>{
    const name = props;
    const posts = useSelector(state => state.filteredPosts);
    const dispatch = useDispatch();

    const renderPosts = () => {
        return posts.map(item =>(
        <Post
        key = {item.id}
        name = {name}
        title = {item.title}
        content = {item.content}/>))
    };
    return(
        <div>
        <InputPost onSubmit = {(post) => dispatch({type: "ADD_POST", title: post.title, content: post.content})}/>
        {renderPosts()}
        </div>
    );
}
export default ListPosts