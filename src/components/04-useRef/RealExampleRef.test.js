import { shallow } from 'enzyme'
import React from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import RealExampleRef from './RealExampleRef'

describe('<RealExampleRef />', () => {
  it('should render correctly', () => {
    const component = shallow(<RealExampleRef />)
    expect(component).toMatchSnapshot()
    expect(component.find(MultipleCustomHooks).exists()).toBe(false)
  })
  it('should display the component <MultipleCustomHooks />', () => {
    const component = shallow(<RealExampleRef />)
    component.find('button').simulate('click')
    expect(component.find(MultipleCustomHooks).exists()).toBe(true)
  })
})
