import React from 'react'
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useResumeContext } from '../Main';

export default function StrentInfo() {

    const { strenthList } = useResumeContext();

    return (
        <div>
            <hr />
            <div className='heading'>STRENTH / HOBBIES</div>
            {
                (strenthList || []).map((item, index) => {
                    return (
                        <>
                            <div className='mx-2'>
                                <span><FontAwesomeIcon icon={faCircle} color='red' className='summary-font-icon' /></span>
                                <span key={index} className='employee-job-info'>{item}</span>
                            </div>
                        </>
                    )
                })
            }

        </div >
    )
}
