<template>


  <div id="monster-wrapper">
    <div class="monster-gif">
      <MonsterId/>
    </div>
    <div class="monster-attributes">
      <MonsterStatus/>
      <MonsterAttribute/>
    </div>
    <div class="monster-element">
      <MonsterElement/>
    </div>

  </div>

  <div id="monster-supply">
    <MonsterExperience/>
    <MonsterItemMobMap/>
  </div>


</template>

<script lang="ts">
import {defineComponent} from 'vue';
// import {useMonsterStore} from "../stores/MonsterStore";
import {mapState, mapStores} from 'pinia';
import {useMonsterStore} from "../stores/MonsterStore";
import MonsterStatus from "./Monster/MonsterStatus.vue";
import MonsterItemMobMap from "./Monster/MonsterItemMobMap.vue";
import MonsterExperience from "./Monster/MonsterExperience.vue";
import MonsterElement from "./Monster/MonsterElement.vue";
import MonsterId from "./Monster/MonsterId.vue";
import MonsterAttribute from "./Monster/MonsterAttribute/MonsterSeconderyAttribute.vue";

export default defineComponent({

  components: {MonsterStatus, MonsterItemMobMap, MonsterExperience, MonsterElement, MonsterAttribute, MonsterId},
  created() {
    const monsterId = Number(this.$route.params.id);
    this.monsterStore.fetchMonsterAndSetCurrentById(monsterId);
  },
  computed: {
    ...mapStores(useMonsterStore),
    ...mapState(useMonsterStore, ['currentMonster'])
  }

});
</script>

<style scoped>

#monster-wrapper {
  display: flex;
  flex-direction: row;
}


#monster-supply {
  display: flex;
  flex-direction: row;

}

@media (max-width: 768px) {
  #monster-wrapper {
    flex-flow: column nowrap;
  }

  #monster-supply {
    flex-flow: column nowrap;
  }
}

</style>
