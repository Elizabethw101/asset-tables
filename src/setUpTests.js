import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import enzyme from 'enzyme'
import ReactTestUtils from 'react-dom/test-utils'
import Adapter from 'enzyme-adapter-react-16'
import {render} from 'react-dom'
import TestRenderer from 'react-test-renderer'
import { renderHook, act } from '@testing-library/react-hooks'


enzyme.configure({
    adapter: new Adapter()
})

global.React = React
global.ReactTestUtils = ReactTestUtils
global.mount = enzyme.mount
global.shallow = enzyme.shallow
global.act = ReactTestUtils.act
global.render = render
global.renderer = TestRenderer
global.renderHook = renderHook
global.actHook = act
