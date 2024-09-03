export type PersonalInfoTypes = {
    employeeName: string;
    employeeRole: string;
    employeeEmail: string;
    employeeLinkedin: string;
    employeePortfolio?: string; 
    employeeGithub: string;
    employeeTwitter: string;
};

export type PersonalSummaryDataTypes = {
    employeeSummary:string[]
}

export type EmployeeWorkExperienceType = {
    companyName: string,
    startDate:   Date ,
    endDate:  Date,
    position: string,
    workInfo: string
}

export type EmployeeEducationType = {
    collegeName: string,
    startDate:   Date ,
    endDate:  Date,
    degree: string,
    grade: string
}   

export type ProjectInfoType = {
    projectName: string,
    projectDesc: string,
    projectSkills: string[],
    projectURL: string,
}


export type SkillsTypes = {
    skills:string
}