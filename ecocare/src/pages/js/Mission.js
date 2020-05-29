import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../css/Mission.css';
import Nav from "../../components/js/Nav.js";

import Home from "./Home";
import Team from "./Team";
import ContactPage from "./ContactPage";

export default function Mission() {

    return (
        
        <div className="mission"> 
          <Nav/>

          <div className="main-page">
            <h1>OUR MISSION</h1>
            <div className="line" />
            <div className="first-section">
            <h2>Donec eget lectus dictum</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis sollicitudin velit sed pulvinar. Nulla facilisi. Nunc laoreet nibh ac ligula pharetra cursus. Nam sed dui id neque ultrices venenatis. Cras non ullamcorper nunc. Nullam sollicitudin tellus elit, ac interdum nunc auctor a. Ut semper sit amet velit eu vehicula. Fusce facilisis, magna dignissim semper ullamcorper, velit neque tempor turpis, sed tincidunt justo metus in justo.            </p>
            <div className="image1" />
            <p>
            Morbi fermentum lacus diam, sit amet condimentum nisi maximus sed. Mauris orci velit, imperdiet at quam sit amet, pellentesque interdum lectus. Etiam aliquet id massa non fringilla. Duis varius leo diam, id lacinia nunc laoreet eget. Cras a facilisis nunc, non efficitur massa. Suspendisse mattis, dui non tempus pulvinar, dolor mi euismod tortor, quis efficitur turpis libero sed magna. Nulla sed hendrerit metus, at bibendum leo. Integer risus eros, sodales et libero nec, fermentum varius velit. Phasellus sem arcu, suscipit non laoreet at, imperdiet quis mauris. Sed luctus auctor nibh, ut pretium sem porttitor non. Phasellus in orci id lacus placerat imperdiet in gravida est.            </p>

            <h2> Maecenas sed placerat dui</h2>
            </div>
            <div className="second-section">
                <p>
                Proin tempus turpis ut magna commodo, congue varius leo tempus. Maecenas nec quam ex. Donec faucibus pretium condimentum. Vestibulum ac venenatis nisl. Mauris in scelerisque purus. Nullam mattis et metus a dapibus. Sed nisi leo, efficitur euismod consectetur et, gravida ut nulla. Aliquam suscipit, orci nec accumsan condimentum, felis orci pharetra lorem, ut efficitur odio lorem at libero. Ut rhoncus vehicula elit id dapibus. Donec ullamcorper neque eget urna maximus efficitur. Aenean elit mi, tincidunt ac quam id, faucibus molestie risus. Praesent suscipit varius lacinia. Nam fermentum metus sit amet felis imperdiet, a maximus enim convallis. Vestibulum luctus nec sapien at mollis. Duis viverra, tellus non porttitor tincidunt, magna metus congue turpis, vel convallis dolor ligula imperdiet dolor. Cras id lorem lorem.                </p>
                <div className="image2" /> 
            </div>
          </div>

        </div>

        
    );
 }
