import { Container } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container>
      <div>
        Source code for the API microservice:{" "}
        <a href="https://github.com/jlipe/361_serverless_service">
          https://github.com/jlipe/361_serverless_service
        </a>
      </div>
      <div>
        Source code for the frontend:{" "}
        <a href="https://github.com/jlipe/CS361_frontend">
        https://github.com/jlipe/CS361_frontend
        </a>
      </div>
    </Container>
  );
};

export default AboutPage;
