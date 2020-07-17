import React from 'react'
import { Input } from 'semantic-ui-react'

const handleOnClick = (e) =>{
        if (e.charCode !== 13) {
            return;
        }

        console.log(e.target.value);
        e.target.value = "";
}

const InputName = () => <Input placeholder='Type in your name' onKeyPress = {handleOnClick}/>

export default InputName
