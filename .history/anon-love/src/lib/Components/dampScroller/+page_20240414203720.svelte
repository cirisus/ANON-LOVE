<script>
    export let slots;
</script>

<div class="scroller">
    <slot name="scrollbox-1"></slot>
    <slot name="scrollbox-2"></slot>
    <slot name="scrollbox-3"></slot>
  </div>
  <style lang="scss">
      .scroller {
          display: flex;
          gap: 10px;
      }
  </style>