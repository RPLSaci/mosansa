const swiper=new Swiper("#beritaswip",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!0},slidesPerView:"auto",pagination:{el:"#beritaswip > .swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}},navigation:{nextEl:"#beritaswip > .swiper-button-next",prevEl:"#beritaswip > .swiper-button-prev"}});async function main(){const e=await fetch("https://raw.githubusercontent.com/RPLSaci/mosansa/main/data/pengurus.txt"),t=await e.text();load(t);const n=t.split("\n").filter((e=>e.length>1)).filter((e=>!e.includes("//"))).filter((e=>!e.includes("--")));let s="";const a=t.split("\n").filter((e=>e.includes("INTI")))[0].split("-")[5].trim();for(let e=0;e<n.length;e++){const t=n[e],[i,l,r,p]=t.split(" - ");p&&r===a&&(s+=`\n      <div class="swiper-slide flex">\n      <div class="card w-96 bg-mpk shadow-xl m-auto">\n          <div class="card-body items-center text-center">\n              <h2 class="card-title">${i}</h2>\n              <p>${p} ${l} ${r}</p>\n          </div>\n      </div>\n  </div>`)}document.querySelector("#pengurus-mpk > #data-struktur").innerHTML+=s;new Swiper("#pengurus-mpk",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!0},slidesPerView:"auto",pagination:{el:"#pengurus > .swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}},navigation:{nextEl:"#pengurus > .swiper-button-next",prevEl:"#pengurus > .swiper-button-prev"}})}async function load(e){let t=(e=e.split("\n").filter((e=>e.length>1)).filter((e=>!e.includes("--"))).filter((e=>!e.includes("//")))).filter((e=>e.includes("MPK"))).length,n=e.filter((e=>e.includes("OSIS"))).length,s=(new Date).getFullYear()-1+" - "+(new Date).getFullYear();document.querySelector("#info").innerHTML+=`\n  <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">\n  <div class="text-center p-4">\n      <span class="block text-4xl font-bold">${s}</span>\n      <p class="text-base">Masa Bakti</p>\n  </div>\n\n  <div class="text-center p-4">\n  <span data-purecounter-start="0" data-purecounter-end="${t}"\n      class="purecounter block text-4xl font-bold">${t}</span>\n  <p class="text-base">Pengurus MPK</p>\n</div>\n<div class="text-center p-4">\n  <span data-purecounter-start="0" data-purecounter-end="${n}"\n      class="purecounter block text-4xl font-bold">${n}</span>\n  <p class="text-base">Pengurus Osis</p>\n</div>\n\n\n  <div class="text-center p-4">\n      <span data-purecounter-start="0" data-purecounter-end="10"\n          class="purecounter block text-4xl font-bold">10</span>\n      <p class="text-base">Total Sekbid Osis</p>\n  </div>\n\n</div>\n`}main();
//# sourceMappingURL=index.281f3093.js.map