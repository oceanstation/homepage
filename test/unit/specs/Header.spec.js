import Vue from 'vue'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue(Header).$mount()
    expect(vm.$el.querySelector('.logo').textContent)
      .toEqual('OCEAN Station')
  })
})
