import FormInput from "../Common/FormInput";
import { Card, CardBody, Col, Row } from "reactstrap";
import { useResumeContext } from "../Main";
import { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ProjectInfoType } from "@/type";

const ProjectForm = () => {
    const { projectList, setProjectList } = useResumeContext();

    const [skill, setSkill] = useState<string>("");
    const [project, setProject] = useState<ProjectInfoType>({
        projectName: "",
        projectURL: "",
        projectSkills: [],
        projectDesc: ""
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleProjectInfo = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = event.target;
        setProject({
            ...project,
            [name]: value
        });
    };

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSkill(event.target.value);
    };

    const handleAddSkillToList = () => {
        if (skill && !project.projectSkills.includes(skill)) {
            setProject((prevProject) => ({
                ...prevProject,
                projectSkills: [...prevProject.projectSkills, skill]
            }));
            setSkill("");
        }
    };

    const handleRemoveSkill = (skillToRemove: string) => {
        setProject((prevProject) => ({
            ...prevProject,
            projectSkills: prevProject.projectSkills.filter((item) => item !== skillToRemove)
        }));
    };

    const handleAddProjectIntoList = () => {
        if (isEditing && editingIndex !== null) {
            const updatedProjects = projectList.map((item, index) =>
                index === editingIndex ? project : item
            );
            setProjectList(updatedProjects);
            setIsEditing(false);
            setEditingIndex(null);
        } else {
            setProjectList([...projectList, project]);
        }
        setProject({
            projectName: "",
            projectURL: "",
            projectSkills: [],
            projectDesc: ""
        });
    };

    const handleEditProject = (index: number) => {
        setProject(projectList[index]);
        setIsEditing(true);
        setEditingIndex(index);
    };

    const handleRemoveProject = (indexToRemove: number) => {
        setProjectList(projectList.filter((_, index) => index !== indexToRemove));
    };

    return (
        <>
            <Row>
                <Col>
                    <FormInput
                        label="Project Name"
                        name="projectName"
                        placeholder="Project Name"
                        type="text"
                        value={project.projectName}
                        handleInputChange={handleProjectInfo}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormInput
                        label="Project URL"
                        name="projectURL"
                        placeholder="Project URL"
                        type="text"
                        value={project.projectURL}
                        handleInputChange={handleProjectInfo}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl="11">
                    <FormInput
                        label="Project Technical Skills"
                        name="projectSkills"
                        placeholder="Add a skill"
                        type="text"
                        value={skill}
                        handleInputChange={handleSkillChange}
                    />
                </Col>
                <Col style={{ position: "relative" }}>
                    <button className="bg-warning skill-add-btn" onClick={handleAddSkillToList}>
                        <FontAwesomeIcon icon={faPlus} style={{ height: "16px", width: "16px" }} />
                    </button>
                </Col>
            </Row>

            <Row>
                <Col>
                    {(project.projectSkills || []).map((item) => (
                        <button
                            key={item}
                            className="bg-warning add-in-resume-btn mx-2"
                            style={{ color: "#000042", borderRadius: "4px" }}
                        >
                            {item}
                            <FontAwesomeIcon
                                onClick={() => handleRemoveSkill(item)}
                                className="mx-1"
                                icon={faTimes}
                                style={{ height: "16px", width: "16px" }}
                            />
                        </button>
                    ))}
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormInput
                        type="textarea"
                        label="Project Description"
                        name="projectDesc"
                        value={project.projectDesc}
                        placeholder="Project Description"
                        handleInputChange={handleProjectInfo}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <button className="add-in-resume-btn" onClick={handleAddProjectIntoList}>
                        {isEditing ? "Update Project" : "Add Project"}
                    </button>
                </Col>
            </Row>

            <hr />

            <div>
                {(projectList || []).map((item, index) => (
                    <Card
                        key={index}
                        className="work-experience-company-list-card"
                    >
                        <CardBody>
                            {item.projectName}
                            <FontAwesomeIcon icon={faEdit}
                                onClick={() => handleEditProject(index)}
                                className="resume-summary-list-edit-icon" />
                            <FontAwesomeIcon icon={faTimes}
                                onClick={() => handleRemoveProject(index)}
                                className="resume-summary-list-close-icon" />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default ProjectForm;
