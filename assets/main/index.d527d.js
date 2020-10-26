window.__require = function e(t, i, s) {
function r(a, n) {
if (!i[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!n && l) return l(c, !0);
if (o) return o(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var p = i[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return r(t[a][1][e] || e);
}, p, p.exports, e, t, i, s);
}
return i[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < s.length; a++) r(s[a]);
return r;
}({
CC: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "00fa9yqF9lNM7oBcwMsQ59b", "CC");
var s;
window.G = ((s = {
red: !0,
xiangmu: 1,
dangwei: 0,
xianshi: 1,
tip: 1,
hongbi: null,
heibi: null,
hongbiyes: 0,
heibiyes: 0,
btr: 0,
btb: 0,
rtr: 0,
rtb: 0,
xls: 0,
rtg: 0,
btg: 0,
mode: 1,
source: 1,
ch1: !0,
ch2: !1
}).xianshi = "万用表关闭时选择关闭档或者电压最高档", s);
cc._RF.pop();
}, {} ],
"Label main": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "375d9gN9YZAZbZAwd7sVlSv", "Label main");
cc.Class({
extends: cc.Component,
properties: {
playerred: {
default: null,
type: cc.Node
},
playerblack: {
default: null,
type: cc.Node
},
playerblack1: {
default: null,
type: cc.Node
},
player2: {
default: null,
type: cc.Node
},
player3: {
default: null,
type: cc.Node
},
player4: {
default: null,
type: cc.Node
},
player5: {
default: null,
type: cc.AudioClip
},
player6: {
default: null,
type: cc.Node
},
player7: {
default: null,
type: cc.Node
},
tipp: {
default: null,
type: cc.Node
}
},
time1: function() {
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "万用表关闭时选择关闭档或者电压最高档";
G.btr = 0;
G.btb = 0;
G.rtr = 0;
G.rtb = 0;
if (0 == G.red) {
console.log("s5sd");
if (G.dangwei > 9 & G.dangwei < 15) {
console.log("sadd545sd");
var e = cc.v2(629, 302), t = cc.v2(G.hongbi), i = Math.abs(t.x - e.x), s = Math.abs(t.y - e.y);
console.log("saddasd");
console.log(t);
i <= 50 & s <= 50 && (G.rtr = 1);
var r = cc.v2(629, 320), o = cc.v2(G.heibi), a = Math.abs(o.x - r.x), n = Math.abs(o.y - r.y);
console.log("saddasd");
a <= 50 & n <= 50 && (G.btr = 1);
var c = cc.v2(858, 379), l = cc.v2(G.hongbi), p = Math.abs(l.x - c.x), h = Math.abs(l.y - c.y);
console.log("saddasd");
p <= 50 & h <= 50 && (G.rtb = 1);
var m = cc.v2(858, 379), y = cc.v2(G.heibi), d = Math.abs(y.x - m.x), g = Math.abs(y.y - m.y);
console.log("saddasd");
d <= 50 & g <= 50 && (G.btb = 1);
console.log(G.rtr);
console.log(G.btb);
if (1 == G.rtr & 1 == G.btb) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "50.00Ω";
} else if (1 == G.btr & 1 == G.rtb) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "50.00Ω";
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请接触黑红表笔";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "数字式万用表的红表笔接正极";
}
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请调至电阻档";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "当前量程档位错误";
}
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请将红表笔调至电阻位";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "当前红表笔档位错误";
}
},
time2: function() {
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "测量电流时要和负载串联\n万用表只能测量微小电流";
G.btr = 0;
G.btb = 0;
G.rtr = 0;
G.rtb = 0;
console.log("99d");
if (G.dangwei > 2 & G.dangwei < 7) {
var e = cc.v2(733, 301), t = cc.v2(G.hongbi), i = Math.abs(t.x - e.x), s = Math.abs(t.y - e.y);
console.log("saddasd");
console.log(t);
i <= 10 & s <= 10 && (G.rtb = 1);
var r = cc.v2(733, 301), o = cc.v2(G.heibi), a = Math.abs(o.x - r.x), n = Math.abs(o.y - r.y);
console.log("saddasd");
a <= 10 & n <= 10 && (G.btb = 1);
r = cc.v2(762, 303), o = cc.v2(G.heibi), a = Math.abs(o.x - r.x), n = Math.abs(o.y - r.y);
console.log("saddasd");
a <= 13 & n <= 13 && (G.btr = 1);
var c = cc.v2(762, 303), l = cc.v2(G.hongbi), p = Math.abs(l.x - c.x), h = Math.abs(l.y - c.y);
console.log("saddasd");
p <= 13 & h <= 13 && (G.rtr = 1);
if (0 == G.red) {
if (1 == G.rtr & 1 == G.btb) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "25.30mA";
} else if (1 == G.rtb & 1 == G.btr) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "-25.30mA";
}
} else if (1 == G.rtr & 1 == G.btb) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "0.025A";
} else if (1 == G.rtb & 1 == G.btr) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "-0.025A";
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请接触黑红表笔";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "数字式万用表的红表笔接正极";
}
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请将调至直流电流档";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "当前量程档位错误";
}
},
time3: function() {
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "测量电压时红表笔选择电流档会损坏万用表";
G.btr = 0;
G.btb = 0;
G.rtr = 0;
G.rtb = 0;
console.log("85475");
if (G.dangwei > 16 & G.dangwei < 20) {
console.log("sadd545sd");
var e = cc.v2(826, 303), t = cc.v2(G.hongbi), i = Math.abs(t.x - e.x), s = Math.abs(t.y - e.y);
console.log("saddasd");
console.log(t);
i <= 30 & s <= 30 && (G.rtb = 1);
var r = cc.v2(826, 303), o = cc.v2(G.heibi), a = Math.abs(o.x - r.x), n = Math.abs(o.y - r.y);
console.log("saddasd");
a <= 30 & n <= 30 && (G.btb = 1);
r = cc.v2(766, 261), o = cc.v2(G.heibi), a = Math.abs(o.x - r.x), n = Math.abs(o.y - r.y);
console.log("saddasd");
a <= 30 & n <= 30 && (G.btr = 1);
var c = cc.v2(766, 261), l = cc.v2(G.hongbi), p = Math.abs(l.x - c.x), h = Math.abs(l.y - c.y);
console.log("saddasd");
p <= 30 & h <= 30 && (G.rtr = 1);
console.log("55");
if (0 == G.red) {
console.log("sa55555");
if (1 == G.rtr & 1 == G.btb) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "6.15V";
} else if (1 == G.btr & 1 == G.rtb) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "-6.15V";
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请接触黑红表笔";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "将黑红表笔放置到加亮的标记处";
}
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请将红表笔调至电压位", this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "测量电压时红表笔选择电流档会损坏万用表";
}
} else if (G.dangwei > 12) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "超量程", this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "低电压档测高电压可能会损坏万用表";
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请调至直流电压位";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "测量电压时使用错误档位会损坏万用表";
}
},
time4: function() {
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "警告：使用万用表测量较高电压时\n必须使用交流档";
G.btr = 0;
G.btb = 0;
G.rtr = 0;
G.rtb = 0;
G.rtg = 0;
G.btg = 0;
if (G.dangwei > 0 & G.dangwei < 2) {
console.log("sadd545sd");
var e = cc.v2(740, 345), t = cc.v2(G.hongbi), i = Math.abs(t.x - e.x), s = Math.abs(t.y - e.y);
console.log("saddasd");
console.log(t);
i <= 10 & s <= 10 && (G.rtg = 1);
var r = cc.v2(740, 345), o = cc.v2(G.heibi), a = Math.abs(o.x - r.x), n = Math.abs(o.y - r.y);
console.log("saddasd");
a <= 10 & n <= 10 && (G.btg = 1);
r = cc.v2(724, 319), o = cc.v2(G.heibi), a = Math.abs(o.x - r.x), n = Math.abs(o.y - r.y);
console.log("saddasd");
a <= 10 & n <= 10 && (G.btb = 1);
var c = cc.v2(724, 319), l = cc.v2(G.hongbi), p = Math.abs(l.x - c.x), h = Math.abs(l.y - c.y);
console.log("saddasd");
p <= 10 & h <= 10 && (G.rtb = 1);
r = cc.v2(759, 319), o = cc.v2(G.heibi), a = Math.abs(o.x - r.x), n = Math.abs(o.y - r.y);
console.log("saddasd");
a <= 10 & n <= 10 && (G.btr = 1);
c = cc.v2(759, 319), l = cc.v2(G.hongbi), p = Math.abs(l.x - c.x), h = Math.abs(l.y - c.y);
console.log("saddasd");
p <= 10 & h <= 10 && (G.rtr = 1);
if (0 == G.red) if (1 == G.btb & 1 == G.rtr) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "~224.20V";
} else if (1 == G.btr & 1 == G.rtb) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "~224.20V";
} else if (1 == G.btg & 1 == G.rtr) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "~224.20V";
} else if (1 == G.rtg & 1 == G.btr) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "~224.20V";
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "0V";
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请将红表笔接至交流电压位";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "测量电压时红表笔选择电流档会损坏万用表";
}
} else if (2 == G.dangwei) {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "当前量程太小";
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "必须使用交流档位";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "测量高电压时使用错误档位会造成危险!\n当前万用表已自动断路";
}
},
time5: function() {
if (9 == G.dangwei) {
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "将红黑表笔短接以测量通路";
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "准备自检";
console.log("sadd545sd");
var e = cc.v2(G.hongbi), t = cc.v2(G.heibi), i = Math.abs(t.x - e.x), s = Math.abs(t.y - e.y);
console.log(G.hongbi);
console.log(G.heibi);
if (i <= 10 & s <= 10) {
this.current = cc.audioEngine.play(this.player5, !1, 1);
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "通过";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "仅验证为通路";
}
} else {
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = "请调至自检档";
this.myLabel = this.tipp.getComponent(cc.Label);
this.myLabel.string = "错误档位红黑表笔短接可能会算坏万用表";
}
},
onLoad: function() {
G.dangwei;
console.log("sad5sd");
var e = this.playerred.convertToWorldSpaceAR(cc.v2(0, 0)), t = cc.v2(45.4, -45.5);
e.x += t.x;
e.y += t.y;
G.heibi = cc.v2(e);
var i = this.playerblack.convertToWorldSpaceAR(cc.v2(0, 0));
i.y = i.y + 65.27;
G.hongbi = i;
this.playerred.on(cc.Node.EventType.TOUCH_START, function(e) {
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
this.playerblack.on(cc.Node.EventType.TOUCH_START, function(e) {
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
console.log("scccd");
this.playerred.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
console.log("pccp");
var t = this.playerred.convertToWorldSpaceAR(cc.v2(0, 0));
t.y = t.y + 65.27;
G.hongbi = t;
var i = e.getDelta();
this.playerred.x += i.x;
this.playerred.y += i.y;
var s = this.playerblack.convertToWorldSpaceAR(cc.v2(0, 0)), r = cc.v2(45.4, -45.5);
s.x += r.x;
s.y += r.y;
G.heibi = cc.v2(s);
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
console.log("scccd");
this.playerblack.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
console.log("pc2cp");
var t = this.playerblack.convertToWorldSpaceAR(cc.v2(0, 0)), i = cc.v2(45.4, -45.5);
t.x += i.x;
t.y += i.y;
G.heibi = cc.v2(t);
var s = e.getDelta();
this.playerblack.x += s.x;
this.playerblack.y += s.y;
var r = this.playerred.convertToWorldSpaceAR(cc.v2(0, 0));
r.y = r.y + 65.27;
G.hongbi = r;
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
this.player2.on(cc.Node.EventType.TOUCH_START, function(e) {
console.log("p5ccp");
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
this.player2.on(cc.Node.EventType.TOUCH_END, function(e) {
console.log("p5ccp");
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
this.player3.on(cc.Node.EventType.TOUCH_START, function(e) {
console.log("p3ccp");
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
this.player3.on(cc.Node.EventType.TOUCH_END, function(e) {
console.log("p3ccp");
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
this.player4.on(cc.Node.EventType.TOUCH_END, function(e) {
console.log("p2ccp");
this.player7.rotation -= 18;
G.dangwei -= 1;
-1 == G.dangwei && (G.dangwei = 19);
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
console.log("scccd");
console.log("scccd");
this.player6.on(cc.Node.EventType.TOUCH_END, function(e) {
console.log("pcc5p");
this.player7.rotation += 18;
G.dangwei += 1;
20 == G.dangwei && (G.dangwei = 0);
1 == G.xiangmu ? this.time1() : 2 == G.xiangmu ? this.time2() : 3 == G.xiangmu ? this.time3() : 4 == G.xiangmu ? this.time4() : 5 == G.xiangmu && this.time5();
}, this);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"NewScript - 002": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "fe4deiXX7hKn7tXKCEaUMC0", "NewScript - 002");
var s = this && this.__extends || function() {
var e = function(t, i) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
})(t, i);
};
return function(t, i) {
e(t, i);
function s() {
this.constructor = t;
}
t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s());
};
}(), r = this && this.__decorate || function(e, t, i, s) {
var r, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var n = e.length - 1; n >= 0; n--) (r = e[n]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = cc._decorator, a = o.ccclass, n = (o.property, function(e) {
s(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.touches = [];
t.graphics = null;
return t;
}
t.prototype.start = function() {
var e = cc.find("Canvas");
e.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
e.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
e.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.graphics = this.getComponent(cc.Graphics);
this.graphics.moveTo(0, 0);
this.graphics.lineTo(.1, 0);
this.graphics.lineTo(-.11, 0);
this.graphics.stroke();
};
t.prototype.onTouchStart = function(e) {
this.touches.length = 0;
this.touches.push(e.touch.getLocation());
};
t.prototype.onTouchMove = function(e) {
var t = this.touches;
t.push(e.touch.getLocation());
this.graphics.clear();
var i = this.node.convertToWorldSpaceAR(cc.v2());
this.graphics.moveTo(t[0].x - i.x, t[0].y - i.y);
for (var s = 0, r = 1, o = t.length; r < o; r++) if (!(t[r].sub(t[s]).mag() < 2)) {
s = r;
this.graphics.lineTo(t[r].x - i.x, t[r].y - i.y);
}
this.graphics.stroke();
};
t.prototype.onTouchEnd = function(e) {};
return t = r([ a ], t);
}(cc.Component));
i.default = n;
cc._RF.pop();
}, {} ],
"NewScript - 003": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "335b8Zf3VZEo6BPG9iAFSw5", "NewScript - 003");
cc.Class({
extends: cc.Component,
properties: {
player: {
default: null,
type: cc.Node
}
},
ontm: function(e) {
var t = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), i = cc.v2(45.4, -45.5);
t.x += i.x;
t.y += i.y;
G.heibi = cc.v2(t);
var s = e.getDelta();
this.node.x += s.x;
this.node.y += s.y;
},
ontm2: function(e) {
var t = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), i = cc.v2(45.4, -45.5);
t.x += i.x;
t.y += i.y;
G.heibi = cc.v2(t);
},
onLoad: function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
console.log("1");
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.ontm, this);
this.player.on(cc.Node.EventType.TOUCH_MOVE, this.ontm2, this);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"NewScript - 004": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7d6c2wC1hBPsrSw5gT7LMCf", "NewScript - 004");
cc.Class({
extends: cc.Component,
properties: {
player: {
default: null,
type: cc.Node
}
},
ontm: function(e) {
var t = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
t.y = t.y + 65.27;
G.hongbi = t;
var i = e.getDelta();
this.node.x += i.x;
this.node.y += i.y;
},
ontm2: function(e) {
var t = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
t.y = t.y + 65.27;
G.hongbi = t;
},
onLoad: function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
console.log("1");
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.ontm, this);
this.player.on(cc.Node.EventType.TOUCH_MOVE, this.ontm2, this);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
NewScript: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "2c7b6SXE6tBlok4qo2BwaWS", "NewScript");
cc.Class({
extends: cc.Component,
properties: {
player: {
default: null,
type: cc.Sprite
},
player2: {
default: null,
type: cc.Sprite
},
player3: {
default: null,
type: cc.Sprite
},
player4: {
default: null,
type: cc.Sprite
},
player5: {
default: null,
type: cc.Sprite
},
player6: {
default: null,
type: cc.WebView
},
imgIdx: 1,
sprArray: {
default: [],
type: cc.Sprite
}
},
start: function() {
G.pt = 1;
},
tonew: function() {
1 == G.pt ? cc.director.loadScene("New Scene") : 2 == G.pt && cc.director.loadScene("os");
},
toch1: function() {
G.ch2 = !1;
G.ch1 = !0;
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
toch2: function() {
G.ch1 = !1;
G.ch2 = !0;
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
tomode1: function() {
G.mode = 1;
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
tomode2: function() {
G.mode = 2;
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
tovo1: function() {
G.VO = 1;
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
tovo2: function() {
G.VO = 2;
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 2 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
tovo3: function() {
G.VO = 3;
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
tosou1: function() {
G.source = 1;
if (1 == G.mode & 1 == G.source & 1 == G.ch1) {
console.log("dasdas");
if (1 == G.VO) {
console.log("dasdas");
this.player2.spriteFrame = this.sprArray[1].spriteFrame;
} else 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
} else 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
slider: function() {},
tosou2: function() {
G.source = 2;
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
newos: function() {
1 == G.mode & 1 == G.source & 1 == G.ch1 ? 1 == G.VO ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame) : 1 == G.mode & 1 == G.source & 1 == G.ch1 ? this.player2.spriteFrame = this.sprArray[1].spriteFrame : 2 == G.VO ? this.player2.spriteFrame = this.sprArray[2].spriteFrame : 3 == G.VO && (this.player2.spriteFrame = this.sprArray[3].spriteFrame);
},
tologo: function() {
cc.director.loadScene("helloworld");
G.red = !0;
G.xiangmu = 1;
G.dangwei = 0;
G.xianshi = 1;
G.tip = 1;
G.hongbi = null;
G.heibi = null;
G.hongbiyes = 0;
G.heibiyes = 0;
G.btr = 0;
G.btb = 0;
G.rtr = 0;
G.rtb = 0;
G.xls = 0;
G.rtg = 0;
G.btgV0;
G.mode = 1;
G.sourceV1;
G.ch1 = !0;
G.ch2 = !1;
G.pp = 0;
G.VO = 1;
G.pt = 1;
},
tohelp: function() {
cc.director.loadScene("help");
},
tomili: function() {
G.pt = 1;
},
toos: function() {
G.pt = 2;
},
toweb1: function() {
this.player6.Url = "https://www.bilibili.com/video/BV1Gx411z7x2?from=search&seid=14704342665083105122";
},
toweb2: function() {
this.player6.Url = "https://www.bilibili.com/video/BV1Q4411f7QR?from=search&seid=10660677663550777909";
},
toweb3: function() {
this.player6.Url = "https://www.bilibili.com/video/BV1uW411g76V?from=search&seid=10660677663550777909";
},
toro: function() {
this.player.angel -= 18;
G.dangwei -= 1;
-1 == G.dangwei && (G.dangwei = 19);
},
tored1: function() {
G.red = !0;
},
tored2: function() {
G.red = !1;
console.log("shi");
},
tox1: function() {
G.xiangmu = 1;
this.player.spriteFrame = this.sprArray[0].spriteFrame;
},
tox2: function() {
G.xiangmu = 2;
this.player.spriteFrame = this.sprArray[1].spriteFrame;
},
tox3: function() {
G.xiangmu = 3;
this.player.spriteFrame = this.sprArray[2].spriteFrame;
},
tox4: function() {
G.xiangmu = 4;
this.player.spriteFrame = this.sprArray[3].spriteFrame;
},
tox5: function() {
G.xiangmu = 5;
this.player.spriteFrame = this.sprArray[4].spriteFrame;
},
toro2: function() {
this.player.angel += 18;
G.dangwei += 1;
20 == G.dangwei && (G.dangwei = 0);
},
tohelp2: function() {
cc.director.loadScene("help-22");
}
});
cc._RF.pop();
}, {} ],
"huaxian - 001": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "20d046SKC1Gn43MsFVxQimR", "huaxian - 001");
cc.Class({
extends: cc.Component,
properties: {
mainCanvas: cc.Node,
player: {
default: null,
type: cc.Node
},
player2: {
default: null,
type: cc.Node
},
player3: {
default: null,
type: cc.Node
},
player4: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.mainContext = this.mainCanvas.getComponent(cc.Graphics);
console.log("开始画线7");
var e = this.player.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.player2.convertToWorldSpaceAR(cc.v2(0, 0));
console.log("开始画线8");
var i = e.x, s = 169;
if (1 == G.red) {
console.log("11");
s = 169;
console.log("11");
} else if (0 == G.red) {
s = 132;
console.log("11");
}
this.mainContext.moveTo(i, s);
console.log("开始画线");
var r = t.x - 26, o = t.y - 63;
this.mainContext.lineTo(r, o);
console.log("开始画线2");
new cc.Graphics().lineTo();
this.mainContext.stroke();
this.player3.on(cc.Node.EventType.TOUCH_END, function(e) {
this.fu1();
}, this);
this.player2.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
this.fu();
}, this);
this.player4.on(cc.Node.EventType.TOUCH_END, function(e) {
this.fu2();
}, this);
},
start: function() {},
fu: function() {
this.mainContext.clear();
console.log("开始画线7");
var e = this.player.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.player2.convertToWorldSpaceAR(cc.v2(0, 0));
console.log("开始画线8");
var i = e.x, s = 169;
if (1 == G.red) {
console.log("11");
s = 169;
console.log("11");
} else if (0 == G.red) {
s = 132;
console.log("11");
}
this.mainContext.moveTo(i, s);
console.log("开始画线");
console.log(t.x);
var r = t.x - 26, o = t.y - 63;
this.mainContext.lineTo(r, o);
console.log("开始画线2");
new cc.Graphics().lineTo();
this.mainContext.stroke();
},
fu1: function() {
G.red = !0;
this.mainContext.clear();
console.log("开始画线7");
var e = this.player.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.player2.convertToWorldSpaceAR(cc.v2(0, 0));
console.log("开始画线8");
var i = e.x, s = 169;
if (1 == G.red) {
console.log("11");
s = 169;
console.log("11");
} else if (0 == G.red) {
s = 132;
console.log("11");
}
this.mainContext.moveTo(i, s);
console.log("开始画线");
console.log(t.x);
var r = t.x - 26, o = t.y - 63;
this.mainContext.lineTo(r, o);
console.log("开始画线2");
new cc.Graphics().lineTo();
this.mainContext.stroke();
},
fu2: function() {
G.red = !1;
this.mainContext.clear();
console.log("开始画线7");
var e = this.player.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.player2.convertToWorldSpaceAR(cc.v2(0, 0));
console.log("开始画线8");
var i = e.x, s = 169;
if (1 == G.red) {
console.log("11");
s = 169;
console.log("11");
} else if (0 == G.red) {
s = 132;
console.log("11");
}
this.mainContext.moveTo(i, s);
console.log("开始画线");
console.log(t.x);
var r = t.x - 26, o = t.y - 63;
this.mainContext.lineTo(r, o);
console.log("开始画线2");
new cc.Graphics().lineTo();
this.mainContext.stroke();
}
});
cc._RF.pop();
}, {} ],
huaxian: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "4ff717BZCpMQZb6oaFScaaP", "huaxian");
cc.Class({
extends: cc.Component,
properties: {
mainCanvas: cc.Node,
player: {
default: null,
type: cc.Node
},
player2: {
default: null,
type: cc.Node
}
},
onLoad: function() {},
start: function() {
console.log("SASDA");
this.mainContext = this.mainCanvas.getComponent(cc.Graphics);
console.log("开始画线7");
var e = this.player.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.player2.convertToWorldSpaceAR(cc.v2(0, 0));
console.log("开始画线8");
var i = e.x, s = e.y;
this.mainContext.moveTo(i, s);
console.log("开始画线");
console.log(t.x);
var r = t.x - 66, o = t.y + 45;
this.mainContext.lineTo(r, o);
console.log("开始画线2");
new cc.Graphics().lineTo();
this.mainContext.stroke();
this.player2.on(cc.Node.EventType.START, function(e) {
this.fu();
}, this);
this.player2.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
this.fu();
}, this);
},
fu: function() {
this.mainContext = this.mainCanvas.getComponent(cc.Graphics);
this.mainContext.clear();
console.log("开始画线7");
var e = this.player.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.player2.convertToWorldSpaceAR(cc.v2(0, 0));
console.log("开始画线8");
var i = e.x, s = e.y;
this.mainContext.moveTo(i, s);
console.log("开始画线");
console.log(t.x);
var r = t.x - 66, o = t.y + 45;
this.mainContext.lineTo(r, o);
console.log("开始画线2");
new cc.Graphics().lineTo();
this.mainContext.stroke();
}
});
cc._RF.pop();
}, {} ],
tip2: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "6419asQFxJHr6sGmlk9wlRC", "tip2");
cc.Class({
extends: cc.Component,
ts: function() {
(G.tip = 1) && (G.xianshi = "将黑红表笔放置到加亮的标记处");
(G.tip = 2) && (G.xianshi = "数字式万用表的红表笔接正极");
(G.tip = 3) && (G.xianshi = "当前量程过大");
(G.tip = 4) && (G.xianshi = "当前量程过小");
(G.tip = 5) && (G.xianshi = "通路");
(G.tip = 6) && (G.xianshi = "当前量程档位错误");
(G.tip = 7) && (G.xianshi = "万用表关闭时选择关闭档或者电压最高档");
(G.tip = 8) && (G.xianshi = "测量高电压时使用错误档位会造成危险");
(G.tip = 9) && (G.xianshi = "测量电压时红表笔选择电流档会损坏万用表");
(G.tip = 10) && (G.xianshi = "当前红表笔档位错误");
}
});
cc._RF.pop();
}, {} ],
tip: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "daf93JwsK5KwLD8srSWa0z7", "tip");
var s, r = e("tip2");
cc.Class({
extends: cc.Component,
Global: r,
properties: (s = {
player: {
default: null,
type: cc.Node
},
player2: {
default: null,
type: cc.Node
}
}, s.player2 = {
default: null,
type: cc.Node
}, s.player2 = {
default: null,
type: cc.Node
}, s.player2 = {
default: null,
type: cc.Node
}, s),
onLoad: function() {},
start: function() {
var e = new r();
this.myLabel = this.node.getComponent(cc.Label);
this.myLabel.string = G.xianshi;
e.ts();
}
});
cc._RF.pop();
}, {
tip2: "tip2"
} ]
}, {}, [ "CC", "Label main", "NewScript - 002", "NewScript - 003", "NewScript - 004", "NewScript", "huaxian - 001", "huaxian", "tip", "tip2" ]);