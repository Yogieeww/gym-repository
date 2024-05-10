import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FAQ from "../Components/FAQ";

const FAQs = () => {
  return (
    <Container fluid className="faqs-section">
      <Container className="faqs-content">
        <h2>
          <strong style={{ color: "#14ff8e" }}>FAQ</strong>'s
        </h2>
        <Row
          style={{
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          <Col md={6} className="faqs-strip">
            <FAQ
              question="How old do I have to be to join Fitness?"
              answer="To join you must be 16 years old and above. We will only entertain members under 16 if they are obese, are under doctor advisement and take up personal training. All membership agreements for children under 16 years of age need to be authorised and signed by a legal guardian."
            />
          </Col>
          <Col md={6} className="faqs-strip">
            <FAQ
              question="How much is membership at Fitness First?"
              answer="Membership rates vary depending on the type of package that is best suited for you. Please contact your preferred Fitness First club where our staff will be happy to discuss the various membership options available"
            />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          <Col md={6} className="faqs-strip">
            <FAQ
              question="How can I measure my progress?"
              answer="When you start a fitness routine, you want to see results. Whether you’re looking to feel more confident, improve your strength, or simply feel healthier, it can help to know if you’re making progress. Think about what your unique goals are and how those would be best measured. If you’re wanting to build strength with progressive overload, you could use the Sweat app to keep track of the weights you’re lifting. If you’re wanting to feel more confident and healthy, you could use a journal to record how you’re feeling. If you’re wanting to build endurance, you could complete regular fitness challenges and track your progress."
            />
          </Col>
          <Col md={6} className="faqs-strip">
            <FAQ
              question="Can I really transform myself in 3 months?"
              answer=" A 100%! You can make a significant change in 3 months. However, if your goal is unrealistic to achieve in a short span of time, you will be informed about it in advance. We will, however, achieve maximum achievable and realistic progress in 3 months."
            />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          <Col md={6} className="faqs-strip">
            <FAQ
              question="How do I stay motivated to work out?"
              answer="Maybe you were feeling excited to start your new routine, but now that feeling has worn off after a few weeks. That’s normal and you’re not alone. Your fitness journey will have highs and lows, and some days it will feel much harder to get moving."
            />
          </Col>
          <Col md={6} className="faqs-strip">
            <FAQ
              question="How often should i exercise?"
              answer="This comes down to your goals, lifestyle and current fitness level. For those who are new or returning to exercise, aiming for two to three workouts each week is a great place to start to build your fitness while giving your body time to recover. Once that’s feeling easier, you can add more workouts to your weekly schedule! When your fitness increases, you might be doing between four and six workouts each week."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FAQs;
