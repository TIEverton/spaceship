import React, { ButtonHTMLAttributes } from 'react'
import * as Styled from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button' | 'reset'
  children: React.ReactNode
}

export default function Button({ type, children, ...props }: ButtonProps) {
  return (
    <Styled.Container {...props} type={type}>
      {children}
    </Styled.Container>
  )
}
