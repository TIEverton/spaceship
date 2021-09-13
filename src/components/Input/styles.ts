import styled from 'styled-components'

export const Container = styled.input`
  height: 3.438rem;
  padding: 0rem 1rem;

  background-color: transparent;
  outline: none;
  border: 1px solid var(--yellow500);
  color: var(--yellow500);

  &::placeholder {
    color: var(--yellow500);
  }
`
