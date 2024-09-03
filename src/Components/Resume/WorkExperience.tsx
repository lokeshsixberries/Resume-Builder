import React from 'react';
import "./styles.css";
import { Col, Row } from 'reactstrap';
import { useResumeContext } from '../Main';

const formatDate = (dateString: Date): string => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
};

export default function WorkExperience() {
    const { workExperienceData } = useResumeContext();

    return (
        <div>
            <div className='heading'>
                WORK EXPERIENCE
            </div>
            {workExperienceData.length > 0 && (
                workExperienceData.map((item, index) => (
                    <div key={index}>
                        <div className='employee-company-name'>
                            <Row className='my-1'>
                                <Col xl="8" className='sub-heading' style={{
                                    fontWeight: "600"
                                }}>
                                    {item.companyName} ( <span className='employee-job-info' style={{
                                        fontSize: "11px"
                                    }}>
                                        {item.position.toUpperCase()}
                                    </span>{' '})
                                </Col>
                                <Col xl="4" className='text-xl-end' style={{
                                    fontSize: "12px"
                                }}>
                                    {`${formatDate(item?.startDate)} - ${item.endDate ? formatDate(item?.endDate) : "PRESENT"}`}
                                </Col>
                            </Row>
                        </div>



                        <div className='employee-job-info'>
                            {item.workInfo}
                        </div>

                        {index < workExperienceData.length - 1 && <hr />}
                    </div>
                ))
            )}
        </div>
    );
}
