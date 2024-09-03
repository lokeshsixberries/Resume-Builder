import React from 'react'
import "./styles.css";
import { useResumeContext } from '../Main';

export default function Education() {

    const { educationData } = useResumeContext();

    const formatDate = (dateString: Date): string => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
        <hr />
    };

    return (
        <div>
            <div className='heading'>
                EDUCATION
            </div>

            {
                educationData.map((item, index) => {
                    return (
                        <>
                            <div>
                                <div className='employee-job-profile'>{item.degree} {`${item?.grade ? `With ${item?.grade}` : ''}`}</div>
                                <div className='employee-job-info'>{`${formatDate(item.startDate)} - ${item.endDate ? formatDate(item.endDate) : "RUNNING"}`}</div>
                                <div className='employee-job-info'>{item.collegeName}</div>
                            </div>
                            {index < educationData.length - 1 && <hr />}
                        </>
                    )
                })
            }


        </div>
    )
}
