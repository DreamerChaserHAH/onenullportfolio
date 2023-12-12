<script>
	import worker1 from '$lib/images/workerpic.png';

	/**
   * @type {any[]}
   */
	let workers = [];

	for (let i = 1; i <= 6; i++) {
	const worker = {
		name: 'Worker ' + i,
		jobTitle: 'Job Title ' + i,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		image: worker1,
	};
	workers.push(worker);
	}


</script>

<section class="flex flex-col items-center justify-center px-6 py-3 overflow-hidden">
	<div class="w-full sm:w-[65%] h-24 flex rounded-2xl border-4 border-[#15BFFD] justify-center items-center ">
		<div class="flex flex-col items-start justify-center h-full gap-2.5">
			<div class="flex gap-1.5">
				<div class="relative flex items-center justify-center h-8 px-2 bg-cyan-400 bg-opacity-20 rounded-tl-xl rounded-bl-xl">
					<div class="text-xl font-bold leading-10 uppercase sm:text-3xl whitespace-nowrap text-gray-950 font-gosha">Meet talent</div>
					<div class="absolute top-0 right-0 w-1 h-8 rounded-bl-lg rounded-br-lg bg-cyan-600"></div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none">
					<path d="M12.6602 0.834297C12.8575 -0.0667529 14.1425 -0.0667515 14.3398 0.834299L15.435 5.8344C15.5672 6.43806 16.2741 6.70924 16.7761 6.34889L21.2 3.17358C21.9658 2.62388 22.9303 3.52949 22.4299 4.3284L19.9174 8.33957C19.5618 8.90722 19.9632 9.64545 20.633 9.65559L25.764 9.73324C26.7289 9.74784 26.9412 11.0966 26.0274 11.4069L21.397 12.9795C20.747 13.2003 20.6051 14.0564 21.1493 14.475L24.9048 17.3644C25.6631 17.9478 25.0446 19.1475 24.1295 18.868L19.0076 17.3041C18.3927 17.1164 17.7968 17.6452 17.9103 18.2781L18.7707 23.0785C18.9346 23.9925 17.7338 24.4812 17.2128 23.7126L14.2117 19.2849C13.8706 18.7818 13.1294 18.7818 12.7883 19.2849L9.78716 23.7126C9.26618 24.4812 8.06543 23.9925 8.22926 23.0785L9.08973 18.2781C9.20316 17.6452 8.60729 17.1164 7.99241 17.3041L2.87052 18.868C1.95541 19.1475 1.33685 17.9478 2.0952 17.3644L5.85075 14.475C6.39486 14.0564 6.25302 13.2003 5.60297 12.9795L0.972566 11.4069C0.0587602 11.0966 0.271072 9.74784 1.23603 9.73324L6.36703 9.65559C7.03677 9.64545 7.43819 8.90722 7.08262 8.33957L4.57012 4.3284C4.0697 3.52949 5.03421 2.62388 5.80005 3.17358L10.2239 6.34889C10.7259 6.70924 11.4328 6.43806 11.565 5.8344L12.6602 0.834297Z" fill="#2E2E2E"/>
				  </svg>
			</div>
			<div class="flex gap-1.5">
				<div class="relative flex items-center justify-center h-8 px-2 bg-cyan-400 bg-opacity-20 rounded-tl-xl rounded-bl-xl">
					<div class="text-xl font-bold leading-10 uppercase sm:text-3xl whitespace-nowrap text-gray-950 font-gosha">& experience</div>
					<div class="absolute top-0 right-0 w-1 h-8 rounded-bl-lg rounded-br-lg bg-cyan-600"></div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none">
					<path d="M12.6602 0.834297C12.8575 -0.0667529 14.1425 -0.0667515 14.3398 0.834299L15.435 5.8344C15.5672 6.43806 16.2741 6.70924 16.7761 6.34889L21.2 3.17358C21.9658 2.62388 22.9303 3.52949 22.4299 4.3284L19.9174 8.33957C19.5618 8.90722 19.9632 9.64545 20.633 9.65559L25.764 9.73324C26.7289 9.74784 26.9412 11.0966 26.0274 11.4069L21.397 12.9795C20.747 13.2003 20.6051 14.0564 21.1493 14.475L24.9048 17.3644C25.6631 17.9478 25.0446 19.1475 24.1295 18.868L19.0076 17.3041C18.3927 17.1164 17.7968 17.6452 17.9103 18.2781L18.7707 23.0785C18.9346 23.9925 17.7338 24.4812 17.2128 23.7126L14.2117 19.2849C13.8706 18.7818 13.1294 18.7818 12.7883 19.2849L9.78716 23.7126C9.26618 24.4812 8.06543 23.9925 8.22926 23.0785L9.08973 18.2781C9.20316 17.6452 8.60729 17.1164 7.99241 17.3041L2.87052 18.868C1.95541 19.1475 1.33685 17.9478 2.0952 17.3644L5.85075 14.475C6.39486 14.0564 6.25302 13.2003 5.60297 12.9795L0.972566 11.4069C0.0587602 11.0966 0.271072 9.74784 1.23603 9.73324L6.36703 9.65559C7.03677 9.64545 7.43819 8.90722 7.08262 8.33957L4.57012 4.3284C4.0697 3.52949 5.03421 2.62388 5.80005 3.17358L10.2239 6.34889C10.7259 6.70924 11.4328 6.43806 11.565 5.8344L12.6602 0.834297Z" fill="#2E2E2E"/>
				</svg>
			</div>
		</div>
	</div>
	<div class="py-5 text-sm font-normal text-center text-black md:text-2xl whitespace-wrap text-opacity-80 font-space">We love to talk with you about our unique approach. <br> Feel free to contact us the creative team.</div>
	
	<div class="flex flex-wrap justify-center w-full gap-4 md:w-2/3 ">
		{#each workers as worker, i}
		<div class="flex flex-col  md:p-3  clip_workers md:w-[215px] md:h-[261px] w-[150px] h-[200px]">
			<div class="relative md:top-0 top-3 mx-auto md:w-[95%] w-[140px] rounded md:h-[90%] group transition-all duration-700 hover:bg-[#2E2D3A]">
				<img class="absolute top-0 left-0 object-cover w-full h-full transition-all duration-700 rounded group-hover:opacity-0" alt="workers" src={worker.image} />
				<div class="relative flex flex-col items-center justify-between h-full overflow-hidden text-center transition-all duration-700 opacity-0 md:px-3 md:py-4 group-hover:opacity-100">
					<div>
						<div class="text-base font-bold text-white md:text-xl font-gosha">{worker.name}</div>
						<div class="text-center text-white text-sm md:text-base font-light font-['Fira Sans'] leading-7">{worker.description}</div>
					</div>
					<div class="flex justify-between w-full px-2">
						<a href="https://www.facebook.com/">
							<i class=" md:text-xl text-base fa fa-facebook text-[#15BFFD]" aria-hidden="true"></i>	
						</a>
						<a href="https://www.facebook.com/">
							<i class=" md:text-xl text-base fa fa-twitter text-[#15BFFD]" aria-hidden="true"></i>
						</a>
						<a href="https://www.facebook.com/">
							<i class=" md:text-xl text-base fa fa-instagram text-[#15BFFD]" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="mx-2 mt-4 text-sm font-bold leading-normal md:mt-0 md:text-base text-cyan-600 font-space">{worker.name}</div>
			<div class="mx-2 mt-0 text-sm font-medium leading-normal m md:mt-2 text-gray-950 font-gosha">{worker.jobTitle}</div>
		</div>
		{/each}
	</div>
</section>

<style>
	.clip_workers{
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='200' viewBox='0 0 211 261' fill='none'%3E%3Cg filter='url(%23filter0_b_124_9888)'%3E%3Cpath d='M204.529 222.107C208.6 219.089 211 214.322 211 209.254L211 16C211 7.16345 203.837 0 195 0L16 0C7.16344 0 0 7.16345 0 16L0 245C0 253.837 7.16344 261 16 261L146.785 261C150.217 261 153.558 259.897 156.314 257.853L204.529 222.107Z' fill='white' fill-opacity='0.05'/%3E%3Cpath d='M209 209.254C209 213.688 206.9 217.86 203.338 220.501L155.123 256.246C152.711 258.035 149.788 259 146.785 259L16 259C8.26801 259 2 252.732 2 245L2 16C2 8.26802 8.26801 2 16 2L195 2C202.732 2 209 8.26802 209 16L209 209.254Z' stroke='url(%23paint0_linear_124_9888)' stroke-opacity='0.7' stroke-width='4'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_b_124_9888' x='-10' y='-10' width='231' height='281' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeGaussianBlur in='BackgroundImageFix' stdDeviation='5'/%3E%3CfeComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_124_9888'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_124_9888' result='shape'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_124_9888' x1='187.79' y1='236.432' x2='23.2563' y2='-15.2062' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2315BFFD'/%3E%3Cstop offset='1' stop-color='%239C37FD'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
		@media (min-width: 640px) {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='215' height='261' viewBox='0 0 211 261' fill='none'%3E%3Cg filter='url(%23filter0_b_124_9888)'%3E%3Cpath d='M204.529 222.107C208.6 219.089 211 214.322 211 209.254L211 16C211 7.16345 203.837 0 195 0L16 0C7.16344 0 0 7.16345 0 16L0 245C0 253.837 7.16344 261 16 261L146.785 261C150.217 261 153.558 259.897 156.314 257.853L204.529 222.107Z' fill='white' fill-opacity='0.05'/%3E%3Cpath d='M209 209.254C209 213.688 206.9 217.86 203.338 220.501L155.123 256.246C152.711 258.035 149.788 259 146.785 259L16 259C8.26801 259 2 252.732 2 245L2 16C2 8.26802 8.26801 2 16 2L195 2C202.732 2 209 8.26802 209 16L209 209.254Z' stroke='url(%23paint0_linear_124_9888)' stroke-opacity='0.7' stroke-width='4'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_b_124_9888' x='-10' y='-10' width='231' height='281' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeGaussianBlur in='BackgroundImageFix' stdDeviation='5'/%3E%3CfeComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_124_9888'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_124_9888' result='shape'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_124_9888' x1='187.79' y1='236.432' x2='23.2563' y2='-15.2062' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2315BFFD'/%3E%3Cstop offset='1' stop-color='%239C37FD'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
		}
	}

</style>