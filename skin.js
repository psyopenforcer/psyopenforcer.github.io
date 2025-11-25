// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: interface.ggsk
// Generated 2025-11-25T14:51:46

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs=basePath + 'images/button_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button   1";
		el.ggDy=8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 96px;';
		hs+='position : absolute;';
		hs+='right : -3px;';
		hs+='top : calc(50% - ((96px + 0px) / 2) + 8px);';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_1);
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs=basePath + 'images/button_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button   2";
		el.ggDy=13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((104px + 0px) / 2) + 13px);';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_2);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs='data:image/png;base64,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'+
			'BQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIA'+
			'AAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAA'+
			'BQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIAAAUpAABQkAIA'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button   3";
		el.ggDx=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 3px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 0px) / 2) - 11px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			player.setVolume("_main",0);
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_3);
		el=me._button_4=document.createElement('div');
		els=me._button_4__img=document.createElement('img');
		els.className='ggskin ggskin_button_4';
		hs=basePath + 'images/button_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button   4";
		el.ggDx=57;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((67px + 0px) / 2) + 57px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_4.onclick=function (e) {
			player.setVolume("_main",1);
		}
		me._button_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_4);
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};