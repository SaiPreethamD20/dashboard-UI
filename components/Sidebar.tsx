// Sidebar.tsx
"use client";

import React from 'react';
import styled from 'styled-components';
import { FaHome, FaFileAlt, FaUserLock, FaTrashAlt, FaPencilRuler, FaBell, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Container>
      <Logo>Untitled UI</Logo>
      <Menu>
        <MenuItem>
          <FaHome /> Home
        </MenuItem>
        <MenuItem>
          <FaFileAlt /> All files
        </MenuItem>
        <MenuItem>
          <FaUserLock /> Private files
        </MenuItem>
        <MenuItem>
          <FaFileAlt /> Shared with me
        </MenuItem>
        <MenuItem>
          <FaTrashAlt /> Deleted files
        </MenuItem>
        <MenuItem>
          <FaPencilRuler /> Design
        </MenuItem>
        <MenuItem>
          <FaBell /> Notifications
        </MenuItem>
        <MenuItem>
          <FaCog /> Settings
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  svg {
    margin-right: 10px;
  }
`;
