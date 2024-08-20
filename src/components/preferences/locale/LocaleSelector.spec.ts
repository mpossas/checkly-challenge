import { mountComponent } from "@/utils/tests"
import i18n from '@/config/i18n'
import LocaleSelector from "./LocaleSelector.vue"

describe('LocaleSelector', () => {
  it('updates locale when seleting an option', async () => {
    const wrapper = mountComponent(LocaleSelector)

    expect(i18n.global.locale.value).toBe('en')

    await wrapper.find('select').setValue('pt')

    expect(i18n.global.locale.value).toBe('pt')
  })
})
