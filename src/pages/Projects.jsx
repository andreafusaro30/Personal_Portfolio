import tito from "../assets/TitoFlyer.png";
import boombox from "../assets/BoomBox.png";
import bugout from "../assets/BugOut.png";

function Projects(){
    return (
        <div className="container mt-5">
            <h1>PROJECTS</h1>

            <div className="row">
                <div className="col-md-4">
                    <div className="card p-3">
                        <h4>Project 1</h4>
                        <h6>A Tribute to the Kings of Salsa and Mambo</h6>
                        <img src={tito} alt="Profile Image" />
                        <p> This is a flyer promoting the "Tribute to the Kings of Salsa and Mambo" performed by Sebastian and his Latin Sound. </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-3">
                        <h4>Project 2</h4>
                        <h6>Boombox </h6>
                        <img src={boombox} alt="Profile Image"  />
                        <p>This is the launch screen of Boombox, an application that allows users to rate, review music from local and global artists and interact with the community.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-3">
                        <h4>Project 3</h4>
                        <h6>Bug Out!</h6>
                        <img src={bugout} alt="Profile Image" />
                        <p>This is a game for bug enthusiasts! Inspired by web-fishing, this game is all about the world of bugs and catching them!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Projects;