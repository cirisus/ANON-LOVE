<script>
    import { dampScroller } from "./damper.js";
</script>
<div id="viewbox">
    <div class="scroller">
        <div class="scrollbox">
            <slot name="scrollbox-1"></slot>
        </div>
        <div class="scrollbox">
            <slot name="scrollbox-2"></slot>
        </div>
        <div class="scrollbox">
            <slot name="scrollbox-3"></slot>
        </div>
    </div>
</div>

<style lang="scss">
    #viewbox {
        position: fixed;
        top: 0;
        display: flex;
        align-items: flex-start;
        width: 100%;
        height: 100vh;
    }
    .scroller {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        transition: all .15s ease;
        overflow: hidden;
    }
    .scrollbox {
        width: 100vw;
        height: 100vh;
        padding: 2rem 0;
    }
</style>