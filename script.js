const products=[
{name:"Magnetic Charging Stand",price:29.99,image:"images/charging-stand.svg",tag:"BEST SELLER",desc:"A clean, compact stand for charging and viewing your phone."},
{name:"RGB Desk Light",price:24.99,image:"images/rgb-desk-light.svg",tag:"POPULAR",desc:"Add adjustable ambient light to your desk or room."},
{name:"Foldable Phone Stand",price:16.99,image:"images/phone-stand.svg",tag:"EVERYDAY",desc:"A portable stand for videos, calls, recipes and more."},
{name:"3-in-1 Charging Dock",price:34.99,image:"images/charging-dock.svg",tag:"NEW",desc:"Keep compatible devices organized in one compact spot."},
{name:"Creator Ring Light",price:27.99,image:"images/ring-light.svg",tag:"POPULAR",desc:"Simple lighting for photos, calls and short-form videos."},
{name:"Cable Organizer Kit",price:12.99,image:"images/cable-kit.svg",tag:"ESSENTIAL",desc:"Keep your desk cables tidy and easier to manage."}
];
let cart=[];
const money=n=>`$${n.toFixed(2)}`;
document.getElementById("products").innerHTML=products.map((p,i)=>`<article class="product"><div class="product-img"><span class="tag">${p.tag}</span><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-body"><h3>${p.name}</h3><p>${p.desc}</p><div class="price-row"><span class="price">${money(p.price)}</span><button class="add" onclick="add(${i})">Add to bag</button></div></div></article>`).join("");
function add(i){cart.push(products[i]);renderCart();openCart()}
function remove(i){cart.splice(i,1);renderCart()}
function renderCart(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.name}</span><span><b>${money(p.price)}</b> <button onclick="remove(${i})" style="border:0;background:none;color:#888;cursor:pointer">×</button></span></div>`).join(""):"<div class='empty'>Your bag is empty.<br>Add something you like from the collection.</div>";document.getElementById("total").textContent=money(cart.reduce((s,p)=>s+p.price,0))}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("show")}
function toggleCart(){document.getElementById("cart").classList.toggle("open");document.getElementById("overlay").classList.toggle("show")}
function checkout(){alert("Demo checkout: connect a secure Stripe Checkout Session before accepting real payments.")}
renderCart();
