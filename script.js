document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded. StoryScapes v3.14 (Index Static Map Robustness)");

    // =============================================
    // == 1. Central Location Data Source (UNCHANGED from v3.13) ==
    // =============================================
    const allLocationsData = [
        // --- Wheel of Time ---
        	{ id: 'wot-1', fandom: 'The Wheel of Time', continent: 'Europe', country: 'Czech Republic', title: 'Jordan Studios', description: `<p>While not publicly accessible, the massive Jordan Studios complex near Prague is the central hub for The Wheel of Time's production. Numerous interior sets (White Tower, Falme, etc.), workshops, and soundstages bring the series' diverse locations to life.</p>`, images: ['13JSP.png', '13JSP1.png', '13JSP2.png'], map: { lat: 50.1305, lng: 14.5187, popup: 'Jordan Studios', zoom: 10 } },
		
		{ id: 'wot-2', fandom: 'The Wheel of Time', continent: 'Europe', country: 'Slovenia', title: 'Great Soča Gorge', description: `<p>The stunningly vibrant, turquoise waters and sheer cliffs of the Great Soča Gorge in Slovenia's Triglav National Park served as a key location in Season 1. This dramatic setting hosted the poignant scene where Egwene and Nynaeve undergo the Women's Circle ritual by plunging into the water.</p><p>The raw natural beauty perfectly captured the wild, elemental spirit of the Two Rivers and the intensity of the ritual.</p>`, images: ['6Great Soca Gorge.png', '6Great Soca Gorge2.jpg', '6Great Soca Gorge3.jpg', '6Great Soca Gorge4.png'], map: { lat: 46.34088, lng: 13.65115, popup: 'Great Soča Gorge (WoT Ritual Site)', zoom: 12 } },
		
        	{ id: 'wot-3', fandom: 'The Wheel of Time', continent: 'Africa', country: 'Morocco', title: 'Atlas Studios', description: `<p>In the fifth episode, "Damane," the city of Falme appears for the first time, partially filmed on a set located at Atlas Studios in Ouarzazate, Morocco.</p><p>The place was also used as a location featured in  the 7th episode of the third season of Game of Thrones, where Daenerys arrives in the desert city of Astapor. </p>`, images: ['ouarzazate1.jpg', 'ouarzazate2.jpg', 'ouarzazate3.jpg'], map: { lat: 30.9401, lng: -7.1331, popup: 'Atlas Studios, Ouarzazate', zoom: 11 } },
		
		{ id: 'wot-4', fandom: 'The Wheel of Time', continent: 'Africa', country: 'South Africa', title: 'Western Cape', description: `<p>To achieve the harsh desert landscape of Aiel Waste, The WoT production turned to South Africa. The filming unit set up camp at The Cape Town Film Studios, where they reportedly built a number of interior sets to portray Cold Rocks Hold and Rhuidean.</p><p> Taal Monument was also a film location featured in the flashback back to the Age of Legends featuring the War of Power. The desert scenes were filmed at the magnificent Atlantis Dunes</p>`, images: ['WestCape1.png', 'WestCape2.png', 'WestCape3.png'], map: { lat: -34.029116675928954, lng: 18.721626042430888, popup: 'Western Cape', zoom: 9 } },
		
		{ id: 'wot-5', fandom: 'The Wheel of Time', continent: 'Africa', country: 'Western Sahara', title: 'Dakhla Bay', description: `<p>The shallow-water beach and cliffs were filmed in the Dakhla Bay tidal area. This spot serves as the location of the gateway to Falme in the Season 2 finale. The beaches also provide the backdrop for the emotional moment when Lan and Moiraine finally rebond. </p><p>The bay's expansive lagoon, framed by windswept dunes and dramatic cliffs, is also a popular destination for windsurfing and kitesurfing enthusiasts.</p>`, images: ['dahla1.png', 'dahla2.png', 'dahla3.png'], map: { lat: 23.749731410126756, lng: -15.814427532305528, popup: 'Dahla', zoom: 9 } },
		
		{ id: 'wot-6', fandom: 'The Wheel of Time', continent: 'Europe', country: 'Czech Republic', title: 'Toušický Stone Bridge', description: `<p>Located near the village of Toušice in the Central Bohemian Region of the Czech Republic, this 17th-century stone bridge spans the Výrovka River. It appears in Episode 6 of Season 3, "Tel’aran’rhiod", during a scene set in the World of Dreams.</p><p>Here, Egwene visits Nynaeve’s dream and sees her standing on the bridge, gently teaching her daughter how to Listen to the Wind. The bridge’s weathered stones and peaceful surroundings add to the emotional and dreamlike tone of the scene.</p>`, images: ['tousicky1.jpg', 'tousicky2.jpg', 'tousicky3.jpg'], map: { lat: 49.98509, lng: 15.00949, popup: 'Toušický Stone Bridge', zoom: 16 } },
		
		{ id: 'wot-7', fandom: 'The Wheel of Time', continent: 'Europe', country: 'Czech Republic', title: 'Rock reliefs and caves of Harfenice', description: `<p>Set near Želízy in the Central Bohemian Region of the Czech Republic, this location features the distinctive sandstone reliefs of Harfenice. It appears in Season 1 when the Whitecloaks rush to capture Egwene and Perrin.</p><p>The striking carvings and natural rock formations add a dramatic edge to the scene. Interestingly, all the sculptures were created purely for pleasure by Václav Levý between 1840 and 1845.</p>`, images: ['harfenice1.jpg', 'harfenice2.png', 'harfenice3.jpg'], map: { lat: 50.43509094938485, lng: 14.453817865865512, popup: 'Rock reliefs and caves of Harfenice', zoom: 11 } },
		
		{ id: 'wot-8', fandom: 'The Wheel of Time', continent: 'Europe', country: 'Italy', title: 'Masseria Lo Spagnulo', description: `<p>Located near Ostuni in Puglia, Italy, this historic fortified farmhouse became the residence of the Brown Ajah sisters Verin and Adeleas in Season 2. Moiraine and Lan also sought refuge here.</p><p>Its rustic charm and fortified appearance lent authenticity to the setting. Interestingly, this location functions as a hotel.</p>`, images: ['7Masseria Lo Spagnulo.png', '7Masseria Lo Spagnulo1.jpg', '7Masseria Lo Spagnulo2.png'], map: { lat: 40.77054, lng: 17.53127, popup: 'Masseria Lo Spagnulo (WoT S2 Location)', zoom: 14 } },
		

        // --- His Dark Materials ---
        	{ id: 'hdm-1', fandom: 'His Dark Materials', continent: 'Europe', country: 'England', title: 'New College, Oxford', description: `<p>One of Oxford's oldest and most visually stunning colleges, New College served as a primary filming location and inspiration for the prestigious Jordan College in both the books and the TV series.</p><p>Wander its atmospheric cloisters and imagine Lyra and Pan exploring its secrets. The historic architecture perfectly captures the academic yet mysterious feel of Lyra's early home.</p>`, images: ['4New-College.jpg', '4New-College1.jpg', '4New-College3.jpg', '4New-College4.jpg', '4New-College2.jpg'], map: { lat: 51.75496, lng: -1.25060, popup: 'New College (HDM Jordan College)', zoom: 15 } },
       		{ id: 'hdm-2', fandom: 'His Dark Materials', continent: 'Europe', country: 'Wales', title: 'Saint Govan\'s Chapel', description: `<p>This tiny, ancient chapel built into the dramatic cliffs of Pembrokeshire, Wales, served as the striking filming location for Mrs. Coulter's remote hideout in the series.</p><p>Its isolated and almost mythical setting perfectly matched the enigmatic character's need for secrecy. Access involves descending steep stone steps.</p>`, images: ['5Govan-chapel.jpg', '5Govan-chapel2.jpg', '5Govan-chapel3.jpg', '5Govan-chapel4.jpg'], map: { lat: 51.59882, lng: -4.93677, popup: "St Govan's Chapel (HDM Mrs Coulter's Hideout)", zoom: 14 } },
       		{ id: 'hdm-3', fandom: 'His Dark Materials', continent: 'Europe', country: 'England', title: 'Oxford Botanic Garden', description: `Oxford Botanic Garden, it is here that Lyra and Will—separated forever by the boundaries of their parallel worlds—promise to return each year on Midsummer’s Day, sitting at the same time in their own realities, bound by memory and love. </p><p>Behind the bench stands a striking sculpture: a bronze pine tree entwined with daemons—a cat and a pine marten—representing Will’s and Lyra’s souls, forever watching over the place they chose to meet.</p>`, images: ['botanic_garden1.jpg', 'botanic_garden2.jpg', 'botanic_garden3.jpg', 'botanic_garden4.jpg',], map: { lat: 51.751094511991205, lng: -1.2471893472907027, popup: 'Oxford Botanic Garden', zoom: 18 }},
		{ id: 'hdm-4', fandom: 'His Dark Materials', continent: 'Europe', country: 'Wales', title: 'Temple of Peace, Cardiff', description: `The Temple of Peace in Cardiff stood in for the interior of the Royal Arctic Institute in His Dark Materials.<p></p> We see it in a tense scene between Lyra and Mrs. Coulter, where the building’s grand, austere architecture underscores the power and control at play. Its cold elegance and imposing scale reflect the story’s themes of authority, secrecy, and the cost of knowledge.</p>`, images: ['tofpleace1.png', 'tofpleace2.jpg', 'tofpleace3.png'], map: { lat: 51.48746226304693, lng: -3.1823936245543694, popup: 'Temple of Peace', zoom: 18 }},
		{ id: 'hdm-5', fandom: 'His Dark Materials', continent: 'Europe', country: 'Wales', title: 'Brecon Beacons National Park', description: `Brecon Beacons National Park (Bannau Brycheiniog) provided some of the most breathtaking landscapes in His Dark Materials, standing in for the remote and mystical regions of Lyra’s world. In Season 1, the park's rugged terrain and dramatic vistas were used to depict the vast expanses of the North. In Season 3, the Black Mountain range and the serene lake Llyn y Fan Fach served as the backdrop for Lord Asriel’s base, representing the Republic of Heaven. `, images: ['BBNP1.jpg', 'BBNP2.jpg', 'BBNP3.jpg'], map: { lat: 51.86326282683234, lng: -3.426831999399114, popup: 'Brecon Beacons National Park', zoom: 8 } },
		{ id: 'hdm-6', fandom: 'His Dark Materials', continent: 'Europe', country: 'Italy', title: 'Korčula, Croatia', description: `The cobbled streets of the spectral city of Cittàgazze were meticulously constructed at Bad Wolf Studios. But would you like to visit a town like this in the real world? </p><p> Many fans believe that the Mediterranean charm of Cittàgazze draws inspiration from the stunning Croatian walled town of Korčula, nestled on the island sharing its name. It perfectly echoes the haunting beauty and timeless feel that define Cittàgazze.`, images: ['KC1.jpg', 'KC2.jpg', 'KC3.jpg'], map: { lat: 42.95238267050892, lng: 17.12968536534325, popup: 'Korčula, Croatia', zoom: 11 } },

        // --- Harry Potter ---
        	{ id: 'hp-1', fandom: 'Harry Potter', continent: 'Europe', country: 'England', title: 'Alnwick Castle', description: `<p>Located in Northumberland, England, Alnwick Castle was famously used as a stand-in for Hogwarts in the first two Harry Potter films.</p><p>Its Outer Bailey is instantly recognizable as the location for Madam Hooch’s flying lesson scene and where Harry first learned to fly a broomstick.</p>`, images: ['8alnwick-castle.jpg', 'assets/images/hp_alnwick_2.jpg', 'assets/images/hp_alnwick_3.jpg'], map: { lat: 55.41571, lng: -1.70523, popup: 'Alnwick Castle (HP Flying Lessons)', zoom: 15 } },
        
		{ id: 'hp-2', fandom: 'Harry Potter', continent: 'Europe', country: 'Scotland', title: 'Glenfinnan Viaduct & Loch Shiel', description: `<p>Nestled in the Scottish Highlands, the Glenfinnan Viaduct provides one of the most iconic shots of the Harry Potter series as the Hogwarts Express crosses it.</p><p>The nearby Loch Shiel served as the stunning backdrop for the Black Lake surrounding Hogwarts.</p>`, images: ['9Glenfinnan-Viaduct.png', 'assets/images/hp_loch_shiel.jpg', 'assets/images/hp_glenfinnan_train.jpg'], map: { lat: 56.8761, lng: -5.4312, popup: "Glenfinnan Viaduct & Loch Shiel (HP Hogwarts Express & Black Lake)", zoom: 13 } },
        
		{ id: 'hp-3', fandom: 'Harry Potter', continent: 'Europe', country: 'England', title: 'Duke Humphre\'s Library & Divinity School', description: `<p>Oxford University provided multiple iconic interiors for Hogwarts. The stunning Divinity School with its intricate ceiling served as the Hogwarts Infirmary.</p><p>Duke Humfrey's Library within the Bodleian complex became the restricted section of the Hogwarts Library.</p>`, images: ['DivinityS1.jpg', 'DivinityS2.jpg', 'DivinityS3.jpg'], map: { lat: 51.75420039495788, lng: -1.2540752298283577, popup: 'Duke Humphre\'s Library & Divinity School', zoom: 16 } },
        
		{ id: 'hp-4', fandom: 'Harry Potter', continent: 'Europe', country: 'England', title: 'Goathland Train Station', description: `<p>Goathland Train Station, located in North Yorkshire is best known to fans as the filming location for Hogsmeade Station.</p><p>Part of the North Yorkshire Moors Railway, the station retains its charming, early 20th-century appearance, making it a popular stop for visitors. Its scenic surroundings and vintage charm bring the magic of the wizarding world to life.</p>`, images: ['Goathland1.jpg', 'Goathland2.jpg', 'Goathland.png'], map: { lat: 54.4005396996095, lng: -0.7117635410673474, popup: 'Goathland Train Station', zoom: 18 }, disabledInfo: true },
		
		{ id: 'hp-5', fandom: 'Harry Potter', continent: 'Europe', country: 'Scotland', title: 'Greyfriars Kirkyard', description: `<p>Located in the heart of Edinburgh, Greyfriars Kirkyard is a historic cemetery famed for its atmospheric setting and centuries-old tombstones. It’s widely known for inspiring character names in the series.</p><p>Visitors can spot headstones bearing familiar names like Thomas Riddell, thought to be the inspiration for Voldemort. With its Gothic ambiance and views of nearby George Heriot’s School—believed to have influenced Hogwarts—Greyfriars is a must-visit for fans and history lovers alike.</p>`, images: ['grey-kirk1.jpg', 'grey-kirk2.jpg', 'grey-kirk.png'], map: { lat: 55.94684114785827, lng: -3.1913870105722433, popup: 'Greyfriars Kirkyard', zoom: 16 } },
		
		{ id: 'hp-6', fandom: 'Harry Potter', continent: 'Europe', country: 'Ireland', title: 'Carraig Lomáin', description: `<p>Lemon Rock in County Kerry, also known as Carraig Lomáin is where we can find the rock that Dumbledore and Harry apparate onto by a remote cliffside cave in search of the Horcrux locket. </p><p>The dramatic cliffs, however, are part of a designated UNESCO Global Geopark in <b>County Clare, Ireland</b>, known for their stunning natural beauty and coastal caves. However, the cave itself was recreated on a studio set. </p>`, images: ['Carraig1.png', 'Carraig3.png', 'Carraig2.png'], map: { lat: 51.80246152058143, lng: -10.4286213017455, popup: 'Cliffs of Moher', zoom: 9 } },
		
		{ id: 'hp-7', fandom: 'Harry Potter', continent: 'Europe', country: 'Wales', title: 'Freshwater West', description: `<p>Freshwater West in Pembrokeshire, is the stunning beach where the Shell Cottage scenes were filmed for 7nd and 8th instalment. This is where Bill and Fleur’s seaside home was built as a set—and where the emotional scene of Dobby’s death was filmed.</p><p>While the cottage is no longer there, the beach remains a popular destination. Its natural beauty is striking, but strong currents make swimming dangerous, so visitors are advised to be cautious.</p>`, images: ['Freshwater.png', 'Freshwater2.png', 'Freshwater3.png', 'Freshwater4.png'], map: { lat: 51.66032929042331, lng: -5.066174854288453, popup: 'Freshwater West', zoom: 14 }},

        	{ id: 'idx-map-linker-1', originalMapId: 'map1', linkToId: 'hdm-1' }, 
		{ id: 'idx-map-linker-2', originalMapId: 'map2', linkToId: 'wot-1' }, 
		{ id: 'idx-map-linker-3', originalMapId: 'map3', linkToId: 'hp-2'  }, 
		{ id: 'idx-map-linker-4', originalMapId: 'map4', linkToId: 'hdm-2' }, 
		{ id: 'idx-map-linker-5', originalMapId: 'map5', linkToId: 'wot-2' }, 
		{ id: 'idx-map-linker-6', originalMapId: 'map6', linkToId: 'hp-1'  }
    ];
    const mapInstances = {}; let isLoggedIn = false; const CART_KEY = 'storyScapesCart_v2'; const FAVORITES_KEY = 'storyScapesFavorites_v2';
    function safeQuerySelector(s, c=document){try{return c.querySelector(s);}catch(e){return null;}} function safeQuerySelectorAll(s,c=document){try{return c.querySelectorAll(s);}catch(e){return[];}}
    function openModal(el){if(!el)return;el.style.display='block';const pd=safeQuerySelector('#profile-dropdown');if(pd)pd.classList.remove('active');} function closeModal(el){if(!el)return;el.style.display='none';}
    function updateProfileDropdown(){const dm=safeQuerySelector('#profile-dropdown');if(!dm)return;dm.innerHTML='';if(isLoggedIn){dm.innerHTML=`<a href="#profile">Profile</a><a href="favorites-page.html">Favs</a><a href="cart-page.html">Cart</a><button id="logoutButton">Logout</button>`;const lb=safeQuerySelector('#logoutButton',dm);if(lb)lb.addEventListener('click',handleLogout);}else{dm.innerHTML=`<a href="#" id="loginLink">Login</a><a href="#" id="registerLink">Register</a>`;const ll=safeQuerySelector('#loginLink',dm),rl=safeQuerySelector('#registerLink',dm),lmo=safeQuerySelector('#loginModal'),rmo=safeQuerySelector('#registerModal');if(ll&&lmo)ll.onclick=(e)=>{e.preventDefault();openModal(lmo);};if(rl&&rmo)rl.onclick=(e)=>{e.preventDefault();openModal(rmo);};}} function handleLogout(){isLoggedIn=false;updateProfileDropdown();alert('Logged out.');}
    function initMiniMap(id,cds,zm=9,popTxt='',isInt=false){if(typeof L==='undefined'){return null;} const mc=safeQuerySelector(`#${id}`);if(!mc){return null;} if(mc._leaflet_id)return mapInstances[id]; if(!Array.isArray(cds)||cds.length!==2||typeof cds[0]!=='number'||typeof cds[1]!=='number'){mc.innerHTML=`<p style="color:red;padding:10px;">Bad Coords</p>`;return null;} try{const o={scrollWheelZoom:isInt,dragging:isInt,zoomControl:true,tap:isInt,touchZoom:isInt,doubleClickZoom:false,boxZoom:false,keyboard:false,attributionControl:isInt};const m=L.map(id,o).setView(cds,zm);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:isInt?'© OSM':'',maxZoom:18}).addTo(m);const mrk=L.marker(cds).addTo(m);if(popTxt)mrk.bindPopup(popTxt);mapInstances[id]=m;return m;}catch(e){mc.innerHTML=`<p style="color:red;padding:10px;">Map Error</p>`;return null;}}
    function getCart(){const s=localStorage.getItem(CART_KEY);try{const c=s?JSON.parse(s):[];return c.map(i=>({...i,quantity:Number(i.quantity)||1,price:Number(i.price)||0}));}catch(e){return[];}} function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartCountDisplay();if(safeQuerySelector('.cart-page-content'))renderCartItems();} function addToCart(id,n,p,img){if(!id||!n||isNaN(parseFloat(p))){alert("Invalid item.");return;} const c=getCart(),idx=c.findIndex(i=>i.id===id);if(idx>-1)c[idx].quantity=(Number(c[idx].quantity)||0)+1;else c.push({id,name:n,price:parseFloat(p),image:img||'assets/images/placeholder_general.jpg',quantity:1});saveCart(c);alert(`"${n}" added!`);} function removeFromCart(id){let c=getCart();const r=c.find(i=>i.id===id);c=c.filter(i=>i.id!==id);alert(`"${r?r.name:'Item'}" removed.`);saveCart(c);} function updateCartItemQuantity(id,q){let c=getCart();const idx=c.findIndex(i=>i.id===id);const nQ=parseInt(q,10);if(idx>-1){if(!isNaN(nQ)&&nQ>0){c[idx].quantity=nQ;saveCart(c);}else removeFromCart(id);}} function updateCartCountDisplay(){const t=getCart().reduce((s,i)=>s+(Number(i.quantity)||0),0),sp=safeQuerySelector('#cart-icon .cart-count');if(sp){if(t>0){sp.textContent=`(${t})`;sp.classList.remove('is-empty');sp.style.display='inline-block';}else{sp.textContent='(0)';sp.classList.add('is-empty');sp.style.display='none';}}}
    function getFavorites(){const s=localStorage.getItem(FAVORITES_KEY);try{const f=s?JSON.parse(s):[];return Array.isArray(f)?f:[];}catch(e){return[];}} function saveFavorites(f){if(!Array.isArray(f))return;localStorage.setItem(FAVORITES_KEY,JSON.stringify(f));if(safeQuerySelector('.favorites-page-content'))renderFavoriteLocationsPage();} function isFavorited(id){return getFavorites().includes(id);} function toggleFavorite(id){if(!id)return;let f=getFavorites();const l=allLocationsData.find(i=>i.id===id),n=l?l.title:'Location',idx=f.indexOf(id);if(idx>-1){f.splice(idx,1);alert(`"${n}" removed.`);}else{f.push(id);alert(`"${n}" added!`);}saveFavorites(f);updateAllFavoriteButtonStyles();}
    function updateAllFavoriteButtonStyles(){const f=getFavorites();safeQuerySelectorAll('.btn-fav').forEach(b=>{const ct=b.closest('[data-location-id]');if(!ct?.dataset?.locationId)return;const id=ct.dataset.locationId,ic=safeQuerySelector('i',b);let tn=Array.from(b.childNodes).find(n=>n.nodeType===3&&n.textContent.trim());if(!tn){tn=document.createTextNode('');b.appendChild(tn);}if(ic&&tn){if(f.includes(id)){ic.classList.replace('far','fas');tn.textContent=b.classList.contains('btn-remove-fav')?' Remove':' Favorited';b.title="Remove";}else{ic.classList.replace('fas','far');tn.textContent=' Add to Favs';b.title="Add";}}});}

    // ===================================================================
    // == 3. HTML Generation & Feature Initialization ==
    // ===================================================================
     function generateLocationHTML(loc) { /* As per v3.12 */
        const i=loc.images && loc.images.length > 0 ? loc.images.map(s=>`<div class="swiper-slide"><img loading="lazy" src="${s}" alt="${loc.title || 'Location'} Image"></div>`).join('') : `<div class="swiper-slide"><img src="assets/images/placeholder_general.jpg" alt="Placeholder"></div>`;
        const dB=loc.disabledInfo?`<button class="btn btn-details" disabled>Studio</button>`:`<a href="#" class="btn btn-details" data-location-id="${loc.id}">Info</a>`;
        const favBtn = `<button class="btn btn-fav"><i class="far fa-heart"></i> Add to Favorites</button>`;
        const mapHTML = loc.map?.lat != null ? `<div class="mini-map" id="map-${loc.id}" data-lat="${loc.map.lat}" data-lng="${loc.map.lng}" data-popup="${loc.map.popup || loc.title}" data-zoom="${loc.map.zoom || 9}"></div>` : `<div class="location-entry-map-placeholder"><p>Map data unavailable.</p></div>`;
        return`<article class="location-entry" data-location-id="${loc.id}" data-continent="${loc.continent||'Unk'}" data-country="${loc.country||'Unk'}" data-fandom="${loc.fandom||'Unk'}"><div class="location-entry-swiper"><div class="swiper location-swiper"><div class="swiper-wrapper">${i}</div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div><div class="location-entry-details"><h3>${loc.title||'Unk'}</h3><p class="location-fandom">Fandom: ${loc.fandom||'Unk'}</p><div class="location-description">${loc.description||'<p>No description.</p>'}</div><div class="location-actions">${favBtn}${dB}</div></div><div class="location-entry-map">${mapHTML}</div></article>`;
     }

     function initializePageFeatures(cSel){ /* As per v3.12 (your simpler init for dynamic content) */
        const c=safeQuerySelector(cSel);if(!c)return;
        c.querySelectorAll('.location-swiper').forEach(sE=>{
            if(sE.swiper || sE.classList.contains('swiper-initialized-loc-dynamic')) return;
            try{ const p=sE.querySelector('.swiper-pagination'),n=sE.querySelector('.swiper-button-next'),pr=sE.querySelector('.swiper-button-prev');
                if(typeof Swiper!=='undefined'){new Swiper(sE,{loop:sE.querySelectorAll('.swiper-slide').length > 1,keyboard:{enabled:true},pagination:p?{el:p,clickable:true}:undefined,navigation:(n&&pr)?{nextEl:n,prevEl:pr}:undefined,lazy:{loadPrevNext:true},preloadImages:false});sE.classList.add('swiper-initialized-loc-dynamic');}
            }catch(e){ sE.innerHTML = '<p style="color:red;">Gallery Err</p>';}
        });
        c.querySelectorAll('.mini-map').forEach(mE=>{
            if(!mE._leaflet_id && mE.id && mE.dataset.lat){ const lat=parseFloat(mE.dataset.lat),lng=parseFloat(mE.dataset.lng); if(!isNaN(lat)&&!isNaN(lng))initMiniMap(mE.id,[lat,lng],parseInt(mE.dataset.zoom,10)||9,mE.dataset.popup,false);}
        });
        c.querySelectorAll('.btn-fav').forEach(b=>{if(b.dataset.fL)return;b.addEventListener('click',function(){const art=this.closest('[data-location-id]');if(art?.dataset?.locationId)toggleFavorite(art.dataset.locationId);});b.dataset.fL='t';});
        c.querySelectorAll('.btn-details:not([disabled])').forEach(b=>{if(b.dataset.dL)return;b.addEventListener('click',function(e){e.preventDefault();alert(`Info: ${this.dataset.locationId}`);});b.dataset.dL='t';});
     }

     function renderLocations(sel,crit={}){ /* As per v3.12 */
        const tC=safeQuerySelector(sel);if(!tC)return; tC.innerHTML = '<p class="loading-message">Searching...</p>';
        setTimeout(() => { try {const fD=allLocationsData.filter(l=>!l.originalMapId&&(!crit.fandom||crit.fandom==='all'||l.fandom===crit.fandom)&&(!crit.continent||crit.continent==='all'||l.continent===crit.continent)&&(!crit.country||crit.country==='all'||l.country===crit.country));tC.innerHTML=fD.length>0?fD.map(generateLocationHTML).join(''):'<p class="no-results">No locations match.</p>';initializePageFeatures(sel);updateAllFavoriteButtonStyles();}catch(e){ tC.innerHTML='<p class="no-results" style="color:red;">Load err.</p>';}},0);
    }
    function renderCartItems(){ /* As per v3.12 */ const lc=safeQuerySelector('#cart-items-list'),sc=safeQuerySelector('#order-summary-details');if(!lc||!sc)return;const cart=getCart();lc.innerHTML='';sc.innerHTML='';if(cart.length===0){lc.innerHTML=`<p class="empty-cart-message">Cart empty. <a href="tours-page.html">Explore</a>?</p>`;sc.innerHTML='<p>Cart empty.</p>';const cb=safeQuerySelector('.btn-checkout');if(cb)cb.disabled=true;return;}let sub=0;cart.forEach(i=>{const t=(i.price||0)*(i.quantity||0);sub+=t;const e=document.createElement('div');e.className='cart-item';e.dataset.itemId=i.id;e.innerHTML=`<img loading="lazy" src="${i.image||'assets/images/placeholder_general.jpg'}" alt="${i.name}" class="cart-item-image"><div class="cart-item-details"><h4>${i.name}</h4><p class="item-price">£${i.price?.toFixed(2)||'0.00'}</p></div><div class="cart-item-controls"><div class="cart-item-quantity"><label for="qty-${i.id}">Qty:</label><input type="number" class="quantity-input" id="qty-${i.id}" value="${i.quantity}" min="1" step="1" data-item-id="${i.id}"></div><button class="btn-remove-item" title="Remove" data-item-id="${i.id}"><i class="fas fa-trash-alt"></i></button></div>`;lc.appendChild(e);});const sh=sub>0?5:0,tax=0,gt=sub+tax+sh;sc.innerHTML=`<div class="summary-row"><span>Subtotal:</span><span>£${sub.toFixed(2)}</span></div>${tax>0?`<div class="summary-row"><span>Tax:</span><span>£${tax.toFixed(2)}</span></div>`:''} <div class="summary-row"><span>Shipping:</span><span>£${sh.toFixed(2)}</span></div><div class="summary-row total-row"><span>Total:</span><span>£${gt.toFixed(2)}</span></div>`;const cb=safeQuerySelector('.btn-checkout');if(cb)cb.disabled=false;attachCartItemListeners();}
    function attachCartItemListeners(){ /* As per v3.12 */ const lc=safeQuerySelector('#cart-items-list');if(!lc)return;safeQuerySelectorAll('.quantity-input',lc).forEach(i=>{if(i.dataset.ql)return;i.addEventListener('change',function(){const id=this.dataset.itemId,q=parseInt(this.value,10);if(id)updateCartItemQuantity(id,q);});i.dataset.ql='true';});safeQuerySelectorAll('.btn-remove-item',lc).forEach(b=>{if(b.dataset.rl)return;b.addEventListener('click',function(){const id=this.dataset.itemId;if(id)removeFromCart(id);});b.dataset.rl='true';});}
    let allFavoritesMapInstance=null;
    function generateFavoriteItemHTML(l){ /* As per v3.12 */ return `<article class="favorite-item-entry" data-location-id="${l.id}"><img loading="lazy" src="${l.images?.[0]||'assets/images/placeholder_general.jpg'}" alt="${l.title}" class="favorite-item-image"><div class="favorite-item-details"><h4>${l.title}</h4><p>${l.fandom||'Unk'}</p><p class="location-meta">${l.country||'Unk'}, ${l.continent||'Unk'}</p></div><div class="favorite-item-actions"><button class="btn btn-fav btn-remove-fav" title="Remove ${l.title}"><i class="fas fa-trash-alt"></i> Remove</button></div></article>`;}
    function renderFavoriteLocationsPage(){ /* As per v3.12 */ const fl=safeQuerySelector('#favorite-locations-list'),me=safeQuerySelector('#all-favorites-map');if(!fl||!me)return;fl.innerHTML='<p class="loading-message">Loading favs...</p>';setTimeout(()=>{const fIDs=getFavorites(),fLocs=allLocationsData.filter(l=>fIDs.includes(l.id)&&!l.originalMapId);if(fLocs.length>0){fl.innerHTML=fLocs.map(generateFavoriteItemHTML).join('');initializePageFeatures('#favorite-locations-list');}else fl.innerHTML='<p class="no-results">No favorites yet.</p>';try{if(!allFavoritesMapInstance&&!me._leaflet_id){allFavoritesMapInstance=L.map(me.id,{scrollWheelZoom:true,dragging:true,zoomControl:true}).setView([20,0],2);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OSM',maxZoom:18}).addTo(allFavoritesMapInstance);me._leaflet_id='init';}else if(allFavoritesMapInstance){allFavoritesMapInstance.eachLayer(l=>{if(l instanceof L.Marker)allFavoritesMapInstance.removeLayer(l);});}if(allFavoritesMapInstance&&fLocs.length>0){const mks=fLocs.map(l=>l.map?.lat?L.marker([l.map.lat,l.map.lng]).bindPopup(`<b>${l.title}</b><br>${l.fandom}`):null).filter(Boolean);if(mks.length>0){mks.forEach(m=>m.addTo(allFavoritesMapInstance));allFavoritesMapInstance.fitBounds(new L.featureGroup(mks).getBounds().pad(0.2));}else allFavoritesMapInstance.setView([20,0],2);}else if(allFavoritesMapInstance)allFavoritesMapInstance.setView([20,0],2);}catch(e){if(me)me.innerHTML='<p style="color:red;padding:10px;">Map Error.</p>';}},0);}

    // ==================================================
    // == 6. Global Event Listeners Setup ==
    // ==================================================
    function setupGlobalListeners() { /* As per v3.12, ensure static fav setup is robust */
        safeQuerySelectorAll('nav .dropdown > a').forEach(l=>{if(l.dataset.nl)return;l.addEventListener('click',function(e){if(window.innerWidth<992){e.preventDefault();const p=this.parentElement,o=p.classList.toggle('open'),s=p.querySelector('.dropdown-menu');if(s)s.style.display=o?'block':'none';safeQuerySelectorAll('nav .dropdown.open').forEach(od=>{if(od!==p){od.classList.remove('open');const os=od.querySelector('.dropdown-menu');if(os)os.style.display='none';}});}});l.dataset.nl='true';});document.addEventListener('click',(e)=>{if(window.innerWidth<992&&!e.target.closest('header nav')){safeQuerySelectorAll('nav .dropdown.open').forEach(d=>{d.classList.remove('open');const s=d.querySelector('.dropdown-menu');if(s)s.style.display='none';});}},true);
        const ui=safeQuerySelector('#user-profile-icon'),pd=safeQuerySelector('#profile-dropdown');if(ui&&pd&&!ui.dataset.pl){ui.addEventListener('click',(e)=>{e.preventDefault();pd.classList.toggle('active');});document.addEventListener('click',(e)=>{if(!ui.contains(e.target)&&!pd.contains(e.target))pd.classList.remove('active');});ui.dataset.pl='true';}
        const lm=safeQuerySelector('#loginModal'),rm=safeQuerySelector('#registerModal');if(lm&&rm&&!lm.dataset.ml){const clb=safeQuerySelector('#closeLoginModal'),crb=safeQuerySelector('#closeRegisterModal'),srl=safeQuerySelector('#showRegisterModalLink',lm),sll=safeQuerySelector('#showLoginModalLink',rm);if(clb)clb.onclick=()=>closeModal(lm);if(crb)crb.onclick=()=>closeModal(rm);if(srl)srl.onclick=(e)=>{e.preventDefault();closeModal(lm);openModal(rm);};if(sll)sll.onclick=(e)=>{e.preventDefault();closeModal(rm);openModal(lm);};window.addEventListener('click',(e)=>{if(e.target===lm)closeModal(lm);if(e.target===rm)closeModal(rm);});const lf=safeQuerySelector('#loginForm'),rf=safeQuerySelector('#registerForm');if(lf)lf.addEventListener('submit',(e)=>{e.preventDefault();isLoggedIn=true;updateProfileDropdown();closeModal(lm);alert('Login!');});if(rf)rf.addEventListener('submit',(e)=>{e.preventDefault();isLoggedIn=true;updateProfileDropdown();closeModal(rm);alert('Registered!');});lm.dataset.ml='true';}
        const cf=safeQuerySelector('#contact-form');if(cf&&!cf.dataset.cl){cf.addEventListener('submit',(e)=>{e.preventDefault();alert('Sent!');cf.reset();});cf.dataset.cl='true';}
        // STATIC INDEX FAV BUTTONS
        const featuredGridStatic = safeQuerySelector('.featured-locations .locations-grid');
        if (featuredGridStatic && !featuredGridStatic.dataset.staticFavInit) {
            // console.log("setupGlobalListeners: Setting up static fav buttons for Index page.");
            featuredGridStatic.querySelectorAll('.location-card').forEach(card => {
                const favButton = card.querySelector('.btn-fav');
                const staticMapElem = card.querySelector('.mini-map');
                if (favButton && staticMapElem && !favButton.dataset.favListenerAttached) {
                    const htmlMapId = staticMapElem.id;
                    const mapLinkData = allLocationsData.find(loc => loc.originalMapId === htmlMapId);
                    if (mapLinkData?.linkToId) {
                        card.dataset.locationId = mapLinkData.linkToId;
                        favButton.addEventListener('click', () => toggleFavorite(mapLinkData.linkToId));
                        favButton.dataset.favListenerAttached = 'true';
                    } else { favButton.disabled = true; favButton.title = "Error linking item.";}
                }
            });
            featuredGridStatic.dataset.staticFavInit = 'true';
        }
    }

    // =============================================
    // == 7. Page-Specific Initializations & Renders ==
    // =============================================
    function initializeIndexPageFeatures() {
        // --- Hero Swiper ---
        const heroSwiperElement = safeQuerySelector('.hero-slider .mySwiper');
        if (heroSwiperElement && !heroSwiperElement.dataset.swiperInitialized) {
            try {
                if (typeof Swiper === 'undefined' || !Swiper) { throw new Error("Swiper library not available for Hero."); }
                new Swiper(heroSwiperElement, {
                    parallax: true, speed: 800, loop: true, keyboard: { enabled: true },
                    navigation: { nextEl: '.hero-slider .swiper-button-next', prevEl: '.hero-slider .swiper-button-prev' },
                    pagination: { el: '.hero-slider .swiper-pagination', clickable: true },
                    autoplay: { delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true },
                });
                heroSwiperElement.dataset.swiperInitialized = 'true';
            } catch(error) {
                console.error("Hero Swiper Init Error on Index:", error);
                if(heroSwiperElement) heroSwiperElement.innerHTML = `<div class='swiper-error-msg'>Slider Error: ${error.message}</div>`;
            }
        }

        // --- Static Index Mini-Maps ---
        const featuredGrid = safeQuerySelector('.featured-locations .locations-grid');
        if (featuredGrid && !featuredGrid.dataset.indexMapsInitialized) {
            // console.log("Initializing static index page maps (deferred)...");
            // Use a small timeout to ensure DOM is fully settled for Leaflet
            setTimeout(() => {
                if (!featuredGrid.dataset.indexMapsInitialized) { // Double check flag in case of multiple calls
                     let mapsInitializedCount = 0;
                    safeQuerySelectorAll('.mini-map', featuredGrid).forEach(mapElem => {
                         // Leaflet sometimes doesn't like being initialized on a hidden element or one rapidly changing.
                         // We only init if it hasn't been (by _leaflet_id) AND it has the necessary data.
                         if (mapElem && !mapElem._leaflet_id && mapElem.id && mapElem.offsetParent !== null) { // Check if visible
                            const htmlMapId = mapElem.id;
                            const mapLinkData = allLocationsData.find(loc => loc.originalMapId === htmlMapId);
                            if (mapLinkData?.linkToId) {
                                const targetLocData = allLocationsData.find(loc => loc.id === mapLinkData.linkToId);
                                if (targetLocData?.map?.lat != null && targetLocData.map.lng != null) {
                                    if (initMiniMap(htmlMapId, [targetLocData.map.lat, targetLocData.map.lng], targetLocData.map.zoom || 13, targetLocData.map.popup, true)) {
                                         mapsInitializedCount++;
                                    }
                                } else {
                                     // console.warn(`Map data missing for ${htmlMapId} -> ${targetLocData?.id}`);
                                    if(mapElem) mapElem.innerHTML = `<p class="map-error-msg">Coords missing.</p>`;
                                }
                            } else {
                                 // console.warn(`No link data for static map: ${htmlMapId}`);
                                 if(mapElem) mapElem.innerHTML = `<p class="map-error-msg">Link error.</p>`;
                             }
                         }
                    });
                    // if(mapsInitializedCount > 0) console.log(`Index static maps initialized: ${mapsInitializedCount}`);
                    featuredGrid.dataset.indexMapsInitialized = 'true';
                }
            }, 100); // A small delay of 100ms, adjust if needed
        }
    }


    function runPageSpecificCode() {
        if (safeQuerySelector('.hero-slider')) { // If hero slider exists, assume it's the index page.
            initializeIndexPageFeatures();
        }

        // --- Dynamic Location Page Rendering & Filters ---
        const listCfgs=[{s:'#wot-location-list',f:'The Wheel of Time'},{s:'#hdm-location-list',f:'His Dark Materials'},{s:'#hp-location-list',f:'Harry Potter'},{s:'#all-locations-list',f:null}];let listSel=null,initCrit={};for(const c of listCfgs){if(safeQuerySelector(c.s)){listSel=c.s;if(c.f)initCrit.fandom=c.f;break;}}
        if(listSel){renderLocations(listSel,initCrit);const ff=safeQuerySelector('#location-filters');if(ff&&!ff.dataset.fl){const cs=safeQuerySelector('#filter-continent',ff),cos=safeQuerySelector('#filter-country',ff),fs=safeQuerySelector('#filter-fandom',ff),rb=safeQuerySelector('#reset-filters',ff);const applyF=()=>{const crit={...initCrit};if(cs&&cs.value!=='all')crit.continent=cs.value;if(cos&&cos.value!=='all')crit.country=cos.value;if(!initCrit.fandom&&fs&&fs.value!=='all')crit.fandom=fs.value;renderLocations(listSel,crit);};if(cs)cs.addEventListener('change',applyF);if(cos)cos.addEventListener('change',applyF);if(fs&&!initialCrit.fandom)fs.addEventListener('change',applyF);if(rb)rb.addEventListener('click',(e)=>{e.preventDefault();ff.reset();applyF();});ff.dataset.fl='true';}}

        safeQuerySelectorAll('.btn-add-to-cart').forEach(b=>{if(b.dataset.cl)return;b.addEventListener('click',function(){addToCart(this.dataset.tourId,this.dataset.tourName,this.dataset.tourPrice,this.dataset.tourImage);});b.dataset.cl='true';});
        if(safeQuerySelector('.cart-page-content')&&!document.body.dataset.cpInit){renderCartItems();const oF=safeQuerySelector('#order-form');if(oF)oF.addEventListener('submit',function(e){e.preventDefault();if(getCart().length===0){alert("Empty cart.");return;}alert("Order!");saveCart([]);oF.reset();});document.body.dataset.cpInit='true';}
        if(safeQuerySelector('.favorites-page-content')&&!document.body.dataset.fpInit){renderFavoriteLocationsPage();document.body.dataset.fpInit='true';}

        updateCartCountDisplay(); updateProfileDropdown(); updateAllFavoriteButtonStyles();
        // console.log("StoryScapes page setup v3.14 finalized.");
    }

    // =============================================
    // == 8. Script Execution Start ==
    // =============================================
    try { setupGlobalListeners(); runPageSpecificCode(); } catch (e) { console.error("CRITICAL SCRIPT ERROR (v3.14):", e); const b=safeQuerySelector('body');if(b){const d=document.createElement('div');d.style.cssText="position:fixed;bottom:0;left:0;right:0;background:maroon;color:white;padding:15px;z-index:10000;text-align:center;font-size:1.1em;";d.innerHTML=`<b>Site Error:</b> ${e.message}. See console. Refresh.`;b.appendChild(d);setTimeout(()=>d.remove(),12000);} }
});
