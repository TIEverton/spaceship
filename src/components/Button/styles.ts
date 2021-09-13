import styled from 'styled-components'

export const Container = styled.button`
  margin-top: 3rem;
  padding: 0rem 3em;

  height: 3.438rem;

  border-radius: 10rem;
  border: 1px solid var(--yellow500);
  background-color: var(--black900);

  color: var(--yellow500);
  font-family: 'Space Mono', sans-serif;
  font-weight: bold;

  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--yellow500);
    color: var(--black900);
  }
`
