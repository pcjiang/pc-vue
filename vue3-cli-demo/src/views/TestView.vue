<template>
  <TestChildren 
   :userName="userName"
  >
  </TestChildren>
</template>

<script>
import TestChildren from '@/component/TestChildren.vue';
import { ref,  } from 'vue';

export default {
  name: 'TestView',
  components: {
    TestChildren
  },
  setup() {
    const userName = ref('dell')
    return { userName }
  },
  mounted() {
    // console.log(this.$route.query.username)
  },
}
</script>

<style scoped>
</style>>

