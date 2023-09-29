import '../styles/Resume.css';

export default function Resume() {
    return (
        <div className='resumeForm'>

            <div className="resumeHeader">
                <h1>Resume</h1>
            
            <a href="src\assets\Resume.txt" download>
                <img className='iconDownload' src="src\assets\downloadIcon.png" alt="Download Icon"></img>
            </a>
            </div> 
            <section className='resumeSection'>
                <div>
            <h3 >Front End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
            </ul>
            </div>
            <div>
            <h3>Back End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>SQL</li>
                <li>NoSQL</li>
            </ul>
            </div>
            </section>
            
        </div>
    );
}