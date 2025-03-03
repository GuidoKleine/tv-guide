<template>
    <li class="item-container darken">
      <div class="text-container">
        <slot name="show-title"></slot>
      </div>
    </li>
</template>

<script setup>

</script>


<style>
.item-container {
  display: flex;
  margin: 8px 8px 8px 0px;
  background-size: contain;

}

.item-container:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.text-container {
  font-weight: bold;
  color: white;
  align-content: center;
  justify-items: center;
}
</style>
