(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"58Bg":function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=a(r("NCWt")),i=a(r("q1tI")),c=function(t){function e(e){var r=t.call(this,e)||this;return r.wrapper=null,r.state=o(o({},e),{canvas:null,wrapper:r.wrapper}),r}return n(e,t),e.getDerivedStateFromProps=function(t,e){if(e.sketch!==t.sketch){var r=t.sketch,n=new s.default(r,e.wrapper);return e.canvas.remove(),o(o({},e),{sketch:r,canvas:n})}return e.canvas&&e.canvas.myCustomRedrawAccordingToNewPropsHandler&&e.canvas.myCustomRedrawAccordingToNewPropsHandler(t),e},e.prototype.componentDidMount=function(){var t=new s.default(this.state.sketch,this.wrapper);t.myCustomRedrawAccordingToNewPropsHandler&&t.myCustomRedrawAccordingToNewPropsHandler(this.props),this.setState(o(o({},this.state),{canvas:t,wrapper:this.wrapper}))},e.prototype.componentWillUnmount=function(){null!==this.state.canvas&&this.state.canvas.remove()},e.prototype.render=function(){var t=this;return i.default.createElement("div",{ref:function(e){return t.wrapper=e}},this.props.children)},e}(i.default.Component);e.default=c},yLpj:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}t.exports=r}}]);