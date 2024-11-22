// Champs de saisie personnalisés.
// ------------------------------------------------------------------
import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import { Input } from '@chakra-ui/react';
import "./InputField.css";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <Input
                {...field}
                {...props}
                size="md"
                className={`input-field ${meta.touched && meta.error ? 'error' : ''} ${meta.touched && !meta.error ? 'success' : ''}`}
            />
            {meta.touched && meta.error ? (
                <div className="error-message">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default InputField;