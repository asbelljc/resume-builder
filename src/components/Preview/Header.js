import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 42px;
  }

  span {
    font-size: 24px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
  }
`;

function Header({ personalData }) {
  const {
    firstName,
    lastName,
    title,
    streetAddress,
    cityStateZip,
    email,
    phone,
  } = personalData;

  return (
    <HeaderWrapper>
      <NameAndTitleWrapper>
        <h1>
          {firstName.toUpperCase()}
          <br />
          {lastName.toUpperCase()}
        </h1>
        <span>{title}</span>
      </NameAndTitleWrapper>
      <ContactWrapper>
        <span>{streetAddress}</span>
        <span>{cityStateZip}</span>
        <span>{email}</span>
        <span>{phone}</span>
      </ContactWrapper>
    </HeaderWrapper>
  );
}

export default Header;
