import { Col, Row } from "react-bootstrap"
import "../styles/style.css"

export function About(){
    const phrase: string = "By choosing us you are not only acquiring a garment but an experience, from the personalized attention, selected materials and highly tailored garments you are having a different lifestyle and every aspect of our brand is designed to offer you an experience of luxury and exclusivity. “In order to be irreplaceable one must always be different”."

    return (<>

            <Row md={3} lg={2} xs={1}>
                <Col>
                <div id="phrDiv">
                    <p className="fs-1">About San Project</p>   
                    {phrase}
                    </div>
                </Col>
                <Col id="imgCol"><img src="../../images/img2GirlsSPBlessed.jpeg" id="photo"/></Col>
            </Row>

    </>)
    

}