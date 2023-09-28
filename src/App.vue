<template>
  <div id="app">
    <!-- <div>
      <auto-complete
        placeholder="Product"
        :data-items="products"
        v-model="selectedValue"
        text-field="ProductName"
        suggest
      >
      </auto-complete>
    </div> -->
    <div style="margin-top: 20px">
      <auto-complete
        placeholder="Product"
        :data-items="products"
        v-model="selectedValue"
        text-field="ProductName"
        list-no-data-render="nodata"
        item-render="item"
        suggest
      >
        <template #nodata><span>No data found</span></template>
        <template #item="{ props }">
          <auto-complete-item
            :data-item="props.dataItem"
            :focused="props.focused"
          />
        </template>
      </auto-complete>
      <button @click="products = []">Remove products</button>
      <button @click="resetProducts">Add products</button>
    </div>
  </div>
</template>

<script>
import products from "./assets/products";

import AutoCompleteItem from "./components/AutoCompleteItem";

export default {
  name: "App",
  components: {
    AutoCompleteItem,
  },
  data: () => {
    return {
      selectedValue: null,
      products,
    };
  },
  methods: {
    resetProducts() {
      this.products = products;
    },
  },
};
</script>

<style>
</style>
