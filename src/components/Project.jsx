import { useState } from 'react';
import '../styles/Project.css';

function Project(props) {

    const [isHover, setIsHover] = useState(false);

    return (
        <section className="project">
            <div className='projectImageDiv' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <img className='projectImage' src={`src/assets/${props.imageFile}`} alt="Project Link"></img>
                {isHover && (
                    <div className='hoverDiv'>
                        <h3 className='projectName'>{props.name}</h3>
                        <div className='hoverDivIcon'>
                            <a href={props.githubLink}>
                                <img className='projectIcon' src="src/assets/github-mark-white.png" alt="Github Link"></img>
                            </a>
                            <a href={props.deployedLink}>
                                <img className='projectIcon' src="src/assets/webIcon.png" alt="Deployed Link"></img>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Project;