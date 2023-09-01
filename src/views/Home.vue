<template>
  <div class="home">
    <HelloWorld msg="传值" />
    <button @click="count++">
      Count is: {{ count }}
    </button>


  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { createApp, ref } from 'vue'



@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  count = 0
  setup() {
    return {
      count: ref(0)
    }
  }

}
</script>
