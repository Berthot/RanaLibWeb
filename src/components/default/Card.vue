<template>
  <div class="card" id="central-card">
    <div class="card-body content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({

});
</script>

<style scoped>

.content{
  display: flex;
  flex-direction: column;
  background-color: rgba(182, 196, 238, 1);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(34, 62, 145, 0.5);
}

#central-card{
  border: none;
  width: 100%;
  margin: 0.5rem 0.8rem; /*margem que deixa branco o fund*/

}

</style>
