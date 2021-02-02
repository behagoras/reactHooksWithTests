import React from 'react'
import { shallow } from 'enzyme'
import MultipleCustomHooks from './MultipleCustomHooks'
import useFetch from '../../hooks/useFetch'

jest.mock('../../hooks/useFetch')

describe('<MultipleCustomHooks />', () => {
  it('should render correctly', () => {
    useFetch.mockReturnValue({
      loading: true,
      data: null,
      error: null,
    })
    const component = shallow(<MultipleCustomHooks />)
    expect(component).toMatchSnapshot()
  })
  it('should display the information', () => {
    const author = 'author'
    const quote = 'Hello World'
    useFetch.mockReturnValue({
      loading: false,
      data: [{ author, quote }],
      error: null,
    })
    const component = shallow(<MultipleCustomHooks />)

    expect(component.find('.mb-0').text().trim()).toBe(quote.trim())
    expect(component.find('footer').text().trim()).toBe(author.trim())
    expect(component.find('.alert').exists()).toBe(false)
  })
})
