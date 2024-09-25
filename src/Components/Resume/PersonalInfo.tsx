import React from 'react'
import "./styles.css";
import { Col, Row } from 'reactstrap';
import { useResumeContext } from '../Main';
import Link from 'next/link';

const PersonalInfo: React.FC = () => {

    const { personalInfoData } = useResumeContext();

    return (
        <>
            <Row>
                <Col xl="12">
                    <div>
                        <div className='employee-name text-left'>{personalInfoData.employeeName}</div>
                        <div className='d-flex' style={{
                            width: "100%"
                        }}>
                            <div className='resume-personal-profile-link text-left mx-1' style={{
                                fontWeight: "700",
                                color: "gray"
                            }}>{personalInfoData.employeeRole}</div>
                            <div className='resume-links text-left d-flex'>
                                {personalInfoData.employeeEmail && <Link className='resume-personal-profile-link' style={{
                                    color: "gray",
                                    fontWeight: "700"
                                }} href={personalInfoData.employeeEmail} target="_blank"><span className='resume-link-seprator'>|</span>{' '}+91 123231234{' '}</Link>}
                                {personalInfoData.employeeEmail && <Link className='resume-personal-profile-link' href={personalInfoData.employeeEmail} target="_blank"><span className='resume-link-seprator mx-1'>|</span>{' '}{personalInfoData.employeeEmail}{' '}</Link>}
                                {personalInfoData.employeeLinkedin && <Link className='resume-personal-profile-link' href={personalInfoData.employeeLinkedin} target="_blank"><span className='resume-link-seprator mx-1'>|</span>{' '}Linkedin{' '}</Link>}
                                {personalInfoData.employeeGithub && <Link className='resume-personal-profile-link' href={personalInfoData.employeeGithub} target="_blank"><span className='resume-link-seprator mx-1'>|</span>{' '}Github{' '}</Link>}
                                {personalInfoData.employeeTwitter && <Link className='resume-personal-profile-link' href={personalInfoData.employeeTwitter} target="_blank"><span className='resume-link-seprator mx-1'>|</span>{' '}Twitter{' '}</Link>}
                                {personalInfoData.employeePortfolio && <Link className='resume-personal-profile-link' href={personalInfoData.employeePortfolio} target="_blank"><span className='resume-link-seprator mx-1'>|</span>{' '}Portfolio{' '}</Link>}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
        </>

    )
}

export default PersonalInfo;