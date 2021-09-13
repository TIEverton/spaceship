import React, { InputHTMLAttributes } from 'react'
import * as Styled from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

export default function Input({ children, ...props }: InputProps) {
  return <Styled.Container {...props}>{children}</Styled.Container>
}
