<script>
// @ts-nocheck

    let works = [
      {
        title: 'Collaboration',
        description: 'We believe in the power of teamwork. Collaborating with our clients and colleagues allows us to achieve extraordinary results together',
      },
      {
        title: 'Passion',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
      },
      {
        title: 'Innovation',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
      },
      {
        title: 'Continuous Improvement',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
      },
      {
        title: 'Client-Orientation',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
      },
    ];

</script>
<div class="flex flex-wrap  items-center justify-start md:justify-start gap-x-3 gap-y-11 pt-6 mx-auto w-[100%] md:w-[500px]">
  {#each works as work, i}
   <div class="w-[150px]  sm:w-[231px] md:h-[250px] h-[200px]   ">
    <div class="flex items-center rounded-2xl p-[1px] w-full   transition-all duration-700 bg-white hover:bg-gradient-to-r from-teal-500 to-blue-500 relative {i % 2 === 0 ? 'left' : ' top-10'} group ">
      <div class="w-[100%]  inline-flex flex-col items-center  transition-all justify-between p-5 custom-box-shadow bg-white rounded-2xl backdrop-blur-xl">
        <div class="flex flex-col items-center justify-center">
          <img alt="img" class=" mb-4 rounded-2xl sm:w-[191px] w-[120px] h-[100px] sm:h-[180px] transition-all duration-700 group-hover:h-[85px]" src="https://via.placeholder.com/191x180" />
          <div class="gap-1 l grow shrink basis-0">
            <div class="self-stretch text-sm font-bold sm:text-xl text-gray-950 font-space">{work.title}</div>
          </div>
        </div>
        <a class="transition-all duration-700 delay-200 opacity-0 cursor-pointer group-hover:opacity-100 " href="../works/{work.title}">
          <div class="w-full h-10 px-6 sm:px-10 rounded-3xl group-hover:flex border border-cyan-400 justify-center items-center gap-2.5 transition-all hidden ">
            <div class="text-sm font-bold text-black sm:text-xl font-gosha">Explore</div>
          </div>
        </a>
      </div>
    </div>
   </div>
  {/each}
</div>


<style>
.custom-box-shadow {
    box-shadow: 0px 4px 49px 0px rgba(0, 7, 72, 0.12);
  }

</style>