(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e){e.exports={a:[{constant:!0,inputs:[{name:"data",type:"uint256[]"}],name:"sum",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"hasReferrer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_secondsUntilInactive",type:"uint256"}],name:"setSecondsUntilInactive",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"accounts",outputs:[{name:"referrer",type:"address"},{name:"reward",type:"uint256"},{name:"referredCount",type:"uint256"},{name:"lastActiveTimestamp",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"amount",type:"uint256"}],name:"getRefereeBonusRate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_onlyRewardActiveReferrers",type:"bool"}],name:"setOnlyRewardAActiveReferrers",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_decimals",type:"uint256"},{name:"_referralBonus",type:"uint256"},{name:"_secondsUntilInactive",type:"uint256"},{name:"_onlyRewardActiveReferrers",type:"bool"},{name:"_levelRate",type:"uint256[]"},{name:"_refereeBonusRateMap",type:"uint256[]"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"player",type:"address"},{indexed:!1,name:"winnings",type:"uint256"}],name:"BetSettled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"referee",type:"address"},{indexed:!1,name:"referrer",type:"address"}],name:"RegisteredReferer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"referee",type:"address"},{indexed:!1,name:"referrer",type:"address"},{indexed:!1,name:"reason",type:"string"}],name:"RegisteredRefererFailed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"from",type:"address"},{indexed:!1,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"level",type:"uint256"}],name:"PaidReferral",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"user",type:"address"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"UpdatedUserLastActiveTime",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!1,inputs:[{name:"_referrer",type:"address"}],name:"bet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"bet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]}},115:function(e,t,a){e.exports=a.p+"static/media/ig_coin_card.968dcb99.png"},118:function(e,t,a){e.exports=a(245)},123:function(e,t,a){},124:function(e,t,a){},126:function(e,t){},130:function(e,t){},159:function(e,t){},161:function(e,t){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(113),c=a.n(i),s=(a(123),a(7)),o=a(8),l=a(10),u=a(9),d=a(11),p=(a(124),a(114)),m=a(50),f=a(117),b=a(49),v=r.a.createContext({enable:function(){},address:"",signer:void 0,enabling:!1,enabled:!1}),y=v.Consumer,h=v.Provider,E=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).enable=function(){a.state.signer&&(a.setState({enabling:!0}),a.state.signer.provider._web3Provider.enable().then(function(e){var t=Object(f.a)(e,1)[0];a.setState({enabling:!1,enabled:!0,address:t})}).catch(function(){a.setState({enabling:!1,enabled:!1})}))},window.thundercore||alert("Please install ThunderLink for better experience but I am gonna let you use MetaMask for now...");var n=window.thundercore||window.ethereum,r=!!n;return a.state={address:"",signer:r&&new b.Web3Provider(n).getSigner(),enabled:!1,enabling:r&&!!e.enableOnLoad},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.enableOnLoad&&this.enable()}},{key:"render",value:function(){return r.a.createElement(h,{value:Object(m.a)({},this.state,{enable:this.enable})},this.props.children)}}]),t}(r.a.PureComponent),g=y,w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderAppState=function(e){return e.signer?e.enabling?a.props.renderEnabling(e):e.enabled?a.props.renderEnabled(e):a.props.renderUnabled(e):a.props.renderWeb3Incapable(e)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(E,{enableOnLoad:!0},r.a.createElement(g,null,this.renderAppState))}}]),t}(r.a.PureComponent),O=a(69),j=r.a.createContext({contract:new O.Contract("",[],new b.JsonRpcProvider("")),loading:!0,error:!0,loadContract:function(){}}),k=j.Consumer,N=j.Provider,C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contract:new O.Contract(a.props.contractAddress,a.props.abi,a.props.signer),loading:!!a.props.checkOnLoad,error:!1},a.loadContract=function(){a.setState({loading:!0}),a.state.contract.deployed().then(function(){a.setState({loading:!1})}).catch(function(){a.setState({loading:!1,error:!0})})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.checkOnLoad&&this.loadContract()}},{key:"render",value:function(){return r.a.createElement(N,{value:Object(m.a)({},this.state,{loadContract:this.loadContract})},this.props.children)}}]),t}(r.a.PureComponent),S=k,A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderContractState=function(e){return e.loading?a.props.renderLoading(e):e.error?a.props.renderUnavailable(e):a.props.renderEnabled(e)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.signer,a=e.contractAddress,n=e.abi;return r.a.createElement(C,{checkOnLoad:!0,abi:n,contractAddress:a,signer:t},r.a.createElement(S,null,this.renderContractState))}}]),t}(r.a.PureComponent),R=a(36),x=(a(237),a(238),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"coin-container "+(this.props.showFace?"flipped":"")},r.a.createElement("div",{className:"disk-body"}),r.a.createElement("div",{className:"disk-body back"}),r.a.createElement("div",{className:"top-face top-back-face disk"},r.a.createElement("div",{className:"half-face half-face-lower"}),r.a.createElement("div",{className:"half-face half-face-upper"})),r.a.createElement("div",{className:"disk face bottom-back-face"},r.a.createElement("div",{className:"half-face half-face-lower"}),r.a.createElement("div",{className:"half-face half-face-upper"})),r.a.createElement("div",{className:"disk bottom-front-face"}),r.a.createElement("div",{className:"face top-face top-face-front disk"}))}}]),t}(r.a.PureComponent)),P=(a(239),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.balance,a=e.betAmount;return r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"title"},"Balance:"),r.a.createElement("div",{className:"value"},parseFloat(Object(R.formatEther)(t)).toFixed(2)," TT")),r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"title"},"Bet Size:"),r.a.createElement("div",{className:"value"},a," TT")))}}]),t}(r.a.PureComponent)),L=a(115),M=a.n(L),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={animating:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.playGame,n=t.disabled,i=t.win,c=t.double,s=t.balance,o=t.betAmount,l=t.reset,u=this.state.animating;return r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"display-container"},r.a.createElement(P,{balance:s,betAmount:o.toString()})),r.a.createElement("div",{className:"coin-display-container container"},r.a.createElement("img",{src:M.a,alt:""}),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:u?"coin flip":"coin",onAnimationEnd:function(){e.setState({animating:!1})}},r.a.createElement(x,{showFace:!i})))),r.a.createElement("div",{className:"container"},r.a.createElement("button",{onClick:a,disabled:n,className:"bet-button button"})),r.a.createElement("div",{className:"container"},r.a.createElement("button",{onClick:c,disabled:n||i,className:"double-button button"}),r.a.createElement("button",{onClick:l,disabled:n,className:"reset-button button"})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.flipping&&!t.animating?{animating:!0}:null}}]),t}(r.a.PureComponent);a(240);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I=r.a.createElement("g",{id:"ic_arrow-down-circle",transform:"translate(1,1)",fill:"none",stroke:"#FFFFFF",strokeWidth:2},r.a.createElement("circle",{id:"Oval",cx:10,cy:10,r:10}),r.a.createElement("polyline",{id:"Path",points:"6 10 10 14 14 10"}),r.a.createElement("path",{d:"M10,6 L10,14",id:"Path"})),_=function(e){var t=e.svgRef,a=B(e,["svgRef"]);return r.a.createElement("svg",F({width:"22px",height:"22px",viewBox:"0 0 22 22",ref:t},a),I)},U=r.a.forwardRef(function(e,t){return r.a.createElement(_,F({svgRef:t},e))}),W=(a.p,a(116)),D=(a(244),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={clicked:!1},a.referralLink=function(){return window.location.origin+"?referrer=".concat(a.props.address)},a.copy=function(){var e=document.createElement("input");document.body.append(e),e.value=a.referralLink(),e.select(),document.execCommand("copy"),document.body.removeChild(e),a.setState({clicked:!0})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderStat",value:function(e,t){return r.a.createElement("div",{className:"referral-stat"},r.a.createElement("div",null,e),r.a.createElement("div",null,t))}},{key:"renderColumn",value:function(e,t,a){return r.a.createElement("div",{className:"table-column ".concat(a)},r.a.createElement("div",{className:"cell"},e),r.a.createElement("div",{className:"cell"},t))}},{key:"renderCountdown",value:function(e){var t=e.hours,a=e.minutes,n=e.seconds;function i(e){return("00"+e).slice(-2)}return e.completed?r.a.createElement("span",null,"00:00:00"):r.a.createElement("span",null,i(t),":",i(a),":",i(n))}},{key:"render",value:function(){var e=this.state.clicked,t=this.props,a=t.refereeCount,n=t.reward,i=t.activeTimestamp;return r.a.createElement("div",{className:"ReferralRule-container"},r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"share-container"},"Share Your Referral Link to Earn More Rewards!"),r.a.createElement("div",{className:"referral-title"},"Your Referral Link"),r.a.createElement("div",{className:"referral-link-container"},r.a.createElement("div",{className:"referral-link"},this.referralLink()),r.a.createElement("button",{onClick:this.copy,className:"copy-button ".concat(e?"clicked":"")},"copy")),r.a.createElement("div",{className:"referral-stats-container"},this.renderStat("Total Referral Reward",n),this.renderStat("Number of Referees",a),this.renderStat("Your referral active time",r.a.createElement(W.a,{date:i,renderer:this.renderCountdown}))),r.a.createElement("div",{className:"referral-rules-container"},r.a.createElement("div",{className:"referral-title"},"Referral Rule"),r.a.createElement("div",{className:"referral-rule-block"},"For every transaction, 3% of the transaction value is reserved for the referrers. 60 % of the reserved amount is added to the first level referrer\u2019s bonus pool, 30% is added to the 2nd level referrer\u2019s bonus pool, and 10% is added to the 3rd level referrer\u2019s bonus pool."),r.a.createElement("div",{className:"table"},this.renderColumn("Bonus Rate","%","dark"),this.renderColumn("Level 1","60 %","light"),this.renderColumn("Level 2","30 %","med"),this.renderColumn("Level 3","10 %","dark")),r.a.createElement("div",{className:"referral-rule-block"},"As a referrer, you will be awarded 50% of your bonus pool if you have 4 or less referees, 75% of the pool if you have 5 -24 referees, and 100% if you have 25 or more referees."),r.a.createElement("div",{className:"table"},this.renderColumn("Referee Amount","%","dark"),this.renderColumn("1-4","50 %","dark"),this.renderColumn("5-24","75 %","med"),this.renderColumn("25+","100 %","light")))))}}]),t}(r.a.PureComponent)),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.toggle=function(){return a.setState({open:!a.state.open})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"calcualteEther",value:function(e){var t=e.padStart(19,"0"),a=t.length-18,n=a+4,r=t.slice(n,n+1)>="5"?t.slice(a,n-1)+(parseInt(t.slice(n-1,n))+1).toString():t.slice(a,n);return r=r.replace(/0+$/,""),t.slice(0,a)+(r?"."+r:"")}},{key:"render",value:function(){var e=this.state.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",null,"Double or Nothing"),r.a.createElement("div",{className:"header-reward"},r.a.createElement("div",null,"Reward"),r.a.createElement("div",{className:"reward-container"},this.calcualteEther(this.props.rewards)),r.a.createElement(U,{onClick:this.toggle,className:"arrow-circle ".concat(e?"open":"")}))),e&&r.a.createElement(D,{address:this.props.address,reward:this.calcualteEther(this.props.rewards),refereeCount:this.props.refereeCount,activeTimestamp:this.props.activeTimestamp}))}}]),t}(r.a.PureComponent),J=.5,Y=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).watchBalance=function(){setInterval(function(){a.props.contract.provider.getBalance(a.props.address).then(function(e){a.setState({balance:e.toString()})})},500)},a.watchReferrals=function(){setInterval(function(){a.props.contract.accounts(a.props.address).then(function(e){a.setState({accountInfo:{reward:e.reward.toString(),referredCount:e.referredCount.toString(),activeTimestamp:1e3*e.lastActiveTimestamp.toString()+864e5}})})},500)},a.play=function(e){var t;a.setState({disabled:!0});var n=[{value:Object(R.parseEther)(e.toString()).toHexString(),gasLimit:Object(R.bigNumberify)("200000").toHexString()}],r=!!a.state.referrer;r&&n.unshift(a.state.referrer),(t=a.props.contract)[r?"bet(address)":"bet()"].apply(t,n).then(function(e){return a.setState({flipping:!0}),e.wait()}).then(function(e){var t=e.events.find(function(e){return"BetSettled"===e.event});a.setState({flipping:!1,win:"0"!==t.args.winnings.toString()})}).finally(function(){a.setState({disabled:!1,flipping:!1})})},a.playGame=function(){a.play(a.state.betAmount)},a.double=function(){var e=2*a.state.betAmount;a.setState({betAmount:e}),a.play(e)},a.reset=function(){a.setState({betAmount:J})},a.watchBalance(),a.watchReferrals();var n=window.location.search.match(/referrer=(0x[a-fA-F0-9]{40})/),r=n?n[1]:"";return a.state={referrer:r.toLowerCase(),betAmount:J,balance:"",win:!0,disabled:!1,flipping:!1,accountInfo:{reward:"0",referredCount:"0",activeTimestamp:Date.now()}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.disabled,a=e.flipping,n=e.win,i=e.balance,c=e.betAmount,s=e.accountInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{address:this.props.address,rewards:s.reward,refereeCount:s.referredCount,activeTimestamp:s.activeTimestamp}),r.a.createElement(T,{double:this.double,playGame:this.playGame,reset:this.reset,betAmount:c,balance:i,win:n,disabled:t,flipping:a}))}}]),t}(r.a.PureComponent),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).renderEnabled=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(A,{renderEnabled:function(t){return a.renderGame(t,e.address)},renderLoading:a.renderLoading,renderUnavailable:a.renderUnavailable,signer:e.signer,contractAddress:"0x96d8Dc9DB6E783FEB0A82689471498503334aA04",abi:p.a}))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderIncapable",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-message"},"Please connect a Web3 provider"))}},{key:"renderPleaseEnable",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-message"},"Please enable your Web3 Provider"))}},{key:"renderLoading",value:function(){return r.a.createElement("div",{className:"app-message"},"Loading...")}},{key:"renderUnavailable",value:function(){return r.a.createElement("div",{className:"app-message"},"Error loading contract")}},{key:"renderGame",value:function(e,t){return r.a.createElement(Y,{address:t,contract:e.contract})}},{key:"render",value:function(){return r.a.createElement(w,{renderWeb3Incapable:this.renderIncapable,renderEnabled:this.renderEnabled,renderEnabling:this.renderEnabled,renderUnabled:this.renderPleaseEnable})}}]),t}(r.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.263571ed.chunk.js.map