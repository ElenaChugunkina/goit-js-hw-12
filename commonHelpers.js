import{a as L,i as h,S as b}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const g=s=>s.map(e=>`<li class="img">
       <a class="gallery-link" href="${e.largeImageURL}">
         <img class="gallery-image" src= "${e.webformatURL}"
          data-source="${e.largeImageURL}"
           alt="${e.tags}"/>
           <ul class="description">
                  <li>
                  <p>Likes</p>
                  <p class="likes-one">${e.likes}</p>
                  </li>
                  <li>
                  <p>Views</p>
                  <p class="likes-one">${e.views}</p>
                  </li>
                  <li>
                  <p>Comments</p>
                  <p class="likes-one">${e.comments}</p>
                  </li>
                  <li>
                  <p>Downloads</p>
                  <p class="likes-one">${e.downloads}</p>
                  </li>
              </ul>
        </a>
      
     </li>`).join(""),w="43819074-06fd45097a02a2f47bb2a7010",S="https://pixabay.com/api/";async function y(s,e=1,r=15){return L.get(`${S}`,{params:{key:w,q:s,image_type:"photo",per_page:r,page:e,safesearch:!0,orientation:"horizontal"}})}const l=document.querySelector(".gallery"),P=document.querySelector(".js-search-form"),i=document.querySelector(".js-loader"),a=document.querySelector(".js-load-more");document.querySelector(".load-two");let c,n=1,d="",m=0;const p=15;async function k(s){if(s.preventDefault(),d=s.target.elements.searchKey.value.trim(),n=1,d===""){l.innerHTML="",s.target.reset(),h.show({message:"Input field can not be empty",messageColor:"black",close:!0,backgroundColor:"orange",timeout:3e3}),a.classList.add("is-hidden");return}l.innerHTML="",i.classList.remove("is-hidden"),a.classList.add("is-hidden");try{const{totalHits:e,data:r}=await y(d,n,p);if(r.total===0){s.target.reset(),i.classList.add("is-hidden"),h.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"blue",close:!0,backgroundColor:"yellow",timeout:3e3});return}l.innerHTML=g(r.hits),m=Math.ceil(r.totalHits/p),console.log(m),c?c.refresh():c=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),r.hits.length>1?a.classList.remove("is-hidden"):a.classList.add("is-hidden")}catch(e){console.log(e)}s.target.reset(),i.classList.add("is-hidden")}P.addEventListener("submit",k);a.addEventListener("click",async s=>{i.classList.remove("is-hidden"),n+=1,a.classList.add("is-hidden");try{const{totalHits:e,data:r}=await y(d,n,p);l.innerHTML+=g(r.hits),n>=m?(a.classList.add("is-hidden"),i.classList.add("is-hidden"),h.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"black",close:!0,backgroundColor:"orange",timeout:3e3})):a.classList.remove("is-hidden"),v()}catch(e){console.log(e)}finally{i.classList.add("is-hidden")}c.refresh()});function v(){const s=l.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
