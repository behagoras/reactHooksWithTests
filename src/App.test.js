import { shallow } from 'enzyme'
import React from 'react'
import App from './App'

describe('<App /> ', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
