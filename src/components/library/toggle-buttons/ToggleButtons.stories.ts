import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import ToggleButtons from './ToggleButtons.vue'

/** Buttons for choosing between a set of options. */
const meta = {
  title: 'Toggle Buttons',
  component: ToggleButtons,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onChange: fn()
  },
} satisfies Meta<typeof ToggleButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Metrics: Story = {
  args: {
    options: [
      'response-time',
      'success-ratio'
    ],
  },
}
