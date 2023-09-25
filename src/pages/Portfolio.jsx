import Project from "../components/Project";

export default function Portfolio() {
    return (
      <div className="row">
        <h1 className="portfolioTitle">Portfolio</h1>
        <Project name = "Text Editor" githubLink= "https://github.com/KRWeidner/TextEditor" imageFile="textEditor.png"/> 
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    );
  }