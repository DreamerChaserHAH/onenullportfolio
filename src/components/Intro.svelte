<script>
	import Spooky from "$lib/images/spooky.svg";
	import Heart from "$lib/images/heartbeat.svelte";
	import video from "$lib/eample.mp4";

	// @ts-ignore
	function scrollIntoView({ target }) {
			const el = document.querySelector(target.getAttribute('href'));
			if (!el) return;
		el.scrollIntoView({
		behavior: 'smooth'
		});
	}


</script>

<section class= "w-full p-6 md:mt-0 ">
	<div class="flex flex-col-reverse items-center justify-center w-full lg:flex-row ">
	  <div class="w-full lg:w-1/2 font-gosha">
		<div class="leading-10 ">
		  <span style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)" class="tracking-tighter text-gray-950 lg:text-5xl sm:text-6xl leading-4 text-6xl font-extrabold uppercase md:leading-[72.50px]">We<span class="tracking-tightest">'re</span> More Than Just </span>
		  <span style="text-shadow: 0px 0px 4px rgba(0, 0, 0, 1)" class="tracking-tighter text-cyan-400 lg:text-5xl sm:text-6xl leading-4 text-6xl font-extrabold uppercase md:leading-[72.50px] stroke">Developers</span>
		  <span style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)" class="tracking-tighter text-gray-950 lg:text-5xl sm:text-6xl leading-4 text-6xl font-extrabold uppercase md:leading-[72.50px]"> - We're <br> </span>
		  <span class="text-6xl font-extrabold leading-tight tracking-tighter text-transparent uppercase lg:text-5xl sm leading-4:text-6xl bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 stroke">Innovators</span>
		</div>
		<div class="relative w-full ">
		  <Heart />
		  <img class="absolute -right-[5%] bottom-[30%] -z-10" alt="404face" width="233" height="210" src={Spooky} />
		</div>
		<div class="text-base font-extrabold leading-9 uppercase text-gray-950 font-space">
		  At One Null Solutions, we're passionate about crafting digital excellence. With a focus on collaboration, trust, and innovation, we create web, game, and app experiences that connect, inspire, and exceed expectations. Welcome to our world of limitless possibilities.
		</div>
	  </div>
	  <div class="relative mt-5 ml-4 overflow-hidden w-[500px] h-[350px] hidden md:flex ">
		<div class="w-full h-full clip-pentagon "></div>
			<!-- <div class="absolute top-0 left-0 w-full h-full bg-slate-50 small-pentagon"></div> -->
			<div class="absolute top-[10%] left-[2%] video-pentagon w-[480px] h-[280px]">
				<video class="w-full h-full bg-cover video-fit" src={video} autoplay loop >
				<track kind="captions" />
				</video>
			</div>
	   </div>
	</div>
  
	<!-- Scroll button -->
	<a href="#scroll-to">
	  <div class="relative flex items-center justify-center cursor-pointer select-none lg:-mt-6">
		<div class="button">
		  <div class="single-scroll-down-animation">
			<div class="scroll-down"></div>
		  </div>
		</div>
		<svg id="rotatingText" viewBox="0 0 200 200" width="100" height="100">
		  <defs>
			<path id="circle" d="M 100, 100
						  m -75, 0
						  a 75, 75 0 1, 0 150, 0
						  a 75, 75 0 1, 0 -150, 0
						  ">
			</path>
		  </defs>
		  <text width="50" class="font-bold leading-tight tracking-widest uppercase">
			<textPath xlink:href="#circle" fill="black">
			  <a href="#scroll-to" on:click|preventDefault={scrollIntoView}>	
				Scroll Down * Scroll Down * Scroll Down *
			  </a>
			</textPath>
		  </text>
		</svg>
	  </div>
	</a>
  </section>
  

<style>
	.stroke{
		-webkit-text-stroke-width: 1.5px;
  		-webkit-text-stroke-color: black;
		display: inline-block;
	}
	.clip-pentagon {
		/* clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%); */
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='350' viewBox='0 0 634 373' fill='none'%3E%3Cg filter='url(%23filter0_b_36_15171)'%3E%3Cpath d='M632.5 299.238C632.5 305.387 628.621 310.868 622.822 312.912L459.012 370.675C457.463 371.221 455.833 371.5 454.19 371.5L16 371.5C7.99188 371.5 1.5 365.008 1.5 357V16C1.5 7.99188 7.99188 1.5 16 1.5L618 1.5C626.008 1.5 632.5 7.99188 632.5 16V299.238Z' stroke='url(%23paint0_linear_36_15171)' stroke-width='3'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_b_36_15171' x='-10' y='-10' width='654' height='393' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeGaussianBlur in='BackgroundImageFix' stdDeviation='5'/%3E%3CfeComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_36_15171'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_36_15171' result='shape'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_36_15171' x1='564.26' y1='337.889' x2='418.689' y2='-130.206' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2315BFFD'/%3E%3Cstop offset='1' stop-color='%239C37FD'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
	}
	.video-pentagon{
		clip-path: polygon(0.5% 1%, 99.5% 1%, 99.5% 80%, 70% 99%, 0.5% 99%);
	}
	.video-fit{
		object-fit: cover;
	}
	#rotatingText {
      animation-name: rotate-circle;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
	  border: 0.1px solid #333;
	  border-radius: 50%;
    }

    @keyframes rotate-circle {
      to {
        transform: rotate(1turn);
      }
    }

	.button {
      position: absolute;
	  width: 100px;
	  height:100px;
	  align-items: center;
	  justify-content: center;
	  display: flex;
    }
	.single-scroll-down-animation .scroll-down {
		width: 30px;
		height: 50px;
		border: 2px solid #00b4ff;
		border-radius: 50px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		margin: 0 auto; 
		
	}

	.single-scroll-down-animation .scroll-down:before {
		content: "";
		position: absolute;
		left: 50%;
		top: 20px;
		width: 6px;
		height: 6px;
		border-radius: 100%;
		transform: translateX(-50%);
		background: #00b0ff;
		animation: scrollDown2 1.5s ease infinite;
	}

	.single-scroll-down-animation .scroll-down:after {
		content: "";
		position: absolute;
		left: 50%;
		top: 5px;
		width: 6px;
		height: 15px;
		border-radius: 3px;
		transform: translateX(-50%);
		background: #00b0ff;
	}

	@keyframes scrollDown2 {
		0% {
			transform: translate(-50%, 0px);
			opacity: 0;
		}
		50% {
			transform: translate(-50%, 8px);
			opacity: 1;
		}
		100% {
			transform: translate(-50%, 16px);
			opacity: 0;
		}
	}
</style>