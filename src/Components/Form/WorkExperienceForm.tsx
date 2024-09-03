import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import FormInput from "../Common/FormInput";
import { useResumeContext } from "../Main";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const WorkExperienceForm: React.FC = () => {
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
            const updatedExperience = {
                ...experience,
                startDate: new Date(experience.startDate),
                endDate: new Date(experience.endDate),
            };

            if (editIndex !== null) {
                // Update existing work experience
                setWorkExperienceData(prevData => {
                    const updatedData = [...prevData];
                    updatedData[editIndex] = updatedExperience;
                    return updatedData;
                });
                setEditIndex(null);
            } else {
                // Add new work experience
                setWorkExperienceData(prevData => [
                    ...prevData,
                    updatedExperience,
                ]);
            }

            // Reset form
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
            startDate: item.startDate ? new Date(item.startDate).toISOString().substring(0, 10) : "",
            endDate: item.endDate ? new Date(item.endDate).toISOString().substring(0, 10) : "",
            workInfo: item.workInfo,
        });
        setEditIndex(index);
    };

    const handleDeleteExperience = (index: number) => {
        const filteredData = workExperienceData.filter((_, i) => i !== index);
        setWorkExperienceData(filteredData);
    };

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
                    <Card key={index} className="work-experience-company-list-card">
                        <CardBody>
                            {item.companyName}
                            <FontAwesomeIcon
                                icon={faEdit}
                                onClick={() => handleEditClick(index)}
                                className="resume-summary-list-edit-icon"
                            />
                            <FontAwesomeIcon
                                icon={faTimes}
                                onClick={() => handleDeleteExperience(index)}
                                className="resume-summary-list-close-icon"
                            />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default WorkExperienceForm;
