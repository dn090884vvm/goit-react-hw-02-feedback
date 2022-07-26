import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 20px;
  color: #000;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.bgLightColor};
  }
`;

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
`;
