"use client";

import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title>Mia de Silva</Title>
      <ButtonGroup>
        <Button>Invite</Button>
        <UpgradeButton>Upgrade</UpgradeButton>
        <ProfileImage src="/profile.jpg" alt="Profile" />
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1e1e1e;
  border-bottom: 1px solid #333;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const UpgradeButton = styled(Button)`
  background-color: #f39c12;
  &:hover {
    background-color: #e67e22;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default Header;
