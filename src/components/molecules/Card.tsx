import * as React from "react";
import styled from "styled-components";
import { INews } from "../../data/type";

interface ICard extends INews {}

export const Card = ({ title, category, date, text, images }: ICard) => {
  const getFirstImage = images && images[0];
  return (
    <CardContainer>
      <img src={getFirstImage} alt="News Images" />
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Text>{text}</Text>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin: 5px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 16px;
  padding: 10px 5px;
`;

const Category = styled.h3`
  padding: 5px;
  color: white;
  background-color: black;
`;

const Date = styled.h4``;

const Text = styled.p``;
