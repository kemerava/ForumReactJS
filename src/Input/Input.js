import React from 'react'
import { Input } from 'semantic-ui-react'
const InputName = (props) => {
    const { onSubmit } = props;
    const handleOnClick = (e) => {
        if (e.charCode !== 13) {
            return;
        }

        onSubmit(e.target.value);
        e.target.value = "";
    }

    return <Input placeholder='Type in your name' onKeyPress={handleOnClick}/>
}

export default InputName
