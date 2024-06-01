import collab_img from "../AboutUs/assets/collaboration.jpg"
import innovation_img from "../AboutUs/assets/innovation.jpg"
import excellence_img from "../AboutUs/assets/excellence.jpg"
import inclusivicity_img from "../AboutUs/assets/inclusivicity.jpg"
import community_engagement_img from "../AboutUs/assets/community.jpg"
import technology_img from "../AboutUs/assets/technology.jpg"
import "../AboutUs/AboutUs.css"
const AboutUs = () => {
    return (
        <div className="About-us">
            <h1>About Us</h1>
            <h3 className="menu-item-title">our mission</h3>
            <div className="mission-item">
                
                <p className="menu-item-description">The Muranga University Technology Club (MUTC) is dedicated to fostering technological learning and innovation among its members. Our mission is to create an inclusive environment where students can explore emerging technologies, develop practical skills, and collaborate on projects that solve real-world problems.</p>
                <img src={technology_img} alt="picture showing people doing a mission" className="value-item-image"/>
            </div>

            <h3 className="value-list-title">values</h3>
            <div className="value-item-container">
                <div className="value-item">
                    <div className="value-item-image">
                        <img src={innovation_img} alt="innovation" className="value-item-image-img" />
                    </div>
                    <h2 className="value-item-title">Innovation</h2>
                    <p className="value-item-description">Encouraging creative thinking and the development of cutting-edge technological solutions.</p>
                </div>
                <div className="value-item">
                    <div className="value-item-image">
                        <img src={collab_img} alt="collaboration" className="value-item-image-img" />
                    </div>
                    <h2 className="value-item-title">collaboration</h2>
                    <p className="value-item-description">Promoting teamwork and knowledge-sharing among members to enhance learning and project success.</p>
                </div>
                <div className="value-item">
                    <div className="value-item-image">
                        <img src={excellence_img} alt="" className="value-item-image-img" />
                    </div>
                    <h2 className="value-item-title">Excellence</h2>
                    <p className="value-item-description">Striving for high standards in all activities, from workshops to competitions.</p>
                </div>
                <div className="value-item">
                    <div className="value-item-image">
                        <img src={inclusivicity_img} alt="" className="value-item-image-img" />
                    </div>
                    <h2 className="value-item-title">Inclusivisity</h2>
                    <p className="value-item-description">Ensuring all students, regardless of background or skill level, have the opportunity to participate and learn.</p>
                </div>
                <div className="value-item">
                    <div className="value-item-image">
                        <img src={community_engagement_img} alt="" className="value-item-image-img" />
                    </div>
                    <h2 className="value-item-title">Community Engagement</h2>
                    <p className="value-item-description">Building connections with industry professionals and contributing to local and global tech communities.</p>
                </div>
            </div> 
            <h3 className="value-list-arrangement">values</h3>
            </div>
            
            
            
           
            
        
    )
}
export default AboutUs;