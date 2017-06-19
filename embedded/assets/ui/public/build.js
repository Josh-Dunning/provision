!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},n={},a={},s={}.hasOwnProperty,r=/^\.\.?(\/|$)/,o=function(e,t){for(var n,a=[],s=(r.test(t)?e+"/"+t:t).split("/"),o=0,c=s.length;o<c;o++)n=s[o],".."===n?a.pop():"."!==n&&""!==n&&a.push(n);return a.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(n){var a=o(c(t),n);return e.require(a,t)}},i=function(e,t){var a=f&&f.createHot(e),s={id:e,exports:{},hot:a};return n[e]=s,t(s.exports,l(e),s),s.exports},u=function(e){return a[e]?u(a[e]):e},p=function(e,t){return u(o(c(e),t))},d=function(e,a){null==a&&(a="/");var r=u(e);if(s.call(n,r))return n[r].exports;if(s.call(t,r))return i(r,t[r]);throw new Error("Cannot find module '"+e+"' from '"+a+"'")};d.alias=function(e,t){a[t]=e};var h=/\.[^.\/]+$/,m=/\/index(\.[^\/]+)?$/,v=function(e){if(h.test(e)){var t=e.replace(h,"");s.call(a,t)&&a[t].replace(h,"")!==t+"/index"||(a[t]=e)}if(m.test(e)){var n=e.replace(m,"");s.call(a,n)||(a[n]=e)}};d.register=d.define=function(e,a){if(e&&"object"==typeof e)for(var r in e)s.call(e,r)&&d.register(r,e[r]);else t[e]=a,delete n[e],v(e)},d.list=function(){var e=[];for(var n in t)s.call(t,n)&&e.push(n);return e};var f=e._hmr&&new e._hmr(p,d,t,n);d._cache=n,d.hmr=f&&f.wrap,d.brunch=!0,e.require=d}}(),function(){"undefined"==typeof window?this:window;require.register("render.jsx",function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleExpand=n.toggleExpand.bind(n),n.handleChange=n.handleChange.bind(n),n.handleOptionChange=n.handleOptionChange.bind(n),n.update=n.update.bind(n),n.remove=n.remove.bind(n),n}return r(t,e),o(t,[{key:"toggleExpand",value:function(){var e=this.props.subnet;e._expand=!e._expand,this.props.change(this.props.index,e)}},{key:"getCodeName",value:function(e){var t={1:"Subnet Mask",3:"Default Gateway",6:"DNS Server",15:"Domain Name",28:"Broadcast",42:"NTP Server",67:"Bootfile Name"};return t[e]||"Code "+e}},{key:"update",value:function(){this.props.update(this.props.index)}},{key:"remove",value:function(){this.props.remove(this.props.index)}},{key:"handleChange",value:function(e){var t=e.target.value;"number"===e.target.type&&t&&"undefined"!=typeof t&&(t=parseInt(t)),"select-one"===e.target.type&&(t="true"===t);var n=this.props.subnet;n[e.target.name]=t,n._edited=!0,this.props.change(this.props.index,n)}},{key:"handleOptionChange",value:function(e){var t=this.props.subnet;t.Options[e.target.name].Value=e.target.value,t._edited=!0,this.props.change(this.props.index,t)}},{key:"render",value:function(){var e=this,t=JSON.parse(JSON.stringify(this.props.subnet));return React.createElement("tbody",{className:(t.updating?"updating-content":"")+" "+(t._expand?"expanded":""),style:{position:"relative",backgroundColor:t._error?"#fdd":t._new?"#dfd":t._edited?"#eee":"#fff",borderBottom:"thin solid #ddd"}},React.createElement("tr",null,React.createElement("td",null,t._new?React.createElement("input",{type:"text",name:"Name",size:"8",placeholder:"eth0",value:t.Name,onChange:this.handleChange}):t.Name),React.createElement("td",null,React.createElement("input",{type:"text",name:"Subnet",size:"15",placeholder:"192.168.1.1/24",value:t.Subnet,onChange:this.handleChange})),React.createElement("td",null,React.createElement("select",{name:"OnlyReservations",type:"bool",value:t.OnlyReservations,onChange:this.handleChange},React.createElement("option",{value:"true"},"Required"),React.createElement("option",{value:"false"},"Optional"))),React.createElement("td",null,React.createElement("input",{type:"number",name:"ActiveLeaseTime",style:{width:"50px"},placeholder:"0",value:t.ActiveLeaseTime,onChange:this.handleChange})," & ",React.createElement("input",{type:"number",name:"ReservedLeaseTime",style:{width:"50px"},placeholder:"7200",value:t.ReservedLeaseTime,onChange:this.handleChange})," seconds"),React.createElement("td",null,React.createElement("div",null,React.createElement("input",{type:"text",name:"ActiveStart",size:"15",placeholder:"10.0.0.0",value:t.ActiveStart,onChange:this.handleChange}),"..."),React.createElement("div",null,React.createElement("input",{type:"text",name:"ActiveEnd",size:"15",placeholder:"10.0.0.255",value:t.ActiveEnd,onChange:this.handleChange}))),React.createElement("td",{style:{border:"thin solid black !important"}},t._new||t._edited?React.createElement("button",{onClick:this.update,className:"icon-button"},"save",React.createElement("span",{className:"tooltip"},t._new?"Add":"Save")):"",React.createElement("button",{onClick:this.remove,className:"icon-button"},"delete",React.createElement("span",{className:"tooltip"},"Remove")),React.createElement("button",{onClick:this.props.copy,className:"icon-button"},"content_copy",React.createElement("span",{className:"tooltip"},"Copy")))),React.createElement("tr",null,React.createElement("td",{colSpan:"7"},t._expand?React.createElement("div",null,React.createElement("h2",null,"Other Values"),React.createElement("table",null,React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",{style:{textAlign:"right",fontWeight:"bold"}},"Next Server"),React.createElement("td",null,React.createElement("input",{type:"text",name:"NextServer",size:"12",value:t.NextServer,onChange:this.handleChange}))))),React.createElement("h2",null,"Options"),React.createElement("table",null,React.createElement("tbody",null,t.Options.map(function(t,n){return React.createElement("tr",{key:n},React.createElement("td",{style:{textAlign:"right",fontWeight:"bold"}},e.getCodeName(t.Code)),React.createElement("td",null,React.createElement("input",{type:"text",name:n,value:t.Value,onChange:e.handleOptionChange})),React.createElement("td",null,"Option # ",t.Code))})))):React.createElement("span",null),t._error&&React.createElement("div",null,React.createElement("h2",null,React.createElement("span",{className:"material-icons"},"error"),t._errorMessage)),React.createElement("div",{className:"expand",onClick:this.toggleExpand},t._expand?React.createElement("span",{className:"material-icons"},"expand_less"):React.createElement("span",{className:"material-icons"},"expand_more")))))}}]),t}(React.Component),l=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={subnets:[],interfaces:[]},n.componentDidMount=n.componentDidMount.bind(n),n.update=n.update.bind(n),n.addSubnet=n.addSubnet.bind(n),n.updateSubnet=n.updateSubnet.bind(n),n.removeSubnet=n.removeSubnet.bind(n),n.changeSubnet=n.changeSubnet.bind(n),n}return r(t,e),o(t,[{key:"getSubnets",value:function(){return new Promise(function(e,t){var n={},a={};$.getJSON("../api/v3/interfaces",function(s){for(var r in s){var o=s[r];a[o.Name]=o}$.getJSON("../api/v3/subnets",function(t){for(var s in t){var r=t[s];n[r.Name]=r,void 0!=a[r.Name]&&delete a[r.Name]}e({interfaces:a,subnets:n})}).fail(function(){t("Failed getting subnets")})}).fail(function(){t("Failed getting interfaces")})})}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.getSubnets().then(function(t){e.setState({subnets:Object.keys(t.subnets).map(function(e){return t.subnets[e]}),interfaces:Object.keys(t.interfaces).map(function(e){return t.interfaces[e]})})},function(e){})}},{key:"addSubnet",value:function(e){function t(e,t){for(var n=t.split("."),a=[],s=0;s<4;s++){var r=Math.min(e,8);n[s]&=256-Math.pow(2,8-r),a[s]=n[s]+Math.pow(2,8-r)-1,e-=r}return[n.join("."),a.join(".")]}var n,a;if(e.IP){var s=e.IP.indexOf("/");n=e.IP.substring(0,s);var r=parseInt(e.IP.split("/")[1]),a=t(r,n)}var o={_new:!0,Name:"",ActiveLeaseTime:60,ReservedLeaseTime:7200,OnlyReservations:!1,ActiveStart:n?a[0]:"",Subnet:"",ActiveEnd:n?a[1]:"",Strategy:"MAC",NextServer:n||"",Options:[{Code:3,Value:n||""},{Code:6,Value:n||""},{Code:15,Value:"example.com"},{Code:67,Value:"lpxelinux.0"}]};if("undefined"!=typeof e)for(var c in e)if("_"!==c[0])if("Options"===c)for(var l=0;l<e.Options.length;l++){var i=[3,6,15,67].indexOf(e.Options[l].Code);i>=0?o.Options[i].Value=e.Options[l].Value:o.Options.push(e.Options[l])}else o[c]=e[c];this.setState({subnets:this.state.subnets.concat(o)})}},{key:"updateSubnet",value:function(e){var t=this,n=this.state.subnets[e];n.updating=!0,this.setState({subnet:this.state.subnets}),$.ajax({type:n._new?"POST":"PUT",dataType:"json",contentType:"application/json",url:"/api/v3/subnets"+(n._new?"":"/"+n.Name),data:JSON.stringify(n)}).done(function(n){var a=t.state.subnets.concat([]);n.updating=!1,n._edited=!1,n._new=!1,n._error=!1,n._errorMessage="",a[e]=n;var s=t.state.interfaces.concat([]);for(var r in s)s[r].Name==n.Name&&s.splice(r);t.setState({subnets:a,interfaces:s})}).fail(function(n){var a=t.state.subnets.concat([]),s=a[e];if(s.updating=!1,s._error=!0,n.responseText){var r=JSON.parse(n.responseText);s._errorMessage=" ("+n.status+"): "+r.Messages.join(", ")}else s._errorMessage=n.status;t.setState({subnets:a})})}},{key:"removeSubnet",value:function(e){var t=this,n=this.state.subnets.concat([]),a=this.state.subnets[e];return a._new?(n.splice(e,1),void this.setState({subnets:n})):(n[e].updating=!0,this.setState({subnets:n}),void $.ajax({type:"DELETE",dataType:"json",contentType:"application/json",url:"/api/v3/subnets/"+a.Name}).done(function(n){var a=t.state.subnets.concat([]);a.splice(e,1),t.setState({subnets:a})}).fail(function(e){if(a.updating=!1,a._error=!0,e.responseText){var s=JSON.parse(e.responseText);a._errorMessage=" ("+e.status+"): "+s.Messages.join(", ")}else a._errorMessage=e.status;t.setState({subnets:n})}))}},{key:"changeSubnet",value:function(e,t){var n=this.state.subnets.concat([]);n[e]=t,this.setState({subnets:n})}},{key:"render",value:function(){var e=this;return $("#subnetCount").text(this.state.subnets.length),React.createElement("div",{id:"subnets",style:{paddingTop:"51px"}},React.createElement("h2",{style:{display:"flex",justifyContent:"space-between"}},React.createElement("span",{className:"section-head"},"Subnets"),React.createElement("span",null,React.createElement("a",{target:"_blank",href:"http://provision.readthedocs.io/en/latest/doc/ui.html#subnets"},"UI Help")," | ",React.createElement("a",{target:"_blank",href:"/swagger-ui/#/subnets"},"API Help"))),React.createElement("table",{className:"fullwidth input-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Name/NIC"),React.createElement("th",null,"Subnet"),React.createElement("th",null,"Reservations"),React.createElement("th",null,"Active & Reserved Lease"),React.createElement("th",null,"Range"),React.createElement("th",null))),this.state.subnets.map(function(t,n){return React.createElement(c,{subnet:t,update:e.updateSubnet,change:e.changeSubnet,remove:e.removeSubnet,copy:function(){return e.addSubnet(e.state.subnets[n])},key:n,index:n})}),React.createElement("tfoot",null,React.createElement("tr",null,React.createElement("td",{colSpan:"7",style:{textAlign:"center"}},React.createElement("button",{onClick:function(){return e.addSubnet({})}},"New Subnet"))))),React.createElement("h2",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},React.createElement("span",null,"Available Interfaces: "),React.createElement("span",{className:"interface-list"},this.state.interfaces.map(function(t){return t.Addresses.map(function(n,a){return React.createElement("a",{key:t.Name+"-"+a,className:"interface-pair",onClick:function(){return e.addSubnet({Name:t.Name,Subnet:n,Interface:t.Name,IP:n})}},React.createElement("header",null,t.Name),React.createElement("subhead",null,n))})}))))}}]),t}(React.Component),i=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.xhr=void 0,n.STATES={STANDBY:0,WAITING:1,AUTHORIZED:2,DONE:3,ERROR:4},n.icons=["mood","hourglass_empty","security","done_all","close"],n.messages=["","Signing In","Getting Token","Done!","Error"],n.state={token:"",code:1,requestState:n.STATES.STANDBY},n.handleChange=n.handleChange.bind(n),n.setToken=n.setToken.bind(n),n}return r(t,e),o(t,[{key:"getCodeName",value:function(){var e={0:"API Unreachable",1:" ",200:"Granted",401:"No Credentials/Token",403:"Invalid Credentials/Token"};return e[this.state.code]||"Code "+this.state.code}},{key:"componentDidMount",value:function(){if(location.search.startsWith("?token=")){var e=location.search.substring(7);this.setState({token:e}),this.setToken(e)}else localStorage.DrAuthToken&&this.setToken(localStorage.DrAuthToken)}},{key:"setToken",value:function(e){var t=[],n="Bearer "+e,a=this;e.includes(":")?n="Basic "+btoa(e):localStorage.DrAuthToken=e,"undefined"!=typeof this.xhr&&(this.xhr.abort(),this.xhr=void 0),$.ajaxSetup({headers:{Authorization:n}}),this.xhr=$.ajax({url:"../api/v3/bootenvs",type:"GET",async:!0}).then(function(n){for(var s in n)n[s].Available&&t.push(n[s].Name);if(e.includes(":")){a.setState({requestState:a.STATES.AUTHORIZED});var r=e.split(":")[0];a.xhr=$.ajax({url:"../api/v3/users/"+r+"/token?ttl=28800",type:"GET",dataType:"json",async:!0,success:function(e){localStorage.DrAuthToken=e.Token,$.ajaxSetup({headers:{Authorization:"Bearer "+e.Token}}),a.setState({code:200,requestState:a.STATES.DONE}),a.xhr=void 0,a.props.onAccessChange(!0,t)},error:function(e,t,n){a.xhr=void 0,a.setState({code:e.status,requestState:a.STATES.ERROR}),localStorage.DrAuthToken="",a.props.onAccessChange(!1,[])}})}else a.xhr=void 0,a.setState({code:200,requestState:a.STATES.DONE}),a.props.onAccessChange(!0,t)},function(e,n,s){localStorage.DrAuthToken="",a.xhr=void 0,console.log(s),a.setState({code:e.status,requestState:a.STATES.ERROR}),a.props.onAccessChange(!1,t)})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({token:t,requestState:this.STATES.WAITING}),clearTimeout(this.tokenTimeout);var n=this.setToken;this.tokenTimeout=setTimeout(function(){n(t)},500)}},{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("div",{style:{padding:"10px"}},React.createElement("h2",null,"Auth Token"),React.createElement("div",{style:{fontSize:"12px",color:"#444"}},"username:password or api token, default is ",React.createElement("code",{style:{textDecoration:"underline",cursor:"pointer"},onClick:function(){return e.setToken("rocketskates:r0cketsk8ts")}},"rocketskates:r0cketsk8ts"))),React.createElement("div",null,React.createElement("input",{type:"text",name:"token",size:"15",placeholder:"user:password",value:this.state.token,onChange:this.handleChange})),React.createElement("div",{style:{padding:"10px",display:"flex",alignItems:"center",justifyContent:"center"}},React.createElement("i",{className:"material-icons"},this.icons[this.state.requestState]),this.state.requestState==this.STATES.ERROR?React.createElement("span",{style:{color:"#a00"}},this.getCodeName()):React.createElement("span",null,this.messages[this.state.requestState])))}}]),t}(React.Component),u=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleExpand=n.toggleExpand.bind(n),n.handleChange=n.handleChange.bind(n),n.update=n.update.bind(n),n.remove=n.remove.bind(n),n}return r(t,e),o(t,[{key:"toggleExpand",value:function(){var e=this.props.machine;e._expand=!e._expand,this.props.change(this.props.index,e)}},{key:"update",value:function(){this.props.update(this.props.index)}},{key:"remove",value:function(){this.props.remove(this.props.index)}},{key:"handleChange",value:function(e){var t=e.target.value,n=this.props.machine;n[e.target.name]=t,n._edited=!0,this.props.change(this.props.index,n)}},{key:"render",value:function(){var e=JSON.parse(JSON.stringify(this.props.machine));return React.createElement("tbody",{className:(e.updating?"updating-content":"")+" "+(e._expand?"expanded":""),style:{position:"relative",backgroundColor:e._error?"#fdd":e._new?"#dfd":e._edited?"#eee":"#fff",borderBottom:"thin solid #ddd"}},React.createElement("tr",null,React.createElement("td",null,React.createElement("input",{type:"text",name:"Name",size:"15",placeholder:"name.example.com",value:e.Name,onChange:this.handleChange})),React.createElement("td",null,React.createElement("input",{type:"text",name:"Address",size:"15",placeholder:"0.0.0.0",value:e.Address,onChange:this.handleChange})),React.createElement("td",null,React.createElement("select",{name:"BootEnv",type:"bool",value:e.BootEnv,onChange:this.handleChange},this.props.bootenvs.map(function(e){return React.createElement("option",{key:e,value:e},e)}))),React.createElement("td",null,React.createElement("input",{type:"text",name:"Description",size:"15",placeholder:"",value:e.Description,onChange:this.handleChange})),React.createElement("td",null,e.Uuid?React.createElement("div",{title:e.Uuid},e.Uuid.slice(0,4),"...",e.Uuid.slice(-4)):"not set"),React.createElement("td",null,e._new||e._edited?React.createElement("button",{onClick:this.update,className:"icon-button"},"save",React.createElement("span",{className:"tooltip"},e._new?"Add":"Save")):"",React.createElement("button",{onClick:this.remove,className:"icon-button"},"delete",React.createElement("span",{className:"tooltip"},"Remove")))),React.createElement("tr",null,React.createElement("td",{colSpan:"6"},e._expand?React.createElement("div",null,e._error&&React.createElement("div",null,React.createElement("h2",null,React.createElement("span",{className:"material-icons"},"error"),e._errorMessage)),React.createElement("h2",null,"Template Errors"),e.Errors?machines.Errors:"none.",React.createElement("h2",null,"Template Params"),e.Params?machines.Params:"none."):React.createElement("span",null),React.createElement("div",{className:"expand",onClick:this.toggleExpand},e._expand?React.createElement("span",{className:"material-icons"},"expand_less"):React.createElement("span",{className:"material-icons"},"expand_more")))))}}]),t}(React.Component),p=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={machines:[]},n.componentDidMount=n.componentDidMount.bind(n),n.update=n.update.bind(n),n.addMachine=n.addMachine.bind(n),n.changeMachine=n.changeMachine.bind(n),n.removeMachine=n.removeMachine.bind(n),n.updateMachine=n.updateMachine.bind(n),n}return r(t,e),o(t,[{key:"getMachines",value:function(){return new Promise(function(e,t){$.getJSON("../api/v3/machines",function(t){e({machines:t})}).fail(function(){t("Failed getting Machines")})})}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.getMachines().then(function(t){e.setState({machines:t.machines})},function(e){})}},{key:"addMachine",value:function(){var e={Name:"",Address:"0.0.0.0",BootEnv:"ignore",Description:"",Uuid:null,_new:!0};this.setState({machines:this.state.machines.concat(e)})}},{key:"updateMachine",value:function(e){var t=this,n=this.state.machines[e];n.updating=!0,this.setState({machine:this.state.machines}),$.ajax({type:n._new?"POST":"PUT",dataType:"json",contentType:"application/json",url:"/api/v3/machines"+(n._new?"":"/"+n.Uuid),data:JSON.stringify(n)}).done(function(n){var a=t.state.machines.concat([]);n.updating=!1,n._edited=!1,n._new=!1,n._error=!1,n._errorMessage="",a[e]=n,t.setState({machines:a})}).fail(function(n){var a=t.state.machines.concat([]),s=a[e];if(s.updating=!1,s._error=!0,s._expand=!0,n.responseText){var r=JSON.parse(n.responseText);s._errorMessage=" ("+n.status+"): "+r.Messages.join(", ")}else s._errorMessage=n.status;t.setState({machines:a})})}},{key:"removeMachine",value:function(e){var t=this,n=this.state.machines.concat([]),a=this.state.machines[e];return a._new?(n.splice(e,1),void this.setState({machines:n})):(n[e].updating=!0,void $.ajax({type:"DELETE",dataType:"json",contentType:"application/json",url:"/api/v3/machines/"+a.Uuid}).done(function(n){var a=t.state.machines.concat([]);a.splice(e,1),t.setState({machines:a})}).fail(function(e){if(a.updating=!1,a._error=!0,e.responseText){var s=JSON.parse(e.responseText);a._errorMessage=" ("+e.status+"): "+s.Messages.join(", ")}else a._errorMessage=e.status;t.setState({machines:n})}))}},{key:"changeMachine",value:function(e,t){var n=this.state.machines.concat([]);n[e]=t,this.setState({machines:n})}},{key:"render",value:function(){var e=this;return $("#machineCount").text(this.state.machines.length),React.createElement("div",{id:"machines",style:{paddingTop:"51px"}},React.createElement("h2",{style:{display:"flex",justifyContent:"space-between"}},React.createElement("span",{className:"section-head"},"Machines"),React.createElement("span",null,React.createElement("a",{target:"_blank",href:"http://provision.readthedocs.io/en/latest/doc/ui.html#machines"},"UI Help")," | ",React.createElement("a",{target:"_blank",href:"/swagger-ui/#/machines"},"API Help"))),React.createElement("table",{className:"fullwidth input-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Name"),React.createElement("th",null,"Address"),React.createElement("th",null,"BootEnv"),React.createElement("th",null,"Description"),React.createElement("th",null,"Uuid"),React.createElement("th",null))),this.state.machines.map(function(t,n){return React.createElement(u,{machine:t,bootenvs:e.props.bootenvs,update:e.updateMachine,change:e.changeMachine,remove:e.removeMachine,key:n,index:n})}),React.createElement("tfoot",null,React.createElement("tr",null,React.createElement("td",{colSpan:"6",style:{textAlign:"center"}},React.createElement("button",{onClick:function(){return e.addMachine({})}},"New Machine"))))))}}]),t}(React.Component),d=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={prefs:{},updated:!1},n.componentDidMount=n.componentDidMount.bind(n),n.update=n.update.bind(n),n.changePrefs=n.changePrefs.bind(n),n.updatePrefs=n.updatePrefs.bind(n),n.handleChange=n.handleChange.bind(n),n}return r(t,e),o(t,[{key:"getPrefs",value:function(){return new Promise(function(e,t){$.getJSON("../api/v3/prefs",function(t){e({prefs:t})}).fail(function(){t("Failed getting Prefs")})})}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.getPrefs().then(function(t){e.setState({prefs:t.prefs})},function(e){})}},{key:"updatePrefs",value:function(){var e=this,t=this.state.prefs;$.ajax({type:"POST",dataType:"json",contentType:"application/json",url:"/api/v3/prefs",data:JSON.stringify(t)}).done(function(n){e.setState({prefs:t,updated:!1})}).fail(function(t){e.onAccessChange(!1)})}},{key:"changePrefs",value:function(e,t){var n=this.state.prefs;n[e]=t,this.setState({prefs:n,updated:!0})}},{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.changePrefs(t,n)}},{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("h2",{style:{display:"flex",justifyContent:"space-between"}},React.createElement("span",{className:"section-head"},"Preferences"),React.createElement("span",null,React.createElement("a",{target:"_blank",href:"http://provision.readthedocs.io/en/latest/doc/ui.html#prefs"},"UI Help")," | ",React.createElement("a",{target:"_blank",href:"/swagger-ui/#/prefs"},"API Help"))),React.createElement("table",{className:"fullwidth input-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Name"),React.createElement("th",null,"Value"),React.createElement("th",null))),React.createElement("tbody",null,Object.keys(this.state.prefs).map(function(t,n){return React.createElement("tr",{key:n},React.createElement("td",null,t),React.createElement("td",null,t.indexOf("BootEnv")>0&&"debugBootEnv"!=t?React.createElement("select",{name:t,type:"bool",value:e.state.prefs[t],onChange:e.handleChange},e.props.bootenvs.map(function(e){return React.createElement("option",{key:e,value:e},e)})):React.createElement("input",{type:"text",name:t,size:"10",value:e.state.prefs[t],onChange:e.handleChange})),React.createElement("td",null,e.state.updated&&Object.keys(e.state.prefs).length-1==n?React.createElement("button",{onClick:e.updatePrefs,className:"icon-button"},"save",React.createElement("span",{className:"tooltip"},"Save")):""))}))))}}]),t}(React.Component),h=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleExpand=n.toggleExpand.bind(n),n.handleChange=n.handleChange.bind(n),n.update=n.update.bind(n),n.remove=n.remove.bind(n),n.changeTemplate=n.changeTemplate.bind(n),n.addTemplate=n.addTemplate.bind(n),n.removeTemplate=n.removeTemplate.bind(n),n}return r(t,e),o(t,[{key:"toggleExpand",value:function(){var e=this.props.bootenv;e._expand=!e._expand,this.props.change(this.props.index,e)}},{key:"update",value:function(){this.props.update(this.props.index)}},{key:"remove",value:function(){this.props.remove(this.props.index)}},{key:"handleChange",value:function(e){var t=e.target.value;"number"===e.target.type&&t&&"undefined"!=typeof t&&(t=parseInt(t));var n=this.props.bootenv;n[e.target.name]=t,n._edited=!0,this.props.change(this.props.index,n)}},{key:"changeTemplate",value:function(e,t){this.props.bootenv.Templates[t][e.target.name]=e.target.value,this.props.bootenv._edited=!0,this.props.change(this.props.index,this.props.bootenv)}},{key:"addTemplate",value:function(e){this.props.bootenv.Templates.push({Name:"",Path:"",ID:""}),this.props.bootenv._edited=!0,this.props.change(this.props.index,this.props.bootenv)}},{key:"removeTemplate",value:function(e,t){this.props.bootenv.Templates.splice(t,1),this.props.bootenv._edited=!0,this.props.change(this.props.index,this.props.bootenv)}},{key:"render",value:function(){var e=this,t=JSON.parse(JSON.stringify(this.props.bootenv));return React.createElement("tbody",{className:(t.updating?"updating-content":"")+" "+(t._expand?"expanded":""),style:{position:"relative",backgroundColor:t._error?"#fdd":t._new?"#dfd":t._edited?"#eee":"#fff",borderBottom:"thin solid #ddd"}},React.createElement("tr",null,React.createElement("td",null,t._new?React.createElement("input",{type:"text",name:"Name",size:"8",placeholder:"eth0",value:t.Name,onChange:this.handleChange}):t.Name),React.createElement("td",null,t.Available?"Yes":"Error"),React.createElement("td",null,React.createElement("a",{href:t.OS.IsoUrl},t.OS.IsoFile)),React.createElement("td",null,t._new||t._edited?React.createElement("button",{onClick:this.update,className:"icon-button"},"save",React.createElement("span",{className:"tooltip"},t._new?"Add":"Save")):"",React.createElement("button",{onClick:this.remove,className:"icon-button"},"delete",React.createElement("span",{className:"tooltip"},"Remove")),React.createElement("button",{onClick:this.props.copy,className:"icon-button"},"content_copy",React.createElement("span",{className:"tooltip"},"Copy")))),React.createElement("tr",null,React.createElement("td",{colSpan:"7"},t._expand?React.createElement("div",null,React.createElement("table",null,React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",{style:{textAlign:"right",fontWeight:"bold"}},"Iso Name"),React.createElement("td",null,React.createElement("input",{type:"text",size:"30",value:t.OS.IsoFile,onChange:function(n){t._edited=!0,t.OS.IsoFile=n.target.value,e.props.change(e.props.index,t)}}))),React.createElement("tr",null,React.createElement("td",{style:{textAlign:"right",fontWeight:"bold"}},"Iso URL"),React.createElement("td",null,React.createElement("input",{type:"text",size:"30",value:t.OS.IsoUrl,onChange:function(n){t._edited=!0,t.OS.IsoUrl=n.target.value,e.props.change(e.props.index,t)}}))))),React.createElement("h2",null,"Templates"),React.createElement("table",null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Name"),React.createElement("th",null,"Path"),React.createElement("th",null,"ID"),React.createElement("th",null))),React.createElement("tbody",null,t.Templates.map(function(t,n){return React.createElement("tr",{key:n},React.createElement("td",null,React.createElement("input",{type:"text",size:"15",name:"Name",value:t.Name,onChange:function(t){return e.changeTemplate(t,n)}})),React.createElement("td",null,React.createElement("input",{type:"text",size:"30",name:"Path",value:t.Path,onChange:function(t){return e.changeTemplate(t,n)}})),React.createElement("td",null,React.createElement("input",{type:"text",size:"20",name:"ID",value:t.ID,onChange:function(t){return e.changeTemplate(t,n)}})),React.createElement("td",null,React.createElement("button",{onClick:function(e){return $.getJSON("../api/v3/templates/"+t.ID,function(e){return alert(JSON.stringify(e,0,"  "))})},className:"icon-button"},"open_in_new",React.createElement("span",{className:"tooltip"},"Preview")),React.createElement("button",{onClick:function(t){return e.removeTemplate(t,n)},className:"icon-button"},"delete",React.createElement("span",{className:"tooltip"},"Remove"))))}),React.createElement("tr",null,React.createElement("td",{colSpan:"4",style:{textAlign:"center"}},React.createElement("button",{onClick:this.addTemplate},"Add Template")))))):React.createElement("span",null),t._error&&React.createElement("div",null,React.createElement("h2",null,React.createElement("span",{className:"material-icons"},"error"),t._errorMessage)),React.createElement("div",{className:"expand",onClick:this.toggleExpand},t._expand?React.createElement("span",{className:"material-icons"},"expand_less"):React.createElement("span",{className:"material-icons"},"expand_more")))))}}]),t}(React.Component),m=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={bootenvs:[]},n.componentDidMount=n.componentDidMount.bind(n),n.update=n.update.bind(n),n.addBootEnv=n.addBootEnv.bind(n),n.updateBootEnv=n.updateBootEnv.bind(n),n.removeBootEnv=n.removeBootEnv.bind(n),n.changeBootEnv=n.changeBootEnv.bind(n),n}return r(t,e),o(t,[{key:"getBootEnvs",value:function(){return new Promise(function(e,t){$.getJSON("../api/v3/bootenvs",function(t){e({bootenvs:t})}).fail(function(e){t("Failed getting BootEnvs")})})}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.getBootEnvs().then(function(t){e.setState({bootenvs:t.bootenvs})},function(e){})}},{key:"addBootEnv",value:function(e){var t={_new:!0,Name:"",Description:"",OS:{Name:"",Family:"",Codename:"",Version:"",IsoFile:"",IsoSha256:"",IsoUrl:""},Templates:[],Kernel:"",Initrds:[],RequiredParams:[],Available:!0,Errors:[]};if("undefined"!=typeof e)for(var n in e)"_"!==n[0]&&(t[n]=e[n]);this.setState({bootenvs:this.state.bootenvs.concat(t)})}},{key:"updateBootEnv",value:function(e){var t=this,n=this.state.bootenvs[e];n.updating=!0,this.setState({bootenv:this.state.bootenvs}),$.ajax({type:n._new?"POST":"PUT",dataType:"json",contentType:"application/json",url:"/api/v3/bootenvs"+(n._new?"":"/"+n.Name),data:JSON.stringify(n)}).done(function(n){var a=t.state.bootenvs.concat([]);n.updating=!1,n._edited=!1,n._new=!1,n._error=!1,n._errorMessage="",
a[e]=n,t.setState({bootenvs:a})}).fail(function(n){var a=t.state.bootenvs.concat([]),s=a[e];if(s.updating=!1,s._error=!0,n.responseText){var r=JSON.parse(n.responseText);s._errorMessage=" ("+n.status+"): "+r.Messages.join(", ")}else s._errorMessage=n.status;t.setState({bootenvs:a})})}},{key:"removeBootEnv",value:function(e){var t=this,n=this.state.subnets.concat([]),a=this.state.subnets[e];return a._new?(n.splice(e,1),void this.setState({subnets:n})):(n[e].updating=!0,this.setState({subnets:n}),void $.ajax({type:"DELETE",dataType:"json",contentType:"application/json",url:"/api/v3/subnets/"+a.Name}).done(function(n){var a=t.state.subnets.concat([]);a.splice(e,1),t.setState({subnets:a})}).fail(function(e){if(a.updating=!1,a._error=!0,e.responseText){var s=JSON.parse(e.responseText);a._errorMessage=" ("+e.status+"): "+s.Messages.join(", ")}else a._errorMessage=e.status;t.setState({subnets:n})}))}},{key:"changeBootEnv",value:function(e,t){var n=this.state.bootenvs.concat([]);n[e]=t,this.setState({bootenvs:n})}},{key:"render",value:function(){var e=this;return $("#bootenvCount").text(this.state.bootenvs.length),React.createElement("div",{id:"bootenvs",style:{paddingTop:"51px"}},React.createElement("h2",{style:{display:"flex",justifyContent:"space-between"}},React.createElement("span",{className:"section-head"},"Boot Environments"),React.createElement("span",null,React.createElement("a",{target:"_blank",href:"http://provision.readthedocs.io/en/latest/doc/ui.html#bootenvs"},"UI Help")," | ",React.createElement("a",{target:"_blank",href:"/swagger-ui/#/bootenvs"},"API Help"))),React.createElement("table",{className:"fullwidth input-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Environment"),React.createElement("th",null,"Available"),React.createElement("th",null,"Path"),React.createElement("th",null))),this.state.bootenvs.map(function(t,n){return React.createElement(h,{bootenv:t,update:e.updateBootEnv,change:e.changeBootEnv,remove:e.removeBootEnv,copy:function(){return e.addBootEnv(e.state.bootenvs[n])},key:n,index:n})}),React.createElement("tfoot",null,React.createElement("tr",null,React.createElement("td",{colSpan:"4",style:{textAlign:"center"}},React.createElement("button",{onClick:function(){return e.addBootEnv({})}},"New BootEnv"))))))}}]),t}(React.Component),v=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={access:!1,bootenvs:[]},n.onAccessChange=n.onAccessChange.bind(n),n.update=n.update.bind(n),n}return r(t,e),o(t,[{key:"componentDidMount",value:function(){}},{key:"update",value:function(){var e=this;console.log("Updating"),console.log(this),$.getJSON("../api/v3/bootenvs",function(t){var n=[];for(var a in t)t[a].Available&&n.push(t[a].Name);e.setState({bootenvs:n},function(){return _.each(e.refs,function(e){return e.update()})})}).fail(function(){})}},{key:"onAccessChange",value:function(e,t){this.setState({access:e,bootenvs:t})}},{key:"render",value:function(){var e=this.state.access,t=this.state.bootenvs;return $("#navcontrols").css("display",e?"flex":"none"),e?React.createElement("div",{id:"swagger-ui-container",className:"swagger-ui-wrap"},React.createElement(l,{ref:"subnets",onAccessChange:this.onAccessChange}),React.createElement("hr",null),React.createElement(m,{ref:"bootenvs",onAccessChange:this.onAccessChange}),React.createElement("hr",null),React.createElement(d,{ref:"prefs",bootenvs:t,onAccessChange:this.onAccessChange}),React.createElement("hr",null),React.createElement(p,{ref:"machines",bootenvs:t,onAccessChange:this.onAccessChange})):React.createElement("div",null,React.createElement("center",null,React.createElement(i,{access:e,onAccessChange:this.onAccessChange})))}}]),t}(React.Component);window.Provisioner=ReactDOM.render(React.createElement(v,null),document.getElementById("page"))}),require.register("___globals___",function(e,t,n){})}(),require("___globals___");