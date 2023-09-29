import Project from "../components/Project";
import textEditor from "../assets/textEditor.png";
import techBlogPic from "../assets/techBlogPic.png";
import wasteMPic from "../assets/wasteMPic.png";
import noteTakerPic from "../assets/noteTakerPic.png";
import weatherPic from "../assets/weatherPic.png";
import calendarPic from "../assets/calendarPic.png";

export default function Portfolio() {
    return (
      <div className="row">
        <h1 className="portfolioTitle">Portfolio</h1>
        <Project name = "Text Editor" githubLink= "https://github.com/KRWeidner/TextEditor" deployedLink="https://limitless-waters-24598-61d89d942f85.herokuapp.com/" imageFile={textEditor}/> 
        <Project name = "Tech Blog" githubLink= "https://github.com/KRWeidner/TechBlog" deployedLink="https://pacific-coast-73430-825e7c8c5c8d.herokuapp.com/" imageFile={techBlogPic}/>
        <Project name = "Waist Management" githubLink= "https://github.com/KRWeidner/WorkoutTracker" deployedLink="https://waist-management-e6142ec4ba30.herokuapp.com" imageFile={wasteMPic}/>
        <Project name = "Note Taker" githubLink= "https://github.com/KRWeidner/NoteTaker" deployedLink="https://calm-refuge-53662-63c9a5aa1b1e.herokuapp.com" imageFile={noteTakerPic}/>
        <Project name = "Weather Dashboard" githubLink= "https://github.com/KRWeidner/WeatherDashboard" deployedLink="https://krweidner.github.io/WeatherDashboard/" imageFile={weatherPic}/>
        <Project name = "Calendar Scheduler" githubLink= "https://github.com/KRWeidner/CalendarSchedulerApp" deployedLink="https://krweidner.github.io/CalendarSchedulerApp/" imageFile={calendarPic}/>
      </div>
    );
  }