<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';


</script>

<div class="flex flex-row min-h-screen">
	<Header />
	
	<main class="w-full lg:ml-[140px] overflow-hidden  mt-12">
		<slot />
	</main>
	
</div>

<Footer/>

