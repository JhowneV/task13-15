function e(e){const t=document.createElement("div");return t.classList.add("movie"),t.innerHTML=`\n        <h3>${e}</h3>\n        <button onclick="removeFromLibrary('${e}', 'watched')">Remove from Watched</button>\n        <button onclick="removeFromLibrary('${e}', 'queue')">Remove from Queue</button>\n    `,t}const t=document.getElementById("watched-btn"),n=document.getElementById("queue-btn");function o(){const t=JSON.parse(localStorage.getItem("movie-watched"))||[],n=document.getElementById("movies-container");n.innerHTML="",t.forEach((t=>{const o=e(t);n.appendChild(o)}))}function c(){const t=JSON.parse(localStorage.getItem("movie-queue"))||[],n=document.getElementById("movies-container");n.innerHTML="",t.forEach((t=>{const o=e(t);n.appendChild(o)}))}t.addEventListener("click",o),n.addEventListener("click",c);
//# sourceMappingURL=library.a9a6a2be.js.map
