import { Card } from "react-bootstrap";
import Bank from "./HNB_preview_rev_1.png";
import "./styles.css";

export default function Home() {
  return (
    <div class="bankimg">
      <Card class="card" style={{ width: "20rem" }}>
        <Card.Img class="card_body" variant="top" src={Bank} />
        <Card.Body class="body">
          <Card.Title class="head">Welcome To,</Card.Title>
          <Card.Title class="head">Magyar Nemzeti Bank</Card.Title>
          <Card.Text class="text">
            The Bank Help You When You Need. You Can Explore Around Using The
            Navigation Bar. Create And Explore Your Account .
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
