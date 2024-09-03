import React, { useState } from "react";
import FormInput from "../Common/FormInput";
import "./styles.css";
import { useResumeContext } from "../Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SkillForm: React.FC = () => {

    const [skill, setSkill] = useState('');
    const { skillList, setSkillList } = useResumeContext();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSkill(event.target.value)
    }
    const addSkillToList = () => {
        if (skill && !skillList.includes(skill)) {
            setSkillList([...skillList, skill]);
            setSkill('');
        }
    }

    const handleRemoveSkill = (value: string) => {
        const filteredData = (skillList || []).filter((item) => {
            if (item !== value) {
                return item;
            }
        });
        setSkillList(filteredData);
    }

    return (
        <>
            <FormInput
                handleInputChange={handleInputChange}
                value={skill}
                name="Skill"
                type="text"
                label="Technical Skills"
                placeholder="Enter your tech skills" />
            <button className="add-in-resume-btn" onClick={() => {
                addSkillToList();
            }}>Add Skill</button>

            <hr />

            {(skillList || []).map((item) => {
                return (
                    <>
                        <button className="bg-warning add-in-resume-btn mx-2" style={{
                            color: "#000042",
                            borderRadius: "5px"
                        }}>{item}
                            <FontAwesomeIcon
                                onClick={() => handleRemoveSkill(item)}
                                className="mx-1" icon={faTimes} style={{
                                    height: "16px",
                                    width: "16px",
                                    fontSize: "16px"
                                }} />
                        </button>
                    </>
                )
            })}
        </>
    )
}

export default SkillForm;