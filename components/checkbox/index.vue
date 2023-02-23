<template>
  <div class="check-box">
    <label>
      <input
        @change="checkboxToggle"
        type="checkbox"
        :checked="checkboxChecked"
      />
      <span>
        <font-awesome-icon icon="fa-solid fa-check" size="1x" />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "check-box",
  props: {
    isChecked: Boolean,
    isTerm: Boolean,
  },
  data() {
    return {
      checkboxChecked: this.isChecked,
    };
  },
  methods: {
    checkboxToggle: function () {
      this.checkboxChecked = !this.checkboxChecked;
      if (this.isTerm) {
        this.$emit("check-term");
      }
    },
  },
};
</script>
