import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 2rem;
`

export const Loading = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--yellow500);
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const ContentHeader = styled.div`
  h2 {
    margin-bottom: 2rem;
  }

  margin-bottom: 2rem;
`

export const ContentBody = styled.div`
  width: 100%;
  flex-grow: 1;

  overflow-y: auto;
  padding-right: 1rem;
`

export const Cards = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  gap: 1.3rem;

  grid-auto-flow: row;

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  }
`
