import { defineStore } from 'pinia'

export const useHeroStore = defineStore({
  id: 'hero',
  state: () => ({
    heroOutOfView: false
  }),
  actions: {
    updateHeroOutOfView(value) {
      this.heroOutOfView = value
    }
  },
  getters: {
    isHeroOutOfView() {
      return this.heroOutOfView
    }
  }
})
