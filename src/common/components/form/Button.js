import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';

function Button({ children, ...props }) {
    const { isValid } = useFormikContext();

    return (
        <Button {...props} disabled={!isValid}>
            {children}
        </Button>
    );
}

export default Button;