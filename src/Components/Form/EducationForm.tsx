import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import FormInput from "../Common/FormInput";
import { useResumeContext } from "../Main";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const EducationForm = () => {
    const { educationData, setEducationData } = useResumeContext();

    const [education, setEducation] = useState({
        collegeName: "",
        degree: "",
        startDate: "",
        endDate: "",
        grade: "",
    });

    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleExperienceData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setEducation(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addOrUpdateWorkExperience = () => {
        if (education.collegeName && education.startDate && education.degree) {
            if (editIndex !== null) {
                setEducationData(prevData => {
                    const updatedData = [...prevData];
                    updatedData[editIndex] = { ...education };
                    return updatedData;
                });
                setEditIndex(null);
            } else {
                setEducationData(prevData => [
                    ...prevData,
                    { ...education },
                ]);
            }
            setEducation({
                collegeName: "",
                degree: "",
                startDate: "",
                endDate: "",
                grade: "",
            });
        }
    };

    const handleEditClick = (index: number) => {
        const item = educationData[index];
        setEducation({
            collegeName: item.collegeName,
            degree: item.degree,
            startDate: item.startDate || "",
            endDate: item.endDate || "",
            grade: item.grade,
        });
        setEditIndex(index);
    };

    const handleDeleteExperience = (postion: number) => {
        const filteredData = (educationData || []).filter((item, index) => {
            if (postion !== index) {
                return item;
            }
        });
        setEducationData(filteredData)
    }

    return (
        <>
            <Row>
                <Col>
                    <FormInput
                        placeholder="College / School Name"
                        label="College / School Name"
                        name="collegeName"
                        type="text"
                        value={education.collegeName}
                        handleInputChange={handleExperienceData}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormInput
                        label="Degree / Education Name"
                        placeholder="Degree / Class Name"
                        name="degree"
                        type="text"
                        value={education.degree}
                        handleInputChange={handleExperienceData}
                    />
                </Col>

                <Col>
                    <FormInput
                        label="Grade / Percentage"
                        placeholder="Marks / Percentage / Grade"
                        name="grade"
                        type="text"
                        value={education.grade}
                        handleInputChange={handleExperienceData}
                    />
                </Col>

            </Row>

            <Row>
                <Col>
                    <FormInput
                        label="Start Date"
                        placeholder="Employee Start Date"
                        name="startDate"
                        type="date"
                        value={education.startDate}
                        handleInputChange={handleExperienceData}
                    />
                </Col>
                <Col>
                    <FormInput
                        label="End Date"
                        placeholder="Employee End Date"
                        name="endDate"
                        type="date"
                        value={education.endDate}
                        handleInputChange={handleExperienceData}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <button className="add-in-resume-btn">
                        {editIndex !== null ? "Update education" : "Add education"}
                    </button>
                </Col>
            </Row>

            <hr />

            <div>
                {educationData.map((item, index) => (
                    <Card
                        key={index}
                        className="work-experience-company-list-card"
                    >
                        <CardBody>
                            {item.collegeName}
                            <FontAwesomeIcon icon={faEdit}
                                onClick={() => addOrUpdateWorkExperience()}
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

export default EducationForm;
