import { useState } from 'react';
import '../styles/Project.css';
import githubIcon from "../assets/github-mark-white.png";
import webIcon from "../assets/webIcon.png";

function Project(props) {

    const [isHover, setIsHover] = useState(false);

    return (
        <section className="project">
            <div className='projectImageDiv' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <img className='projectImage' src={props.imageFile} alt="Project Link"></img>
                {isHover && (
                    <div className='hoverDiv'>
                        <h3 className='projectName'>{props.name}</h3>
                        <div className='hoverDivIcon'>
                            <a href={props.githubLink}>
                                <img className='projectIcon' src={githubIcon} alt="Github Link"></img>
                            </a>
                            <a href={props.deployedLink}>
                                <img className='projectIcon' src={webIcon} alt="Deployed Link"></img>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Project;