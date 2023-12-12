<script>
// @ts-nocheck

	import Carousel from 'svelte-carousel';
	import reviewImg from '$lib/images/review.png';
	import { browser } from '$app/environment';

	let reviews = [
		{
		review: "What truly set this developer apart, however, was his attention to detail and his willingness to go above and beyond to ensure customer satisfaction.",
		imageUrl: reviewImg
		},
		{
		review: "Another review...",
		imageUrl: reviewImg
		},
		{
		review: "What truly set this developer apart...",
		imageUrl: reviewImg
		},
		{
		review: "Another review...",
		imageUrl: reviewImg
		}
  	];

	  let carousel; // for calling methods of the carousel instance
  
	const handleNextClick = () => {
		carousel.goToNext()
	}

	const handlePrevClick = () => {
		carousel.goToPrev()
	}

</script>

<section class="flex items-center justify-center w-full md:py-6">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="w-10 h-10 transform rotate-90 -translate-y-1/2 cursor-pointer sm:w-16 sm:h-16"  on:click|preventDefault={handlePrevClick}>
		<span class="block w-4 h-4 transform rotate-45 border-b-4 border-r-4 md:w-6 md:h-6 border-cyan-400 arrowannimate "></span>
		<span class="block w-4 h-4 transform rotate-45 border-b-4 border-r-4 md:w-6 md:h-6 border-cyan-400 arrowannimate animated1 "></span>
		<span class="block w-4 h-4 transform rotate-45 border-b-4 border-r-4 md:w-6 md:h-6 border-cyan-400 arrowannimate animated2"></span>
	</div>  
	<div class="bg-opacity-25 w-[82%] bg-neutral-200 rounded-2xl backdrop-blur-md px-10 py-10">
	{#if browser}
	  <Carousel 
		autoplay
		autoplayDuration={5000}
		pauseOnFocus
		dots={false}
		arrows={false}
		bind:this={carousel}
	  >
		{#each reviews as review, index}
		  <div class="flex justify-between w-full ">
			<div class="flex ">
				<div class="relative hidden md:block">
				  <div class="w-[350px] h-[400px] rounded-tl-md rounded-bl-md rounded-tr-[90px] rounded-br-md bg-[lightgray] bg-center bg-cover bg-no-repeat z-[1]" 
					style="background-image: url({review.imageUrl})"
				  >
					<div class="w-[360px] absolute inset-0 left-3 border-[6px] border-solid border-[#514ED8] rounded-tl-md rounded-bl-md rounded-tr-[90px] rounded-br-md h-[421px] -z-10"></div>
				  </div>
				</div>
				<div class="flex py-4 md:ml-14">
				  	<div class="flex flex-col justify-between ">
						<div class="flex flex-col">
							<div class="text-2xl font-bold md:text-4xl text-gray-950 font-gosha">Reviews</div>
							<div class="md:w-[87%] w-[100%] my-4 sm:text-xl text-md	font-bold text-black text-opacity-80">{review.review}</div>
						</div>
						<div class="text-lg font-bold md:text-xl text-gray-950">- Gnosis Labs</div>
				    </div>
				</div>
			</div>
			<div class="flex-col items-center justify-center hidden sm:flex">
				<div class="w-10 my-4 text-sky-600 text-3xl font-bold font-['Fira Sans']">0{ index + 1}</div>
				<div class="w-0.5 h-20  bg-sky-600 shadow"></div>
				<div class="w-0.5 h-24  bg-zinc-300 shadow"></div>
				<div class="w-0.5 h-24  bg-zinc-300 shadow"></div>
				<div class="w-10 my-4 text-sky-600 text-3xl font-bold font-['Fira Sans']">0{ reviews.length }</div>
			</div>
		  </div>
		{/each}
	  </Carousel>
	{/if}
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="w-10 h-10 transform rotate-90 translate-x-3 -translate-y-1/2 cursor-pointer sm:w-16 sm:h-16"  on:click|preventDefault={handleNextClick}>
		<span class="block w-4 h-4 transform rotate-45 border-t-4 border-l-4 md:w-6 md:h-6 border-cyan-400 arrowannimater animated2"></span>
		<span class="block w-4 h-4 transform rotate-45 border-t-4 border-l-4 md:w-6 md:h-6 border-cyan-400 arrowannimater animated1 "></span>
		<span class="block w-4 h-4 transform rotate-45 border-t-4 border-l-4 md:w-6 md:h-6 border-cyan-400 arrowannimater "></span>
	</div> 
  </section>
<style>

.arrowannimate {
    animation: animate 2s infinite;
}

.arrowannimater{
	animation: animater 2s infinite;
}

.animated1 {
    animation-delay: -0.2s;
}

.animated2 {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}

@keyframes animater {
    0% {
        opacity: 0;
		transform: rotate(45deg) translate(20px, 20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
		transform: rotate(45deg) translate(-20px, -20px);
    }
}
</style>