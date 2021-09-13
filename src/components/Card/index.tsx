import React from 'react'
import * as Styled from './styles'

type CardProps = {
  key?: string
  name: string
  MGLT: string
  stops: number
}

export default function Card({ name, MGLT, stops, ...props }: CardProps) {
  return (
    <Styled.Container {...props}>
      <h4>{name}</h4>
      <div>
        <span>{MGLT} MGLT</span>
        <span>{stops} STOPS</span>
      </div>
    </Styled.Container>
  )
}
