import type { Meta, StoryObj } from '@storybook/vue3'
import { fn, within, userEvent } from '@storybook/test'
import SearchBar from './SearchBar.vue'

/**
 * A search bar with keyboard activation, active resizing, and a clear button.
 * */
const meta = {
  title: 'Search Bar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onInput: fn()
  },
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {}
}

export const WithContent: Story = {
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
  render: () => ({
    components: { SearchBar },
    template: '<SearchBar />'
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByRole('searchbox'), 'Browser checks')
  }
}
