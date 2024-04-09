const e="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",t=document.getElementById("myModal"),n=document.getElementById("modal-poster"),d=document.getElementById("modal-title"),o=document.getElementById("modal-vote"),i=document.getElementById("modal-popularity"),l=document.getElementById("modal-original-title"),s=document.getElementById("modal-genre"),a=document.getElementById("modal-overview"),c=document.getElementById("addToWatchedBtn"),r=document.getElementById("addToQueuBtn");function m(){t.style.display="none"}document.getElementsByClassName("close")[0].addEventListener("click",m),window.addEventListener("click",(function(e){e.target===t&&m()}));const u=document.getElementById("main"),g=document.getElementById("search-form"),v=document.getElementById("search-input"),h=(document.getElementById("gallery"),document.querySelector(".loader-container")),p=document.getElementById("prev"),E=document.getElementById("next"),y=document.getElementById("current");var L=1,f=2,b=3,I="",B=100;let k,S=[],C=[];function w(e){I=e,u.classList.toggle("is-hidden"),h.classList.toggle("is-hidden"),fetch(e).then((e=>e.json())).then((e=>{console.log(e.results),0!==e.results.length?(!function(e){u.innerHTML="",e.forEach((e=>{const{title:c,poster_path:r,release_date:m}=e,g=document.createElement("div");g.classList.add("movie"),g.innerHTML=`\n            <img src="${r?"https://image.tmdb.org/t/p/w500"+r:"http:/>/via.placeholder.com/1080x1500"}"\n                alt="${c}"/>\n            \n            <div class="movie-info">\n                <h3>${c}</h3>\n                <div class="movie-details">\n                    <span id="release_date" class="${m}">${m}</span>\n                </div>\n            </div>        \n        `,g.addEventListener("click",(function(){!function(e){n.src=`https://image.tmdb.org/t/p/w500/${e.poster_path}`,d.textContent=e.title,o.textContent=e.vote_average+"/"+e.vote_count,i.textContent=e.popularity,l.textContent=e.original_title,s.textContent=e.genre,a.textContent=e.overview,t.style.display="block"}(e)})),u.appendChild(g)}))}(e.results),L=e.page,f=L+1,b=L-1,B=e.total_pages,u.classList.toggle("is-hidden"),h.classList.toggle("is-hidden"),y.innerText=L,L<=1?(p.classList.add("disabled"),E.classList.remove("disabled")):L>=B?(p.classList.remove("disabled"),E.classList.add("disabled")):(p.classList.remove("disabled"),E.classList.remove("disabled"))):(u.classList.toggle("is-hidden"),h.classList.toggle("is-hidden"),u.innerHTML='<h1 class="no-results">No Results Found</h1>')}))}function _(e){let t=I.split("?"),n=t[1].split("&"),d=n[n.length-1].split("=");if("page"!=d[0]){w(I+"&page="+e)}else{d[1]=e.toString();let o=d.join("=");n[n.length-1]=o;let i=n.join("&");w(t[0]+"?"+i)}}localStorage.setItem("movie-queue",JSON.stringify(S)),localStorage.setItem("movie-watched",JSON.stringify(C)),w(e),g.addEventListener("submit",(t=>{t.preventDefault();const n=v.value;w(n?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+n:e)})),p.addEventListener("click",(()=>{b>0&&_(b)})),E.addEventListener("click",(()=>{f<=B&&_(f)})),u.addEventListener("click",(e=>{let t=e.target.parentElement;k=t.lastElementChild.firstElementChild.innerText,console.log(k)})),c.addEventListener("click",(()=>{C.includes(k)?alert(`${k} has been watched already`):C.push(k),localStorage.setItem("movie-watched",JSON.stringify(C))})),r.addEventListener("click",(()=>{S.includes(k)?alert(`${k} has been added to the queue already`):S.push(k),localStorage.setItem("movie-queue",JSON.stringify(S))})),document.body.addEventListener("keydown",(e=>{"Escape"===e.code&&m()})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".header-link.libr").addEventListener("click",(function(){document.getElementById("main").removeAttribute("id")}))}));const x=document.getElementById("watched-btn"),M=document.getElementById("queue-btn");x.addEventListener("click",(function(){const e=JSON.parse(localStorage.getItem("movie-watched"))||[],t=document.getElementById("movies-container");t.innerHTML="",e.forEach((e=>{const n=createMovieElement(e);t.appendChild(n)}))})),M.addEventListener("click",(function(){const e=JSON.parse(localStorage.getItem("movie-queue"))||[],t=document.getElementById("movies-container");t.innerHTML="",e.forEach((e=>{const n=createMovieElement(e);t.appendChild(n)}))}));
//# sourceMappingURL=index.b32fab66.js.map