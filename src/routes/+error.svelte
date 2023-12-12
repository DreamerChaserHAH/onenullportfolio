<script>
    import errorface from "$lib/images/eooror 404.svg";
    import { page } from "$app/stores";
</script>

<section class="flex flex-col items-center justify-start w-full h-screen py-6 gap-y-14">
    <div class="text-6xl font-bold text-gray-950 font-gosha">{$page.error.message}!</div>
    <div class="flex items-start justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="235" height="305" viewBox="0 0 313 405" fill="none">
            <path d="M312.973 326.077H268.503V404.125H160.682V326.077H0V246.35L167.814 0.874619H268.503V244.671H312.973V326.077ZM160.682 244.671V197.674C160.682 188.862 161.102 177.113 161.521 162.007C162.36 146.901 162.78 139.348 163.199 138.509H160.262C153.969 152.776 146.837 165.784 138.866 178.372L94.3954 244.671H160.682Z" fill="#2EC6FD" fill-opacity="0.35"/>
        </svg>
        <div class="relative w-[300px] flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="290" height="315" viewBox="0 0 292 415" fill="none">
                <path d="M291.659 208.129C291.659 279.464 279.493 331.916 255.999 365.066C232.085 398.215 195.586 415 146.081 415C97.8341 415 61.7541 397.796 37.0015 362.968C12.6685 328.14 0.501953 276.527 0.501953 208.129C0.501953 136.375 12.2489 83.9231 36.582 50.3539C60.4955 16.7846 96.9951 0 146.5 0C194.327 0 230.827 17.6239 255.16 52.452C279.493 87.2801 291.659 138.893 291.659 208.129ZM108.742 208.129C108.742 253.868 111.679 285.339 117.133 302.123C123.006 319.328 132.236 327.72 145.661 327.72C159.086 327.72 168.736 318.908 174.609 301.284C180.063 283.66 183 252.609 183 208.129C183 163.231 180.063 132.179 174.609 114.135C168.736 96.092 159.506 87.2801 146.081 87.2801C132.656 87.2801 123.006 96.092 117.552 113.296C111.679 130.501 108.742 161.972 108.742 208.129Z" fill="#2EC6FD" fill-opacity="0.35"/>
            </svg>
            <img class="absolute right-1 bottom-6" alt="404face"  width="352" height="455" src={errorface} />	
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="235" height="305" viewBox="0 0 313 405" fill="none">
            <path d="M312.973 326.077H268.503V404.125H160.682V326.077H0V246.35L167.814 0.874619H268.503V244.671H312.973V326.077ZM160.682 244.671V197.674C160.682 188.862 161.102 177.113 161.521 162.007C162.36 146.901 162.78 139.348 163.199 138.509H160.262C153.969 152.776 146.837 165.784 138.866 178.372L94.3954 244.671H160.682Z" fill="#2EC6FD" fill-opacity="0.35"/>
        </svg>
    </div>
    <div class="w-96 h-12 px-10 py-5 rounded-3xl border border-cyan-400 justify-center items-center gap-2.5 inline-flex">
        <div class="relative h-8 w-9">
        </div>
        <a href="/" class="text-xl font-bold text-black font-gosha">Back To Home</a>
      </div>
</section>