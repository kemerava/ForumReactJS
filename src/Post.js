import React, { useState } from 'react';

const Post = (props) =>{
    const {name, title, content} = props;
    return(
        <div>
            <p>{name}: {title}</p>
            <p>{content}</p>
        </div>
    );

}
export default Post