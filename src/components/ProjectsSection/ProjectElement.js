import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 2000px;
  }

  @media screen and (max-width: 480px) {
    height: 2000px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 5px;
  /* height: 450px; */
  max-height: 450px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ProjectsIcon = styled.img`
  height: 200px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
  padding: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ProjectHeader = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const BtnWrapper = styled.nav`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: flex;
  }

  @media screen and (max-width: 480px) {
    display: flex;
  }
`;

export const ProjectBtn = styled.a`
  /* border-radius: 50px; */
  background: #3f51b5;
  white-space: nowrap;
  padding: 10px 12px;
  color: #fff;
  font-size: 16px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-ease-in-out;
    background: #f44336;
    color: #fff;
  }
`;
