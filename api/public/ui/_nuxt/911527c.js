(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{290:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgCgkgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMzcuNTE5IDM3LjUxOSIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzcuMDg3LDE3LjcwNWMtMC4zMzQtMC4zMzgtOC4yODQtOC4yNzYtMTguMzI3LTguMjc2UzAuNzY2LDE3LjM2NywwLjQzMywxNy43MDVjLTAuNTc3LDAuNTg0LTAuNTc3LDEuNTIzLDAsMi4xMDcKCQljMC4zMzMsMC4zNCw4LjI4NCw4LjI3NywxOC4zMjcsOC4yNzdzMTcuOTkzLTcuOTM4LDE4LjMyNy04LjI3NUMzNy42NjIsMTkuMjMsMzcuNjYyLDE4LjI5LDM3LjA4NywxNy43MDV6IE0xOC43NiwyNS4wODkKCQljLTYuNzIxLDAtMTIuNjA0LTQuMjkxLTE1LjAyMi02LjMzMmMyLjQxMS0yLjA0LDguMjgxLTYuMzI4LDE1LjAyMi02LjMyOGM2LjcyLDAsMTIuNjA0LDQuMjkyLDE1LjAyMSw2LjMzMgoJCUMzMS4zNjksMjAuODAyLDI1LjUwMSwyNS4wODksMTguNzYsMjUuMDg5eiBNMTguNzYsMTMuMDA5YzMuMTc2LDAsNS43NSwyLjU3NCw1Ljc1LDUuNzVjMCwzLjE3NS0yLjU3NCw1Ljc1LTUuNzUsNS43NQoJCWMtMy4xNzcsMC01Ljc1LTIuNTc0LTUuNzUtNS43NUMxMy4wMSwxNS41ODQsMTUuNTgzLDEzLjAwOSwxOC43NiwxMy4wMDl6Ii8+CjwvZz4KPC9zdmc+"},294:function(t,e,r){"use strict";r(25);var n=r(90);e.a={data:function(){return{firstname:"",lastname:"",email:"",phonenumber:"",password:"",confirmpassword:"",showpwarea:!1,confpw:"password",pw:"password",termsofservice:!1,datatermsofuse:!1}},mixins:[n.a],methods:{togglepwarea:function(t){this.showpwarea=t},validate:function(){var t=this.firstname,e=this.lastname;this.email,this.phonenumber;if(!t.length||!e.length)return this.showautherror("please fill out all fields")},isValidEmail:function(t){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t)},setvisible:function(t){return"password"===t?"password"===this.pw?this.pw="text":this.pw="password":"confirmpassword"===t?"password"===this.confpw?this.confpw="text":this.confpw="password":void 0},isValidPassword:function(t){var e=/[A-Z]/.test(t),r=/[a-z]/.test(t),n=/\d/.test(t),o=/[!@#\$%\^&\*]/.test(t),l=t.length>=8;return e&&r&&n&&o&&l}},computed:{allowcont:function(){var t=this.firstname,e=this.lastname,r=this.email,n=this.phonenumber,o=this.isValidEmail,l=this.isOnlyLetters,c=this.isOnlyNumbers;return!!t.length&&(!!e.length&&(!!l(t)&&(!!l(e)&&(!(!r.length||!o(r))&&(!!n.length&&!!c(n))))))}},watch:{email:function(t,e){return(0,this.isValidEmail)(t)?this.removeautherror():this.showautherror("invalid email")},firstname:function(t,e){return(0,this.isOnlyLetters)(t)?this.removeautherror():this.showautherror("first name should contain only letters")},lastname:function(t,e){return(0,this.isOnlyLetters)(t)?this.removeautherror():this.showautherror("last name should contain only letters")},phonenumber:function(t,e){return(0,this.isOnlyNumbers)(t)?this.removeautherror():this.showautherror("phone numbers should contain only numbers")},password:function(t,e){this.password;var r=this.confirmpassword;return(0,this.isValidPassword)(t)?t!==r?this.showautherror("password should be the same as confirm password"):this.removeautherror():this.showautherror("invalid password")},confirmpassword:function(t,e){var r=this.password;this.confirmpassword;return r!==t?this.showautherror("confirm password should be the same as password"):this.removeautherror()}}}},387:function(t,e,r){"use strict";r.r(e);r(52),r(53);var n={data:function(){return{username:""}},mixins:[r(294).a],methods:{calladminentry:function(){var t=this,e=this.username,r=this.password;this.toggleverbiage("Login admin"),this.onspinner(),this.adminentry({username:e,password:r}).then((function(e){t.toggleverbiage(null),t.offspinner(),t.$router.push("/admin/dashboard?admin=".concat(e))})).catch((function(t){}))}},computed:{allowentry:function(){var t=this.username;return!(!this.password.length||!t.length)}}},o=r(28),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"landing"},[e("div",{staticClass:"auth"},[e("div",{staticClass:"auth__left"}),t._v(" "),e("div",{staticClass:"auth__right"},[t._m(0),t._v(" "),e("div",{staticClass:"form form-auth"},[e("div",{staticClass:"input-area"},["invalid email"!==t.authError?e("label",{staticClass:"smlabel"},[t._v("Username")]):t._e(),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{placeholder:"username",type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input-area"},[e("label",{staticClass:"smlabel"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"input"},[e("span",{staticClass:"input-passwordeye",on:{click:function(e){return t.setvisible("password")}}},[e("img",{attrs:{src:r(290)}})]),t._v(" "),"checkbox"===t.pw?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"Password",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var r=t.password,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.password=r.concat([null])):l>-1&&(t.password=r.slice(0,l).concat(r.slice(l+1)))}else t.password=o}}}):"radio"===t.pw?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"Password",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"Password",type:t.pw},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"overview__withddep"},[t.allowentry?t._e():e("button",{staticClass:"button orange-btn-faint fontweight-3 half-flex-space"},[t._v("\n              Login\n            ")]),t._v(" "),t.allowentry?e("button",{staticClass:"button orange-btn fontweight-3 half-flex-space",on:{click:t.calladminentry}},[t._v("\n              Login\n            ")]):t._e()])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"overview__transaction--header"},[t("h1",{staticClass:"auth-header"},[this._v("Sign in to Admin account")])])}],!1,null,null,null);e.default=component.exports}}]);