<template>
  <div class="Money">
    <h1>Money</h1>

    <button @click="moneyclick">anniu</button>
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
export default class Money extends Vue {
  created(): void {
    console.log("yemain");
  }

  moneyclick(): void {
    console.log("moneyclick");
  }

  mounted(): void {
    // 你可以在mounted钩子函数中调用moneyclick方法，或者在模板中绑定按钮的点击事件时直接调用
    // this.moneyclick();
  }
}
</script>
  