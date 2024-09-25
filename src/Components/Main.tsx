'use client';

import React, { useState, createContext, useContext, ReactNode } from 'react';
import { Col, Row } from 'reactstrap';
import Resume from './Resume/Resume';
import ResumeForm from './Form/ResumeForm';
import { PersonalInfoTypes, PersonalSummaryDataTypes, EmployeeWorkExperienceType, EmployeeEducationType, SkillsTypes, ProjectInfoType } from '@/type';

interface ResumeContextType {
    personalInfoData: PersonalInfoTypes;
    setPersonalInfoData: React.Dispatch<React.SetStateAction<PersonalInfoTypes>>;
    profressionalSummaryData: PersonalSummaryDataTypes;
    setProfressionalSummaryData: React.Dispatch<React.SetStateAction<PersonalSummaryDataTypes>>;
    setWorkExperienceData: React.Dispatch<React.SetStateAction<EmployeeWorkExperienceType[]>>;
    workExperienceData: EmployeeWorkExperienceType[],
    educationData: EmployeeEducationType[]
    setEducationData: React.Dispatch<React.SetStateAction<EmployeeEducationType[]>>;
    setSkillList: React.Dispatch<React.SetStateAction<string[]>>,
    skillList: string[],
    awardsList: string[],
    setAwardsList: React.Dispatch<React.SetStateAction<string[]>>,
    strenthList: string[],
    setStrentList: React.Dispatch<React.SetStateAction<string[]>>,
    languageList: string[],
    setLanguageList: React.Dispatch<React.SetStateAction<string[]>>;
    projectList: ProjectInfoType[],
    setProjectList: React.Dispatch<React.SetStateAction<ProjectInfoType[]>>
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [personalInfoData, setPersonalInfoData] = useState<PersonalInfoTypes>({
        employeeName: "Lokesh Sharma",
        employeeEmail: "sharma.lokesh.222001@gmail.com",
        employeeLinkedin: "https://www.linkedin.com/in/lokeshsharma9895/",
        employeePortfolio: "Twitter.com",
        employeeRole: "Full Stack Developer",
        employeeGithub: "https://github.com/lokeshsixberries",
        employeeTwitter: "Twitter.com"

    });

    const [profressionalSummaryData, setProfressionalSummaryData] = useState<PersonalSummaryDataTypes>({
        employeeSummary: ["Bachelor of Technology (BTech) in Computer Science from Geetanjali Institute of Technical Studies, Udaipur (2018-2022) with a 9.20 SGPA",
            "12th Grade in Science Maths from Govt. Senior Secondary School, Bhilwara (2018) with 80.80%",
            "First Rank in Academics in the Year 2018-2019 at Geetanjali Institute of Technical Studies"
        ]
    });
    const [workExperienceData, setWorkExperienceData] = useState<EmployeeWorkExperienceType[]>([
        {
            companyName: "Tech Solutions Inc.",
            startDate: new Date("2022-01-15"),
            endDate: new Date("2023-07-20"),
            position: "Software Engineer",
            workInfo: "Bachelor of Technology (BTech) in Computer Science from Geetanjali Institute of Technical Studies, Udaipur (2018-2022) with a 9.20 SGPA Bachelor of Technology (BTech) in Computer Science from Geetanjali Institute of Technical Studies, Udaipur (2018-2022) with a 9.20 SGPA"
        },
        {
            companyName: "Innovatech Ltd.",
            startDate: new Date("2022-01-15"),
            endDate: new Date("2023-07-20"),
            position: "Frontend Developer",
            workInfo: "Bachelor of Technology (BTech) in Computer Science from Geetanjali Institute of Technical Studies, Udaipur (2018-2022) with a 9.20 SGPA Bachelor of Technology (BTech) in Computer Science from Geetanjali Institute of Technical Studies, Udaipur (2018-2022) with a 9.20 SGPA"
        },
        {
            companyName: "Creative Minds Co.",
            startDate: new Date("2022-01-15"),
            endDate: new Date("2023-07-20"),
            position: "UI/UX Designer",
            workInfo: "Bachelor of Technology (BTech) in Computer Science from Geetanjali Institute of Technical Studies, Udaipur (2018-2022) with a 9.20 SGPA Bachelor of Technology (BTech) in Computer Science from Geetanjali Institute of Technical Studies, Udaipur (2018-2022) with a 9.20 SGPA"

        },
    ]);
    const [educationData, setEducationData] = useState<EmployeeEducationType[]>([
        {
            collegeName: "Harvard University",
            startDate: new Date("2015-09-01"),
            endDate: new Date("2019-06-15"),
            degree: "Bachelor of Science in Computer Science",
            grade: "3.8 GPA"
        },
        {
            collegeName: "Stanford University",
            startDate: new Date("2016-09-01"),
            endDate: new Date("2020-06-20"),
            degree: "Bachelor of Engineering in Electrical Engineering",
            grade: "3.7 GPA"
        },
        {
            collegeName: "Massachusetts Institute of Technology",
            startDate: new Date("2017-09-01"),
            endDate: new Date("2021-05-30"),
            degree: "Bachelor of Technology in Mechanical Engineering",
            grade: "3.9 GPA"
        },
    ]);
    const [skillList, setSkillList] = useState<string[]>([
        "JavaScript",
        "Python",
        "React",
        "Node.js",
        "TypeScript",
        "Java",
        "SQL",
        "C++",
        "Docker",
        "AWS"]);

