(window.webpackJsonp=window.webpackJsonp||[]).push([[59,25,29],{283:function(t,e,n){t.exports=n.p+"img/logo.8af91aa.png"},284:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("div",{staticClass:"userheader__logoarea"},[t("figure",[t("img",{attrs:{src:n(283)}})])])}],l={mixins:[n(90).a],mounted:function(){var t=this.$route.query.admin;this.getcurrentadmin(t),this.getusers(),this.getloans(),this.getinvestmentplans(),this.getsavingsplans(),this.getnotifications()}},o=n(28),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"dashboard__header userheader"},[t._m(0),t._v(" "),e("div",{staticClass:"userheader__menu"},[e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-user"}})])]),t._v(" "),e("label",[t._v("Users")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem"},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-hotairballoon"}})])]),t._v(" "),e("label",[t._v("General Notifications")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/loans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-pig"}})])]),t._v(" "),e("label",[t._v("Loans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/investmentplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-tree"}})])]),t._v(" "),e("label",[t._v("Investment Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/savingsplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-wallet"}})])]),t._v(" "),e("label",[t._v("Savings Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem"},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-gift"}})])]),t._v(" "),e("label",[t._v("Messages")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:t.triggerlogout}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-key"}})])]),t._v(" "),e("label",[t._v("Logout")])])]),t._v(" "),e("div")])])}),r,!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);n(37),n(70);var r={props:["dropdown","items"],mixins:[n(90).a]},l=n(28),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cardlist",class:{dropdown:t.dropdown}},[t.dropdown?e("div",{staticClass:"cardlist__body"},t._l(t.clientnotifs,(function(n){return e("div",{staticClass:"cardlist__item"},[e("h3",{staticClass:"cardlist__item--h3"},[t._v(t._s(n.label))]),t._v(" "),e("p",{staticClass:"cardlist__item--para"},[t._v("\n        "+t._s(t.limitTextLength("".concat(n.description),150))+"\n      ")]),t._v(" "),e("p",{staticClass:"cardlist__item--date"},[t._v(t._s(t.formatDate(n.time)))])])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("figure",[t("img",{attrs:{src:n(283)}})])}],l={data:function(){return{current:"overview",sidenavopen:!1}},props:["notifsbodstate","opennotifsbod","openprofilebod","profilebod"],mixins:[n(90).a],mounted:function(){var t=this.$route.params.overview;t?(this.getcurrentclient(t),this.getusernotifications(t)):(t=this.$route.query.user,this.getcurrentclient(t),this.getusernotifications(t),this.getuserloans(t),this.getuserinvestments(t),this.getusersavingsplans(t)),this.gettransfers(),this.getloans(),this.getinvestmentplans(),this.getsavingsplans(),this.getnotifications()},methods:{togglesidenav:function(){this.sidenavopen?this.sidenavopen=!1:this.sidenavopen=!0}}},o=n(28),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[!t.adminid&&t.client?e("div",{staticClass:"userheader"},[e("div",{staticClass:"userheader__logoarea",on:{click:function(e){return t.$router.push("/overview?user=".concat(t.client._id))}}},[t._m(0)]),t._v(" "),e("div",{staticClass:"userheader__menu",class:{sidenavopen:t.sidenavopen}},[e("div",{staticClass:"flex-default spacebetween"},[e("div"),t._v(" "),e("div",{staticClass:"mobile-burger side-nav",on:{click:t.togglesidenav}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])]),t._v(" "),e("div",{}),t._v(" "),t.msgpopupopen?e("div",[e("CreateMessageUser",{attrs:{header:"Contact support",openbtn:t.openmsgform,closebtn:t.closemsgform}})],1):t._e(),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("overview")},on:{click:function(e){return t.toroute("overview")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-dashboard"}})])]),t._v(" "),e("label",[t._v("Overview")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("transactions")},on:{click:function(e){return t.toroute("transactions/all")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-clock"}})])]),t._v(" "),e("label",[t._v("Transactions")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("loans")},on:{click:function(e){return t.toroute("loans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-banknote"}})])]),t._v(" "),e("label",[t._v("Apply for Loans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("investmentplans")},on:{click:function(e){return t.toroute("investmentplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-tree"}})])]),t._v(" "),e("label",[t._v("Investment plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("savings")},on:{click:function(e){return t.toroute("savings")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-wallet"}})])]),t._v(" "),e("label",[t._v("Savings Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("support")},on:{click:t.openmsgform}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-message-circle"}})])]),t._v(" "),e("label",[t._v("Support")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("verification")},on:{click:function(e){return t.toroute("verification")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-account_circle"}})])]),t._v(" "),e("label",[t._v("Verification")])])]),t._v(" "),e("div",{staticClass:"userheader__userarea"},[e("span",{staticClass:"cursorpointer relativeposition",on:{click:function(e){return e.stopPropagation(),t.opennotifsbod.apply(null,arguments)}}},[t.unreadclientnotifs.length?e("label",{staticClass:"notificationbubble"},[t._v(t._s(t.unreadclientnotifs.length))]):t._e(),t._v(" "),e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-bell"}})]),t._v(" "),t.notifsbodstate?e("div",{},[e("Notifications",{attrs:{dropdown:!0}})],1):t._e()]),t._v(" "),e("span",{staticClass:"margin-left-thirty cursorpointer relativeposition",on:{click:function(e){return e.stopPropagation(),t.openprofilebod.apply(null,arguments)}}},[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-user"}})]),t._v(" "),t.profilebod?e("div",{},[e("ProfileDropdown")],1):t._e()]),t._v(" "),e("div",{staticClass:"mobile-burger side-nav side-nav-header",on:{click:t.togglesidenav}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])]):t._e(),t._v(" "),t.adminid?e("div",[e("AdminHeader")],1):t._e()])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{CreateMessageUser:n(287).default,Notifications:n(285).default,ProfileDropdown:n(288).default,AdminHeader:n(284).default})},390:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(90).a]},l=n(28),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"overview",on:{click:t.closedrops}},[e("UserHeader",{attrs:{notifsbodstate:t.opennotificationsbody,opennotifsbod:t.opennotifications,openprofilebod:t.openprofiledrop,profilebod:t.profilebody}}),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"overview__content white-background content-body"},[e("div",{staticClass:"overview__transaction--header"},[e("div",{staticClass:"overview__transaction--h2 header-label"},[t._v("Profile Settings")])]),t._v(" "),e("div",{staticClass:"profile"},[e("div",{staticClass:"padding-top-bottom"}),t._v(" "),e("div",{staticClass:"overview__transaction--header"},[e("div",{staticClass:"overview__transaction--h2 header-label-smaller"},[t._v("\n            Account Information\n          ")])]),t._v(" "),e("div",{staticClass:"profile__area"},[e("div",{staticClass:"profile__section"},[e("label",{staticClass:"smlabel profile__section--label"},[t._v("Full name")]),t._v(" "),e("span",{staticClass:"normblack-two"},[t._v("Mike Label")])]),t._v(" "),e("div",{staticClass:"profile__section"},[e("label",{staticClass:"smlabel profile__section--label"},[t._v("Gender")]),t._v(" "),e("span",{staticClass:"normblack-two"},[t._v("Male")])]),t._v(" "),e("div",{staticClass:"profile__section"},[e("label",{staticClass:"smlabel profile__section--label"},[t._v("Date of birth")]),t._v(" "),e("span",{staticClass:"normblack-two"},[t._v("January 24, 1894")])])]),t._v(" "),e("div",{staticClass:"padding-top-bottom"}),t._v(" "),e("div",{staticClass:"overview__transaction--header"},[e("div",{staticClass:"overview__transaction--h2 header-label-smaller"},[t._v("\n            Contact details\n          ")])]),t._v(" "),e("div",{staticClass:"profile__area"},[e("div",{staticClass:"profile__section"},[e("label",{staticClass:"smlabel profile__section--label"},[t._v("Email address")]),t._v(" "),e("span",{staticClass:"normblack-two"},[t._v("mikelabel@gmail.com")])]),t._v(" "),e("div",{staticClass:"profile__section"},[e("label",{staticClass:"smlabel profile__section--label"},[t._v("Phone number")]),t._v(" "),e("span",{staticClass:"normblack-two"},[t._v("078345667")])]),t._v(" "),e("div",{staticClass:"profile__section"},[e("label",{staticClass:"smlabel profile__section--label"},[t._v("Address")]),t._v(" "),e("span",{staticClass:"normblack-two"},[t._v("no 15 address at the place")])])]),t._v(" "),e("div",{staticClass:"overview__withddep"},[e("button",{staticClass:"button orange-btn fontweight-3 half-flex-space"},[t._v("Update")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UserHeader:n(286).default})}}]);