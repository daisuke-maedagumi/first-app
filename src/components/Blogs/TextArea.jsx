import React from 'react'
import Typography from '@material-ui/core/Typography';

const TextArea = (props) => {
    return (
    <Typography variant="subtitle1" gutterBottom>
            {props.text}
    </Typography>
    )
}

export default TextArea
