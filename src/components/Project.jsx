import '../styles/Project.css';

function Project(props) {
    return (
      <section className="project">
        <a href="https://github.com/KRWeidner">
            <img className='projectImage' src= {`src/assets/${props.imageFile}`} alt="Project Link"></img>
        </a>
      </section>
    );
  }
  
  export default Project;