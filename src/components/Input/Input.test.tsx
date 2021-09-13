import { render, screen } from '@testing-library/react'
import Input from '.'

describe('Input component', () => {
  it('renders correctly', () => {
    render(<Input placeholder="type here..." />)
    expect(screen.getByPlaceholderText('type here...')).toBeInTheDocument()
  })
})
