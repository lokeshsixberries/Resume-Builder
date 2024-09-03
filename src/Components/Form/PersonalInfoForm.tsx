import React from "react";
import { Col, Row } from "reactstrap";
import FormInput from "../Common/FormInput";
import { useResumeContext } from "../Main";

const PersonalInfo: React.FC = () => {

    const { personalInfoData, setPersonalInfoData } = useResumeContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPersonalInfoData({
            ...personalInfoData,
            [name]: value,
        });
    };


    return (
        <>
            <Row>
                <Col>
                    <FormInput
                        handleInputChange={handleInputChange}
                        label="Employee Name"
                        placeholder="Name"
                        name="employeeName"
                        type="text"
                        value={personalInfoData?.employeeName || ''}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl="6">
                    <FormInput
                        handleInputChange={handleInputChange}
                        label="Employee Email"
                        placeholder="Email Address"
                        name="employeeEmail"
                        type="text"
                        value={personalInfoData.employeeEmail || ''}
                    />
                </Col>
                <Col xl="6">
                    <FormInput
                        handleInputChange={handleInputChange}
                        label="Employee Job Profile"
                        placeholder="Enter Current Job Role"
                        name="employeeRole"
                        type="text"
                        value={personalInfoData.employeeRole || ''}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl="6">
                    <FormInput
                        handleInputChange={handleInputChange}
                        label="LinkedIn Profile"
                        placeholder="LinkedIn Profile Link"
                        name="employeeLinkedin"
                        type="text"
                        value={personalInfoData.employeeLinkedin || ''}
                    />
                </Col>
                <Col xl="6">
                    <FormInput
                        handleInputChange={handleInputChange}
                        label="Github Profile"
                        placeholder="Github Profile Link"
                        name="employeeGithub"
                        type="text"
                        value={personalInfoData.employeeGithub || ''}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl="6">
                    <FormInput
                        handleInputChange={handleInputChange}
                        label="Twitter Profile"
                        placeholder="Twitter Profile Link"
                        name="employeeTwitter"
                        type="text"
                        value={personalInfoData.employeeTwitter || ''}
                    />
                </Col>
                <Col xl="6">
                    <FormInput
                        handleInputChange={handleInputChange}
                        label="Portfolio"
                        placeholder="Portfolio Link"
                        name="employeePortfolio"
                        type="text"
                        value={personalInfoData.employeePortfolio || ''}
                    />
                </Col>
            </Row>
        </>
    );
};

export default PersonalInfo;
