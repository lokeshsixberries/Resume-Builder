import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import FormInput from "../Common/FormInput";
import { useResumeContext } from "../Main";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const WorkExperienceForm = () => {
    const { workExperienceData, setWorkExperienceData } = useResumeContext();

    const [experience, setExperience] = useState({
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        workInfo: "",
    });

    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleExperienceData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setExperience(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addOrUpdateWorkExperience = () => {
        if (experience.companyName && experience.startDate && experience.position) {
            if (editIndex !== null) {
                setWorkExperienceData(prevData => {
                    const updatedData = [...prevData];
                    updatedData[editIndex] = { ...experience };
                    return updatedData;
                });
                setEditIndex(null);
            } else {
                setWorkExperienceData(prevData => [
                    ...prevData,
                    { ...experience },
                ]);
            }
            setExperience({
                companyName: "",
                position: "",
                startDate: "",
                endDate: "",
                workInfo: "",
            });
        }
    };

    const handleEditClick = (index: number) => {
        const item = workExperienceData[index];
        setExperience({
            companyName: item.companyName,
            position: item.position,
            startDate: item.startDate || "",
            endDate: item.endDate || "",
            workInfo: item.workInfo,
        });
        setEditIndex(index);
    };

    const handleDeleteExperience = (postion: number) => {
        const filteredData = (workExperienceData || []).filter((item, index) => {
            if (postion !== index) {
                return item;
            }
        });
        setWorkExperienceData(filteredData)
    }

    return (
        <>
            <Row>
                <Col>
                    <FormInput
                        placeholder="Employee Company Name"
                        label="Company Name"
                        name="companyName"
                        type="text"
                        value={experience.companyName}
                        handleInputChange={handleExperienceData}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormInput
                        label="Employee Job Role"
                        placeholder="Employee Job Role"
                        name="position"
                        type="text"
                        value={experience.position}
                        handleInputChange={handleExperienceData}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormInput
                        label="From"
                        placeholder="Employee Start Date"
                        name="startDate"
                        type="date"
                        value={experience.startDate}
                        handleInputChange={handleExperienceData}
                    />
                </Col>
                <Col>
                    <FormInput
                        label="To"
                        placeholder="Employee End Date"
                        name="endDate"
                        type="date"
                        value={experience.endDate}
                        handleInputChange={handleExperienceData}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormInput
                        label="Job Profile Summary"
                        type="textarea"
                        placeholder="Employee Company Summary"
                        name="workInfo"
                        value={experience.workInfo}
                        handleInputChange={handleExperienceData}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <button className="add-in-resume-btn" onClick={addOrUpdateWorkExperience}>
                        {editIndex !== null ? "Update Experience" : "Add Experience"}
                    </button>
                </Col>
            </Row>

            <hr />

            <div>
                {workExperienceData.map((item, index) => (
                    <Card
                        key={index}
                        className="work-experience-company-list-card"
                    >
                        <CardBody>
                            {item.companyName}
                            <FontAwesomeIcon icon={faEdit}
                                onClick={() => handleEditClick(index)}
                                className="resume-summary-list-edit-icon" />
                            <FontAwesomeIcon icon={faTimes}
                                onClick={() => handleDeleteExperience(index)}
                                className="resume-summary-list-close-icon" />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default WorkExperienceForm;
