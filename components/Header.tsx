// /components/Header.tsx
"use client";

import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Profile>Mia de Silva</Profile>
      <Actions>
        <InviteButton>Invite</InviteButton>
        <UpgradeButton>Upgrade</UpgradeButton>
        <ProfileButton>Profil</ProfileButton>
      </Actions>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Profile = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const InviteButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

const UpgradeButton = styled.button`
  background-color: #ffc107;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

const ProfileButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
