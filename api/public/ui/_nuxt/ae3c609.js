(window.webpackJsonp=window.webpackJsonp||[]).push([[70,25,29],{283:function(t,e,n){t.exports=n.p+"img/logo.8af91aa.png"},284:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("div",{staticClass:"userheader__logoarea"},[t("figure",[t("img",{attrs:{src:n(283)}})])])}],o={mixins:[n(90).a],mounted:function(){var t=this.$route.query.admin;this.getcurrentadmin(t),this.getusers(),this.getloans(),this.getinvestmentplans(),this.getsavingsplans(),this.getnotifications()}},l=n(28),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"dashboard__header userheader"},[t._m(0),t._v(" "),e("div",{staticClass:"userheader__menu"},[e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-user"}})])]),t._v(" "),e("label",[t._v("Users")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem"},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-hotairballoon"}})])]),t._v(" "),e("label",[t._v("General Notifications")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/loans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-pig"}})])]),t._v(" "),e("label",[t._v("Loans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/investmentplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-tree"}})])]),t._v(" "),e("label",[t._v("Investment Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/savingsplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-wallet"}})])]),t._v(" "),e("label",[t._v("Savings Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem"},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-gift"}})])]),t._v(" "),e("label",[t._v("Messages")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:t.triggerlogout}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-key"}})])]),t._v(" "),e("label",[t._v("Logout")])])]),t._v(" "),e("div")])])}),r,!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);n(37),n(70);var r={props:["dropdown","items"],mixins:[n(90).a]},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cardlist",class:{dropdown:t.dropdown}},[t.dropdown?e("div",{staticClass:"cardlist__body"},t._l(t.clientnotifs,(function(n){return e("div",{staticClass:"cardlist__item"},[e("h3",{staticClass:"cardlist__item--h3"},[t._v(t._s(n.label))]),t._v(" "),e("p",{staticClass:"cardlist__item--para"},[t._v("\n        "+t._s(t.limitTextLength("".concat(n.description),150))+"\n      ")]),t._v(" "),e("p",{staticClass:"cardlist__item--date"},[t._v(t._s(t.formatDate(n.time)))])])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("figure",[t("img",{attrs:{src:n(283)}})])}],o={data:function(){return{current:"overview",sidenavopen:!1}},props:["notifsbodstate","opennotifsbod","openprofilebod","profilebod"],mixins:[n(90).a],mounted:function(){var t=this.$route.params.overview;t?(this.getcurrentclient(t),this.getusernotifications(t)):(t=this.$route.query.user,this.getcurrentclient(t),this.getusernotifications(t),this.getuserloans(t),this.getuserinvestments(t),this.getusersavingsplans(t)),this.gettransfers(),this.getloans(),this.getinvestmentplans(),this.getsavingsplans(),this.getnotifications()},methods:{togglesidenav:function(){this.sidenavopen?this.sidenavopen=!1:this.sidenavopen=!0}}},l=n(28),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[!t.adminid&&t.client?e("div",{staticClass:"userheader"},[e("div",{staticClass:"userheader__logoarea",on:{click:function(e){return t.$router.push("/overview?user=".concat(t.client._id))}}},[t._m(0)]),t._v(" "),e("div",{staticClass:"userheader__menu",class:{sidenavopen:t.sidenavopen}},[e("div",{staticClass:"flex-default spacebetween"},[e("div"),t._v(" "),e("div",{staticClass:"mobile-burger side-nav",on:{click:t.togglesidenav}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])]),t._v(" "),e("div",{}),t._v(" "),t.msgpopupopen?e("div",[e("CreateMessageUser",{attrs:{header:"Contact support",openbtn:t.openmsgform,closebtn:t.closemsgform}})],1):t._e(),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("overview")},on:{click:function(e){return t.toroute("overview")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-dashboard"}})])]),t._v(" "),e("label",[t._v("Overview")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("transactions")},on:{click:function(e){return t.toroute("transactions/all")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-clock"}})])]),t._v(" "),e("label",[t._v("Transactions")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("loans")},on:{click:function(e){return t.toroute("loans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-banknote"}})])]),t._v(" "),e("label",[t._v("Apply for Loans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("investmentplans")},on:{click:function(e){return t.toroute("investmentplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-tree"}})])]),t._v(" "),e("label",[t._v("Investment plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("savings")},on:{click:function(e){return t.toroute("savings")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-wallet"}})])]),t._v(" "),e("label",[t._v("Savings Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("support")},on:{click:t.openmsgform}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-message-circle"}})])]),t._v(" "),e("label",[t._v("Support")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("verification")},on:{click:function(e){return t.toroute("verification")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-account_circle"}})])]),t._v(" "),e("label",[t._v("Verification")])])]),t._v(" "),e("div",{staticClass:"userheader__userarea"},[e("span",{staticClass:"cursorpointer relativeposition",on:{click:function(e){return e.stopPropagation(),t.opennotifsbod.apply(null,arguments)}}},[t.unreadclientnotifs.length?e("label",{staticClass:"notificationbubble"},[t._v(t._s(t.unreadclientnotifs.length))]):t._e(),t._v(" "),e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-bell"}})]),t._v(" "),t.notifsbodstate?e("div",{},[e("Notifications",{attrs:{dropdown:!0}})],1):t._e()]),t._v(" "),e("span",{staticClass:"margin-left-thirty cursorpointer relativeposition",on:{click:function(e){return e.stopPropagation(),t.openprofilebod.apply(null,arguments)}}},[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-user"}})]),t._v(" "),t.profilebod?e("div",{},[e("ProfileDropdown")],1):t._e()]),t._v(" "),e("div",{staticClass:"mobile-burger side-nav side-nav-header",on:{click:t.togglesidenav}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])]):t._e(),t._v(" "),t.adminid?e("div",[e("AdminHeader")],1):t._e()])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{CreateMessageUser:n(287).default,Notifications:n(285).default,ProfileDropdown:n(288).default,AdminHeader:n(284).default})},394:function(t,e,n){"use strict";n.r(e);n(202),n(12);var r={data:function(){return{edit:!0,profit:0,deduction:0,status:null,message:"",current:null,showdetails:!1}},mixins:[n(90).a],computed:{allowsubmit:function(){this.profit,this.deduction;var t=this.status;this.message;return!(!this.current||!t.length)}},watch:{current:function(t,e){t&&(this.profit=t.userinvestment.profit,this.deduction=t.userinvestment.deduction,this.status=t.userinvestment.status,this.message=t.userinvestment.message)}},methods:{toggleshowdetails:function(){this.showdetails?this.showdetails=!1:this.showdetails=!0},submit:function(){var t=this,body={profit:this.profit,deduction:this.deduction,status:this.status,message:this.message,id:this.current.userinvestment._id};this.toggleverbiage("Editing item"),this.onspinner(),this.edituserinvestment(body).then((function(){t.toggleverbiage(null),t.offspinner(),t.current=null}))},edititem:function(t){var e=this.userinvestments.find((function(e){return e.userinvestment._id===t}));this.current=e},closeitem:function(){this.current=null}}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"overview",on:{click:t.closedrops}},[e("UserHeader",{attrs:{notifsbodstate:t.opennotificationsbody,opennotifsbod:t.opennotifications,openprofilebod:t.openprofiledrop,profilebod:t.profilebody}}),t._v(" "),t.current?e("div",{staticClass:"popup-overlay highz"},[e("div",{staticClass:"popup"},[e("div",{staticClass:"halfscreen-width-2"},[e("div",{staticClass:"two-side-grid"},[e("div",{staticClass:"input-area fullbody"},[e("label",{staticClass:"smlabel"},[t._v("Status")]),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{placeholder:"pending, approved etc",type:"text"},domProps:{value:t.status},on:{input:function(e){e.target.composing||(t.status=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input-area fullbody"},[e("label",{staticClass:"smlabel"},[t._v("Profit Growth")]),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.profit,expression:"profit"}],attrs:{placeholder:"Choose profit amount to show user",type:"number"},domProps:{value:t.profit},on:{input:function(e){e.target.composing||(t.profit=e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"input-area fullbody"},[e("label",{staticClass:"smlabel"},[t._v("Add a deduction")]),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.deduction,expression:"deduction"}],attrs:{placeholder:"Choose amount to show user as deduction",type:"number"},domProps:{value:t.deduction},on:{input:function(e){e.target.composing||(t.deduction=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input-area fullbody"},[e("label",{staticClass:"smlabel"},[t._v("Write a message to display to user")]),t._v(" "),e("div",{staticClass:"input"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{placeholder:"Message to display for this item"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"flex-with-spacebetween"},[e("div",{staticClass:"overview__withddep"},[t.allowsubmit?e("button",{staticClass:"button orange-btn fontweight-3 half-flex-space loanbtn curved",on:{click:t.submit}},[t._v("\n                submit\n              ")]):t._e(),t._v(" "),t.allowsubmit?t._e():e("button",{staticClass:"button orange-btn-faint fontweight-3 half-flex-space loanbtn curved"},[t._v("\n                submit\n              ")])]),t._v(" "),e("div",{staticClass:"overview__withddep"},[e("button",{staticClass:"button fontweight-3 half-flex-space loanbtn curved blue-background",on:{click:t.closeitem}},[t._v("\n                close\n              ")])])])])])]):t._e(),t._v(" "),e("div",{staticClass:"overview__content white-background content-body"},[e("div",{staticClass:"padding-top-bottom"}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"padding-top-bottom"}),t._v(" "),e("div",{staticClass:"flex-reverse-column relativeposition halfscreen-width-2"},t._l(t.userinvestments,(function(r){return e("div",{staticClass:"displaycard__userlistcard displaycard__review"},[e("div",{staticClass:"investmentcard"},[e("div",{staticClass:"investmentcard__header flex-with-spacebetween"},[e("h2",{staticClass:"displaycard__name loan"},[t._v(t._s(r.investmentname))]),t._v(" "),e("div",[t.adminid?e("button",{staticClass:"button fontweight-3 half-flex-space loanbtn curved normblack blue-background",on:{click:function(e){return t.edititem(r.userinvestment._id)}}},[t._v("\n                    Edit\n                ")]):t._e()])]),t._v(" "),e("div",{staticClass:"investmentcard__top"},[e("div",{staticClass:"investmentcard__logoarea"},[e("span",[e("svg",[e("use",{attrs:{"xlink:href":n(282)+"#icon-tree"}})])])]),t._v(" "),e("div",{staticClass:"investmentcard__topright"},[e("div",{staticClass:"investmentcard__topright--amountlabel capitalize"},[t._v("\n                  Initial capital\n                ")]),t._v(" "),e("div",{staticClass:"investmentcard__topright--amountfigure"},[t._v("\n                  $"+t._s(t.formatNumber(r.userinvestment.amount,20))+"\n                ")])])]),t._v(" "),e("div",{staticClass:"investmentcard__top"},[e("div",{staticClass:"investmentcard__logoarea"}),t._v(" "),e("div",{staticClass:"investmentcard__topright"},[e("div",{staticClass:"investmentcard__topright--amountlabel capitalize"},[t._v("\n                  Projected Profit\n                ")]),t._v(" "),e("div",{staticClass:"investmentcard__topright--amountfigure"},[t._v("\n                  $"+t._s(t.formatNumber(r.userinvestment.potentialprofit,20))+"\n                ")])])]),t._v(" "),t.showdetails?e("div",{staticClass:"investmentcard__detail"},[e("p",{staticClass:"investmentcard__detail--message"},[t._v(t._s(r.userinvestment.message))]),t._v(" "),e("div",{staticClass:"flex-with-spacebetween investmentcard__detail--section"},[e("span",[t._v("Profit")]),t._v(" "),e("span",{staticClass:"investmentcard__detail--value"},[t._v("$"+t._s(r.userinvestment.profit))])]),t._v(" "),e("div",{staticClass:"flex-with-spacebetween investmentcard__detail--section"},[e("span",[t._v("Deductions")]),t._v(" "),e("span",{staticClass:"investmentcard__detail--value"},[t._v("$"+t._s(r.userinvestment.deduction))])]),t._v(" "),e("div",{staticClass:"flex-with-spacebetween investmentcard__detail--section"},[e("span",[t._v("Status")]),t._v(" "),e("span",{staticClass:"capitalize investmentcard__detail--value"},[t._v(t._s(r.userinvestment.status))])])]):t._e(),t._v(" "),t.showdetails?t._e():e("div",{staticClass:"investmentcard__bottom",on:{click:t.toggleshowdetails}},[e("span",{staticClass:"investmentcard__bottom--left"},[t._v("View Details")]),t._v(" "),e("span",{staticClass:"investmentcard__bottom--right"},[e("svg",[e("use",{attrs:{"xlink:href":n(282)+"#icon-arrow_right"}})])])]),t._v(" "),t.showdetails?e("div",{staticClass:"investmentcard__bottom",on:{click:t.toggleshowdetails}},[e("span",{staticClass:"investmentcard__bottom--left"},[t._v("Close Details")]),t._v(" "),e("span",{staticClass:"investmentcard__bottom--right"},[e("svg",[e("use",{attrs:{"xlink:href":n(282)+"#icon-arrow_right"}})])])]):t._e()])])})),0)])],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"overview__transaction--header"},[t("div",{staticClass:"overview__transaction--h2 header-label"},[this._v("Your investments")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UserHeader:n(286).default})}}]);