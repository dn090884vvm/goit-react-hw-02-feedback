import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 500px;
  height: auto;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  box-shadow: ${props => props.theme.colors.boxShadow};
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
