(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{856:function(e,t,n){__NEXT_REGISTER_PAGE("/auth/error",function(){return e.exports=n(857),{page:e.exports.default}})},857:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var a=n(5),r=n.n(a),o=n(0),i=n.n(o),c=n(6),s=n.n(c),l=n(15),u=n(11);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,a,r,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(a,r)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,d(t).apply(this,arguments))}var n,a,o,c,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,l["a"]),n=t,a=[{key:"render",value:function(){return"signin"==this.props.action&&"oauth"==this.props.type?i.a.createElement(u.a,f({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 mb-3"},"Unable to sign in"),i.a.createElement("p",{className:"lead"},"An account associated with your email address already exists."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Sign in with email or another service")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 mr-auto ml-auto mb-5"},i.a.createElement("div",{className:"text-muted"},i.a.createElement("h4",{className:"mb-2"},"Why am I seeing this?"),i.a.createElement("p",{className:"mb-2"},"It looks like you might have already signed up using another service."),i.a.createElement("p",{className:"mb-3"},"To protect your account, if you have perviously signed up using another service you must link accounts before you can use a different service to sign in."),i.a.createElement("h4",{className:"mb-2"},"How do I fix this?"),i.a.createElement("p",{className:"mb-0"},"To sign in using another service, first sign in using your email address then link accounts."))))):"signin"==this.props.action&&"token-invalid"==this.props.type?i.a.createElement(u.a,f({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 mb-2"},"Link not valid"),i.a.createElement("p",{className:"lead"},"This sign in link is no longer valid."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Get a new sign in link"))))):i.a.createElement(u.a,f({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5"},"Error signing in"),i.a.createElement("p",{className:"lead"},"An error occured while trying to sign in."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Sign in with email or another service")))))}}],o=[{key:"getInitialProps",value:(c=r.a.mark(function e(n){var a,o,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.req,o=n.query,e.next=3,v(d(t),"getInitialProps",this).call(this,{req:a});case 3:return(i=e.sent).action=o.action||null,i.type=o.type||null,i.service=o.service||null,e.abrupt("return",i);case 8:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(n,a){var r=c.apply(e,t);function o(e){m(r,n,a,o,i,"next",e)}function i(e){m(r,n,a,o,i,"throw",e)}o(void 0)})},function(e){return p.apply(this,arguments)})}],a&&h(n.prototype,a),o&&h(n,o),t}()}},[[856,1,0]]]);