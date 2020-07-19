import React, { useState } from 'react';

const Post = (props) =>{
    const { name, title, content } = props;
    return(
        <div>
            <h3>{name}: {title}</h3>
            <p>{content}</p>
        </div>
    );

}
export default Post