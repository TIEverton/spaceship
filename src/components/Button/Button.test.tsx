import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button type="button">Home</Button>)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
