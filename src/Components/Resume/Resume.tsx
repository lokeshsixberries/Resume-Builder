import React from 'react';
import { Col, Row } from 'reactstrap';
import "./styles.css";
import ProfileSummary from './ProfileSummary';
import WorkExperience from './WorkExperience';
import Education from './Education';
import TechSkills from './TechSkills';
import Awards from './Awards';
import PersonalInfo from './PersonalInfo';
import Languages from './Languages';
import StrenthInfo from './StrenthInfo';
import ProjectInfo from './ProjectInfo';

const Resume: React.FC = () => {
    return (
        <div className='resume-page'>
            <div className='resume-page-border'>
                <Row>
                    <Col>
                        <PersonalInfo />
                    </Col>
                </Row>
                <Row>
                    <Col xl="8" style={{ borderRight: "1px solid #eee" }}>
                        <ProfileSummary />
                        <WorkExperience />
                        <ProjectInfo />
                    </Col>
                    <Col xl="4">
                        <Education />
                        <TechSkills />
                        <Awards />
                        <StrenthInfo />
                        <Languages />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Resume;
