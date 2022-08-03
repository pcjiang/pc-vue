<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h1 @click="goBack">{{name}}</h1>
  </div>
</template>
<script>
import { toRefs, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  // 组件内守卫
  beforeRouteEnter:(to, from, next) => {
    console.log(1)
    next( vm => {   
      vm.data.routerIndex = from.name
      console.log(vm.data.routerIndex)
    })
  },
  setup() {
    const store = useStore();
    const { name } = toRefs(store.state);
    const router = useRouter()
    let data = reactive({
      routerIndex: ''
    })
    const goBack = () => {
      if(data.routerIndex == 'home'){
        router.go(-1)
      } else {   
        router.go(-3)
      }
    }
    
    const handleClick = () => {
      // store.commit('changeName', 'hello world')
      store.dispatch('getData', 'hello')
    }
    const myToken = computed(() => !this.$store.state.name )
    return { name, handleClick, myToken, data, goBack }
  },
  // computed: {
  //   myName() {
  //     return this.$store.state.name;
  //   }
  // },
  // methods: {
  //   handleClick() {
  //     this.$store.dispatch('change')
  //   }
  // }
}
</script>

