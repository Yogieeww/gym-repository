import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import ReactCardFlip from "react-card-flip"


function ProjectCards(props) {
  const [isFlipped, setIsFlipped] = useState(false);
   
  return (
    <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
      <Card key="front" className="topic-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {/* {props.description} */}
          </Card.Text>
          <div className="lm-btn" onClick={() => setIsFlipped(true)}>
            <Button target="_blank" className="lm-btn-inner">
              <div className="learnmore__text">
                Learn More <IoIosArrowDropdownCircle />
              </div>
            </Button>
          </div>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        </Card.Body>
      </Card>
      <Card key="front" className="topic-card-view">
        
        <Card.Body>
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div className="lm-btn" onClick={() => setIsFlipped(false)}>
            <Button target="_blank" className="lm-btn-inner">
              <div className="learnmore__text">
                Back <IoIosArrowDropdownCircle />
              </div>
            </Button>
          </div>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        </Card.Body>
      </Card>
    </ReactCardFlip>
  );
}
export default ProjectCards;
