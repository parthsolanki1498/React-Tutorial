import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa play React by Stephen Grider"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana was made by Microsoft, unlike ChatGPT"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                description="Please continue with payment to know about your search query result"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App; 