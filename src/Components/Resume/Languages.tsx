import React from 'react'
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useResumeContext } from '../Main';

export default function Languages() {

    const { languageList } = useResumeContext();

    return (
        <div>
            <hr />
            <div className='heading'>LANGUAGES</div>
            {
                (languageList || []).map((item, index) => {
                    return (
                        <>
                            <div className='d-flex mx-2' style={{
                                display: "flex"
                            }}>
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
