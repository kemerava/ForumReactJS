import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    Button,
    Form,
    Input,
    TextArea,
    Ref
} from 'semantic-ui-react'
const InputPost = (props) => {
    const { onSubmit } = props;
    const [topic, setTopic] = useState();
    const [text, setText] = useState();


    const handleKeyPressTopic = (e) => {
        if (e.charCode !== 13) {
            return;
        }

        //onSubmit(e.target.value);
        setTopic(e.target.value);
        e.target.value = "";
    }
    const handleKeyPressText = (e) => {
        if (e.charCode !== 13) {
            return;
        }

        //onSubmit(e.target.value);
        setText(e.target.value);
        e.target.value = "";
    }
    const handleOnClick = () => {
        console.log(text)
        onSubmit({title: topic, content: text})
    }
    const handleChangeTopic = (topic) => {
        setTopic(topic.value);
    }
    const handleChangeText = (text) => {
        setText(text.value);
    }


    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Field

                    control={Input}
                    label='Start a thread'
                    placeholder='Enter topic'
                    required={true}
                    onChange={(e) => handleChangeTopic(e.target)}

                />

            <Form.Field
                control={TextArea}
                placeholder='Tell us more about that topic...'
                required={true}
                onChange={(e) => handleChangeText(e.target)}
            />
            </Form.Group>
            <Form.Field control={Button} onClick = {handleOnClick}>Submit</Form.Field>
        </Form>
    )
}

export default InputPost

