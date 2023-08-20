//JSX

const react1 = document.getElementById("root");

let element =
(
    <div className="content">
    <div className="up">
    <h1>NOUF JAFARI</h1>
    <p>Frontend Developer</p>
    </div>
    <br></br>

    <div className="down">
    <div className="left-side">

        <h3>DETAILS</h3>
        <br></br>

        <div className="DETAILS"><img src="medal.png" /><h4>Gpa: </h4><p className="colr">4.66</p></div>
        <div className="DETAILS"><img src="phone.png" /><h4>Phone: </h4><p className="colr">+966555035238</p></div>
        <div className="DETAILS"><img src="linkedin.png" /><h4>LinkedIn: </h4><p className="colr">nouf-jafari</p></div>
        <div className="DETAILS"><img src="email.png" /><h4>Email: </h4><a href="" className="colr">engnoufjafari@gmail.com</a></div>

        <br></br>

        <h3>SKILLS</h3>
        <br></br>

        <h4 className="colr">Technical</h4>
        <p>HTML, JavaScript
            CSS, bootstrap
            UI, UX
            Figma</p>
        
            <br></br>

        <h4 className="colr">Softskills</h4>
        <p>Communication</p>
        <p>Leadership</p>
        <p>Teamwork skills</p>
        <p>Problem solving</p>
        <p>Critical thinking</p>

        <br></br>

        <h3>Languages</h3>
        <p className="colr">Arabic</p>        
        <p className="colr">English</p>        
        
        <br></br>

        <h4>LICENSES &
            CERTIFICATIONS</h4>
        <h5>Saudi Council of Engineers
            Membership | Apr 2023 –
            Apr 2024</h5>
        <p className="colr">Membership As Software 
            Engineering Specialist</p>

    </div>

    <hr></hr>

    <div className="right-side">

        <h3>SUMMARY</h3>
        <hr></hr>
        <p>Fresh graduate in Software Engineering with a Bachelor's degree. Passionate about 
            technology. I'm currently looking forward to building my career as a front-end
            developer searching for a well-established, growing organization where I can get the 
            opportunity to improve my abilities, learn and develop my knowledge.</p>

            <br></br>
            <h3>EDUCATION</h3>
            <hr></hr>
            <h4>University of Jeddah | Sep 2018 - Mar 2023</h4>
        <p className="colr">Bachelor’s degree in software engineer</p>

        <br></br>

        <h3>EXPERIENCE</h3>
        <hr></hr>
        <h4>King Saud bin Abdulaziz University for Health Sciences| Jun 2022 – Aug 2022</h4>
        <p className="colr">Trained in IT department learn all about the department (Application, Network, 
            System, and User support) </p>
        <h4>Tuwaiq Academy | Jul 2023 – present</h4>
        <p className="colr">Trained for web development using JavaScript</p>

        <br></br>

        <h3>PROJECTS</h3>
        <hr></hr>

        <h4>University of Jeddah Senior project | Aug 2022 – Feb 2023</h4>
        <h4 className="colr">The little talker</h4>
        <p>“The little talker” is an application that evaluates speech disorders in children in an 
            interactive way using flutter language, voice recognition technology and 3D animation.</p>

        <h4>Tuwaiq Academy projects | Jul 2023 – present</h4>
        <h4 className="colr">Siwar World Test | UI / UX & Figma</h4>
        <p>“Siwar World Test” is a website that did user experience research, Hight / low fidelity
            using Figma, design the user interface using HTML and CSS.</p>

        <h4 className="colr">Movie websites | Bootstrap </h4>
        <p>“Movie websites” is website that display movies and a summary of it.</p>

        <h4 className="colr">Tuwaiq Academy website | HTML CSS </h4>
        <p>“Tuwaiq Academy website” is website that look like the original Tuwaiq Academy.</p>

        <h4 className="colr">Weather API app | JavaScript</h4>
        <p>“Weather API app” is a website that shows the weather in which city you may search.</p>
        

    </div>
    </div>
</div>
);



ReactDOM.render(element, react1);