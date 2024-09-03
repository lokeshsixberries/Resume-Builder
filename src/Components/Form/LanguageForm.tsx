import React, { useState } from "react";
import FormInput from "../Common/FormInput";
import "./styles.css";
import { useResumeContext } from "../Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LanguageForm: React.FC = () => {

    const [language, setLanguage] = useState('');
    const { languageList, setLanguageList } = useResumeContext();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setLanguage(event.target.value)
    }
    const addSkillToList = () => {
        if (language && !languageList.includes(language)) {
            setLanguageList([...languageList, language]);
            setLanguage('');
        }
    }

    const handleRemoveSkill = (value: string) => {
        const filteredData = (languageList || []).filter((item) => {
            if (item !== value) {
                return item;
            }
        });
        setLanguageList(filteredData);
    }

    return (
        <>
            <FormInput
                handleInputChange={handleInputChange}
                value={language}
                name="language"
                type="text"
                label="Language"
                placeholder="Enter your tech skills" />
            <button className="add-in-resume-btn" onClick={() => {
                addSkillToList();
            }}>Add language</button>

            <hr />

            {(languageList || []).map((item) => {
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

export default LanguageForm;