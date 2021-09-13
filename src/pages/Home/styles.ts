import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Header = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--yellow500);

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`
