const swiper=new Swiper("#beritaswip",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!0},slidesPerView:"auto",pagination:{el:"#beritaswip > .swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}},navigation:{nextEl:"#beritaswip > .swiper-button-next",prevEl:"#beritaswip > .swiper-button-prev"}});async function main(){const e=await fetch("https://raw.githubusercontent.com/RPLSaci/mosansa/main/data/pengurus.txt"),t=await e.text(),i=t.split("\n").filter((e=>e.length>1)).filter((e=>!e.includes("--")));let n="";const s=t.split("\n").filter((e=>e.includes("INTI")))[0].split("-")[5].trim();for(let e=0;e<i.length;e++){const t=i[e],[a,l,r,p]=t.split(" - ");p&&r===s&&(n+=`\n      <div class="swiper-slide flex">\n      <div class="card w-96 bg-base-100 shadow-xl m-auto">\n          <div class="card-body items-center text-center">\n              <h2 class="card-title">${a}</h2>\n              <p>${p} ${l} ${r}</p>\n          </div>\n      </div>\n  </div>`)}document.querySelector("#data-struktur").innerHTML+=n;new Swiper("#pengurus",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!0},slidesPerView:"auto",pagination:{el:"#pengurus > .swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}},navigation:{nextEl:"#pengurus > .swiper-button-next",prevEl:"#pengurus > .swiper-button-prev"}})}main();
//# sourceMappingURL=index.2870af3f.js.map
