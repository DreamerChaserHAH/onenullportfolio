<script>
	
	let programmingLanguages = [
		{
		id: 1,
		name: 'Python',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
		},
		{
		id: 2,
		name: 'Rust',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
		},
		{
		id: 3,
		name: 'C#',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
		},
		{
		id: 4,
		name: 'C++',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
		},
		{
		id: 5,
		name: 'Dart',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
		},
		{
		id: 6,
		name: 'Next.js',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
		}
  	];

	let frameworks = [
		{
		id: 1,
		name: 'React',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		},
		{
		id: 2,
		name: 'Vue',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
		},
		{
		id: 3,
		name: 'Laravel',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
		},
		{
		id: 4,
		name: 'Flutter',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
		}
  	];

	let operatingSystems = [
		{
		id: 1,
		name: 'Windows',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
		},
		{
		id: 2,
		name: 'Android',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
		},
		{
		id: 3,
		name: 'Apple',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
		},
		{
		id: 4,
		name: 'Linux',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
		}
	];


</script>

<section class="flex flex-col items-center justify-center px-6 py-6 overflow-hidden" id="scroll-to">
	<div class="flex">
		<div class="ml-4 border md:w-[360px] w-[250px] h-[50px] rounded-2xl border-[#15BFFD] items-center flex  ">
			<div class="mx-auto text-2xl font-bold text-center md:text-3xl w-72 text-gray-950 font-space">Languages we use</div>
		</div>
	</div>
	<div class="flex max-w-[756px] items-center justify-center py-6 space-x-3 flex-wrap">
		{#each programmingLanguages as language (language.id)}
		  <div class="md:w-[177px] w-[100px] h-[50px] md:h-[76px] relative overflow-hidden my-3">
			<div class="flex items-center justify-center w-full h-full clip-pentagonlan">
			  <div class="flex items-center justify-center clip-pentagonlanbg md:w-[158px] md:h-[62px] w-[90px] h-[40px] ">
				<img class="w-8 h-8 md:w-10 md:h-10" alt={language.name} src={language.icon} />
				<div class="ml-2 text-xs font-bold leading-loose text-black md:text-lg font-space">{language.name}</div>
			  </div>
			</div>
		  </div>
		{/each}
	</div>  
	<!-- Framework -->
	<div class="flex">
		<div class="hidden md:block">
			<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
				<path d="M44.6973 27.87C43.5203 32.5922 40.731 36.7599 36.778 39.7027C32.8251 42.6455 27.9383 44.1922 22.9038 44.0942C17.8693 43.9961 12.9799 42.2589 9.022 39.162C5.06411 36.0652 2.2679 31.7886 1.0832 27.0205C-0.101502 22.2523 0.394178 17.2697 2.4905 12.8741C4.58682 8.47862 8.16191 4.92573 12.6406 2.78705C17.1194 0.648365 22.2414 0.0482157 27.1826 1.08315C32.1239 2.11808 36.5972 4.72793 39.8829 8.49284L22.8861 22.3437L44.6973 27.87Z" fill="#0F96D7"/>
			</svg>
		</div>
		<div class="ml-4 border md:w-[360px] w-[250px] h-[50px] rounded-2xl border-[#15BFFD] items-center flex  ">
			<div  class="mx-auto text-2xl font-bold text-center md:text-3xl w-72 text-gray-950 font-space">Frameworks we use</div>
		</div>
	</div>
	<div class="flex max-w-[756px] justify-center py-6 space-x-3 flex-wrap">
		{#each frameworks as framework (framework.id)}
		   <div class="md:w-[177px] w-[100px] h-[50px] md:h-[76px] relative overflow-hidden my-3">
			<div class="flex items-center justify-center w-full h-full clip-pentagonlan">
			  <div class="flex items-center justify-center clip-pentagonlanbg md:w-[158px] md:h-[62px] w-[90px] h-[40px] ">
				<img class="w-8 h-8 md:w-10 md:h-10" alt={framework.name} src={framework.icon} />
				<div class="ml-2 text-xs font-bold leading-loose text-black md:text-lg font-space">{framework.name}</div>
			  </div>
			</div>
		  </div>
		{/each}
	</div>
	  
	<!-- Platforms -->
	<div class="flex">
		<div class="ml-4 border md:w-[360px] w-[250px] h-[50px] rounded-2xl border-[#15BFFD] items-center flex  ">
			<div  class="mx-auto text-2xl font-bold text-center md:text-3xl w-72 text-gray-950 font-space">Platforms we use</div>
		</div>
	</div>
	<div class="flex max-w-[756px] justify-center py-6 space-x-3 flex-wrap">
		{#each operatingSystems as operatingSystem (operatingSystem.id)}
		   <div class="md:w-[177px] w-[100px] h-[50px] md:h-[76px] relative overflow-hidden my-3">
			<div class="flex items-center justify-center w-full h-full clip-pentagonlan">
			  <div class="flex items-center justify-center clip-pentagonlanbg md:w-[158px] md:h-[62px] w-[90px] h-[40px] ">
				<img class="w-8 h-8 md:w-10 md:h-10" alt={operatingSystem.name} src={operatingSystem.icon} />
				<div class="ml-2 text-xs font-bold leading-loose text-black md:text-lg font-space">{operatingSystem.name}</div>
			  </div>
			</div>
		  </div>
		{/each}
	</div>
	  
</section>

<style>
.clip-pentagonlan {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 177 76" fill="none"><path d="M1 69V7C1 3.68629 3.68629 1 7 1H170C173.314 1 176 3.68629 176 7V35.754C176 37.2023 175.476 38.6016 174.525 39.6939L145.58 72.9399C144.44 74.2487 142.79 75 141.055 75H7C3.68629 75 1 72.3137 1 69Z" stroke="url(%23paint0_linear_209_5861)"/><defs><linearGradient id="paint0_linear_209_5861" x1="88.5" y1="-18.1379" x2="88.5" y2="75" gradientUnits="userSpaceOnUse"><stop stop-color="%239C37FD"/><stop offset="1" stop-color="%2315BFFD" stop-opacity="0.84"/></linearGradient></defs></svg>');

  @media (min-width: 640px) {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="177" height="76" viewBox="0 0 177 76" fill="none"><path d="M1 69V7C1 3.68629 3.68629 1 7 1H170C173.314 1 176 3.68629 176 7V35.754C176 37.2023 175.476 38.6016 174.525 39.6939L145.58 72.9399C144.44 74.2487 142.79 75 141.055 75H7C3.68629 75 1 72.3137 1 69Z" stroke="url(%23paint0_linear_209_5861)"/><defs><linearGradient id="paint0_linear_209_5861" x1="88.5" y1="-18.1379" x2="88.5" y2="75" gradientUnits="userSpaceOnUse"><stop stop-color="%239C37FD"/><stop offset="1" stop-color="%2315BFFD" stop-opacity="0.84"/></linearGradient></defs></svg>');
  }
}

.clip-pentagonlanbg {
	background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="90" height="40" viewBox="0 0 158 62" fill="none"><path d="M0 56V6C0 2.68629 2.68629 0 6 0H152C155.314 0 158 2.68629 158 6V28.626C158 30.1511 157.419 31.6191 156.376 32.7313L130.693 60.1053C129.559 61.3142 127.975 62 126.317 62H6C2.68629 62 0 59.3137 0 56Z" fill="%23E4F6FD"/></svg>');
	
	@media (min-width: 640px) {
	background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="158" height="62" viewBox="0 0 158 62" fill="none"><path d="M0 56V6C0 2.68629 2.68629 0 6 0H152C155.314 0 158 2.68629 158 6V28.626C158 30.1511 157.419 31.6191 156.376 32.7313L130.693 60.1053C129.559 61.3142 127.975 62 126.317 62H6C2.68629 62 0 59.3137 0 56Z" fill="%23E4F6FD"/></svg>');
  }
}

</style>