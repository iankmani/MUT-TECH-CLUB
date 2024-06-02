import "../Tracks/Tracks.css"
import cyberSecurity_img from "../../assets/cyberSecurity.jpg"
import interface_img from "../../assets/ui-ux.jpg"
import cloudEngineering_img from "../../assets/cloudEngineering.jpg"
import mobileApp_img from "../../assets/mobileApp.jpg"
import powerPlatform_img from "../../assets/powerPlatform.jpg"
import webDev_img from "../../assets/webDevelopment.jpg"
const Tracks = () => {
    return(
    <div className="tracks">
             <h1>Tracks</h1>
        <div className="track-container">     
             <div className="track-title">
                <h3>Cyber security</h3>
                </div>
                <div class="track-image">
                 <img src={cyberSecurity_img} alt="cyberSecurity_img" class="track-image-img" />
                </div>
                <div className="track-description">
                    <p>Cyber security is the practice of protecting systems, networks, and programs from cyber attacks. These attacks
                    are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users</p>
                    </div>
                     <div className="track-title">
                <h3>UI/UX design</h3>
                </div>
                <div class="track-image">
                  <img src={interface_img} alt="User Interface" class="track-image-img" />
                </div>
                <div className="track-description">
                    <p>Combining UI and UX design principles ensures that the product not only looks good but also provides a meaningful and enjoyable experience for users. A well-designed interface that prioritizes user experience can significantly impact the success and adoption of a product.</p>
                    </div>
                    {/* <a href="" className="track-cta">learn more &rarr;</a>  */}
                    <div className="track-title">
                <h3>Web development</h3>
                </div>
                <div class="track-image">
                  <img src={webDev_img } alt="Web Development" class="track-image-img" />
                </div>
                <div className="track-description">
                    <p>Web development is the process of building and maintaining websites and web applications. It encompasses several aspects, including web design, web programming, database management, and web server configuration.</p>
                    </div> 
                    <div className="track-title">
                <h3>Mobile apps development</h3>
                </div>
                <div class="track-image">
                  <img src={mobileApp_img} alt="Mobile Application" class="track-image-img" />
                </div>
                <div className="track-description">
                    <p>Mobile app development involves creating software applications that run on mobile devices such as smartphones and tablets. This process includes designing, coding, testing, and deploying applications to platforms like iOS and Android.</p>
                    </div> 
                    <div className="track-title">
                <h3>Cloud engineering</h3>
                </div>
                <div class="track-image">
                  <img src={cloudEngineering_img} alt="Cloud enginnering" class="track-image-img" />
                </div>
                <div className="track-description">
                    <p>Cloud engineering involves designing, deploying, and managing applications and services in cloud environments. It leverages cloud computing technologies to provide scalable, reliable, and cost-effective solutions for businesses.</p>
                    </div> 
                    <div className="track-title">
                <h3>Power Platform</h3>
                </div>
                <div class="track-image">
                  <img src={powerPlatform_img} alt="Power Platform" class="track-image-img" />
                </div>
                <div className="track-description">
                    <p>Microsoft Power Platform is a suite of applications, connectors, and data platforms that provides a low-code/no-code environment to build apps, automate workflows, and analyze data. It enables users to create solutions that integrate seamlessly with Microsoft 365, Azure, Dynamics 365, and other third-party services.</p>
                    </div> 

        </div>
     
</div>
    )
}


export default Tracks;