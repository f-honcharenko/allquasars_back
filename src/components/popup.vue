<template>
  <!-- ПОПАП -->
  <div id="popupWrapper" class="popup">
    <div class="popup__content">
      <div class="popup__content-headering">{{title}}</div>
      <div class="popup__content-message">
        <!-- СООБЩЕНИЕ, КОТОРОЕ НУЖНО ПОКАЗАТЬ -->
        <span class="popup__content-text">{{context}}</span>
      </div>
      <!-- КНОПКА ЗАКРЫТЬ ПОПАП -->
      <div class="popup__content-close">
        <button id="popupClose" @click="popupToggle" class="popup__content-btn">Понятно</button>
      </div>
    </div>
  </div>
  <!-- КОНЕЦ ПОПАП -->
</template>

<script>
export default {
  props: ["title", "context"],
  name: "popup",
  methods: {
    popupToggle() {
      this.$emit("popup");
    },
  },
};
</script>
// USE IT TO TOGGLE POPUP
// popupShow(Title,Context) {
//             this.$emit('popup', {
//                 Title,
//                 Context
//         })}