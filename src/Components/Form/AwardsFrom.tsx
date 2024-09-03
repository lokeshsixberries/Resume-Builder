import React, { useState } from "react";
import FormInput from "../Common/FormInput";
import "./styles.css";
import { useResumeContext } from "../Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AwardsForm: React.FC = () => {

    const [award, setAward] = useState('');
    const { awardsList, setAwardsList } = useResumeContext();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAward(event.target.value)
    }
    const addAwardToList = () => {
        if (award && !awardsList.includes(award)) {
            setAwardsList([...awardsList, award]);
            setAward('');
        }
    }

    const handleRemoveAward = (value: string) => {
        const filteredData = (awardsList || []).filter((item) => {
            if (item !== value) {
                return item;
            }
        });
        setAwardsList(filteredData);
    }

    return (
        <>
            <FormInput
                handleInputChange={handleInputChange}
                value={award}
                name="Awards"
                type="text"
                label="Career Awards"
                placeholder="Career Awards( Comapny / College / School )" />
            <button className="add-in-resume-btn" onClick={() => {
                addAwardToList();
            }}>Add Awards</button>

            <div>
                {(awardsList || []).map((item, index) => {
                    return (
                        <>
                            <div className='resume-summary-list'>
                                <hr />
                                <span style={{ color: "#000" }}>{index + 1}.</span>
                                <span className='mx-2'>{item}</span>
                                <FontAwesomeIcon className='resume-summary-list-close-icon'
                                    onClick={() => {
                                        handleRemoveAward(item);
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

export default AwardsForm;