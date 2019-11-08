import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MdCompareArrows } from "react-icons/md";

export default function comparisonRow(props) {
    const { results } = props;
    return results.map(r => 
        (
            <Row className="no-gutters align-items-center">
                <Col sm={1} className="text-align-left">
                    <MdCompareArrows size={32} />
                </Col>
                <Col
                    sm={5}
                    className="col-sm mb-sm-0 text-align-left margin-left-15"
                >
                    { r.target }
                </Col>
                <Col sm={1} className="align-items" />
                <Col sm={1} className="text-align-center">
                    Distância <br />
                    { r.distance }
                </Col>
                <Col sm={1} className="text-align-center">
                    Similaridade <br />
                    { r.similarity } %
                </Col>
                <Col sm={1} className="align-items" />
                <Col sm={1} className="text-align-center">
                    Jaccard <br />
                    { r.jaccardIndex } %
                </Col>
            </Row>
        )
    );
}