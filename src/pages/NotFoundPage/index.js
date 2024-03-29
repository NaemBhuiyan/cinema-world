import React from "react";
import { Result, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const getExtraComponents = () => (
    <Button onClick={() => navigate(-1)} type="primary">
      Go Back
    </Button>
  );

  return (
    <Row style={{ height: "100%" }} type="flex" justify="center" align="middle">
      <Col>
        <Result
          status="404"
          title={"404"}
          subTitle={"Sorry, the page you visited does not exist."}
          extra={getExtraComponents()}
        />
      </Col>
    </Row>
  );
}

export default NotFoundPage;
