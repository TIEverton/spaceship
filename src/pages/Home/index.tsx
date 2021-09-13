import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'

import * as Styled from './styles'

export default function Home() {
  const history = useHistory()

  function handleChangePage() {
    history.push('/space')
  }

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault()
        handleChangePage()
        // callMyFunction();
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])
  return (
    <Styled.Container>
      <Styled.Header>
        <h1>SPACESHIP</h1>
        <span>a trip to fictional outer space.</span>
        <Button type="button" onClick={() => handleChangePage()}>
          press enter to board
        </Button>
      </Styled.Header>
    </Styled.Container>
  )
}
