import React from "react";
import "./styles.css";

interface FormInputProps {
    label: string;
    value: string;
    type: string;
    name: string;
    placeholder: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
    name,
    label,
    type,
    value,
    handleInputChange,
    placeholder
}): JSX.Element => {

    return (
        <div className="resume-form-input-box">
            <div>
                <label className="resume-form-input-label">
                    {label}
                </label>
            </div>
            {type == "textarea" ?
                <textarea
                    rows={6}
                    style={{
                        height: "100%"
                    }}
                    className="resume-form-input"
                    onChange={handleInputChange}
                    placeholder={placeholder || ''}
                    name={name || ''}
                    value={value || ''}
                />
                :
                <input
                    type={type}
                    className="resume-form-input"
                    onChange={handleInputChange}
                    placeholder={placeholder || ''}
                    name={name || ''}
                    value={value || ''}
                />
            }

        </div>
    );
}

export default FormInput;
