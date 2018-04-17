webpackJsonp([0],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={name:"BatteryIcon",props:{volt:String}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("img",{staticClass:"batteryImage",attrs:{src:"/static/img/battery.svg"}}),this._v(" "),e("div",{staticClass:"levelText"},[this._v("\n    "+this._s(this.volt)+"V\n  ")])])},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("jWrh")},null,null).exports,o=n("1QPC"),c=n.n(o),d={name:"LineChart",components:{},data:function(){return{batteryChart:null}},props:{title:String,data:Array},mounted:function(){this.batteryChart=new c.a(document.getElementById("line-chart"),{type:"line",data:{labels:this.getLabels,datasets:[{backgroundColor:"#eafaf1",borderColor:"#2ecc71",data:this.getData,label:"Battery Voltage"}]},options:{legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1}}]}}})},computed:{getLabels:function(){for(var t=[],e=0;e<this.data.length;e++)t.push(this.data[e].time);return t},getData:function(){for(var t=[],e=0;e<this.data.length;e++)t.push(this.data[e].voltage);return t}},watch:{data:function(t,e){var n=this.batteryChart;n.data.labels=this.getLabels,n.data.datasets[0].data=this.getData,n.update()}}},l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("canvas",{attrs:{id:"line-chart"}})])}]};function u(){return Math.random().toString(36).substring(2)}var v={name:"ConsoleSDK",appUid:"",makeId:u,init:function(){window.addEventListener("message",this.processMessage.bind(this),!1)},subscribe:function(t){this.sendEvent("Onion.CDK.Subscribe",{topic:t})},publish:function(t,e){},service:function(t,e,n){this.sendEvent("Onion.CDK.Service",{service:t,command:e})},sendEvent:function(t,e){var n=u();return window.parent.postMessage({event:t,instance:this.appUid,eventId:n,content:e},"*"),n},sendCmd:function(t,e){this.sendEvent("Onion.CDK.Command",{cmd:t,params:e})},processMessage:function(t){if("Onion.CDK.Init"===t.data.event){var e=t.data.appUid;this.appUid=e,this.onInit()}else"Onion.CDK.Service"===t.data.event?this.onService(t.data.content.name,t.data.content.command,t.data.content.result):"Onion.CDK.Message"===t.data.event?this.onMessage(t.data.content.topic,t.data.content.content):"Onion.CDK.Command"===t.data.event&&this.onCmd(t.data.content.cmd,t.data.content.resp)},onInit:function(){},onService:function(t,e,n){},onMessage:function(){},onCmd:function(){}},h={name:"App",components:{BatteryIcon:r,LineChart:n("VU/8")(d,l,!1,function(t){n("R8ic")},null,null).exports},data:function(){return{data:[]}},methods:{addOne:function(){v.sendCmd("getBatteryLevels",[])}},mounted:function(){v.onCmd=function(t,e){if("getBatteryLevels"===t){this.data=[],e=e.split("\n");for(var n=0;n<e.length;n++){var a=e[n];if(!(a.length<1)){var s=a.split(" daemon.info")[0],i=a.split("]: ")[1];i=JSON.parse(i);var r=new Date(s),o=r.getHours()+":"+r.getMinutes();this.data.push({time:o,voltage:i.voltage})}}}}.bind(this),v.onInit=function(){setInterval(function(){v.sendCmd("getBatteryLevels",[])},6e4),v.sendCmd("getBatteryLevels",[])},v.init()},computed:{currentVoltage:function(){return this.data.length>0?this.data[this.data.length-1].voltage.toFixed(2):"0"}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"card"},[t._m(1),t._v(" "),n("div",{staticClass:"card-body batteryInfo"},[n("div",{staticClass:"columns"},[n("BatteryIcon",{staticClass:"column col-xs-6",attrs:{volt:t.currentVoltage}})],1)])]),t._v(" "),n("div",{staticClass:"card"},[t._m(2),t._v(" "),n("div",{staticClass:"card-body"},[n("LineChart",{attrs:{title:"Battery Level Since Boot",data:t.data}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"navbar"},[e("section",{staticClass:"navbar-section"},[this._v("\n      Power Dock 2: Battery Level Monitor\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"card-title h5"},[this._v("Current Level")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"card-title h5"},[this._v("Level History")])])}]};var m=n("VU/8")(h,f,!1,function(t){n("d1HI")},null,null).exports;n("i8c9");a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:m},template:"<App/>"})},R8ic:function(t,e){},d1HI:function(t,e){},i8c9:function(t,e){},jWrh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.937ed50817bc5ffa36f3.js.map