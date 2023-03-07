import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  height: 100vh;
`;
const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless Delivery."
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model Y"
        description="Order online for touchless Delivery."
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model 3"
        description="Order online for touchless Delivery."
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model X"
        description="Order online for touchless Delivery."
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money Back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Solar for new Roofs"
        description="Solar Roof costs less than new roof."
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

<Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;
