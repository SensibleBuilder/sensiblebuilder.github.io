<script lang="ts">
  import { onMount } from "svelte";
  import { register } from "swiper/element/bundle";

  let swiper: HTMLElement;

  onMount(() => {
    let astroSlot = swiper.children.item(0);

    // Astro wraps slot elements within an astro-slot element. SwiperJS expects
    // swiper-slide elements to be direct children of the swiper-container. We
    // therefore move all slides into the swiper-container.
    if (astroSlot && swiper) {
      swiper.append(...astroSlot.children);
      astroSlot.remove();
    }

    const params = {
      injectStyles: [`
      .swiper-wrapper {
        max-height: 90lvh;
      }
      .swiper-pagination-bullet-active {
        color: #0;
        background: #ffffff;
      }
      `],
      pagination: {
        clickable: true,
      },
      autoHeight: false,
    }
    Object.assign(swiper, params);

    register();
  });
</script>

<swiper-container 
  bind:this={swiper}
  slides-per-view="1"
  pagination="true"
  pagination-clickable="true"
  loop="true"
>
  <slot />
</swiper-container>
