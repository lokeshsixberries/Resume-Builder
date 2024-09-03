import React from 'react'
import "./styles.css";
import { useResumeContext } from '../Main';

export default function TechSkills() {

    const { skillList } = useResumeContext();

    return (
        <div>
            <hr />
            <div className='heading'>
                TECHNICAL SKILLS
            </div>
            <div className='mt-2 employee-job-info'>
                {
                    (skillList || []).map((item) => {
                        return (
                            <>
                                <span>{item}</span> <span style={{
                                    color: "lightgray"
                                }}> | </span>
                            </>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}
