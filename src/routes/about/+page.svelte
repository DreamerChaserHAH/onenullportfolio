<script>
	import Workers from './Workers.svelte';
	import Timeline from './Timeline.svelte';
  	import AboutOneNull from './AboutOneNull.svelte';

</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<!-- workers -->
<Workers />

<section class="flex flex-col items-center justify-center px-6 py-16 ">
	<div class="text-xl font-bold leading-10 uppercase md:text-4xl text-gray-950 font-gosha">our core values</div>
	<div class="text-base font-normal leading-10 text-black capitalize md:py-4 md:text-xl text-opacity-80 font-space">Our Guiding Principles</div>
	<Timeline />
</section>

<AboutOneNull />