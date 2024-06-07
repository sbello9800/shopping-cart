import { Col, Row } from 'react-bootstrap'
import '../styles/style.css'

export function Home(){
    return <>
            <Row lg={1} md={1} xs={1}>
                <Col>
                    <div id='oDiv'>
                        <p className="fs-1">
                            San project
                        </p>
                    </div>          
                </Col>
            </Row>
            </>
}