    const [awardsList, setAwardsList] = useState<string[]>([
        "Employee of the Year - 2023",
        "Best Innovator Award - 2022",
        "Top Developer Award - 2021",
        "Leadership Excellence Award - 2020",
        "Best Project Manager - 2019"
    ]);

    const [strenthList, setStrentList] = useState<string[]>([
        "Employee of the Year - 2023",
        "Best Innovator Award - 2022",
        "Top Developer Award - 2021",
        "Leadership Excellence Award - 2020",
        "Best Project Manager - 2019"
    ]);



    const [languageList, setLanguageList] = useState<string[]>([
        "English",
        "Mandarin Chinese",
        "Spanish",
        "Hindi",
    ]);

    const [projectList, setProjectList] = useState<ProjectInfoType[]>([
        {
            projectName: "Personal Portfolio Website",
            projectDesc: "A personal portfolio website to showcase my projects, skills, and experience. Built using React and hosted on GitHub Pages.",
            projectSkills: ["React", "JavaScript", "CSS", "HTML"],
            projectURL: "https://example.com/portfolio"
        },
        {
            projectName: "E-commerce Platform",
            projectDesc: "An online e-commerce platform that allows users to browse products, add items to the cart, and complete purchases using a secure payment gateway.",
            projectSkills: ["Node.js", "Express", "MongoDB", "Stripe API"],
            projectURL: "https://example.com/ecommerce"
        },
        {
            projectName: "Weather Forecast App",
            projectDesc: "A mobile app that provides real-time weather updates.",
            projectSkills: ["Flutter", "Dart", "REST API", "OpenWeather API"],
            projectURL: "https://example.com/weather-app"
        },
    ])

    const ContextProps: ResumeContextType = {
        personalInfoData,
        setPersonalInfoData,
        profressionalSummaryData,
        setProfressionalSummaryData,
        setWorkExperienceData,
        workExperienceData,
        educationData,
        setEducationData,
        setSkillList,
        skillList,
        setAwardsList,
        awardsList,
        setLanguageList,
        languageList,
        setStrentList,
        strenthList,
        setProjectList,
        projectList
    }

    return (
        <ResumeContext.Provider
            value={ContextProps}
        >
            {children}
        </ResumeContext.Provider>
    );
};

const useResumeContext = (): ResumeContextType => {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error('useResumeContext must be used within a ResumeProvider');
    }
    return context;
};

const MainPage: React.FC = () => {
    return (
        <ResumeProvider>
            <Row>
                <Col xl="6">
                    <ResumeForm />
                </Col>
                <Col xl="6" contentEditable style={{ outline: "none", border: "none" }}>
                    <Resume />
                </Col>
            </Row>
        </ResumeProvider>
    );
};

export default MainPage;

export { useResumeContext };