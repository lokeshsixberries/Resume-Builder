import React, { useState } from "react";
import FormInput from "../Common/FormInput";
import "./styles.css";
import { useResumeContext } from "../Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const StrenthForm: React.FC = () => {

    const [strenth, setStrenth] = useState('');
    const { strenthList, setStrentList } = useResumeContext();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setStrenth(event.target.value)
    }
    const addStrenthToList = () => {
        if (strenth && !strenthList.includes(strenth)) {
            setStrentList([...strenthList, strenth]);
            setStrenth('');
        }
    }

    const handleRemoveStrenth = (value: string) => {
        const filteredData = (strenthList || []).filter((item) => {
            if (item !== value) {
                return item;
            }
        });
        setStrentList(filteredData);
    }

    return (
        <>
            <FormInput
                handleInputChange={handleInputChange}
                value={strenth}
                name="strenth"
                type="text"
                label="Employee Strength / Hobbies"
                placeholder="Employee Strength" />
            <button className="add-in-resume-btn" onClick={() => {
                addStrenthToList();
            }}>Add Awards</button>

            <div>
                {(strenthList || []).map((item, index) => {
                    return (
                        <>
                            <div className='resume-summary-list'>
                                <hr />
                                <span style={{ color: "#000" }}>{index + 1}.</span>
                                <span className='mx-2'>{item}</span>
                                <FontAwesomeIcon className='resume-summary-list-close-icon'
                                    onClick={() => {
                                        handleRemoveStrenth(item);
                                    }}
                                    icon={faTimes} />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default StrenthForm;