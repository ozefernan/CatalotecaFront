import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MdWarning } from "react-icons/md";

function FailureComparisonCard(props) {
    const { register, reference } = props;

    return (
        <div className="card border-left-warning h-100 py-2 mb-4">
            <div className="card-body">
                <Row className="no-gutters align-items-center">
                    <Col sm={0} className="text-align-left">
                        <button className="btn btn-tag btn-warning"><MdWarning size={20}/></button>
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-15">
                        { reference }
                    </Col>
                    <Col xs mb={2} className="col-sm mb-sm-0 text-align-left margin-left-20">
                        { register.target }
                    </Col>
                    <Col sm={0} className="align-items">
                        <span className="barra"></span>
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                        Distância <br/>
                        { register.distance }
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                        Similaridade <br/>
                        { register.similarity } %
                    </Col>
                    <Col sm={1} className="text-align-center margin-right-left-20">
                        &Iacute;ndice&nbsp;Jaccard <br/>
                        { register.jaccardIndex } %
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FailureComparisonCard;