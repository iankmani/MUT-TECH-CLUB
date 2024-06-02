import "../Home/testimonies.css"
import jackson_img from "../../assets/jackson.jpg"
import anita2_img from "../../assets/anita2.jpg"
import bryson_img from "../../assets/bryson.jpg"
import lisa_img from "../../assets/lisa.jpg"
const Testimonies = () => {
    return (
    <div className="testimony" id="Testimonies">
             <h1>Testimonies</h1>
             <div className="testimony-title">
                <h2>what our alumni and current members say</h2>
             </div>
        <div className="testimonials">
             <div className="alumni-image">
                <img src={jackson_img} alt="image of first alumni" className="alumni-image-img" />
             </div>
             <div className="alumni-name">
                <h3>Jackson</h3>
             </div>
             <div className="alumni-description">
                <p>"Being part of the tech club allowed me to connect with industry professionals and peers who have been instrumental in my career growth."</p>
             </div>
             <div className="alumni-image">
                <img src={anita2_img} alt="image of second alumni" className="alumni-image-img" />
             </div>
             <div className="alumni-name">
                <h3>Anita</h3>
             </div>
             <div className="alumni-description">
                <p>The tech club was like a second family, offering a sense of community and belonging that made my college experience more enjoyable.</p>
             </div> <div className="alumni-image">
                <img src={lisa_img} alt="image of third alumni" className="alumni-image-img" />
             </div>
             <div className="alumni-name">
                <h3>Lisa</h3>
             </div>
             <div className="alumni-description">
                <p>"The tech club was a supportive community that boosted my confidence and helped me grow both personally and professionally."</p>
             </div> <div className="alumni-image">
                <img src={bryson_img} alt="image of first alumni" className="alumni-image-img" />
             </div>
             <div className="alumni-name">
                <h3>Bryson</h3>
             </div>
             <div className="alumni-description">
                <p>The tech club helped me land my first job by providing resources for resume building and interview preparation.</p>
             </div>
        </div>    
    </div>

    )
}
export default Testimonies;