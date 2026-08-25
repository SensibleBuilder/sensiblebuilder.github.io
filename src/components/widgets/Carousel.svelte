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
      .swiper-pagination-bullet-active {
        color: #0;
        background: #ffffff;
      }
      .swiper-button-next, .swiper-button-prev {
        color: #ffffff;
        opacity: 0.8;
        pointer-events: none;
      }
      `],
      pagination: {
        clickable: true,
      },
      autoHeight: false,
    }
    Object.assign(swiper, params);

    register();

    const swiperComponent = document.querySelector('.swiper-container') as any;
    swiperComponent?.addEventListener('click', function(event) {
      var rect = (event?.target as HTMLElement)?.getBoundingClientRect();
      const mouseEvent = event as MouseEvent;
      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();
      var x = mouseEvent.clientX - rect?.left - (rect.width/ 2); //x position within the element.
      if (Math.abs(x) < rect.width / 4) {
        return; // Ignore clicks near the center
      }
      if (x > 0) {
        swiperComponent.swiper.slideNext();
      } else {
        swiperComponent.swiper.slidePrev();
      }
    });
    
  });
</script>

<swiper-container 
  bind:this={swiper}
  slides-per-view="1"
  pagination="true"
  pagination-clickable="true"
  loop="true"
  navigation="true"
  class="swiper-container"
>
  <slot />
</swiper-container>
