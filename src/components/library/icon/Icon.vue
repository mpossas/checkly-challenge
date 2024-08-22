<template>
  <div v-html="getSvg()" style="display: inline; fill: var(--dashboard-text);" />
</template>

<script setup lang="ts">
import octicons, { type IconName } from '@primer/octicons'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 16,
  }
})

function getSvg () {
  const { name, width } = props
  try {
    return octicons[name as IconName].toSVG({ width })
  } catch (e) {
    throw new Error(`${name} is not an octicon icon`)
  }
}
</script>
