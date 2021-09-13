import { render, screen } from '@testing-library/react'
import Card from '.'

describe('Card component', () => {
  it('should render name', () => {
    render(<Card name="Y-wing" MGLT="80" stops={74} />)
    expect(screen.getByText('Y-wing')).toBeInTheDocument()
  })
  it('should render MGLT', () => {
    render(<Card name="Y-wing" MGLT="80" stops={74} />)
    expect(screen.getByText('80 MGLT')).toBeInTheDocument()
  })
  it('should render stops', () => {
    render(<Card name="Y-wing" MGLT="80" stops={Math.floor(1000000 / (168 * 80))} />)
    expect(screen.getByText('74 STOPS')).toBeInTheDocument()
  })
})
