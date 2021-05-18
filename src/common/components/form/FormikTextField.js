import { TextField } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';

function FormikTextField(props) {
    const { values, handleChange, handleBlur, errors, touched } =
        useFormikContext();
    const { name } = props;

    return (
        <TextField
            {...props}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched[name] && !!errors[name]}
            helperText={touched[name] && errors[name]}
        />
    );
}

export default FormikTextField;