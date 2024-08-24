import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import ToggleButtons from './ToggleButtons.vue'

const meta = {
  title: 'ToggleButtons',
  component: ToggleButtons,
  parameters: { docs: { description: { component: 'Buttons to toggle between options' } } },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onChange: fn()
  },
} satisfies Meta<typeof ToggleButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Charts: Story = {
  args: {
    options: [
      'response-time',
      'success-ratio'
    ],
  },
}
