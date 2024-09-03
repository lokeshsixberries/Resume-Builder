import React, { useState } from 'react';
import SectionNav from './SectionNav';

const ResumeForm: React.FC = () => {
    const [currentNav, setCurrentNav] = useState<number>(1);

    return (
        <div>
            <SectionNav
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
            />
        </div>
    );
};

export default ResumeForm;
