import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NameAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      firstName,
      lastName,
      title,
      streetAddress,
      cityStateZip,
      email,
      phone,
    } = this.props.personalData;

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
}

export default Header;
