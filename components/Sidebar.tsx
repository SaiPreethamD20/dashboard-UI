"use client";

import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <Logo>Untitled UI</Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>All files</MenuItem>
        <MenuItem>Private files</MenuItem>
        <MenuItem>Shared with me</MenuItem>
        <MenuItem>Deleted files</MenuItem>
        <MenuItem>Design</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <MenuItem>Settings</MenuItem>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  background-color: #1e1e1e;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #0070f3;
  }
`;

export default Sidebar;
