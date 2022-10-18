"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[138],{2138:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t=r(5671),o=r(3144),u=r(136),s=r(7277),i=r(2791),l=r(3366);var a={users__logo:"Users_users__logo__CbUuQ"},c=r(6871),f=r(885),p="Paginator_users__num__zKWEX",g="Paginator_users__selectPage__jqgcs",h=r(184),d=function(n){for(var e=n.totalUsersCount,r=n.pageSize,t=n.currentPage,o=n.onPageChange,u=n.portionSize,s=void 0===u?10:u,l=Math.ceil(e/r),a=[],c=1;c<=l;c++)a.push(c);var d=Math.ceil(l/s),v=(0,i.useState)(1),y=(0,f.Z)(v,2),P=y[0],j=y[1],w=(P-1)*s+1,m=P*s;return(0,h.jsxs)("div",{className:p,children:[P>1&&(0,h.jsx)("button",{onClick:function(){j(P-1)},children:"PREV"}),a.filter((function(n){return n>=w&&n<=m})).map((function(n){return(0,h.jsx)("span",{className:t===n&&g,onClick:function(e){o(n)},children:n})})),d>P&&(0,h.jsx)("button",{onClick:function(){j(P+1)},children:"NEXT"})]})},v=r(5019),y=r(3504),P=function(n){var e=n.user,r=n.followingInProgress,t=n.unfollow,o=n.follow;return(0,h.jsx)("div",{className:a.users__profile,children:(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:a.users__logo,children:(0,h.jsx)(y.OL,{to:"/profile/".concat(e.id),children:(0,h.jsx)("img",{src:null!==e.photos.small?e.photos.small:v,alt:"user avatar"})})}),(0,h.jsx)("div",{children:e.followed?(0,h.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"Unfollow"}):(0,h.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"Follow"})}),(0,h.jsxs)("span",{children:[(0,h.jsxs)("span",{children:[(0,h.jsxs)("div",{children:[" ",e.name," "]}),(0,h.jsxs)("div",{children:[" ",e.status," "]})]}),(0,h.jsxs)("span",{children:[(0,h.jsxs)("div",{children:[" ","user.location.country"," "]}),(0,h.jsxs)("div",{children:[" ","user.location.city"," "]})]})]})]})})},e.id)},j=["totalUsersCount","pageSize","currentPage","onPageChange"],w=function(n){var e=n.totalUsersCount,r=n.pageSize,t=n.currentPage,o=n.onPageChange,u=function(n,e){if(null==n)return{};var r,t,o=(0,l.Z)(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}(n,j);return u.isAuth?(0,h.jsxs)("div",{className:a.users,children:[(0,h.jsx)(d,{totalUsersCount:e,pageSize:r,currentPage:t,onPageChange:o}),u.users.map((function(n){return(0,h.jsx)(P,{user:n,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow},n.id)}))]}):(0,h.jsx)(c.Fg,{to:"/profile/6724"})},m=r(8687),x=r(7512),C=r(0),b="NOT_FOUND";var _=function(n,e){return n===e};function k(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?_:t,u=r.maxSize,s=void 0===u?1:u,i=r.resultEqualityCheck,l=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),a=1===s?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:b},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return b}return{get:t,put:function(e,o){t(e)===b&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(s,l);function c(){var e=a.get(arguments);if(e===b){if(e=n.apply(null,arguments),i){var r=a.getEntries(),t=r.find((function(n){return i(n.value,e)}));t&&(e=t.value)}a.put(arguments,e)}return e}return c.clearCache=function(){return a.clear()},c}function S(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function z(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var u,s=0,i={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(i=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var a=i,c=a.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=S(t),h=n.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(d,{resultFunc:l,memoizedResultFunc:h,dependencies:g,lastResult:function(){return u},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),d};return o}var U=z(k),A=U((function(n){return n.usersPage.users}),(function(n){return n})),O=function(n){return n.usersPage.pageSize},E=function(n){return n.usersPage.totalUsersCount},F=function(n){return n.usersPage.currentPage},I=function(n){return n.usersPage.isFetching},N=function(n){return n.usersPage.followingInProgress},Z=function(n){return n.auth.isAuth},q=function(n){(0,u.Z)(r,n);var e=(0,s.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,u=new Array(o),s=0;s<o;s++)u[s]=arguments[s];return(n=e.call.apply(e,[this].concat(u))).onPageChange=function(e){n.props.requestUsers(e,n.props.pageSize)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,h.jsxs)(h.Fragment,{children:[this.props.isFetching?(0,h.jsx)(C.Z,{}):null,(0,h.jsx)(w,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChange:this.onPageChange,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth})]})}}]),r}(i.Component),D=(0,m.$j)((function(n){return{users:A(n),pageSize:O(n),totalUsersCount:E(n),currentPage:F(n),isFetching:I(n),followingInProgress:N(n),isAuth:Z(n)}}),{follow:x.ZN,unfollow:x.fv,setCurrentPage:x.D4,toggleFollowingProgress:x.ZH,requestUsers:x.D7})(q)},5019:function(n,e,r){n.exports=r.p+"static/media/ava.3d1b290ad06cb5d38b93.webp"}}]);
//# sourceMappingURL=138.a294207a.chunk.js.map