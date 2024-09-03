import React from 'react'
import "./styles.css";
import { useResumeContext } from '../Main';
import { LinkNavigation } from '@/utils/window';

export default function ProjectInfo() {

    const { projectList } = useResumeContext();

    return (
        <div>
            <hr />
            <div>
                <div className='heading'>
                    PROJECTS
                </div>

                {
                    (projectList || []).map((item, index) => {
                        return (
                            <>
                                <div>
                                    <div className='employee-job-profile'>
                                        {item.projectName}
                                    </div>
                                    <div className='employee-job-info'
                                        style={{
                                            color: "#0D6EFD"
                                        }}
                                        onClick={() => LinkNavigation(item.projectURL)}>{item.projectURL}</div>
                                    <div className='employee-job-info' style={{
                                        fontSize: "12px"
                                    }}>
                                        {
                                            (item.projectSkills || []).map((skill) => {
                                                return (
                                                    <>
                                                        <span>{skill}</span> <span style={{
                                                            color: "lightgray"
                                                        }}> | </span>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='employee-job-info'>{item.projectDesc}</div>
                                </div>
                                {index < projectList.length - 1 && <hr />}
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}
