<template>
  <section id="minerInfo">
    <div class="container">
      <div class="columns is-mobile has-text-centered">
        <div class="column is-6">
          <h2>Speed</h2>
          <div><span id="gpu-c" class="tag is-primary is-large" v-if="settings.mineWith.includes('gpu')">GPU: {{Math.round(miner.gpuSpeed.nvidia + miner.gpuSpeed.amd)}} Kh/s</span></div>
        </div>
        <div class="column is-6">
          <h2>Shares</h2>
          <div><span id="shares-c" class="tag is-info is-large">{{miner.shares.nvidia + miner.shares.amd}}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      settings: state => state.Settings,
      miner: state => state.Miner,
    }),
  },
};
</script>

<style lang="scss">

  #gpu-c {
    background-color: rgb(3, 61, 53);
    color: white;
  }
  #shares-c {
    background-color: rgb(3, 61, 53);
    color: white;
  }
  #minerInfo {
    margin-top: 20px;
  }
</style>
