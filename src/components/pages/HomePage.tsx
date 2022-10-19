import React from "react";
import styled from "styled-components";

import { news } from "../../data/news";
import { Card } from "../molecules/Card";

import PassCultureLogo from "../atom/SVG/logo-pass-culture.svg";

export const HomePage = () => {
  return (
    <>
      <Header><Logo src={PassCultureLogo} alt="Pass Culture Logo" /></Header>
      <SectionContainer>
        {news.map((n) => {
          return (
            <Card
              title={n.title}
              category={n.category}
              date={n.date}
              text={n.text}
              images={n?.images}
            />
          );
        })}
      </SectionContainer>
    </>
  );
};

const Header = styled.header`
height: 10vh;
margin-bottom: 10px;
`;

const Logo = styled.img`
height: 100%;
width: auto
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
