!function(e){function t(t){for(var o,a,c=t[0],s=t[1],u=t[2],f=0,p=[];f<c.length;f++)a=c[f],r[a]&&p.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={1:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([1406,0]),n()}({1406:function(e,t,n){n(1405),e.exports=n(521)},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(93);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.scene,e.x,e.y,e.key));return e.scene.physics.world.enable(n),e.scene.add.existing(n),n.boaty=n.scene.boaty,n.scene.physics.add.collider(n,n.boaty,n.boatyHit,n.boatyHit,n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.GameObjects.Sprite),o(t,[{key:"boatyHit",value:function(e,t){return this.boaty.die(),!0}},{key:"update",value:function(){this.x+this.displayWidth/2<=0&&(this.scene.incrementScore(),this.scene.enemies.remove(this),this.destroy())}}]),t}();t.default=i},521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateSize=t.game=void 0,n(93);var o=c(n(564)),r=c(n(558)),i=c(n(557)),a=c(n(556));function c(e){return e&&e.__esModule?e:{default:e}}var s={type:Phaser.AUTO,parent:"content",width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,physics:{default:"arcade",arcade:{gravity:{y:1e3},debug:!1}},scene:[r.default,i.default,o.default,a.default]},u=t.game=new Phaser.Game(s),l=t.calculateSize=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return{width:e=e>1500?1500:e,height:t}};window.onresize=function(){var e=l(),t=e.width,n=e.height;console.log(t+" "+n),u.resize(t,n)}},556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(93);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:"GameOverScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Scene),o(t,[{key:"init",value:function(e){this.score=e.score}},{key:"create",value:function(){var e=this,t=document.getElementsByTagName("canvas")[0],n=t.width,o=t.height;this.scene.bringToTop(),this.add.image(n/2,o/2,"water").setScale(10,2),this.platforms=this.physics.add.staticGroup(),this.platforms.create(0,o,"ground").setScale(10,.5).refreshBody(),this.scoreText=this.add.text(0,0,this.score,{fontSize:n/5+"px",fill:"#fff"}),this.restartButton=this.add.image(0,0,"play-again").setInteractive(),this.input.on("gameobjectdown",function(t,n){n===e.restartButton&&e.scene.start("GameScene")}),r.Display.Align.In.Center(this.scoreText,this.add.zone(n/2,o/4,n,o)),r.Display.Align.In.BottomCenter(this.restartButton,this.add.zone(n/2,o/4,n,o))}}]),t}();t.default=i},557:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(93),i=n(521);var a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:"TitleScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Scene),o(t,[{key:"create",value:function(){var e=this,t=(0,i.calculateSize)(),n=t.width,o=t.height;this.scene.bringToTop(),this.add.image(n/2,o/2,"water").setScale(10,2),this.platforms=this.physics.add.staticGroup(),this.platforms.create(0,o,"ground").setScale(10,.5).refreshBody(),this.title=this.add.text(n/10,o/10,"Boaty Boat",{fontSize:n/12+"px",fill:"#fff"}),this.pressStart=this.add.text(0,0,"TAP TO START",{fontSize:"16px",fill:"#fff"}),r.Display.Align.In.TopCenter(this.title,this.add.zone(n/2,o-o/4,n,o)),r.Display.Align.In.BottomCenter(this.pressStart,this.add.zone(n/2,o/4,n,o)),this.startKey=this.input.keyboard.addKey(r.SPACE),this.start=!1,this.input.on("pointerdown",function(t){e.start=!0})}},{key:"update",value:function(){(this.startKey.isDown||this.start)&&this.scene.start("GameScene")}}]),t}();t.default=a},558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(93);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:"BootScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Scene),o(t,[{key:"preload",value:function(){this.load.image("water","images/water.png"),this.load.image("ground","images/sandy-bottom.png"),this.load.image("torpedo","images/torpedo.png"),this.load.image("mine","images/sea_mine.png"),this.load.image("boaty","images/boaty.png"),this.load.image("whale","images/whale.png"),this.load.image("crab","images/crab.png"),this.load.image("play-again","images/play_again.png")}},{key:"create",value:function(){this.scene.start("TitleScene")}}]),t}();t.default=i},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(147));var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.body.velocity.x=-1e3,n.acceleration=0,n.body.maxVelocity.y=0,n.body.setSize(200,20),n.setScale(.3,.3),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();t.default=r},560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(147));var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.body.velocity.x=-1e3,n.acceleration=0,n.body.maxVelocity.y=0,n.body.setSize(200,20),n.setScale(.2,.2),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();t.default=r},561:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(147));var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.body.velocity.x=-500,n.acceleration=0,n.body.maxVelocity.y=0,n.body.setSize(200,20),n.setScale(.5,.5),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();t.default=r},562:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(147));var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.body.velocity.x=-300,n.acceleration=0,n.body.maxVelocity.y=0,n.body.setSize(200,20),n.setScale(.15,.15),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();t.default=r},563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(93));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.scene,e.x,e.y,e.key));return e.scene.physics.world.enable(n),e.scene.add.existing(n),n.acceleration=800,n.body.maxVelocity.x=300,n.alive=!0,n.body.setCollideWorldBounds(!0),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.GameObjects.Sprite),o(t,[{key:"update",value:function(e){e?this.jump():this.angle<15&&(this.angle+=.75)}},{key:"jump",value:function(){this.body.setVelocityY(-400),this.angle>-20&&(this.angle=-15)}},{key:"die",value:function(){this.alive=!1}}]),t}();t.default=i},564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(93),i=l(n(563)),a=l(n(562)),c=l(n(561)),s=l(n(560)),u=l(n(559));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:"GameScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Scene),o(t,[{key:"create",value:function(){var e=this;this.width=this.sys.game.config.width,this.height=this.sys.game.config.height,this.add.image(this.width/2,this.height/2,"water").setScale(10,2),this.platforms=this.physics.add.staticGroup(),this.platforms.create(0,this.height,"ground").setScale(10,.5).refreshBody(),this.score=0,this.scoreText=this.add.text(24,24,"0",{fontSize:"32px",fill:"#fff"}),this.boaty=new i.default({scene:this,key:"boaty",x:this.width/8,y:this.height/7}),this.enemies=this.add.group(),this.time.addEvent({delay:800,callback:this.addMine,callbackScope:this,loop:!0}),this.time.addEvent({delay:2e3,callback:this.addWhale,callbackScope:this,loop:!0}),this.time.addEvent({delay:4e3,callback:this.addCrab,callbackScope:this,loop:!0}),this.time.addEvent({delay:9e3,callback:this.addTorpedo,callbackScope:this,loop:!0}),this.isJump=!1,this.input.on("pointerdown",function(t){e.isJump=!0}),this.input.on("pointerup",function(t){e.isJump=!1}),this.spaceJump=this.input.keyboard.addKey(r.SPACE)}},{key:"update",value:function(){this.boaty.update(this.isJump||this.spaceJump.isDown),this.enemies.children.entries.forEach(function(e){e.update()}),this.boaty.alive||this.scene.start("GameOverScene",{score:this.score})}},{key:"enemySpawnYValue",value:function(){var e=.9*this.height,t=.02*this.height;return Math.floor(Math.random()*e)+t}},{key:"addMine",value:function(){this.enemies.add(new a.default({scene:this,key:"mine",x:this.width+this.width/10,y:this.enemySpawnYValue()}))}},{key:"addWhale",value:function(){this.enemies.add(new c.default({scene:this,key:"whale",x:this.width+this.width/5,y:this.enemySpawnYValue()}))}},{key:"addCrab",value:function(){this.enemies.add(new s.default({scene:this,key:"crab",x:this.width+this.width/10,y:.95*this.height}))}},{key:"addTorpedo",value:function(){this.enemies.add(new u.default({scene:this,key:"torpedo",x:this.width+this.width/10,y:this.enemySpawnYValue()}))}},{key:"incrementScore",value:function(){this.score++,this.scoreText.setText(this.score)}}]),t}();t.default=f}});