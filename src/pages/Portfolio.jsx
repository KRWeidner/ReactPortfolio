import Project from "../components/Project";

export default function Portfolio() {
    return (
      <div className="row">
        <h1 className="portfolioTitle">Portfolio</h1>
        <Project name = "Text Editor" githubLink= "https://github.com/KRWeidner/TextEditor" deployedLink="https://limitless-waters-24598-61d89d942f85.herokuapp.com/" imageFile="textEditor.png"/> 
        <Project name = "Tech Blog" githubLink= "https://github.com/KRWeidner/TechBlog" deployedLink="https://pacific-coast-73430-825e7c8c5c8d.herokuapp.com/" imageFile="techBlogPic.png"/>
        <Project name = "Waist Management" githubLink= "https://github.com/KRWeidner/WorkoutTracker" deployedLink="https://waist-management-e6142ec4ba30.herokuapp.com" imageFile="wasteMPic.png"/>
        <Project name = "Note Taker" githubLink= "https://github.com/KRWeidner/NoteTaker" deployedLink="https://calm-refuge-53662-63c9a5aa1b1e.herokuapp.com" imageFile="noteTakerPic.png"/>
        <Project name = "Weather Dashboard" githubLink= "https://github.com/KRWeidner/WeatherDashboard" deployedLink="https://krweidner.github.io/WeatherDashboard/" imageFile="weatherPic.png"/>
        <Project name = "Calendar Scheduler" githubLink= "https://github.com/KRWeidner/CalendarSchedulerApp" deployedLink="https://krweidner.github.io/CalendarSchedulerApp/" imageFile="calendarPic.png"/>
      </div>
    );
  }