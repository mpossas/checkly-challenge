import type { Meta, StoryObj } from '@storybook/vue3'
import Error from './Error.vue'

/** Warns user of an error fetching data. */
const meta = {
  title: 'Error',
  component: Error,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const Checks: Story = {
  args: {
    type: 'checks',
  },
}

export const CheckStats: Story = {
  args: {
    type: 'check-stats',
  },
}
