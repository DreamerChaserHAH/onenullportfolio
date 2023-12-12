<script>
// @ts-nocheck

    let events = [
      {
        title: 'Collaboration',
        description: 'We believe in the power of teamwork. Collaborating with our clients and colleagues allows us to achieve extraordinary results together',
        open: true
      },
      {
        title: 'Passion',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        open: false
      },
      {
        title: 'Innovation',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        open: false
      },
      {
        title: 'Continuous Improvement',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        open: false
      },
      {
        title: 'Client-Orientation',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
        open: false
      },
    ];

</script>
  
  <div class="relative w-full px-4 py-4 mx-auto sm:px-6 lg:px-8">
    <div class="absolute top-0 bottom-0 md:w-2 w-0 h-full transform -translate-x-1/2 bg-[#15BFFD] left-1/2"></div>
    {#each events as event, i}
      <div class=" items-center flex container {i % 2 === 0 ? 'left' : 'right'} ">
        <div class="rounded-2xl top-[50% - 8px] absolute w-[157px]  container_clip h-full"></div>
        <div class=" p-2 flex justify-center items-center rounded-xl w-full  bg-white z-10 {i % 2 === 0 ? ' mr-[15%] ' : 'ml-[15%]'}">
          <div class=" w-full rounded-2xl bg-gradient-to-r from-[#9C37FD] to-[#15BFFD]  min-h-[88px]  p-[2px]">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="transition-all flex justify-center items-center flex-col w-full min-h-[88px] bg-white rounded-xl px-6 py-1">
              <div class="flex items-center justify-between w-full">
                <div class="w-4/5 text-lg font-bold leading-loose md:text-2xl text-gray-950 font-gosha">{event.title}</div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none" on:click={() => event.open = ! event.open}>
                  <path d="M10.7237 0.955817C11.1239 0.463047 11.8761 0.463046 12.2763 0.955817L12.6963 1.47307C13.0056 1.85382 13.5453 1.95409 13.9706 1.7098L14.574 1.36328C15.1285 1.04478 15.8354 1.32146 16.0264 1.93177L16.2046 2.50128C16.3535 2.9771 16.8302 3.27055 17.3221 3.18923L17.9823 3.08006C18.6247 2.97387 19.1956 3.50004 19.1421 4.14889L19.0991 4.66958C19.0571 5.17853 19.4054 5.63734 19.9068 5.7338L20.4957 5.84708C21.1472 5.97239 21.4983 6.68568 21.2002 7.27835L20.9838 7.70868C20.75 8.17368 20.9119 8.74029 21.3562 9.01148L21.8031 9.28434C22.3751 9.63349 22.4485 10.4353 21.9495 10.8826L21.5798 11.2139C21.1905 11.5628 21.1356 12.1526 21.4538 12.5673L21.7471 12.9496C22.1536 13.4794 21.9366 14.2511 21.3136 14.4914L20.7913 14.6928C20.3096 14.8785 20.0485 15.4004 20.1887 15.8973L20.3233 16.3746C20.5019 17.0075 20.0315 17.6374 19.374 17.646L18.7361 17.6543C18.2316 17.6609 17.8111 18.0422 17.7553 18.5436L17.6936 19.0979C17.6223 19.7386 16.9721 20.1455 16.3647 19.9294L15.7151 19.6985C15.25 19.533 14.7337 19.7318 14.4996 20.1665L14.1987 20.7253C13.8971 21.2853 13.1563 21.4252 12.6713 21.0137L12.1469 20.5688C11.7737 20.2522 11.2263 20.2522 10.8531 20.5688L10.3287 21.0137C9.84368 21.4252 9.10286 21.2853 8.8013 20.7253L8.5004 20.1665C8.26632 19.7318 7.75004 19.533 7.28488 19.6985L6.63534 19.9294C6.02787 20.1455 5.37773 19.7386 5.30642 19.0979L5.24474 18.5436C5.18894 18.0422 4.76839 17.6609 4.26393 17.6543L3.62604 17.646C2.96853 17.6374 2.49813 17.0075 2.67665 16.3746L2.81129 15.8973C2.95145 15.4004 2.69035 14.8785 2.20868 14.6928L1.68642 14.4914C1.06339 14.2511 0.846389 13.4794 1.25289 12.9496L1.54619 12.5673C1.86442 12.1526 1.80952 11.5628 1.42023 11.2139L1.05053 10.8826C0.551512 10.4353 0.624936 9.63349 1.19687 9.28434L1.64383 9.01148C2.08807 8.74029 2.25001 8.17368 2.01617 7.70869L1.79976 7.27835C1.50172 6.68568 1.85282 5.97239 2.50427 5.84708L3.09317 5.7338C3.59465 5.63734 3.94288 5.17853 3.90089 4.66958L3.85793 4.14889C3.8044 3.50004 4.37532 2.97387 5.01766 3.08006L5.67794 3.18923C6.16985 3.27055 6.64651 2.97711 6.79541 2.50128L6.97364 1.93177C7.16463 1.32146 7.8715 1.04478 8.42604 1.36328L9.02938 1.7098C9.45472 1.95409 9.99445 1.85382 10.3037 1.47307L10.7237 0.955817Z" fill="#030211"/>
                  <path d="M7.90625 10.9998H15.0937M11.5 7.56238V14.4374" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="{event.open ? 'flex' : 'hidden'}  items-start justify-between w-full mb-4">
                <div class="text-sm font-medium leading-normal text-black  md:text-base w-96 text-opacity-80 font-space">
                  {event.description}
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" on:click={() => event.open = ! event.open}>
                  <path d="M10.2103 1.0166C10.6106 0.501225 11.3894 0.501224 11.7897 1.0166L12.1133 1.43316C12.4238 1.83283 12.9839 1.93754 13.4178 1.67701L13.87 1.40547C14.4295 1.06953 15.1557 1.35084 15.3428 1.97603L15.4941 2.48136C15.6392 2.9662 16.1237 3.26618 16.6224 3.17998L17.1422 3.09015C17.7852 2.979 18.3607 3.50362 18.3094 4.1542L18.2679 4.68005C18.2281 5.18458 18.5715 5.63932 19.0676 5.73909L19.5848 5.84309C20.2246 5.97175 20.5717 6.66884 20.2888 7.25694L20.0601 7.73229C19.8408 8.18837 19.9967 8.73644 20.4233 9.00872L20.868 9.2925C21.4181 9.64359 21.4899 10.419 21.0137 10.8652L20.6288 11.2258C20.2594 11.5719 20.2069 12.1393 20.5063 12.5473L20.8184 12.9725C21.2046 13.4986 20.9914 14.2476 20.3862 14.4917L19.897 14.6889C19.4276 14.8782 19.1736 15.3882 19.3054 15.8769L19.4428 16.3861C19.6129 17.0162 19.1436 17.6376 18.491 17.6466L17.9636 17.6538C17.4575 17.6607 17.0364 18.0446 16.9829 18.5478L16.927 19.0723C16.8579 19.7213 16.1959 20.1312 15.5842 19.9038L15.0897 19.72C14.6154 19.5436 14.084 19.7495 13.8523 20.1994L13.6107 20.6683C13.3119 21.2485 12.5464 21.3916 12.0582 20.9585L11.6635 20.6085C11.2849 20.2727 10.7151 20.2727 10.3365 20.6085L9.94183 20.9585C9.45359 21.3916 8.68812 21.2485 8.38929 20.6683L8.14774 20.1994C7.91599 19.7495 7.38464 19.5436 6.91027 19.72L6.41585 19.9038C5.80415 20.1312 5.14206 19.7213 5.07299 19.0723L5.01715 18.5478C4.96358 18.0446 4.54247 17.6607 4.03642 17.6538L3.50898 17.6466C2.85644 17.6376 2.38715 17.0162 2.55716 16.3861L2.69458 15.8769C2.82642 15.3882 2.57242 14.8782 2.10304 14.6889L1.61382 14.4917C1.00856 14.2476 0.795454 13.4986 1.18159 12.9725L1.49369 12.5473C1.79314 12.1393 1.74057 11.5719 1.37125 11.2258L0.986318 10.8652C0.510085 10.419 0.581936 9.64359 1.13205 9.2925L1.57669 9.00872C2.00331 8.73644 2.15925 8.18837 1.93987 7.73229L1.71122 7.25694C1.42833 6.66884 1.77544 5.97175 2.41523 5.84309L2.93236 5.73909C3.42853 5.63932 3.77193 5.18458 3.73211 4.68005L3.69062 4.1542C3.63928 3.50362 4.21476 2.979 4.85783 3.09015L5.37761 3.17998C5.87631 3.26618 6.36079 2.9662 6.50593 2.48136L6.65719 1.97603C6.84434 1.35084 7.57048 1.06953 8.12997 1.40547L8.58219 1.67701C9.01608 1.93754 9.57621 1.83283 9.88669 1.43316L10.2103 1.0166Z" fill="black"/>
                  <path d="M8.56933 13.4307L13.4307 8.5693M8.56933 8.56934L13.4307 13.4307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
          </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

<style>


.container {
  padding: 5px;
  position: static;
  width: 100%;
  @media (min-width: 640px) {
    position: relative;
    width: 50%;
  }
}

.container.left .container_clip{
  background: none;
  right: 15%;
  @media (min-width: 640px) {
    background: linear-gradient(to right, #fff 30%,  #a4e7ff 60%, #15BFFD 90%, #15EEBC 100%);
  }
}

.container.right .container_clip{
  background: none;
  left: 15%;
  @media (min-width: 640px) {
    background: linear-gradient(to left, #fff 30%,  #a4e7ff 60%, #15BFFD 90%, #15EEBC 100%);
  }
}

.container.left {
  right: 0%;
  display: flex;
  justify-content: flex-end;
}

.container.right {
  left: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;
  top: calc(50% - 8px);
  right: -8px;
  background: transparent;
  border: 0px;
  border-radius: 16px;
  z-index: 1;
  @media (min-width: 640px) {
    width: 16px;
    height: 16px;
    border: 2px solid #15BFFD;
    background: #15BFFD;
  }
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: '';
  position: absolute;
  width: 56px;
  height: 6px;
  top: calc(50% - 1px);
  right: 8px;
  z-index: 1;
}

.container.container.left::before{
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="56" height="6" viewBox="0 0 56 6" fill="none"><path d="M0.181641 2.92163L5.18164 5.80838L5.18164 0.0348803L0.181641 2.92163ZM4.8172 3.42163L7.90757 3.42163L7.90757 2.42163L4.8172 2.42163L4.8172 3.42163ZM10.9979 3.42163L14.0883 3.42163L14.0883 2.42163L10.9979 2.42163L10.9979 3.42163ZM17.1787 3.42163L20.269 3.42163L20.269 2.42163L17.1787 2.42163L17.1787 3.42163ZM23.3594 3.42164L26.4498 3.42164L26.4498 2.42164L23.3594 2.42164L23.3594 3.42164ZM29.5402 3.42164L32.6305 3.42164L32.6305 2.42164L29.5402 2.42164L29.5402 3.42164ZM35.7209 3.42164L38.8113 3.42164L38.8113 2.42164L35.7209 2.42164L35.7209 3.42164ZM41.9016 3.42164L44.992 3.42164L44.992 2.42164L41.9016 2.42164L41.9016 3.42164ZM48.0824 3.42164L51.1728 3.42164L51.1728 2.42164L48.0824 2.42164L48.0824 3.42164ZM54.2631 3.42164L55.8083 3.42164L55.8083 2.42164L54.2631 2.42164L54.2631 3.42164Z" fill="url(%23paint0_linear_188_4747)" fill-opacity="0.7"/><defs><linearGradient id="paint0_linear_188_4747" x1="6.30057" y1="3.01576" x2="6.31365" y2="4.39196" gradientUnits="userSpaceOnUse"><stop stop-color="%2315BFFD"/><stop offset="1" stop-color="%239C37FD"/></linearGradient></defs></svg>');
}

.container.right::before {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="57" height="7" viewBox="0 0 57 7" fill="none"><path d="M56.2949 3.51721L51.2949 0.63046L51.2949 6.40396L56.2949 3.51721ZM51.6594 3.01721L48.569 3.01721L48.569 4.01721L51.6594 4.01721L51.6594 3.01721ZM45.4786 3.01721L42.3883 3.01721L42.3883 4.01721L45.4786 4.01721L45.4786 3.01721ZM39.2979 3.01721L36.2075 3.01721L36.2075 4.01721L39.2979 4.01721L39.2979 3.01721ZM33.1171 3.01721L30.0268 3.01721L30.0268 4.01721L33.1171 4.01721L33.1171 3.01721ZM26.9364 3.01721L23.846 3.01721L23.846 4.01721L26.9364 4.01721L26.9364 3.01721ZM20.7557 3.01721L17.6653 3.01721L17.6653 4.01721L20.7557 4.01721L20.7557 3.01721ZM14.5749 3.01721L11.4846 3.01721L11.4846 4.01721L14.5749 4.01721L14.5749 3.01721ZM8.39418 3.01721L5.30381 3.01721L5.30381 4.01721L8.39418 4.01721L8.39418 3.01721ZM2.21344 3.01721L0.668255 3.01721L0.668255 4.01721L2.21344 4.01721L2.21344 3.01721Z" fill="%231286B0"/></svg>');
  left: 8px;
}

</style>