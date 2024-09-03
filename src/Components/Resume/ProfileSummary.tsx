import React from 'react'
import "./styles.css";
import { useResumeContext } from '../Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function ProfileSummary() {

    const { profressionalSummaryData } = useResumeContext();

    return (
        <>
            <div>
                <div className='heading'>
                    PROFESSIONAL SUMMARY
                </div>
                <div className='mx-2'>
                    {
                        (profressionalSummaryData?.employeeSummary || []).map((item, index) => {
                            return (
                                <>
                                    <div>
                                        <span><FontAwesomeIcon icon={faCircle} color='red' className='summary-font-icon' /></span>
                                        <span key={index} className='employee-job-info'>{item}</span>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div >
            <hr />
        </>
    )
}
