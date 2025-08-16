<script>
    import { onMount } from 'svelte';

    let defined = false;

    onMount(async () => {
        if (!defined && typeof window !== 'undefined') {
            const AtroposComponent = (await import('atropos/element')).default;
            if (!customElements.get('atropos-component')) {
                customElements.define('atropos-component', AtroposComponent);
            }
            defined = true;
        }
    });

</script>

<atropos-component
    class="atropos"
    active-offset="20"
    shadow-scale="0"
    rotate-y-invert="true"
    rotate-x-max="0"
    rotate-y-max="1"
>
    <slot />
</atropos-component>