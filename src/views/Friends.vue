<template>
  <div class="Friends">
    <h1>Friends</h1>
    <div v-for=" item in arr" :key="item">{{ item }}</div>


    
  </div>
</template>
  
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
@Options({
  components: {
    HelloWorld
  }
})
export default class Friends extends Vue {
  $store: any;
  get arr() {
    return this.$store.state.arr;
  }
  created(): void {
    this.vuexclick();
  }

  vuexclick() {
    this.$store.commit("updateArr", ["a", "b"]);
  }
}
</script>

  