import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const nameTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const contactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Header extends Component {
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
        <nameTitleWrapper>
          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
          <span>{title}</span>
        </nameTitleWrapper>
        <contactWrapper>
          <span>{streetAddress}</span>
          <span>{cityStateZip}</span>
          <span>{email}</span>
          <span>{phone}</span>
        </contactWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;
