<template>
  <div class="content">
    <h3>{{ msg }}</h3>
    <List
      :prosdata="indexProp"
      @onemit="onemit"
    />
    <router-view />
  </div>
</template>
<script lang="ts">
// import { toast } from 'utilsJs';
// import config from 'config';
import { Component, Vue } from 'vue-property-decorator';
import List from './list.vue';
import { toast } from '../../../common/js/utils';
import config from '../../../config/dev';
import { indexProps } from '../../../interface/index';
@Component({
  components: { List }
})
export default class Index extends Vue {
  msg: string = 'welcome to ts';
  indexProp: indexProps = { name: 'anne', age: 22 };
  onemit (item: number): void {
    console.log('onemit', item);
  }
  mounted () {
    toast();
    console.log('::config', config);
  }
}
</script>
<style lang="scss">
@import url('~@/common/css/utils.scss');
</style>

<style lang="scss" scoped>
.content {
  text-align: center;
  padding-top: 120px;
}
</style>
