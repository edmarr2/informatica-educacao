import { mount } from '@vue/test-utils'
import Title from '../Title.vue'

describe('title component - Unit', () => {
  it('should return instance vue', () => {
    const wrapper = mount(Title,{
      propsData: {
        title: ''
      }
    })

    expect(wrapper.vm).toBeDefined()
  })
  it('should update title component when prop value is changed', async () => {
    const wrapper = mount(Title,{
      propsData: {
        title: ''
      }
    })

    await wrapper.setProps({ title: 'teste123' })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.title).toEqual('teste123')
  })
})