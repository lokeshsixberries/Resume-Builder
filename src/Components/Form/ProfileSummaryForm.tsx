import React, { useState } from 'react'
import FormInput from '../Common/FormInput'
import { useResumeContext } from '../Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ProfileSummaryForm() {

    const [summary, setSummary] = useState('');
    const { profressionalSummaryData, setProfressionalSummaryData } = useResumeContext();

    const updateSummaryData = (): void => {
        if (summary && !profressionalSummaryData.employeeSummary.some((item) => item === summary)) {
            setProfressionalSummaryData({
                ...profressionalSummaryData,
                employeeSummary: [
                    ...profressionalSummaryData.employeeSummary,
                    summary,
                ]
            });
            setSummary('')
        }
    };

    const handleDeleteSummary = (todo: string): void => {
        const filteredData = (profressionalSummaryData?.employeeSummary || []).filter((item, index) => {
            if (item !== todo) {
                return item;
            }
        });

        setProfressionalSummaryData({
            employeeSummary: filteredData
        })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setSummary(event.target.value);
    }

    return (
        <div>
            <FormInput
                label='Profile Summary'
                placeholder='Profile Summary'
                type='text'
                value={summary}
                name='employeeeSummary'
                handleInputChange={handleInputChange}
            />
            <button className='add-in-resume-btn' onClick={() => updateSummaryData()}>Add In Resume</button>

            <div>
                {(profressionalSummaryData.employeeSummary || []).map((item, index) => {
                    return (
                        <>
                            <div className='resume-summary-list'>
                                <hr />
                                <span style={{ color: "#000" }}>{index + 1}.</span>
                                <span className='mx-2'>{item}</span>
                                <FontAwesomeIcon className='resume-summary-list-close-icon'
                                    onClick={() => {
                                        handleDeleteSummary(item);
                                    }}
                                    icon={faTimes} />
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    )
}
