<template>
  <li class="k-item" @click="$emit(click, e)">
    <div
      :class="{
        'k-item': true,
        'k-state-focused': focused,
      }"
      @click="onItemClicked"
    >
      <h6>{{ dataItem.ProductName }}</h6>
      <div>{{ dataItem.QuantityPerUnit }}</div>
    </div>
  </li>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  name: "AutoCompleteItem",
})
export default class AutoCompleteItem extends Vue {
  @Prop() private readonly dataItem!: any;
  @Prop() private readonly focused!: boolean;

  onItemClicked(evt: any) {
    this.$emit("click", evt);
  }
}
</script>