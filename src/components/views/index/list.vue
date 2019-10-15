<template>
  <div>
    <ul>
      <li v-for="item in 5" :key="item" @click="onEmit(item)">
        列表：{{ dd }}：：name:{{ prosdata.name }}{{ item }},age:{{
          prosdata.age + item
        }}
      </li>
    </ul>
    <div>{{ storeTest }}</div>
    <div>{{ storeTestGetter }}</div>
    <div>{{ modulesAstate }}</div>
    <listChild />
  </div>
</template>
<script lang="ts">
import listChild from './listChild.vue';
import { indexProps } from '../../../interface';
import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
const modAState = namespace('modA', State);
const modAMutation = namespace('modA', Mutation);
@Component({
  components: { listChild },
})
export default class List extends Vue {
  @State storeTest;
  @Getter storeTestGetter;
  @Mutation('editStoreTest') editStoreTestFn;
  @modAState modulesAstate;
  @modAMutation('editModAState') editModAStateFn;
  dd: String = 's';
  @Prop({ type: Object, default: {} })
  prosdata: indexProps | undefined;
  @Emit('onemit')
  onEmit(item): number {
    this.dd += item;
    return item; // 返回的值会当做父组件该方法的参数
  }
  @Watch('dd')
  watchDD(val: string): void {
    console.log('watchDD', val);
  }
  mounted() {
    this.editStoreTestFn('sss');
    setTimeout(() => {
      this.editModAStateFn('dddddd');
    }, 3000);

    enum eBuffConfig {
      profession = 'profession',
      race = 'race',
    }

    // enum Color {
    //   blue = 'blue',
    //   green = 'green'
    // }
    // let c: Color = Color.blue;
    // console.log('::::', c);
  }
}
</script>
<style lang="scss" scoped>
li {
  cursor: pointer;
  height: 40px;
  border: solid 1px #ccc;
}
</style>
