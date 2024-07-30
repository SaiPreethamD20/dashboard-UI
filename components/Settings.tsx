"use client";

import React from 'react';
import styled from 'styled-components';

const Settings = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>Security</SectionTitle>
        <Content>
          <SecurityStatus>
            <StatusText>Your account security is 90%</StatusText>
            <StatusButton>Review security</StatusButton>
          </SecurityStatus>
          <SecurityDetails>
            <DetailItem>
              <DetailTitle>Basics</DetailTitle>
              <DetailContent>
                <Label>Password</Label>
                <Value>********</Value>
              </DetailContent>
            </DetailItem>
            <DetailItem>
              <DetailTitle>Two-step verification</DetailTitle>
              <DetailContent>
                <Label>Enabled</Label>
              </DetailContent>
            </DetailItem>
            <DetailItem>
              <DetailTitle>Browsers and devices</DetailTitle>
              <DetailContent>
                <Label>Brave on Mac OS X</Label>
                <Location>Ninh Binh, Vietnam</Location>
                <Label>Mia's MacBook Pro</Label>
                <Location>Ninh Binh, Vietnam</Location>
                <Label>Brave on Mac OS X</Label>
                <Location>Mexico City, Mexico</Location>
                <Label>Mia's MacBook Pro</Label>
                <Location>Mexico City, Mexico</Location>
              </DetailContent>
            </DetailItem>
          </SecurityDetails>
        </Content>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  background-color: #2e2e2e;
  padding: 20px;
  border-radius: 8px;
`;

const SecurityStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StatusText = styled.div`
  font-size: 18px;
`;

const StatusButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SecurityDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailItem = styled.div`
  margin-bottom: 20px;
`;

const DetailTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Label = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Value = styled.span`
  font-size: 14px;
  color: #888;
`;

const Location = styled.span`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
`;

export default Settings;
