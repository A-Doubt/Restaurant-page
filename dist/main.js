(()=>{"use strict";console.log("test from loading-page"),console.log("test from contact"),(()=>{const e=document.getElementById("content"),t=(()=>{const e=document.createElement("div");e.classList.add("container");const t=document.createElement("img");return t.src="../photos/chef_cut_wider.jpg",t.setAttribute("id","landing-page-photo"),e.appendChild(t),e})(),n=(()=>{const e=document.createElement("div");e.classList.add("right");const t=(()=>{const e=document.createElement("header");e.classList.add("header");const t=document.createElement("nav");t.classList.add("header-links");const n=document.createElement("ul"),o=document.createElement("li");o.textContent="Home";const c=document.createElement("li");c.textContent="Menu";const d=document.createElement("li");d.textContent="About us";const a=document.createElement("li");return a.textContent="Contact",n.append(o,c,d,a),t.appendChild(n),e.appendChild(t),e})(),n=(()=>{const e=document.createElement("main"),t=document.createElement("div");t.classList.add("landing-body"),e.append(t);const n=document.createElement("div");n.classList.add("landing-right"),t.appendChild(n);const o=document.createElement("div");o.classList.add("name-logo");const c=document.createElement("p");c.setAttribute("id","landing-right-name"),c.textContent="Restaurant name";const d=document.createElement("img");d.setAttribute("id","sushi-logo"),d.src="../photos/187463.png",o.append(c,d);const a=document.createElement("p");a.setAttribute("id","landing-right-info"),a.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam vero neque doloribus. Illo, culpa ducimus dolores voluptate cum reprehenderit, fugiat repudiandae nulla veritatis a, in exercitationem consectetur asperiores quas.";const s=document.createElement("button");return s.setAttribute("id","landing-about-us-button"),s.textContent="About Us",n.append(o,a,s),e})();return e.append(t,n),{header:t,right:e}})(),o=document.createElement("div");o.classList.add("visible"),o.append(t,n.right),e.appendChild(o),n.header})(),console.log("test from ./src/index.js")})();