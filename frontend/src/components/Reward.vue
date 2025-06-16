<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close">&times;</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import "../assets/css/Reward.css";
import confetti from 'canvas-confetti';

export default {
  name: "RewardModal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:visible"],
  watch: {
    visible(newVal) {
      if (newVal) {
        setTimeout(() => {
          const reward1 = new Audio(require('../assets/sounds/Reward.mp3'));
          reward1.play();

          const reward2 = new Audio(require('../assets/sounds/Wow.mp3'));
          reward2.play();

          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
          });
        });
      }
    }
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
};
</script>
