import React from 'react';
import TextInput from '@material-ui/core/TextField';


const TextInput = () => {

　return (
    <TextField
        fullWidth={true}
        label={props.label}
        margin={"dense"}
        multiline={props.multiline}
        rows={props.rows}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
    />
　);
}

export default TextInput
