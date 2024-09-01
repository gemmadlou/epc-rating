import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EPCRating from './EPCRating.vue'

describe('EPCRating', () => {
  it('renders properly', () => {
    const wrapper = mount(EPCRating, {
      props: {
        currentScore: 72,
        potentialScore: 79
      }
    })
    expect(wrapper.find('.epc-energy-rating-graph').exists()).toBe(true)
  })

  it('displays correct current rating', () => {
    const wrapper = mount(EPCRating, {
      props: {
        currentScore: 72,
        potentialScore: 79
      }
    })
    expect(wrapper.find('.rating-current text').text()).toBe('72 C')
  })

  it('displays correct potential rating', () => {
    const wrapper = mount(EPCRating, {
      props: {
        currentScore: 72,
        potentialScore: 79
      }
    })
    expect(wrapper.find('.rating-potential text').text()).toBe('79 C')
  })

  it('updates when props change', async () => {
    const wrapper = mount(EPCRating, {
      props: {
        currentScore: 72,
        potentialScore: 79
      }
    })
    
    await wrapper.setProps({ currentScore: 85, potentialScore: 90 })
    expect(wrapper.find('.rating-current text').text()).toBe('85 B')
    expect(wrapper.find('.rating-potential text').text()).toBe('90 B')
  })
})