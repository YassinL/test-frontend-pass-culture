import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { news } from "../../data/news";
import { Card } from "../molecules/Card";

import PassCultureLogo from "../atom/SVG/logo-pass-culture.svg";
import { Select } from "../atom/Select";

export const HomePage = () => {
  const [value, setValue] = useState("Select an option");

  // To avoid duplicates, map on news and set a new array
  const categoryOptions = news?.map((n) => n.category);
  const categoryOptionsWithoutDuplicates = Array.from(new Set(categoryOptions));

  const filterOnCategory = useMemo(() => {
    if (value === "Select an option") {
      return news;
    }
    return news.filter((n) => {
      return n.category === value;
    });
  }, [value]);

  return (
    <>
      <Header><Logo src={PassCultureLogo} alt="Pass Culture Logo" /></Header>
      <Select
        options={categoryOptionsWithoutDuplicates}
        value={value}
        onChange={setValue}
        label="Filter on Category"
        id="category"
      />
      <SectionContainer>
        {filterOnCategory.map((actuality) => {
          return (
            <Card
              title={actuality.title}
              category={actuality.category}
              date={actuality.date}
              text={actuality.text}
              images={actuality?.images}
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
