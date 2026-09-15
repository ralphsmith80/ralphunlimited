(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{context;master;buffers=new Map;music=new Audio(`./assets/music.mp3`);settings;voices=0;active=!1;constructor(e){this.settings=e,this.music.loop=!0,this.music.volume=.24,this.music.preload=`none`}async unlock(){try{if(!this.context){this.context=new AudioContext,this.master=this.context.createGain(),this.master.connect(this.context.destination),this.master.gain.value=this.settings.sound?.45:0;let e=this.context;e.resume().catch(()=>{}),this.syncMusic(),await Promise.all([`fire`,`boom`,`explode1`,`explode2`].map(async t=>{try{let n=await fetch(`./assets/${t}.wav`);n.ok&&this.buffers.set(t,await e.decodeAudioData(await n.arrayBuffer()))}catch{}}))}await this.context.resume(),this.syncMusic()}catch{}}update(e){this.settings=e,this.master&&this.context&&this.master.gain.setTargetAtTime(e.sound?.45:0,this.context.currentTime,.05),this.syncMusic()}setActive(e){this.active=e,this.syncMusic()}syncMusic(){this.settings.music&&this.settings.sound&&this.active&&this.context?this.music.play().catch(()=>{}):this.music.pause()}sample(e,t=.5,n=1){let r=this.context,i=this.buffers.get(e);if(!r||!this.master||!i||!this.settings.sound||this.voices>24)return;let a=r.createBufferSource(),o=r.createGain();a.buffer=i,a.playbackRate.value=n,o.gain.value=t,a.connect(o),o.connect(this.master),this.voices++,a.onended=()=>{this.voices--,a.disconnect(),o.disconnect()},a.start()}tone(e,t=.12,n=.16,r=`sine`,i=e){let a=this.context;if(!a||!this.master||!this.settings.sound)return;let o=a.createOscillator(),s=a.createGain();o.type=r,o.frequency.setValueAtTime(e,a.currentTime),o.frequency.exponentialRampToValueAtTime(Math.max(20,i),a.currentTime+t),s.gain.setValueAtTime(n,a.currentTime),s.gain.exponentialRampToValueAtTime(.001,a.currentTime+t),o.connect(s),s.connect(this.master),o.start(),o.stop(a.currentTime+t),o.onended=()=>{o.disconnect(),s.disconnect()}}pickup(e){this.tone(500+e*100,.09,.11,`sine`,900+e*130)}dash(){this.tone(100,.23,.28,`sawtooth`,650)}hit(){this.sample(`boom`,1,.7),this.tone(110,.4,.2,`square`,30)}upgrade(){[440,554,660,880].forEach((e,t)=>setTimeout(()=>this.tone(e,.25,.13),t*65))}},t=[{id:`fork`,name:`Forked plasma`,category:`WEAPON MOD`,icon:`fork`,description:`Add two angled plasma bolts. Turn narrow escapes into a wall of fire.`,max:2,color:`#ff8b50`},{id:`rail`,name:`Rail lance`,category:`WEAPON MOD`,icon:`rail`,description:`Slower, heavier shots punch through three targets. Line them up.`,max:2,color:`#88deff`},{id:`arc`,name:`Chain reaction`,category:`SALVAGE TECH`,icon:`arc`,description:`Destroyed targets arc electricity into two nearby enemies.`,max:2,color:`#bdacff`},{id:`magnet`,name:`Deep-field magnet`,category:`SALVAGE TECH`,icon:`magnet`,description:`Double your core collection radius. Salvage charges more overdrive.`,max:2,color:`#bdea85`},{id:`phase`,name:`Burn trail`,category:`DRIVE MOD`,icon:`phase`,description:`Dash more often and leave a damaging plasma wake behind you.`,max:1,color:`#ff8b50`},{id:`orbit`,name:`Orbitals`,category:`DEFENSE MOD`,icon:`orbit`,description:`Two orbiting blades shred anything that gets close to your ship.`,max:2,color:`#88deff`},{id:`reactor`,name:`Hot reactor`,category:`CORE MOD`,icon:`reactor`,description:`Overdrive lasts 50% longer and pulls every loose core toward you.`,max:1,color:`#bdea85`},{id:`hull`,name:`Field plating`,category:`HULL MOD`,icon:`hull`,description:`Add one permanent hull point and repair two. Stay in the fight.`,max:2,color:`#bdacff`}],n={nomad:{name:`Nomad`,tag:`ALL-ROUNDER`,description:`Reliable plasma. Four hull points. Your first bad idea.`,health:4,speed:320,dash:2.7,color:`#ff8650`},wraith:{name:`Wraith`,tag:`INTERCEPTOR`,description:`Faster flight and a shorter dash cooldown. Three hull points.`,health:3,speed:390,dash:1.8,color:`#bdea85`},bastion:{name:`Bastion`,tag:`GUNSHIP`,description:`Twin plasma and six hull points. Heavy, slow, hard to kill.`,health:6,speed:265,dash:3.1,color:`#98dfff`}},r=[{name:`The outer belt`,warning:`BREAK ROCKS. COLLECT CORES. KEEP MOVING.`},{name:`Fault line`,warning:`SPLITTERS DETECTED. LARGE ROCKS BREAK APART.`},{name:`Dead frequency`,warning:`SEEKERS AND MINES. WATCH THE RED SIGNALS.`},{name:`World eater`,warning:`DREADNOUGHT INBOUND. BREAK ITS CORE.`}],i=[{id:`clean`,name:`Untouchable`,description:`Clear a sector without taking damage.`},{id:`greed`,name:`Greed engine`,description:`Reach an 8× salvage multiplier.`},{id:`boss`,name:`World breaker`,description:`Destroy a World Eater.`},{id:`score`,name:`Five figures`,description:`Score 10,000 points in one run.`}],a=Math.PI*2,o=(e,t,n)=>Math.max(t,Math.min(n,e)),s=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y),c=class{seed;constructor(e){this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}pick(e){return e[Math.floor(this.next()*e.length)]}};function l(e,t,n,r){let i=t.x-e.x,a=t.y-e.y,s=i*i+a*a,c=s?o(((n.x-e.x)*i+(n.y-e.y)*a)/s,0,1):0;return Math.hypot(e.x+c*i-n.x,e.y+c*a-n.y)<=r}var u=e=>Math.floor(e).toLocaleString(`en-US`),d=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`,f=class{canvas;keys=new Set;pointer={x:0,y:0};pointerUsed=!1;mouseDown=!1;dashQueued=!1;overdriveQueued=!1;left;right;touch=!1;onPause=()=>{};onAutoFire=()=>{};onMute=()=>{};onChoice=e=>{};onEnter=()=>{};isPlaying=()=>!1;width=1440;height=900;constructor(e){this.canvas=e,window.addEventListener(`keydown`,e=>{let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||(this.isPlaying()&&[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&!(t instanceof HTMLButtonElement)&&e.preventDefault(),this.keys.add(e.code),!e.repeat&&((e.code===`Escape`||e.code===`KeyP`)&&this.onPause(),(e.code===`Space`||e.code===`ShiftLeft`||e.code===`ShiftRight`||e.code===`KeyK`)&&(this.dashQueued=!0),e.code===`KeyE`&&(this.overdriveQueued=!0),e.code===`KeyF`&&this.onAutoFire(),e.code===`KeyM`&&this.onMute(),e.code.startsWith(`Digit`)&&this.onChoice(Number(e.code.at(-1))-1),e.code===`Enter`&&!(t instanceof HTMLButtonElement)&&this.onEnter()))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.clear()),e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,t=>{if(t.pointerType===`touch`){t.preventDefault(),this.touch=!0;let n=this.position(t),r={id:t.pointerId,origin:n,current:n};n.x<this.width/2&&!this.left?this.left=r:this.right||=r,e.setPointerCapture(t.pointerId)}else t.button===0?(this.mouseDown=!0,this.pointerUsed=!0,this.pointer=this.position(t)):t.button===2&&(this.dashQueued=!0)}),e.addEventListener(`pointermove`,e=>{let t=this.position(e);e.pointerType===`touch`?(this.left?.id===e.pointerId&&(this.left.current=t),this.right?.id===e.pointerId&&(this.right.current=t)):(this.pointer=t,this.pointerUsed=!0)});let t=e=>{this.left?.id===e.pointerId&&(this.left=void 0),this.right?.id===e.pointerId&&(this.right=void 0),e.pointerType!==`touch`&&(this.mouseDown=!1)};window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t)}position(e){let t=this.canvas.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*this.width,y:(e.clientY-t.top)/t.height*this.height}}movement(){let e=Number(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))-Number(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`)),t=Number(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))-Number(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`));this.left&&(e=o((this.left.current.x-this.left.origin.x)/55,-1,1),t=o((this.left.current.y-this.left.origin.y)/55,-1,1));let n=Math.hypot(e,t);return n>1?{x:e/n,y:t/n}:{x:e,y:t}}clear(){this.keys.clear(),this.mouseDown=!1,this.left=void 0,this.right=void 0,this.dashQueued=!1,this.overdriveQueued=!1}},p=class{input;audio;settings;width=1440;height=900;phase=`title`;player;run;enemies=[];bullets=[];cores=[];particles=[];rings=[];popups=[];explosions=[];arcs=[];trails=[];shake=0;flash=0;hitStop=0;banner=``;bannerSub=``;bannerTime=0;clearTime=0;spawnTime=0;sectorTime=0;bossSpawned=!1;endReason=`destroyed`;nextId=1;rng=new c(1);coreSoundTime=0;onState=()=>{};onToast=(e,t)=>{};onDeath=()=>{};constructor(e,t,n){this.input=e,this.audio=t,this.settings=n,e.isPlaying=()=>this.phase===`playing`}module(e){return this.run?.modules[e]??0}get dashDuration(){return Math.max(.9,n[this.run.loadout].dash-+!!this.module(`phase`))}start(e,t=crypto.getRandomValues(new Uint32Array(1))[0]){this.rng=new c(t),this.enemies=[],this.bullets=[],this.cores=[],this.particles=[],this.rings=[],this.popups=[],this.explosions=[],this.arcs=[],this.trails=[],this.shake=0,this.flash=0,this.hitStop=0,this.clearTime=0,this.endReason=`destroyed`;let r=n[e];this.player={x:this.width/2,y:this.height/2,vx:0,vy:0,angle:-Math.PI/2,health:r.health,maxHealth:r.health,invincible:2,dash:0,dashCooldown:0,shotCooldown:0,energy:0,overdrive:0,thrust:0},this.run={score:0,sector:1,sectorKills:0,quota:14,kills:0,cores:0,time:0,chain:0,combo:1,comboTime:0,maxCombo:1,damageTaken:0,sectorDamage:0,modules:{},loadout:e,achievements:[],choices:[],seed:t,bosses:0},this.input.clear(),this.input.pointerUsed=!1,this.phase=`playing`,this.beginSector(),this.audio.setActive(!0),this.audio.unlock(),this.onState()}resize(e,t){let n=this.width,r=this.height;if(this.width=e,this.height=t,this.input.width=e,this.input.height=t,this.player)for(let i of[this.player,...this.enemies,...this.bullets,...this.cores])i.x*=e/n,i.y*=t/r}pause(){(this.phase===`playing`||this.phase===`paused`)&&(this.phase=this.phase===`playing`?`paused`:`playing`,this.input.clear(),this.audio.setActive(this.phase===`playing`),this.onState())}home(){this.phase=`title`,this.input.clear(),this.audio.setActive(!1),this.onState()}endRun(){this.phase===`paused`&&(this.endReason=`banked`,this.phase=`dead`,this.input.clear(),this.audio.setActive(!1),this.onDeath(),this.onState())}beginSector(){let e=r[(this.run.sector-1)%4];if(this.run.sectorKills=0,this.run.sectorDamage=0,this.run.quota=Math.min(44,14+(this.run.sector-1)*5),this.sectorTime=0,this.spawnTime=2,this.bossSpawned=!1,this.clearTime=0,this.banner=`SECTOR ${this.run.sector.toString().padStart(2,`0`)} / ${e.name.toUpperCase()}`,this.bannerSub=e.warning,this.bannerTime=3.6,this.player.invincible=Math.max(2,this.player.invincible),this.run.sector%4!=0)for(let e=0;e<5;e++){let t=e/5*a+.2,n=o(this.player.x+Math.cos(t)*330,55,this.width-55),r=o(this.player.y+Math.sin(t)*265,155,this.height-150);this.spawnEnemy(e===0&&this.run.sector>=2?`splitter`:`rock`,{x:n,y:r})}}spawnEnemy(e,t,n=!1){if(this.enemies.length>=58)return;let r=0,i=0;if(t)r=t.x,i=t.y;else{let e=Math.floor(this.rng.next()*4);r=e<2?e===0?45:this.width-45:this.rng.range(50,this.width-50),i=e>=2?e===2?135:this.height-105:this.rng.range(140,this.height-110),s({x:r,y:i},this.player)<210&&(r=this.width-r)}let o=1+Math.min(2.2,(this.run.sector-1)*.13),c=Math.atan2(this.player.y-i,this.player.x-r)+this.rng.range(-.6,.6),l=this.rng.range(35,72)*o*(n?1.9:1),u=e===`boss`?96:e===`seeker`?20:e===`mine`?22:n?17:this.rng.range(30,44),d=Math.floor((this.run.sector-1)/3),f=e===`boss`?240+Math.floor(this.run.sector/4-1)*220:(e===`mine`?2:e===`seeker`?3:n?1:e===`splitter`?4:3)+d;this.enemies.push({id:this.nextId++,kind:e,x:r,y:i,vx:Math.cos(c)*l,vy:Math.sin(c)*l,radius:u,health:f,maxHealth:f,angle:this.rng.range(0,a),spin:this.rng.range(-.7,.7),frame:this.rng.range(0,64),flash:0,age:0,cooldown:e===`boss`?3:this.rng.range(3,5),warning:n?0:1.15,seed:this.rng.next(),dead:!1,contactCooldown:0})}tick(e){if(this.phase===`dead`){this.updateEffects(e);return}if(this.phase!==`playing`)return;if(this.hitStop>0){this.hitStop-=e;return}if(this.run.time+=e,this.sectorTime+=e,this.coreSoundTime-=e,this.bannerTime=Math.max(0,this.bannerTime-e),this.updateEffects(e),this.updatePlayer(e),this.updateBullets(e),this.updateEnemies(e),this.phase!==`playing`)return;if(this.updateCores(e),this.run.comboTime>0&&!this.clearTime&&(this.run.comboTime-=e,this.run.comboTime<=0&&(this.run.chain=0,this.run.combo=1)),this.clearTime>0){this.clearTime-=e,this.clearTime<=0&&this.offerUpgrade();return}let t=this.run.sector%4==0;t&&!this.bossSpawned&&this.sectorTime>2.2&&(this.spawnEnemy(`boss`,{x:this.width/2,y:230}),this.bossSpawned=!0,this.audio.tone(70,1.4,.35,`sawtooth`,28)),this.spawnTime-=e;let n=Math.min(32,8+this.run.sector*3);if(this.spawnTime<=0&&this.enemies.length<n){let e=this.rng.next(),n=this.run.sector>=3&&e<.15?`mine`:this.run.sector>=3&&e<.34?`seeker`:this.run.sector>=2&&e<.63?`splitter`:`rock`;this.spawnEnemy(n),this.spawnTime=t?Math.max(1.1,3-this.run.sector*.15):Math.max(.38,1.65-this.run.sector*.13)}!t&&this.run.sectorKills>=this.run.quota&&this.clearSector()}updatePlayer(e){let t=this.player,r=this.input.movement();if(t.invincible=Math.max(0,t.invincible-e),t.shotCooldown-=e,t.dashCooldown=Math.max(0,t.dashCooldown-e),t.overdrive=Math.max(0,t.overdrive-e),this.input.keys.has(`KeyJ`)||!this.input.pointerUsed&&!this.input.right){let e,n=1/0;for(let r of this.enemies)if(r.warning<=0&&!r.dead){let i=s(t,r);i<n&&(n=i,e=r)}e&&(t.angle=Math.atan2(e.y+e.vy*n/900-t.y,e.x+e.vx*n/900-t.x))}else if(this.input.right){let{origin:e,current:n}=this.input.right;s(e,n)>8&&(t.angle=Math.atan2(n.y-e.y,n.x-e.x))}else t.angle=Math.atan2(this.input.pointer.y-t.y,this.input.pointer.x-t.x);if(this.input.dashQueued){if(t.dashCooldown<=0){let e=Math.hypot(r.x,r.y)>.05;t.vx=(e?r.x:Math.cos(t.angle))*1e3,t.vy=(e?r.y:Math.sin(t.angle))*1e3,t.dash=.19,t.dashCooldown=this.dashDuration,t.invincible=Math.max(t.invincible,.3),this.audio.dash(),this.addRing(t,75,`#a7e9ff`,.35)}this.input.dashQueued=!1}if(this.input.overdriveQueued&&(this.input.overdriveQueued=!1,t.energy>=100&&t.overdrive<=0)){t.energy=0,t.overdrive=this.module(`reactor`)?9:6,t.invincible=Math.max(t.invincible,.6),this.addRing(t,600,`#c3f599`,.7),this.burst(t,`#c3f599`,70,420),this.shake=Math.max(this.shake,9),this.audio.upgrade(),this.bullets=this.bullets.filter(e=>!e.hostile);for(let e of[...this.enemies])s(e,t)<200&&e.warning<=0&&this.damageEnemy(e,5);this.popup(t,`OVERDRIVE`,`#c3f599`,!0)}let i=Math.hypot(r.x,r.y);if(t.thrust=i,t.dash>0)t.dash-=e,this.trails.push({x:t.x,y:t.y,life:this.module(`phase`)?.65:.2,angle:t.angle});else{let i=n[this.run.loadout].speed,a=1-Math.exp(-8.5*e);t.vx+=(r.x*i-t.vx)*a,t.vy+=(r.y*i-t.vy)*a}t.x+=t.vx*e,t.y+=t.vy*e;let a=this.height-90;t.x<12&&(t.x=this.width-16),t.x>this.width-12&&(t.x=16),t.y<110&&(t.y=a-3),t.y>a&&(t.y=113),(i>0||t.dash>0)&&this.particles.push({x:t.x-Math.cos(t.angle)*22,y:t.y-Math.sin(t.angle)*22,vx:-Math.cos(t.angle)*95+(Math.random()-.5)*60,vy:-Math.sin(t.angle)*95+(Math.random()-.5)*60,life:.23,maxLife:.23,size:3.5,color:`#ff9a56`,drag:.1}),(this.input.mouseDown||this.settings.autoFire||this.input.keys.has(`KeyJ`)||this.input.right)&&t.shotCooldown<=0&&this.fire()}fire(){let e=this.player,t=this.module(`rail`),n=this.module(`fork`),r=e.overdrive>0;e.shotCooldown=(t?.24:.13)/(r?1.8:1);let i=[0];for(let e=1;e<=n;e++)i.push(-.16*e,.16*e);let a=this.run.loadout===`bastion`;for(let n of i)for(let i of a?[-6,6]:[0]){let o=e.angle+n,s=t?1250:950,c=e.x+Math.cos(o)*26-Math.sin(o)*i,l=e.y+Math.sin(o)*26+Math.cos(o)*i;this.bullets.push({x:c,y:l,oldX:c,oldY:l,vx:Math.cos(o)*s+e.vx*.15,vy:Math.sin(o)*s+e.vy*.15,life:1.05,damage:(t?2.7+t*.3:1)*(n?.7:1)*(a?.7:1),pierce:t?2+t:r?2:1,hit:new Set,hostile:!1,radius:t?5:3})}this.audio.sample(`fire`,t?.25:.15,r?1.5:1.15),this.burst({x:e.x+Math.cos(e.angle)*29,y:e.y+Math.sin(e.angle)*29},r?`#c3f599`:`#ffb077`,2,60)}updateBullets(e){for(let t of this.bullets){if(t.life-=e,t.oldX=t.x,t.oldY=t.y,t.x+=t.vx*e,t.y+=t.vy*e,t.life<=0)continue;let n={x:t.oldX,y:t.oldY};if(t.hostile){l(n,t,this.player,t.radius+12)&&(this.hurt(),t.life=0);continue}for(let e of this.enemies)if(!(e.dead||e.warning>0||t.hit.has(e.id))&&l(n,t,e,e.radius+t.radius)&&(t.hit.add(e.id),t.pierce--,this.damageEnemy(e,t.damage),t.pierce<=0)){t.life=0;break}}this.bullets=this.bullets.filter(e=>e.life>0&&e.x>-40&&e.y>-40&&e.x<this.width+40&&e.y<this.height+40)}updateEnemies(e){for(let t of[...this.enemies])if(!t.dead){if(t.age+=e,t.flash=Math.max(0,t.flash-e),t.contactCooldown-=e,t.warning>0){t.warning-=e;continue}if(t.angle+=t.spin*e,t.frame=(t.frame+e*14)%64,t.kind===`seeker`){let n=Math.atan2(this.player.y-t.y,this.player.x-t.x),r=110+Math.min(260,this.run.sector*14);if(t.vx+=(Math.cos(n)*r-t.vx)*e*1.2,t.vy+=(Math.sin(n)*r-t.vy)*e*1.2,t.angle=n,this.run.sector>=6&&(t.cooldown-=e,t.cooldown<=0)){let e=t.x+Math.cos(n)*25,r=t.y+Math.sin(n)*25;this.bullets.push({x:e,y:r,oldX:e,oldY:r,vx:Math.cos(n)*260,vy:Math.sin(n)*260,life:4,damage:1,pierce:1,hit:new Set,hostile:!0,radius:5}),t.cooldown=2.8,this.addRing(t,40,`#ff6673`,.3)}}else if(t.kind===`mine`)t.vx*=Math.exp(-e*2),t.vy*=Math.exp(-e*2),t.cooldown-=e,t.cooldown<=0&&(this.enemyVolley(t,8,140+Math.min(140,this.run.sector*6),t.angle),t.cooldown=4.6,this.addRing(t,65,`#ff6673`,.35),this.audio.tone(180,.15,.14,`triangle`,85));else if(t.kind===`boss`){let n=t.health<t.maxHealth/2,r=this.width/2+Math.sin(t.age*.4)*this.width*.26,i=this.height*.35+Math.sin(t.age*.7)*80;if(t.vx=(r-t.x)*.8,t.vy=(i-t.y)*.8,t.cooldown-=e,t.cooldown<=0){let e=Math.atan2(this.player.y-t.y,this.player.x-t.x);this.enemyVolley(t,n?18:12,(n?205:165)+this.run.sector*4,e),t.cooldown=Math.max(.85,(n?1.7:2.6)-(this.run.sector-4)*.055),this.addRing(t,165,`#ff6673`,.5),this.audio.sample(`boom`,.35,.65)}}if(t.x+=t.vx*e,t.y+=t.vy*e,t.x<-t.radius&&(t.x=this.width+t.radius),t.x>this.width+t.radius&&(t.x=-t.radius),t.y<80-t.radius&&(t.y=this.height-65+t.radius),t.y>this.height-65+t.radius&&(t.y=80-t.radius),s(t,this.player)<t.radius*.8+12&&this.player.invincible<=0&&(this.hurt(),t.kind!==`boss`&&this.damageEnemy(t,2)),t.contactCooldown<=0&&this.module(`orbit`)){let e=this.module(`orbit`)*2;for(let n=0;n<e;n++){let r=this.run.time*2.5+n/e*a;if(s(t,{x:this.player.x+Math.cos(r)*67,y:this.player.y+Math.sin(r)*67})<t.radius+11){this.damageEnemy(t,1.5),t.contactCooldown=.35;break}}}if(!t.dead&&t.contactCooldown<=0&&this.module(`phase`)&&this.trails.some(e=>s(e,t)<t.radius+18)&&(this.damageEnemy(t,2),t.contactCooldown=.3),this.phase!==`playing`)break}this.enemies=this.enemies.filter(e=>!e.dead)}enemyVolley(e,t,n,r){for(let i=0;i<t;i++){let o=r+i/t*a,s=e.x+Math.cos(o)*e.radius,c=e.y+Math.sin(o)*e.radius;this.bullets.push({x:s,y:c,oldX:s,oldY:c,vx:Math.cos(o)*n,vy:Math.sin(o)*n,life:7,damage:1,pierce:1,hit:new Set,hostile:!0,radius:5})}}damageEnemy(e,t,n=!1){if(e.dead||(e.health-=t,e.flash=.08,this.burst(e,e.kind===`seeker`||e.kind===`mine`?`#ff7a88`:`#ffd0a1`,3,100),e.health>0))return;e.dead=!0;let r=e.kind===`boss`,i=e.kind===`splitter`?`#bdacff`:e.kind===`seeker`||e.kind===`mine`?`#ff7682`:`#ffa264`;this.burst(e,i,r?100:22,r?440:220),this.addRing(e,r?500:e.radius*2.5,i,r?1.2:.35),this.explosions.push({x:e.x,y:e.y,age:0,size:r?340:e.radius*3.6,angle:Math.random()*a}),this.audio.sample(r?`boom`:e.radius>25?`explode2`:`explode1`,r?1:.38,r?.6:.9+Math.random()*.25),this.shake=Math.max(this.shake,r?18:e.radius>25?3.5:1.5),this.hitStop=Math.max(this.hitStop,r?.11:.016),this.run.kills++,this.run.sectorKills++;let o=(r?3e3:e.kind===`seeker`?200:e.kind===`mine`?150:e.radius<25?50:100)*this.run.combo;this.run.score+=o,this.run.comboTime=Math.min(6,this.run.comboTime+.45),this.popup(e,`+${o}`,i);let c=r?24:e.radius<25?2:3;for(let t=0;t<c;t++){let t=this.rng.range(0,a),n=this.rng.range(30,r?240:120);this.cores.push({x:e.x,y:e.y,vx:Math.cos(t)*n,vy:Math.sin(t)*n,life:12,value:r?2:1,angle:t})}if(e.kind===`splitter`&&!this.clearTime)for(let t of[-1,1]){this.spawnEnemy(`rock`,{x:e.x+t*18,y:e.y},!0);let n=this.enemies.at(-1);n&&n.id!==e.id&&(n.vx=t*120,n.vy=this.rng.range(-90,90))}if(this.module(`arc`)&&!n){let t=this.enemies.filter(t=>!t.dead&&t.warning<=0&&s(e,t)<180+this.module(`arc`)*25).sort((t,n)=>s(e,t)-s(e,n)).slice(0,2+this.module(`arc`));for(let n of t){let t=[{x:e.x,y:e.y}];for(let r=1;r<5;r++)t.push({x:e.x+(n.x-e.x)*r/5+(Math.random()-.5)*25,y:e.y+(n.y-e.y)*r/5+(Math.random()-.5)*25});t.push({x:n.x,y:n.y}),this.arcs.push({points:t,life:.25}),this.damageEnemy(n,2*this.module(`arc`),!0)}}this.run.score>=1e4&&this.achievement(`score`),r&&(this.run.bosses++,this.achievement(`boss`),this.clearSector())}updateCores(e){let t=110+this.module(`magnet`)*105;for(let n of this.cores){n.life-=e,n.angle+=e;let r=s(n,this.player);if(r<t||this.clearTime>0||this.player.overdrive>0&&this.module(`reactor`)){let t=this.clearTime?850:460;n.vx+=((this.player.x-n.x)/Math.max(1,r)*t-n.vx)*Math.min(1,e*8),n.vy+=((this.player.y-n.y)/Math.max(1,r)*t-n.vy)*Math.min(1,e*8)}else n.vx*=Math.exp(-e*2),n.vy*=Math.exp(-e*2);if(n.x=o(n.x+n.vx*e,15,this.width-15),n.y=o(n.y+n.vy*e,115,this.height-95),r<24){n.life=0,this.run.cores+=n.value,this.run.chain+=n.value;let e=this.run.combo;this.run.combo=Math.min(8,1+Math.floor(this.run.chain/5)),this.run.maxCombo=Math.max(this.run.maxCombo,this.run.combo),this.run.comboTime=6,this.run.score+=40*n.value*this.run.combo,this.player.overdrive<=0&&(this.player.energy=Math.min(100,this.player.energy+(3.5+this.module(`magnet`))*n.value)),this.burst(n,`#c3f599`,4,60),this.coreSoundTime<=0&&(this.audio.pickup(this.run.combo),this.coreSoundTime=.045),this.run.combo>e&&this.popup({x:this.player.x,y:this.player.y-40},`${this.run.combo}× SALVAGE`,`#c3f599`,!0),this.run.combo>=8&&this.achievement(`greed`),this.run.score>=1e4&&this.achievement(`score`)}}this.cores=this.cores.filter(e=>e.life>0)}hurt(){let e=this.player;e.invincible>0||this.clearTime>0||this.phase!==`playing`||(e.health--,e.invincible=1.7,this.run.damageTaken++,this.run.sectorDamage++,this.run.chain=0,this.run.combo=1,this.run.comboTime=0,e.energy=Math.max(0,e.energy-15),this.shake=12,this.flash=.4,this.hitStop=.07,this.burst(e,`#ff677a`,35,230),this.addRing(e,110,`#ff677a`,.5),this.audio.hit(),this.popup(e,e.health>0?`HULL HIT / STREAK LOST`:`SIGNAL LOST`,`#ff7886`,!0),e.health<=0&&(this.explosions.push({x:e.x,y:e.y,age:0,size:230,angle:0}),this.burst(e,`#ffb880`,100,400),this.phase=`dead`,this.audio.setActive(!1),this.input.clear(),this.onDeath(),this.onState()))}clearSector(){if(this.clearTime||this.phase!==`playing`)return;this.clearTime=2.6,this.run.sectorDamage===0&&this.achievement(`clean`);let e=500*this.run.sector;this.run.score+=e,this.banner=`SECTOR SECURED`,this.bannerSub=`+${e.toLocaleString()} CLEAR BONUS / SALVAGE RECOVERED / +1 HULL`,this.bannerTime=2.6,this.player.health=Math.min(this.player.maxHealth,this.player.health+1),this.player.invincible=4;for(let e of this.enemies)e.dead||this.burst(e,`#8ba4b5`,7,100);this.enemies=[],this.bullets=[],this.audio.upgrade()}offerUpgrade(){let e=t.filter(e=>this.module(e.id)<e.max);for(this.run.choices=[];this.run.choices.length<3&&e.length;){let t=this.rng.pick(e);this.run.choices.push(t),e.splice(e.indexOf(t),1)}this.run.choices.length||(this.run.choices=[{...t.find(e=>e.id===`hull`),name:`Reactor refit`,category:`FULL BUILD`,description:`Every module is installed. Fully repair your hull and charge overdrive for the next sector.`}]),this.phase=`upgrade`,this.input.clear(),this.audio.setActive(!1),this.onState()}chooseModule(e){if(this.phase!==`upgrade`)return;let t=this.run.choices[e];t&&(t.id===`hull`&&this.module(`hull`)>=t.max?(this.player.health=this.player.maxHealth,this.player.energy=100):(this.run.modules[t.id]=this.module(t.id)+1,t.id===`hull`&&(this.player.maxHealth++,this.player.health=Math.min(this.player.maxHealth,this.player.health+2))),this.run.sector++,this.run.choices=[],this.phase=`playing`,this.input.clear(),this.beginSector(),this.audio.upgrade(),this.audio.setActive(!0),this.onState())}achievement(e){if(this.run.achievements.includes(e))return;this.run.achievements.push(e);let t=i.find(t=>t.id===e);this.onToast(t.name,t.description)}burst(e,t,n,r){for(let i=0;i<n&&this.particles.length<650;i++){let n=Math.random()*a,i=Math.random()*r,o=.25+Math.random()*.55;this.particles.push({x:e.x,y:e.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i,life:o,maxLife:o,size:1.5+Math.random()*3,color:t,drag:1.5})}}addRing(e,t,n,r){this.rings.push({x:e.x,y:e.y,radius:t,color:n,life:r,maxLife:r,width:t>300?3:1.5})}popup(e,t,n,r=!1){this.popups.push({x:e.x,y:e.y,text:t,color:n,life:1.2,big:r})}updateEffects(e){this.shake=Math.max(0,this.shake-e*25),this.flash=Math.max(0,this.flash-e*2);for(let t of this.particles)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.vx*=Math.exp(-t.drag*e),t.vy*=Math.exp(-t.drag*e);for(let t of this.rings)t.life-=e;for(let t of this.popups)t.life-=e,t.y-=e*27;for(let t of this.explosions)t.age+=e;for(let t of this.arcs)t.life-=e;for(let t of this.trails)t.life-=e;this.particles=this.particles.filter(e=>e.life>0),this.rings=this.rings.filter(e=>e.life>0),this.popups=this.popups.filter(e=>e.life>0),this.explosions=this.explosions.filter(e=>e.age<.7),this.arcs=this.arcs.filter(e=>e.life>0),this.trails=this.trails.filter(e=>e.life>0)}},m=class{canvas;game;ctx;assets=new Map;glows=new Map;stars=[];dpr=1;scale=1;menuTime=0;ready;constructor(e,t){this.canvas=e,this.game=t;let n=e.getContext(`2d`,{alpha:!1});if(!n)throw Error(`This browser does not support Canvas 2D.`);this.ctx=n;let r=new c(2137);for(let e=0;e<250;e++)this.stars.push({x:r.next(),y:r.next(),size:r.range(.4,1.6),depth:r.range(.3,1)});this.ready=Promise.all([`asteroid.png`,`ship.png`,`plasma.png`,`explosion_30_128.png`,`nebula.webp`].map(e=>new Promise(t=>{let n=new Image;n.onload=()=>{this.assets.set(e,n),t()},n.onerror=()=>t(),n.src=`./assets/${e}`}))).then(()=>{}),window.addEventListener(`resize`,()=>this.resize()),this.resize()}resize(){this.dpr=Math.min(2,window.devicePixelRatio||1),this.canvas.width=Math.round(window.innerWidth*this.dpr),this.canvas.height=Math.round(window.innerHeight*this.dpr),this.scale=window.innerHeight/900,this.game.resize(window.innerWidth/this.scale,900)}render(e){let t=this.ctx,n=this.game,r=n.width,i=n.height,s=n.phase===`title`;!n.settings.reducedMotion&&(s||n.phase===`playing`)&&(this.menuTime+=e);let c=this.menuTime;t.setTransform(this.dpr*this.scale,0,0,this.dpr*this.scale,0,0),t.fillStyle=`#070c12`,t.fillRect(0,0,r,i);let l=this.assets.get(`nebula.webp`);l&&(t.globalAlpha=s?.4:.2,t.drawImage(l,0,0,r,i),t.globalAlpha=1);let u=t.createLinearGradient(0,i,r,0);u.addColorStop(0,`rgba(5,10,15,.94)`),u.addColorStop(.5,`rgba(8,12,20,.72)`),u.addColorStop(1,`rgba(6,12,20,.25)`),t.fillStyle=u,t.fillRect(0,0,r,i),this.glow(r*.78,i*.46,s?590:680,s?`#61311f`:`#172d43`,s?.42:.18);for(let e of this.stars){let n=(e.x*r+c*e.depth*1.8)%r;t.globalAlpha=e.depth*.58,t.fillStyle=e.depth>.85?`#bddce6`:`#8b9dad`,t.fillRect(n,e.y*i,e.size,e.size),e.depth>.975&&(t.globalAlpha=.16,t.fillRect(n-3,e.y*i+.5,7,.5),t.fillRect(n+.5,e.y*i-3,.5,7))}if(t.globalAlpha=1,s){this.titleScene(c);return}t.save(),!n.settings.reducedMotion&&n.shake>0&&t.translate((Math.random()-.5)*n.shake,(Math.random()-.5)*n.shake),this.arena();for(let e of n.cores)e.life<3&&Math.floor(e.life*6)%2==0||(this.glow(e.x,e.y,27,`#bde982`,.45),t.save(),t.translate(e.x,e.y),t.rotate(e.angle),t.fillStyle=`#d6fca0`,t.beginPath(),t.moveTo(0,-6),t.lineTo(4.5,0),t.lineTo(0,6),t.lineTo(-4.5,0),t.closePath(),t.fill(),t.restore());for(let e of n.trails)t.globalAlpha=o(e.life,0,.5),t.save(),t.translate(e.x,e.y),t.rotate(e.angle),t.fillStyle=n.module(`phase`)?`#ff9853`:`#8eddff`,t.beginPath(),t.moveTo(20,0),t.lineTo(-16,-11),t.lineTo(-8,0),t.lineTo(-16,11),t.closePath(),t.fill(),t.restore();t.globalAlpha=1;for(let e of n.enemies)this.enemy(e);for(let e of n.bullets)if(e.hostile)this.glow(e.x,e.y,25,`#ff405b`,.7),t.fillStyle=`#ff6b7f`,t.beginPath(),t.arc(e.x,e.y,5,0,a),t.fill(),t.fillStyle=`#ffdcdb`,t.beginPath(),t.arc(e.x,e.y,2,0,a),t.fill();else{let r=n.module(`rail`),i=n.player.overdrive>0?`#d5ffa8`:r?`#a4e8ff`:`#ffd1a0`;t.strokeStyle=r?`#58ccef`:`#fa8242`,t.lineWidth=r?5:4,t.lineCap=`round`,t.beginPath(),t.moveTo(e.x-e.vx*.025,e.y-e.vy*.025),t.lineTo(e.x,e.y),t.stroke(),t.strokeStyle=i,t.lineWidth=r?2.5:1.8,t.stroke();let a=this.assets.get(`plasma.png`);a&&!r&&(t.save(),t.translate(e.x,e.y),t.rotate(Math.atan2(e.vy,e.vx)+Math.PI/2),t.drawImage(a,-10,-10,20,20),t.restore())}if(n.phase!==`dead`){let e=n.player;if(n.module(`orbit`)){t.strokeStyle=`rgba(135,218,255,.16)`,t.lineWidth=1,t.beginPath(),t.arc(e.x,e.y,67,0,a),t.stroke();let r=n.module(`orbit`)*2;for(let i=0;i<r;i++){let o=n.run.time*2.5+i/r*a,s=e.x+Math.cos(o)*67,c=e.y+Math.sin(o)*67;this.glow(s,c,28,`#91ddff`,.7),t.save(),t.translate(s,c),t.rotate(o),t.fillStyle=`#cbf3ff`,t.fillRect(-4,-11,8,22),t.restore()}}e.overdrive>0&&(this.glow(e.x,e.y,110,`#b4ee81`,.4),t.strokeStyle=`#b4ee81`,t.lineWidth=1,t.beginPath(),t.arc(e.x,e.y,38,c,c+a*.8),t.stroke()),e.invincible>0&&(t.strokeStyle=e.dash>0?`#bcf0ff`:`rgba(158,214,231,.48)`,t.lineWidth=1.5,t.beginPath(),t.arc(e.x,e.y,32,0,a),t.stroke()),t.globalAlpha=e.invincible>0&&Math.floor(e.invincible*13)%2?.55:1,this.ship(e.x,e.y,e.angle,.85,e.thrust>0||e.dash>0,c),t.globalAlpha=1,!n.input.touch&&n.input.pointerUsed&&n.phase===`playing`&&this.crosshair(n.input.pointer.x,n.input.pointer.y)}if(this.effects(),t.restore(),n.flash>0&&!n.settings.reducedMotion){let e=t.createRadialGradient(r/2,i/2,i*.22,r/2,i/2,i*.8);e.addColorStop(0,`rgba(255,65,85,0)`),e.addColorStop(1,`rgba(255,65,85,${n.flash})`),t.fillStyle=e,t.fillRect(0,0,r,i)}this.touchControls()}arena(){let e=this.ctx,t=this.game;e.strokeStyle=`rgba(125,164,180,.09)`,e.lineWidth=1,e.setLineDash([2,12]),e.strokeRect(22,111,t.width-44,t.height-202),e.setLineDash([]),e.strokeStyle=`rgba(175,205,210,.3)`;for(let[n,r,i,a]of[[22,111,1,1],[t.width-22,111,-1,1],[22,t.height-91,1,-1],[t.width-22,t.height-91,-1,-1]])e.beginPath(),e.moveTo(n,r+16*a),e.lineTo(n,r),e.lineTo(n+16*i,r),e.stroke();e.fillStyle=`rgba(128,168,187,.1)`,e.font=`10px monospace`,e.textAlign=`center`;for(let n=120;n<t.width-100;n+=120)e.fillRect(n,110,1,5),e.fillText(String(n).padStart(4,`0`),n,t.height-74)}titleScene(e){let t=this.ctx,n=this.game.width,r=this.game.height,i=n*.76,o=r*.445,s=Math.min(250,n*.23);t.save(),t.translate(i,o),t.rotate(-.24),this.glow(0,0,s*2.2,`#b15028`,.45),t.strokeStyle=`rgba(196,150,112,.12)`,t.lineWidth=1;for(let e=0;e<3;e++)t.beginPath(),t.ellipse(0,0,s*(1.29+e*.2),s*(.8+e*.1),0,0,a),t.stroke();let l=t.createRadialGradient(-s*.2,-s*.1,s*.5,0,0,s);l.addColorStop(0,`#05090e`),l.addColorStop(.89,`#080c10`),l.addColorStop(.97,`#7d4025`),l.addColorStop(1,`#ffb17b`),t.fillStyle=l,t.beginPath(),t.arc(0,0,s,0,a),t.fill(),t.strokeStyle=`rgba(255,178,116,.38)`,t.lineWidth=2,t.beginPath(),t.arc(0,0,s+3,.2,4.8),t.stroke();for(let e=0;e<9;e++)t.strokeStyle=`rgba(255,${133+e*9},${63+e*11},${.07+e*.015})`,t.lineWidth=1+e%3,t.beginPath(),t.ellipse(0,0,s*1.5+e*3,s*.22+e*3,-.06,0,Math.PI),t.stroke();t.strokeStyle=`#fbb37a`,t.lineWidth=1,t.beginPath(),t.ellipse(0,0,s*1.47,s*.28,-.06,.12,2.9),t.stroke();let u=new c(470);for(let n=0;n<105;n++){let n=u.range(0,a)+e*.007,r=u.range(s*1.1,s*1.8);t.globalAlpha=u.range(.15,.7),t.fillStyle=`#d5bba1`,t.fillRect(Math.cos(n)*r,Math.sin(n)*r*.7,u.range(.8,2),u.range(.8,2))}t.globalAlpha=1,t.restore();let d=[{x:n*.59,y:r*.17,r:42,a:.6,f:5},{x:n*.955,y:r*.36,r:89,a:1.4,f:28},{x:n*.55,y:r*.62,r:58,a:-.4,f:46},{x:n*.88,y:r*.74,r:74,a:-.9,f:12},{x:n*.89,y:r*.12,r:22,a:.2,f:20},{x:n*.66,y:r*.78,r:17,a:1,f:3}];for(let n of d)t.save(),t.translate(n.x,n.y+Math.sin(e*.16+n.a)*6),t.rotate(n.a+e*.025),this.rockSprite(n.r,n.f+e*.3),t.restore();this.ship(i-s*.11,o+s*.12,-.84,2.2,!0,e),t.strokeStyle=`rgba(161,193,202,.25)`,t.lineWidth=1,t.beginPath(),t.moveTo(i+46,o+92),t.lineTo(i+88,o+122),t.lineTo(i+164,o+122),t.stroke(),t.fillStyle=`#8da1a8`,t.font=`10px monospace`,t.textAlign=`left`,t.fillText(`NMD-01 / NOMAD`,i+91,o+140),t.fillStyle=`rgba(176,192,193,.5)`,t.font=`9px monospace`,t.fillText(`SIGNAL STRENGTH  98.7%`,i-s*.7,o-s-34);let f=n<800,p=t.createLinearGradient(0,0,f?n:n*.7,0);p.addColorStop(0,f?`rgba(7,11,15,.88)`:`rgba(7,11,15,.72)`),p.addColorStop(.62,f?`rgba(7,11,15,.72)`:`rgba(7,11,15,.42)`),p.addColorStop(1,f?`rgba(7,11,15,.35)`:`rgba(7,11,15,0)`),t.fillStyle=p,t.fillRect(0,0,n,r)}rockSprite(e,t){let n=this.ctx,r=this.assets.get(`asteroid.png`),i=Math.floor(t)%64;r?n.drawImage(r,i%8*60,Math.floor(i/8)*60,60,60,-e*1.25,-e*1.25,e*2.5,e*2.5):(n.fillStyle=`#71808a`,n.beginPath(),n.arc(0,0,e,0,a),n.fill())}enemy(e){let t=this.ctx;if(e.warning>0&&(t.globalAlpha=.25+(1.15-e.warning)*.5,t.strokeStyle=e.kind===`rock`?`#d9b69c`:`#ff7489`,t.lineWidth=1,t.setLineDash([4,7]),t.beginPath(),t.arc(e.x,e.y,e.radius+16+e.warning*12,0,a),t.stroke(),t.setLineDash([]),t.fillStyle=t.strokeStyle,t.font=`10px monospace`,t.textAlign=`center`,t.fillText(e.kind===`boss`?`MASS SIGNATURE`:`INBOUND`,e.x,e.y-e.radius-27),t.globalAlpha=.15),t.save(),t.translate(e.x,e.y),t.rotate(e.angle),e.kind===`rock`||e.kind===`splitter`||e.kind===`boss`){if(this.rockSprite(e.radius,e.frame),e.kind===`splitter`&&(t.strokeStyle=`#c4a1f9`,t.lineWidth=2,t.beginPath(),t.moveTo(-e.radius*.6,-e.radius*.7),t.lineTo(-5,-8),t.lineTo(10,-2),t.lineTo(2,10),t.lineTo(e.radius*.55,e.radius*.65),t.stroke(),this.glow(0,0,e.radius*1.3,`#ad7bd8`,.3)),e.kind===`boss`){this.glow(0,0,145,`#ce3d36`,.55),t.strokeStyle=`#e7895a`,t.lineWidth=5;for(let e=0;e<6;e++)t.beginPath(),t.arc(0,0,81,e*a/6,e*a/6+.7),t.stroke();t.fillStyle=`#371b1c`,t.strokeStyle=`#ff9774`,t.lineWidth=2,this.polygon(0,0,42,6,e.age*.3),t.fill(),t.stroke(),t.fillStyle=e.cooldown<.7?`#fff1c6`:`#ff674a`,this.polygon(0,0,24+Math.sin(e.age*4)*3,6,-e.age),t.fill(),e.cooldown<.7&&(t.strokeStyle=`rgba(255,95,90,.6)`,t.setLineDash([4,14]),t.beginPath(),t.arc(0,0,122,0,a),t.stroke(),t.setLineDash([]))}}else if(e.kind===`seeker`)this.glow(-12,0,38,`#fb476c`,.6),t.fillStyle=`#352535`,t.strokeStyle=`#ff8996`,t.lineWidth=1.5,t.beginPath(),t.moveTo(25,0),t.lineTo(-19,-18),t.lineTo(-11,0),t.lineTo(-19,18),t.closePath(),t.fill(),t.stroke(),t.fillStyle=`#ff687c`,t.beginPath(),t.moveTo(13,0),t.lineTo(-8,-5),t.lineTo(-8,5),t.closePath(),t.fill();else{let n=e.cooldown<1;this.glow(0,0,n?67:34,`#ff4267`,n?.6:.3),t.strokeStyle=`#d77584`,t.fillStyle=`#271921`,t.lineWidth=2;for(let e=0;e<8;e++){let n=e/8*a;t.beginPath(),t.moveTo(Math.cos(n)*14,Math.sin(n)*14),t.lineTo(Math.cos(n)*26,Math.sin(n)*26),t.stroke()}this.polygon(0,0,17,8,0),t.fill(),t.stroke(),t.fillStyle=n?`#fff1d4`:`#ff6681`,t.beginPath(),t.arc(0,0,n?8:5,0,a),t.fill()}if(e.flash>0&&!this.game.settings.reducedMotion&&(t.globalAlpha=e.flash*5,t.fillStyle=`#fff7e1`,t.beginPath(),t.arc(0,0,e.radius*.9,0,a),t.fill()),t.restore(),t.globalAlpha=1,e.health<e.maxHealth&&e.kind!==`boss`&&e.maxHealth>1){let n=e.y+e.radius+8;t.fillStyle=`#33414a`,t.fillRect(e.x-16,n,32,2),t.fillStyle=`#e8b390`,t.fillRect(e.x-16,n,32*Math.max(0,e.health/e.maxHealth),2)}}ship(e,t,n,r,i,o){let s=this.ctx;if(s.save(),s.translate(e,t),s.rotate(n+Math.PI/2),s.scale(r,r),i){this.glow(0,34,62,`#ff7a3d`,.6);let e=33+Math.sin(o*37)*9,t=s.createLinearGradient(0,20,0,30+e);t.addColorStop(0,`#fff4d0`),t.addColorStop(.22,`#ffb562`),t.addColorStop(.65,`#d04b21`),t.addColorStop(1,`rgba(240,80,20,0)`),s.fillStyle=t,s.beginPath(),s.moveTo(-9,23),s.quadraticCurveTo(-10,45,0,30+e),s.quadraticCurveTo(10,45,9,23),s.fill()}s.fillStyle=`#27323e`,s.strokeStyle=`#8898a8`,s.lineWidth=.8,s.beginPath(),s.moveTo(0,-35),s.lineTo(10,-5),s.lineTo(27,20),s.lineTo(25,29),s.lineTo(10,22),s.lineTo(0,28),s.lineTo(-10,22),s.lineTo(-25,29),s.lineTo(-27,20),s.lineTo(-10,-5),s.closePath(),s.fill(),s.stroke();let c=this.assets.get(`ship.png`);c?s.drawImage(c,-19,-34,38,56):(s.fillStyle=`#c2d0da`,s.beginPath(),s.moveTo(0,-33),s.lineTo(12,23),s.lineTo(-12,23),s.closePath(),s.fill()),s.fillStyle=`#ff8851`,s.fillRect(-23,17,3,9),s.fillRect(20,17,3,9),s.fillStyle=`#9cdef2`,s.beginPath(),s.ellipse(0,-4,4.2,9,0,0,a),s.fill(),s.fillStyle=`#e4f8ff`,s.fillRect(-1,-12,2,9),s.restore()}effects(){let e=this.ctx,t=this.game,n=this.assets.get(`explosion_30_128.png`);if(n)for(let r of t.explosions){let t=Math.min(29,Math.floor(r.age/.7*30));e.save(),e.translate(r.x,r.y),e.rotate(r.angle),e.globalCompositeOperation=`screen`,e.globalAlpha=.7,e.drawImage(n,t%6*128,Math.floor(t/6)*128,128,128,-r.size/2,-r.size/2,r.size,r.size),e.restore()}for(let n of t.particles)e.globalAlpha=o(n.life/n.maxLife,0,1),e.fillStyle=n.color,e.fillRect(n.x-n.size/2,n.y-n.size/2,n.size,n.size);for(let n of t.rings){let t=n.life/n.maxLife;e.globalAlpha=t*.75,e.strokeStyle=n.color,e.lineWidth=n.width,e.beginPath(),e.arc(n.x,n.y,n.radius*(1-t*t),0,a),e.stroke()}for(let n of t.arcs)e.globalAlpha=n.life*4,e.strokeStyle=`#d8c6ff`,e.lineWidth=2,e.beginPath(),n.points.forEach((t,n)=>n?e.lineTo(t.x,t.y):e.moveTo(t.x,t.y)),e.stroke();for(let n of t.popups)e.globalAlpha=Math.min(1,n.life*2),e.fillStyle=n.color,e.font=n.big?`600 16px Interface, sans-serif`:`12px monospace`,e.textAlign=`center`,e.fillText(n.text,n.x,n.y-10);e.globalAlpha=1}crosshair(e,t){let n=this.ctx;n.strokeStyle=`rgba(225,235,228,.67)`,n.lineWidth=1,n.beginPath(),n.arc(e,t,9,0,a),n.stroke();for(let r=0;r<4;r++){let i=r*a/4;n.beginPath(),n.moveTo(e+Math.cos(i)*13,t+Math.sin(i)*13),n.lineTo(e+Math.cos(i)*18,t+Math.sin(i)*18),n.stroke()}n.fillStyle=`#ff9458`,n.fillRect(e-1,t-1,2,2)}touchControls(){if(this.game.phase!==`playing`)return;let e=this.ctx;for(let t of[this.game.input.left,this.game.input.right])if(t){e.strokeStyle=`rgba(200,221,229,.3)`,e.fillStyle=`rgba(200,221,229,.08)`,e.lineWidth=2,e.beginPath(),e.arc(t.origin.x,t.origin.y,55,0,a),e.fill(),e.stroke();let n=t.current.x-t.origin.x,r=t.current.y-t.origin.y,i=Math.max(55,Math.hypot(n,r));e.fillStyle=`rgba(220,237,239,.25)`,e.beginPath(),e.arc(t.origin.x+n/i*40,t.origin.y+r/i*40,21,0,a),e.fill()}}polygon(e,t,n,r,i){this.ctx.beginPath();for(let o=0;o<=r;o++){let s=i+o/r*a,c=e+Math.cos(s)*n,l=t+Math.sin(s)*n;o?this.ctx.lineTo(c,l):this.ctx.moveTo(c,l)}this.ctx.closePath()}glow(e,t,n,r,i){let a=this.glows.get(r);if(!a){a=document.createElement(`canvas`),a.width=128,a.height=128;let e=a.getContext(`2d`),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,r),t.addColorStop(.2,`${r}a0`),t.addColorStop(1,`${r}00`),e.fillStyle=t,e.fillRect(0,0,128,128),this.glows.set(r,a)}let o=this.ctx.globalAlpha;this.ctx.globalAlpha=o*i,this.ctx.drawImage(a,e-n/2,t-n/2,n,n),this.ctx.globalAlpha=o}},h=`voidbreaker.save.v1`,g=e=>typeof e==`object`&&!!e,_=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0,v=e=>e===`nomad`||e===`wraith`||e===`bastion`;function y(){return{version:1,cores:0,runs:0,bestSector:0,records:[],achievements:[],loadout:`nomad`,settings:{sound:!0,music:!0,reducedMotion:typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,autoFire:!1}}}function b(e){let t=y();try{let n=JSON.parse(e??`null`);if(!g(n)||n.version!==1)return t;for(let e of[`cores`,`runs`,`bestSector`])_(n[e])&&(t[e]=n[e]);if(v(n.loadout)&&(t.loadout=n.loadout),g(n.settings))for(let e of[`sound`,`music`,`reducedMotion`,`autoFire`])typeof n.settings[e]==`boolean`&&(t.settings[e]=n.settings[e]);Array.isArray(n.achievements)&&(t.achievements=i.filter(e=>n.achievements.includes(e.id)).map(e=>e.id)),Array.isArray(n.records)&&(t.records=n.records.filter(e=>g(e)&&[`score`,`sector`,`seconds`,`cores`,`kills`,`combo`].every(t=>_(e[t]))&&v(e.loadout)&&typeof e.date==`string`).sort((e,t)=>t.score-e.score).slice(0,5))}catch{}return t}function x(){try{return b(localStorage.getItem(h))}catch{return y()}}function S(e){try{return localStorage.setItem(h,JSON.stringify(e)),!0}catch{return!1}}function C(e,t){return e===`nomad`||(e===`wraith`?t.cores>=60:t.bestSector>=4)}function w(e,t,n){return{...e,cores:e.cores+t.cores,runs:e.runs+1,bestSector:Math.max(e.bestSector,t.sector),records:[...e.records,t].sort((e,t)=>t.score-e.score).slice(0,5),achievements:[...new Set([...e.achievements,...n])]}}var T={mark:`<path d="M3 4h5l4 12 4-12h5l-7 18h-4z" fill="currentColor" stroke="none"/><path d="m11 1-3 8h5l-3 9L20 6h-6l3-5z" fill="#edf0e9" stroke="none"/>`,arrow:`<path d="M5 12h14M13 5l7 7-7 7"/>`,diagonal:`<path d="M5 19 19 5M5 5h14v14"/>`,sound:`<path d="m11 4-6 5H2v6h3l6 5zM15 8a6 6 0 0 1 0 8M18 4a11 11 0 0 1 0 16"/>`,mute:`<path d="m11 4-6 5H2v6h3l6 5zM16 9l6 6m0-6-6 6"/>`,expand:`<path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/>`,settings:`<path d="M4 6h16M4 12h16M4 18h16M8 3v6m8 0v6m-6 0v6"/>`,close:`<path d="m6 6 12 12M6 18 18 6"/>`,pause:`<path d="M8 5v14M16 5v14" stroke-width="4"/>`,play:`<path d="m7 4 14 8-14 8z"/>`,trophy:`<path d="M7 3h10v7a5 5 0 0 1-10 0zM7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4M12 15v6M7 21h10"/>`,help:`<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-2 1-2 2-2 3m0 3h.01"/>`,ship:`<path d="m12 2 8 18-8-4-8 4zM9 21h6"/>`,lock:`<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3"/>`,check:`<path d="m5 12 4 4L19 6"/>`,core:`<path d="m12 2 7 10-7 10-7-10zM5 12h14"/>`,fork:`<path d="M12 22V3m-4 4 4-4 4 4M5 18V8L2 11m3-3 3 3m11 7V8l-3 3m3-3 3 3"/>`,rail:`<path d="M10 22V3m4 19V3M7 8l5-6 5 6M5 15h14"/>`,arc:`<path d="m13 2-8 12h7l-1 8 8-13h-7z"/>`,magnet:`<path d="M5 3v10a7 7 0 0 0 14 0V3h-5v10a2 2 0 0 1-4 0V3zM5 7h5m4 0h5"/>`,phase:`<path d="m12 3 9 9-9 9m-6-4 5-5-5-5M1 12h19"/>`,orbit:`<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="11" ry="6" transform="rotate(-40 12 12)"/><circle cx="20" cy="7" r="2" fill="currentColor"/>`,reactor:`<path d="m12 2 9 5v10l-9 5-9-5V7zM12 7l-4 6h5l-1 5 5-8h-5z"/>`,hull:`<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6zM8 12h8m-4-4v8"/>`};function E(e,t=``){return`<svg class="icon ${t}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${T[e]??T.core}</svg>`}var D=class{root;game;save=x();panel=null;priorFocus=null;lastRun;newBest=!1;newShips=[];cache=new Map;toastTimer=0;saved=!0;constructor(e,t){this.root=e,this.game=t,t.settings=this.save.settings,t.audio.update(this.save.settings),t.onState=()=>{this.panel=null,this.render()},t.onDeath=()=>this.finishRun(),t.onToast=(e,t)=>{this.save.achievements.some(t=>i.find(e=>e.id===t)?.name===e)||this.toast(e,t)},t.input.onPause=()=>{this.panel?this.closePanel():t.pause()},t.input.onAutoFire=()=>{t.phase===`playing`&&this.toggle(`autoFire`)},t.input.onMute=()=>this.toggle(`sound`),t.input.onChoice=e=>{this.panel||t.chooseModule(e)},t.input.onEnter=()=>{!this.panel&&(t.phase===`title`||t.phase===`dead`)&&this.start()},e.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-action]`);t&&!t.disabled&&this.action(t.dataset.action,t.dataset.value)}),document.addEventListener(`keydown`,e=>{if(e.key!==`Tab`)return;let t=this.root.querySelector(`[role="dialog"]`);if(!t)return;let n=[...t.querySelectorAll(`button:not([disabled]), a[href], input`)],r=n[0],i=n.at(-1);e.shiftKey&&document.activeElement===r?(i?.focus(),e.preventDefault()):!e.shiftKey&&document.activeElement===i&&(r?.focus(),e.preventDefault())}),this.render()}persist(){this.saved=S(this.save)}start(){C(this.save.loadout,this.save)||(this.save.loadout=`nomad`),this.game.start(this.save.loadout),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}finishRun(){let e=this.game.run;this.lastRun={score:Math.floor(e.score),sector:e.sector,seconds:e.time,cores:e.cores,kills:e.kills,combo:e.maxCombo,loadout:e.loadout,date:new Date().toISOString()},this.newBest=this.lastRun.score>(this.save.records[0]?.score??0);let t=[`wraith`,`bastion`].filter(e=>!C(e,this.save));this.save=w(this.save,this.lastRun,e.achievements),this.newShips=t.filter(e=>C(e,this.save)).map(e=>n[e].name),this.persist()}action(e,t){this.game.audio.tone(600,.055,.08,`sine`,800),e===`start`&&this.start(),e===`pause`&&this.game.pause(),e===`home`&&this.game.home(),e===`end`&&this.game.endRun(),(e===`help`||e===`settings`||e===`records`||e===`hangar`)&&this.openPanel(e),e===`close`&&this.closePanel(),e===`module`&&this.game.chooseModule(Number(t)),e===`toggle`&&t&&[`sound`,`music`,`reducedMotion`,`autoFire`].includes(t)&&this.toggle(t),e===`loadout`&&v(t)&&C(t,this.save)&&(this.save.loadout=t,this.persist(),this.render()),e===`dash`&&(this.game.input.dashQueued=!0),e===`overdrive`&&(this.game.input.overdriveQueued=!0),e===`fullscreen`&&(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.())?.catch(()=>this.toast(`Fullscreen unavailable`,`Your browser can still play in this window.`))}toggle(e){this.save.settings[e]=!this.save.settings[e],this.game.settings=this.save.settings,this.game.audio.update(this.save.settings),e===`sound`&&this.save.settings.sound&&this.game.audio.unlock(),this.persist();let t=document.activeElement instanceof HTMLButtonElement?document.activeElement.dataset.value:void 0;this.render(),t&&this.restoreFocus(`toggle`,t),e===`autoFire`&&this.game.phase===`playing`&&this.toast(`Autofire ${this.save.settings.autoFire?`on`:`off`}`,`Press F to toggle. Keep aiming with the mouse.`)}openPanel(e){let t=document.activeElement;this.priorFocus=t instanceof HTMLButtonElement&&t.dataset.action?{action:t.dataset.action,value:t.dataset.value}:null,this.game.phase===`playing`&&this.game.pause(),this.panel=e,this.render()}closePanel(){this.panel=null,this.render(),this.priorFocus&&this.restoreFocus(this.priorFocus.action,this.priorFocus.value)}restoreFocus(e,t){requestAnimationFrame(()=>{[...this.root.querySelectorAll(`button[data-action]`)].find(n=>n.dataset.action===e&&n.dataset.value===t)?.focus({preventScroll:!0})})}render(){this.cache.clear();let e=this.game;document.body.dataset.phase=e.phase,document.body.classList.toggle(`reduced-motion`,this.save.settings.reducedMotion),this.root.innerHTML=`${e.phase===`title`?this.title():this.hud()}
      ${e.phase===`paused`&&!this.panel?this.pause():``}
      ${e.phase===`upgrade`?this.upgrade():``}
      ${e.phase===`dead`&&!this.panel?this.gameOver():``}
      ${this.panel?this.panelContent():``}
      <div class="toast" id="toast" role="status" aria-live="polite"></div>`,this.update(),(e.phase===`paused`||e.phase===`upgrade`||e.phase===`dead`||this.panel)&&requestAnimationFrame(()=>this.root.querySelector(`[role="dialog"] button:not([disabled])`)?.focus({preventScroll:!0}))}topbar(){return`<header class="topbar">
      <a class="brand" href="#" aria-label="Voidbreaker home"
        >${E(`mark`)}<span
          >VOIDBREAKER<span class="brand-dot">®</span></span
        ></a
      >
      <div class="edition">
        INDEPENDENT PILOT PROGRAM <span> / </span> VOL. 01
      </div>
      <div class="top-actions">
        <button
          data-action="toggle"
          data-value="sound"
          class="icon-button"
          aria-label="${this.save.settings.sound?`Mute audio`:`Enable audio`}"
          title="Sound · M"
        >
          ${E(this.save.settings.sound?`sound`:`mute`)}</button
        ><button
          data-action="settings"
          class="icon-button"
          aria-label="Settings"
        >
          ${E(`settings`)}</button
        ><button
          data-action="fullscreen"
          class="icon-button fullscreen"
          aria-label="Fullscreen"
        >
          ${E(`expand`)}
        </button>
      </div>
    </header>`}title(){let e=this.save.records[0]?.score??0,t=n[this.save.loadout];return`<main class="title-screen">
      ${this.topbar()}
      <div class="title-layout">
        <section class="hero-copy">
          <div class="eyebrow">
            <span class="live-dot"></span> DEEP SPACE. BAD ODDS.
          </div>
          <h1>
            <span>VOID</span><span class="orange">BREAKER</span
            ><span class="title-star">✳</span>
          </h1>
          <p class="hero-description">
            The belt is endless. Your hull isn't.<br />Break rocks. Take the
            salvage. Push your luck.
          </p>
          <div class="launch-block">
            <button class="primary launch" data-action="start">
              <span>ENTER THE VOID</span>${E(`diagonal`)}</button
            ><span class="launch-note"
              ><span class="keycap">↵</span> TO LAUNCH
              <span class="note-dot">·</span> ENDLESS SURVIVAL</span
            >
          </div>
          <div class="hero-links">
            <button class="text-button" data-action="help">
              ${E(`help`)} How to fly</button
            ><span></span
            ><button class="text-button" data-action="records">
              ${E(`trophy`)} Flight records
            </button>
          </div>
        </section>
        <aside class="flight-card">
          <div class="flight-card-top">
            <span class="eyebrow">READY FOR DEPARTURE</span
            ><span class="status-light"></span>
          </div>
          <button class="selected-ship" data-action="hangar">
            <span class="ship-mark">${E(`ship`)}</span
            ><span
              ><small>YOUR SHIP / ${t.tag}</small
              ><strong>${t.name}</strong></span
            ><span class="change-ship">HANGAR ${E(`arrow`)}</span>
          </button>
          <div class="personal-best">
            <span>PERSONAL BEST</span
            ><strong>${u(e).padStart(6,`0`)}</strong
            >${E(`trophy`)}
          </div>
        </aside>
      </div>
      <footer class="title-footer">
        <div class="loop-strip">
          <div>
            <span class="step-number">01</span>
            <div>
              <strong>BREAK THE BELT</strong
              ><span>Point. Fire. Make space.</span>
            </div>
          </div>
          <div>
            <span class="step-number">02</span>
            <div>
              <strong>GET GREEDY</strong
              ><span>Grab cores. Stack your multiplier.</span>
            </div>
          </div>
          <div>
            <span class="step-number">03</span>
            <div>
              <strong>BUILD. BREAK. REPEAT.</strong
              ><span>Choose a mod. Survive the next sector.</span>
            </div>
          </div>
        </div>
        <div class="footer-meta">
          <span
            ><span class="tiny-cross">+</span> BUILT FROM THE ASHES OF
            ASTEROIDS</span
          ><span
            >NO CHECKPOINTS. JUST ONE MORE RUN.
            <span class="orange">↗</span></span
          ><span>V.1.0 / LOCAL RECORDS</span>
        </div>
      </footer>
    </main>`}hud(){return`<div class="hud">
      <header class="hud-top">
        <div class="hud-score">
          <span class="eyebrow">RUN SCORE</span
          ><strong id="score">000000</strong
          ><small
            >BEST
            <span id="best"
              >${u(this.save.records[0]?.score??0)}</span
            ></small
          >
        </div>
        <div class="hud-sector">
          <span class="eyebrow"
            >SECTOR <span id="sector">01</span> <span class="hud-slash">/</span>
            <span id="sector-name">THE OUTER BELT</span></span
          >
          <div class="sector-track"><i id="sector-progress"></i></div>
          <span id="sector-count" class="muted">0 / 14 HOSTILES CLEARED</span>
        </div>
        <div class="hud-right">
          <div class="hull-wrap">
            <span class="eyebrow">HULL INTEGRITY</span>
            <div id="hull" class="hull"></div>
          </div>
          <button
            class="icon-button"
            data-action="pause"
            aria-label="Pause game"
          >
            ${E(`pause`)}
          </button>
        </div>
      </header>
      <div id="boss-hud" class="boss-hud" hidden>
        <div><span>WORLD EATER</span><span id="boss-health"></span></div>
        <div class="boss-track"><i id="boss-progress"></i></div>
      </div>
      <div class="sector-banner" id="banner">
        <strong id="banner-title"></strong><span id="banner-sub"></span>
      </div>
      <div class="combo-display" id="combo-display">
        <strong><span id="combo">1</span><span>×</span></strong>
        <div>
          <span>SALVAGE MULTIPLIER</span>
          <div class="combo-track"><i id="combo-progress"></i></div>
        </div>
      </div>
      <div class="first-hint" id="first-hint">
        <span class="desktop-hint"
          ><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> MOVE <b>·</b> MOUSE
          AIM + FIRE <b>·</b> <kbd>SPACE</kbd> DASH</span
        ><span class="mobile-hint"
          >LEFT THUMB TO MOVE · RIGHT THUMB TO AIM + FIRE</span
        ><small
          >Green cores build your multiplier. A hit breaks your streak.</small
        >
      </div>
      <footer class="hud-bottom">
        <div class="run-modules">
          <span class="eyebrow"
            >${n[this.game.run.loadout].name.toUpperCase()}
            <span class="hud-slash">/</span> <span id="clock">0:00</span></span
          >
          <div class="module-chips" id="module-chips"></div>
        </div>
        <div class="ability-bar">
          <button
            class="ability dash-ability"
            data-action="dash"
            id="dash-button"
          >
            <span class="ability-icon">${E(`phase`)}</span
            ><span
              ><strong>PHASE DASH</strong
              ><span class="ability-track"><i id="dash-progress"></i></span
              ><small id="dash-status">READY</small></span
            ><kbd>SPACE</kbd>
          </button>
          <button
            class="ability overdrive-ability"
            data-action="overdrive"
            id="overdrive-button"
          >
            <span class="ability-icon">${E(`reactor`)}</span
            ><span
              ><strong>OVERDRIVE</strong
              ><span class="ability-track"><i id="energy-progress"></i></span
              ><small id="energy-status">COLLECT CORES TO CHARGE</small></span
            ><kbd>E</kbd>
          </button>
        </div>
        <button
          class="autofire-button"
          data-action="toggle"
          data-value="autoFire"
          id="autofire"
        >
          <kbd>F</kbd> AUTO FIRE
          <b>${this.save.settings.autoFire?`ON`:`OFF`}</b>
        </button>
      </footer>
    </div>`}pause(){return`<div class="overlay">
      <section
        class="dialog pause-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pause-title"
      >
        <span class="eyebrow orange">FLIGHT SUSPENDED</span>
        <h2 id="pause-title">TAKE A BREATH.</h2>
        <p>The belt can wait.</p>
        <button class="primary" data-action="pause">
          RESUME FLIGHT ${E(`play`)}
        </button>
        <div class="pause-options">
          <button class="secondary" data-action="settings">
            ${E(`settings`)} Settings</button
          ><button class="secondary" data-action="help">
            ${E(`help`)} Controls
          </button>
        </div>
        <button class="text-button muted" data-action="end">
          Bank score & end run ${E(`arrow`)}</button
        ><small class="dialog-footnote"><kbd>ESC</kbd> TO RESUME</small>
      </section>
    </div>`}upgrade(){let e=this.game;return`<div class="overlay upgrade-overlay">
      <section
        class="upgrade-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="upgrade-title"
      >
        <div class="upgrade-heading">
          <span class="eyebrow green"
            >SECTOR ${String(e.run.sector).padStart(2,`0`)} SECURED / HULL
            REPAIRED +1</span
          >
          <h2 id="upgrade-title">MAKE IT <span class="orange">YOURS.</span></h2>
          <p>Choose one module. Keep it for the rest of this run.</p>
        </div>
        <div class="upgrade-grid">
          ${e.run.choices.map((t,n)=>`<button class="upgrade-card" data-action="module" data-value="${n}" style="--module-color:${t.color}"><span class="upgrade-card-top"><span>${t.category}</span><kbd>${n+1}</kbd></span><span class="upgrade-icon">${E(t.icon)}</span><span class="upgrade-level">${t.category===`FULL BUILD`?`SERVICE STOP`:e.module(t.id)?`LEVEL ${e.module(t.id)+1}`:`NEW MODULE`}</span><strong>${t.name}</strong><p>${t.description}</p><span class="install-label">INSTALL MODULE ${E(`arrow`)}</span></button>`).join(``)}
        </div>
        <div class="next-sector">
          NEXT UP
          <span
            >SECTOR ${String(e.run.sector+1).padStart(2,`0`)} /
            ${r[e.run.sector%4].name.toUpperCase()}</span
          ><span>${E(`arrow`)}</span>
        </div>
      </section>
    </div>`}gameOver(){let e=this.lastRun;return e?`<div class="overlay end-overlay">
      <section
        class="dialog end-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="end-title"
      >
        <div class="end-eyebrow">
          <span class="eyebrow orange"
            >${this.game.endReason===`banked`?`FLIGHT RECORDED`:`CONNECTION TERMINATED`}</span
          ><span class="eyebrow muted"
            >${n[e.loadout].name.toUpperCase()} /
            ${String(this.save.runs).padStart(3,`0`)}</span
          >
        </div>
        <h2 id="end-title">
          ${this.game.endReason===`banked`?`UNTIL NEXT TIME.`:`SIGNAL LOST.`}
        </h2>
        <p>
          ${this.game.endReason===`banked`?`Your score is safe. The belt will be here.`:`The void keeps the ship. You keep the score.`}
        </p>
        <div class="final-score">
          <span class="eyebrow"
            >FINAL SCORE
            ${this.newBest?`<b class="green">↗ NEW PERSONAL BEST</b>`:``}</span
          ><strong>${u(e.score)}</strong
          ><span class="previous-best"
            >PERSONAL BEST ${u(this.save.records[0]?.score??0)}</span
          >
        </div>
        <div class="run-stats">
          <div>
            <strong>${String(e.sector).padStart(2,`0`)}</strong
            ><span>SECTOR</span>
          </div>
          <div>
            <strong>${d(e.seconds)}</strong><span>TIME ALIVE</span>
          </div>
          <div><strong>${e.kills}</strong><span>DESTROYED</span></div>
          <div><strong>${e.combo}×</strong><span>BEST STREAK</span></div>
        </div>
        <div class="end-unlock">
          ${this.newShips.length?`${E(`ship`)}<div><strong>${this.newShips.join(` + `)} unlocked</strong><span>Your next ride is waiting in the hangar.</span></div>`:this.save.cores<60?`${E(`core`)}<div><strong>${this.save.cores} / 60 cores recovered</strong><span>${60-this.save.cores} more unlocks the Wraith interceptor.</span><div class="unlock-track"><i style="width:${Math.min(100,this.save.cores/60*100)}%"></i></div></div>`:C(`bastion`,this.save)?`${E(`trophy`)}<div><strong>${this.save.achievements.length} / 4 flight badges earned</strong><span>${e.cores} cores recovered this run. Beat your best.</span></div>`:`${E(`ship`)}<div><strong>Next target: sector 04</strong><span>Reach the World Eater to unlock Bastion.</span></div>`}
        </div>
        <button class="primary" data-action="start">
          ONE MORE RUN ${E(`diagonal`)}
        </button>
        <div class="end-actions">
          <button class="text-button" data-action="home">
            ${E(`arrow`)} Back to base</button
          ><button class="text-button" data-action="hangar">
            ${E(`ship`)} Change ship
          </button>
        </div>
        ${this.saved?``:`<small class="storage-note">Browser storage is unavailable. Records will last for this visit.</small>`}
      </section>
    </div>`:``}panelContent(){return this.panel?`<div class="overlay panel-overlay">
      <section
        class="dialog panel-dialog ${this.panel}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
      >
        <header class="panel-header">
          <div>
            <span class="eyebrow orange">VOIDBREAKER / PILOT PROGRAM</span>
            <h2 id="panel-title">${{help:`FLIGHT MANUAL`,settings:`YOUR COCKPIT`,records:`FLIGHT RECORDS`,hangar:`PICK YOUR RIDE`}[this.panel]}</h2>
          </div>
          <button
            class="icon-button"
            data-action="close"
            aria-label="Close panel"
          >
            ${E(`close`)}
          </button>
        </header>
        ${this.panel===`help`?this.helpPanel():this.panel===`settings`?this.settingsPanel():this.panel===`records`?this.recordsPanel():this.hangarPanel()}
      </section>
    </div>`:``}helpPanel(){return`<div class="manual-intro">
        <strong>Survive. Salvage. Evolve.</strong>
        <p>
          Clear the sector to install a module and repair one hull point. Every
          fourth sector has a World Eater. The belt gets harder until it takes
          you.
        </p>
      </div>
      <div class="controls-grid">
        <div>
          <span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / ARROWS</span
          ><strong>Move your ship</strong>
        </div>
        <div>
          <span>MOUSE + LEFT CLICK</span><strong>Aim + hold to fire</strong>
        </div>
        <div>
          <span><kbd>SPACE</kbd> / <kbd>SHIFT</kbd> / RIGHT CLICK</span
          ><strong>Dash through danger</strong>
        </div>
        <div>
          <span><kbd>E</kbd></span
          ><strong>Unleash overdrive</strong>
        </div>
        <div>
          <span><kbd>F</kbd> / <kbd>J</kbd></span
          ><strong>Toggle autofire / hold for autoaim fire</strong>
        </div>
        <div>
          <span><kbd>ESC</kbd> / <kbd>P</kbd></span
          ><strong>Pause your run</strong>
        </div>
      </div>
      <div class="manual-rules">
        <div>
          ${E(`core`)}
          <p>
            <strong>Greed pays.</strong> Green cores give points, build up to an
            8× multiplier, and charge overdrive. Keep collecting within six
            seconds. A hit breaks your streak.
          </p>
        </div>
        <div>
          ${E(`phase`)}
          <p>
            <strong>Get out alive.</strong> Dash grants brief invulnerability.
            Arena edges wrap. A full reactor gives six seconds of rapid,
            piercing fire and clears enemy bullets when you press E.
          </p>
        </div>
        <div>
          ${E(`ship`)}
          <p>
            <strong>Every flight counts.</strong> Earn 60 lifetime cores for
            Wraith. Reach sector 4 for Bastion. Records and unlocks stay in this
            browser when a run ends.
          </p>
        </div>
      </div>
      <div class="manual-touch">
        TOUCH CONTROLS
        <span
          >Left thumb moves. Drag your right thumb to aim and fire. Tap the dash
          and overdrive buttons below.</span
        >
      </div>
      <div class="manual-credits">
        ORIGINAL DNA: RALPH SMITH'S 2010 ASTEROID DEMO<br />Reworked ship,
        rocks, plasma, explosions, Orion backdrop and audio.
      </div>`}settingsPanel(){return`<p class="panel-description">
        Make yourself comfortable. Settings save automatically.
      </p>
      <div class="settings-list">
        ${[[`sound`,`Game audio`,`Original plasma and explosion samples, plus new cockpit cues.`],[`music`,`Music`,`The original space soundtrack. Plays during a run.`],[`reducedMotion`,`Reduced motion`,`Disable screen shake, hit flashes, and title animation.`],[`autoFire`,`Autofire`,`Fire continuously. You still control movement and aim.`]].map(([e,t,n])=>`<button class="setting-row" data-action="toggle" data-value="${e}" role="switch" aria-checked="${this.save.settings[e]}"><span><strong>${t}</strong><small>${n}</small></span><span class="switch ${this.save.settings[e]?`on`:``}"><i></i></span></button>`).join(``)}
      </div>
      <div class="settings-note">
        Keyboard-only flight: move with the arrow keys and hold J to autoaim and
        fire. Press K to dash.<br /><br />The game pauses when you switch tabs.
        Audio starts when you launch.
      </div>`}recordsPanel(){return`<div class="records-summary">
        <div><strong>${this.save.runs}</strong><span>FLIGHTS</span></div>
        <div>
          <strong>${this.save.cores}</strong><span>CORES RECOVERED</span>
        </div>
        <div>
          <strong>${String(this.save.bestSector).padStart(2,`0`)}</strong
          ><span>DEEPEST SECTOR</span>
        </div>
      </div>
      <div class="record-table">
        <div class="record-row record-labels">
          <span>RANK / SHIP</span><span>SECTOR</span><span>TIME</span
          ><span>SCORE</span>
        </div>
        ${this.save.records.length?this.save.records.map((e,t)=>`<div class="record-row"><strong><span class="rank">0${t+1}</span> ${n[e.loadout].name}</strong><span>${String(e.sector).padStart(2,`0`)}</span><span>${d(e.seconds)}</span><strong class="${t===0?`orange`:``}">${u(e.score)}</strong></div>`).join(``):`<div class="empty-records">No signals on record.<br><span>Your first flight starts the story.</span></div>`}
      </div>
      <span class="eyebrow badge-title"
        >FLIGHT BADGES / ${this.save.achievements.length} OF 4</span
      >
      <div class="badge-grid">
        ${i.map(e=>`<div class="badge ${this.save.achievements.includes(e.id)?`earned`:``}">${E(this.save.achievements.includes(e.id)?`trophy`:`lock`)}<strong>${e.name}</strong><span>${e.description}</span></div>`).join(``)}
      </div>
      <p class="local-note">
        Records are stored on this device. No accounts. No global leaderboard.
      </p>`}hangarPanel(){return`<p class="panel-description">
        Different ships. Same unforgiving belt.
      </p>
      <div class="hangar-grid">
        ${Object.keys(n).map(e=>{let t=n[e],r=C(e,this.save),i=this.save.loadout===e;return`<button
              class="hangar-card ${i?`selected`:``} ${r?``:`locked`}"
              data-action="loadout"
              data-value="${e}"
              ${r?``:`disabled`}
              style="--ship-color:${t.color}"
              aria-pressed="${i}"
            >
              <span class="eyebrow">${t.tag}</span
              ><span class="hangar-ship ${e}"
                >${E(r?`ship`:`lock`)}</span
              ><strong>${t.name}</strong>
              <p>${t.description}</p>
              <div class="ship-spec">
                <span>HULL</span><b>${t.health}</b><span>DRIVE</span
                ><b
                  >${e===`wraith`?`FAST`:e===`bastion`?`HEAVY`:`BALANCED`}</b
                >
              </div>
              <span class="select-label"
                >${i?`${E(`check`)} SELECTED`:r?`SELECT SHIP`:e===`wraith`?`${this.save.cores} / 60 LIFETIME CORES`:`REACH SECTOR 04 / BEST ${String(this.save.bestSector).padStart(2,`0`)}`}</span
              >
            </button>`}).join(``)}
      </div>
      <button class="primary hangar-launch" data-action="start">
        LAUNCH ${n[this.save.loadout].name.toUpperCase()}
        ${E(`diagonal`)}
      </button>`}update(){let e=this.game;if(e.phase===`title`||!e.run)return;let n=e.run,i=e.player;this.text(`score`,u(n.score).padStart(6,`0`)),this.text(`sector`,String(n.sector).padStart(2,`0`)),this.text(`sector-name`,r[(n.sector-1)%4].name.toUpperCase()),this.text(`sector-count`,n.sector%4==0?`DESTROY THE WORLD EATER`:`${Math.min(n.quota,n.sectorKills)} / ${n.quota} HOSTILES CLEARED`),this.width(`sector-progress`,n.sector%4==0?100:Math.min(100,n.sectorKills/n.quota*100));let a=`${i.health}/${i.maxHealth}`;if(this.cache.get(`hull`)!==a){this.cache.set(`hull`,a);let e=document.getElementById(`hull`);e&&(e.innerHTML=Array.from({length:i.maxHealth},(e,t)=>`<i class="${t<i.health?i.health===1?`critical`:`full`:``}"></i>`).join(``),e.setAttribute(`aria-label`,`${i.health} of ${i.maxHealth} hull points`))}this.text(`combo`,String(n.combo)),this.width(`combo-progress`,n.comboTime/6*100),document.getElementById(`combo-display`)?.classList.toggle(`active`,n.combo>1),this.text(`clock`,d(n.time)),this.width(`dash-progress`,(1-i.dashCooldown/e.dashDuration)*100),this.text(`dash-status`,i.dashCooldown>0?`${i.dashCooldown.toFixed(1)}s RECHARGING`:`READY / BRIEF INVULNERABILITY`),document.getElementById(`dash-button`)?.classList.toggle(`ready`,i.dashCooldown<=0);let o=i.overdrive>0;this.width(`energy-progress`,o?i.overdrive/(e.module(`reactor`)?9:6)*100:i.energy),this.text(`energy-status`,o?`ACTIVE / ${i.overdrive.toFixed(1)}s`:i.energy>=100?`READY / UNLEASH IT`:`${Math.floor(i.energy)}% / COLLECT CORES`),document.getElementById(`overdrive-button`)?.classList.toggle(`ready`,i.energy>=100||o),document.getElementById(`banner`)?.classList.toggle(`visible`,e.bannerTime>0),this.text(`banner-title`,e.banner),this.text(`banner-sub`,e.bannerSub),document.getElementById(`first-hint`)?.classList.toggle(`visible`,n.time<13&&n.sector===1&&e.phase===`playing`);let s=Object.entries(n.modules).map(([e,n])=>{let r=t.find(t=>t.id===e);return`<span
            class="module-chip"
            style="color:${r.color}"
            title="${r.name} ${n}"
            aria-label="${r.name}, level ${n}"
            >${E(r.icon)}${n>1?`<small>${n}</small>`:``}</span
          >`}).join(``)||`<span class="stock-module">STOCK PLASMA / NO MODULES</span>`;if(this.cache.get(`modules`)!==s){this.cache.set(`modules`,s);let e=document.getElementById(`module-chips`);e&&(e.innerHTML=s)}let c=e.enemies.find(e=>e.kind===`boss`&&!e.dead),l=document.getElementById(`boss-hud`);l&&(l.hidden=!c),c&&(this.width(`boss-progress`,Math.max(0,c.health/c.maxHealth*100)),this.text(`boss-health`,c.health<c.maxHealth/2?`CORE UNSTABLE`:`BREAK THE CORE`))}text(e,t){if(this.cache.get(e)===t)return;this.cache.set(e,t);let n=document.getElementById(e);n&&(n.textContent=t)}width(e,t){let n=document.getElementById(e);n&&(n.style.width=`${Math.max(0,Math.min(100,t))}%`)}toast(e,t){clearTimeout(this.toastTimer);let n=document.getElementById(`toast`);if(!n)return;n.replaceChildren();let r=document.createElement(`strong`),i=document.createElement(`span`);r.textContent=e,i.textContent=t,n.append(r,i),n.classList.add(`visible`),this.toastTimer=window.setTimeout(()=>n.classList.remove(`visible`),4e3)}},O=document.querySelector(`#game`),k=document.querySelector(`#app`),A=x().settings,j=new e(A),M=new f(O),N=new p(M,j,A),P=new m(O,N),F=new D(k,N),I=1/60,L=performance.now(),R=0,z=0,B=0;function V(e){requestAnimationFrame(V);let t=Math.min(.1,Math.max(0,(e-L)/1e3));if(L=e,document.hidden){R=0;return}for(R+=t,z+=t,B+=t;R>=I;)N.tick(I),R-=I;z>=.016166666666666666&&(P.render(z),z%=I),B>=.08&&(F.update(),B=0)}P.ready.then(()=>P.render(0)),requestAnimationFrame(V);function H(){N.phase===`playing`&&N.pause(),M.clear(),R=0,L=performance.now()}window.addEventListener(`blur`,H),document.addEventListener(`visibilitychange`,()=>{document.hidden&&H()});