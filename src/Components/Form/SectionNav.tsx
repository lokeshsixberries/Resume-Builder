import React from 'react';
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './styles.css';
import PersonalInfoForm from './PersonalInfoForm';
import ProfileSummaryForm from './ProfileSummaryForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import SkillForm from './SkillForm';
import AwardsForm from './AwardsFrom';
import LanguageForm from './LanguageForm';
import StrenthForm from './StrenthForm';
import ProjectForm from './ProjectForm';

interface SectionNavProps {
    currentNav: number;
    setCurrentNav: (navId: number) => void;
}

const tabData = [
    { id: 1, name: "Personal" },
    { id: 2, name: "Summary" },
    { id: 3, name: "Experience" },
    { id: 4, name: "Education" },
    { id: 5, name: "Skills" },
    { id: 6, name: "Awards" },
    { id: 7, name: "Projects" },
    { id: 8, name: "Strength" },
    { id: 9, name: "Language" },
];

const SectionNav: React.FC<SectionNavProps> = ({ currentNav, setCurrentNav }) => (
    <div>
        <Card className='input-form-card'>
            <CardBody className='p-0'>
                <Nav tabs className='form-nav'>
                    {tabData.map(({ id, name }) => (
                        <NavItem className={+id === +currentNav ? "form-nav-item-active" : "form-nav-item"} key={id}>
                            <NavLink
                                className={+id === +currentNav ? "form-nav-link-active" : "form-nav-link"}
                                onClick={() => setCurrentNav(id)}
                            >
                                {name}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </CardBody>
        </Card>

        <Card className='input-form-tab-content'>
            <CardBody>
                <TabContent activeTab={currentNav}>
                    {tabData.map(({ id }) => (
                        <TabPane tabId={id} key={id}>
                            {id === 1 ?
                                <PersonalInfoForm /> :
                                id === 2 ? <ProfileSummaryForm /> :
                                    id === 3 ? <WorkExperienceForm /> :
                                        id === 4 ? <EducationForm /> :
                                            id === 5 ? <SkillForm /> :
                                                id === 6 ? <AwardsForm /> :
                                                    id === 7 ? <ProjectForm /> :
                                                        id === 8 ? <StrenthForm /> :
                                                            id === 9 ? <LanguageForm /> :
                                                                `Content for Tab ${id}`}
                        </TabPane>
                    ))}
                </TabContent>
            </CardBody>
        </Card>

    </div>
);

export default SectionNav;
