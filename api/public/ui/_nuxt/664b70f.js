(window.webpackJsonp=window.webpackJsonp||[]).push([[56,24,28],{285:function(t,e,n){t.exports=n.p+"img/logo.9c64eb0.png"},286:function(t,e,n){"use strict";n.r(e);n(37),n(70);var r={props:["dropdown","items"],mixins:[n(89).a]},l=n(28),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cardlist",class:{dropdown:t.dropdown}},[t.dropdown?e("div",{staticClass:"cardlist__body"},t._l(t.clientnotifs,(function(n){return e("div",{staticClass:"cardlist__item"},[e("h3",{staticClass:"cardlist__item--h3"},[t._v(t._s(n.label))]),t._v(" "),e("p",{staticClass:"cardlist__item--para"},[t._v("\n        "+t._s(t.limitTextLength("".concat(n.description),150))+"\n      ")]),t._v(" "),e("p",{staticClass:"cardlist__item--date"},[t._v(t._s(t.formatDate(n.time)))])])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("div",{staticClass:"userheader__logoarea"},[t("figure",[t("img",{attrs:{src:n(285)}})])])}],l={data:function(){return{current:"overview"}},props:["notifsbodstate","opennotifsbod","openprofilebod","profilebod"],mixins:[n(89).a],mounted:function(){var t=this.$route.params.overview;t?(this.getcurrentclient(t),this.getusernotifications(t)):(t=this.$route.query.user,this.getcurrentclient(t),this.getusernotifications(t),this.getuserloans(t),this.getuserinvestments(t),this.getusersavingsplans(t)),this.gettransfers(),this.getloans(),this.getinvestmentplans(),this.getsavingsplans(),this.getnotifications()}},o=n(28),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"userheader"},[t._m(0),t._v(" "),e("div",{staticClass:"userheader__menu"},[t.msgpopupopen?e("div",[e("CreateMessageUser",{attrs:{header:"Contact support",openbtn:t.openmsgform,closebtn:t.closemsgform}})],1):t._e(),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("overview")},on:{click:function(e){return t.toroute("overview")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-dashboard"}})])]),t._v(" "),e("label",[t._v("Overview")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("transactions")},on:{click:function(e){return t.toroute("transactions/all")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-clock"}})])]),t._v(" "),e("label",[t._v("Transactions")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("loans")},on:{click:function(e){return t.toroute("loans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-banknote"}})])]),t._v(" "),e("label",[t._v("Apply for Loans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("investmentplans")},on:{click:function(e){return t.toroute("investmentplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-tree"}})])]),t._v(" "),e("label",[t._v("Investment plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("savings")},on:{click:function(e){return t.toroute("savings")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-wallet"}})])]),t._v(" "),e("label",[t._v("Savings Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("support")},on:{click:t.openmsgform}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-message-circle"}})])]),t._v(" "),e("label",[t._v("Support")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("profile")},on:{click:function(e){return t.toroute("profile")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-account_circle"}})])]),t._v(" "),e("label",[t._v("Profile")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",class:{current:t.currnt("security")},on:{click:function(e){return t.toroute("security")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-shield"}})])]),t._v(" "),e("label",[t._v("Security")])])]),t._v(" "),e("div",{staticClass:"userheader__userarea"},[e("span",{staticClass:"cursorpointer relativeposition",on:{click:function(e){return e.stopPropagation(),t.opennotifsbod.apply(null,arguments)}}},[t.unreadclientnotifs.length?e("label",{staticClass:"notificationbubble"},[t._v(t._s(t.unreadclientnotifs.length))]):t._e(),t._v(" "),e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-bell"}})]),t._v(" "),t.notifsbodstate?e("div",{},[e("Notifications",{attrs:{dropdown:!0}})],1):t._e()]),t._v(" "),e("span",{staticClass:"margin-left-thirty cursorpointer relativeposition",on:{click:function(e){return e.stopPropagation(),t.openprofilebod.apply(null,arguments)}}},[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(284)+"#icon-user"}})]),t._v(" "),t.profilebod?e("div",{},[e("ProfileDropdown")],1):t._e()])])])])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{CreateMessageUser:n(290).default,Notifications:n(286).default,ProfileDropdown:n(291).default})},289:function(t,e,n){t.exports=n.p+"img/guyinglasses.26f08db.png"},325:function(t,e,n){"use strict";n.r(e);n(44),n(37),n(70);var r=[function(){var t=this._self._c;return t("figure",{staticClass:"displaycard__top--logo"},[t("img",{attrs:{src:n(204)}})])}],l={props:["name","requirements","_id","description","maximumamountallowed","interestRate","minimumbalanceallowed","setcurrent","term"],mixins:[n(89).a]},o=n(28),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"displaycard loan"},[e("div",{staticClass:"displaycard__wrapper"},[e("div",{staticClass:"displaycard__top"},[t._m(0),t._v(" "),e("h2",{staticClass:"displaycard__name loan"},[t._v(t._s(t.name))]),t._v(" "),e("span",{staticClass:"displaycard__interest orange"},[t._v("Interest: "+t._s(t.toPercentage(t.interestRate)))])]),t._v(" "),e("div",{staticClass:"displaycard__content"},[e("div",{staticClass:"displaycard__base"},[e("figure",{staticClass:"displaycard__base--figure"},[e("span",{staticClass:"displaycard__base--itemlogo"},[e("svg",[e("use",{attrs:{"xlink:href":n(284)+"#icon-banknote"}})])]),t._v(" "),e("img",{attrs:{src:n(289)}}),t._v(" "),e("div",{staticClass:"displaycard__base--phototext"},[e("label",[t._v("Get up to")]),t._v(" "),e("span",[t._v("$"+t._s(t.formatNumber(t.maximumamountallowed,10)))])])])]),t._v(" "),e("div",{staticClass:"displaycard__rightbase"},[e("p",{staticClass:"displaycard__rightbase--p"},[t._v("\n            "+t._s(t.description)+"\n          ")]),t._v(" "),e("div",{staticClass:"displaycard__minbalance"},[e("label",{staticClass:"displaycard__minbalance--label"},[t._v("Minimum balance required:")]),t._v(" "),e("span",{staticClass:"displaycard__minbalance--balance darkerblue"},[t._v("$"+t._s(t.formatNumber(t.minimumbalanceallowed,20)))])]),t._v(" "),e("div",{staticClass:"displaycard__minbalance displaycard__term"},[e("div",{staticClass:"displaycard__term--header displaycard__minbalance--label"},[t._v("\n              Payment plan duration: \n            ")]),t._v(" "),e("div",{staticClass:"displaycard__term--content darkerblue"},[e("label",{staticClass:"displaycard__term--duration displaycard__minbalance--label"},[t._v("\n                "+t._s(t.term.duration)+"\n              ")]),t._v(" "),e("span",{staticClass:"displaycard__term--unit displaycard__minbalance--label"},[t._v("\n                "+t._s(t.term.unit)+"\n              ")])])]),t._v(" "),e("button",{staticClass:"displaycard__rightbase--btn",on:{click:function(e){return t.setcurrent({name:t.name,requirements:t.requirements,description:t.description,_id:t._id,maximumamountallowed:t.maximumamountallowed,minimumbalanceallowed:t.minimumbalanceallowed,interestRate:t.interestRate,term:t.term})}}},[e("span",{staticClass:"displaycard__rightbase--btnsvg"},[e("svg",[e("use",{attrs:{"xlink:href":n(284)+"#icon-plus"}})])]),t._v(" "),e("span",[t._v("Apply for this loan")])])])])])])])}),r,!1,null,null,null);e.default=component.exports},387:function(t,e,n){"use strict";n.r(e);n(44),n(37),n(70);var r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"displaycard__review--header"},[e("div",{staticClass:"displaycard__review--headerleft"},[e("figure",{staticClass:"displaycard__review--logo"},[e("img",{attrs:{src:n(204)}})]),t._v(" "),e("p",{staticClass:"displaycard__review--now"},[t._v("now")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"displaycard__review--headerleft"},[e("figure",{staticClass:"displaycard__review--logo"},[e("img",{attrs:{src:n(204)}})]),t._v(" "),e("p",{staticClass:"displaycard__review--now"},[t._v("now")])])},function(){var t=this._self._c;return t("div",{staticClass:"overview__transaction--header"},[t("div",{staticClass:"overview__transaction--h2 header-label"},[this._v("\n          Apply for available loans and grants\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"overview__transaction--header"},[t("div",{staticClass:"overview__transaction--h2 header-label displaycard__applyform--header fontweight-4 orange"},[this._v("\n                Choose loan amount\n              ")])])}],l={data:function(){return{current:null,amount:0,reviewchoice:!1,submitting:!1,submissiondone:!1}},mixins:[n(89).a],computed:{totalrepayment:function(){var t=this.amount;if(this.current){var e=this.current.interestRate,n=parseFloat(t),r=n+n*parseFloat(e);return r}return 0},allowreview:function(){var t=this.account,e=this.amount,n=this.totalrepayment,r=this.current;return 0!==e&&0!==n&&t.balance>r.minimumbalanceallowed}},watch:{current:function(){this.amount=0},loans:function(t,e){t.length&&this.callsetcurrent(t)}},mounted:function(){this.loans.length&&this.callsetcurrent(this.loans)},methods:{review:function(){this.reviewchoice?this.reviewchoice=!1:this.reviewchoice=!0},refresh:function(){this.submissiondone=!1,this.amount=0},submit:function(){var t=this,e=this.account,n=this.amount,r=this.totalrepayment,l=this.current,o={user:e.user,loanid:l._id,amount:n,totalrepayment:r};this.submitting=!0,this.submitloanrequest(o).then((function(){t.reviewchoice=!1,t.submissiondone=!0,t.submitting=!1}))},callsetcurrent:function(t){var e=t[t.length-1],n=e.name,r=e.requirements,l=e.description,o=e._id,c=e.maximumamountallowed,_=e.minimumbalanceallowed,d=e.interestRate,v=e.term;this.setcurrent({name:n,requirements:r,description:l,_id:o,maximumamountallowed:c,minimumbalanceallowed:_,interestRate:d,term:v})},setcurrent:function(t){var e=t.name,n=t.requirements,r=t.description,l=t._id,o=t.maximumamountallowed,c=t.minimumbalanceallowed,_=t.interestRate,d=t.term;this.current={name:e,requirements:n,description:r,_id:l,minimumbalanceallowed:c,maximumamountallowed:o,interestRate:_,term:d}}}},o=n(28),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"overview",on:{click:t.closedrops}},[e("UserHeader",{attrs:{notifsbodstate:t.opennotificationsbody,opennotifsbod:t.opennotifications,openprofilebod:t.openprofiledrop,profilebod:t.profilebody}}),t._v(" "),t.current&&t.submissiondone?e("div",{staticClass:"popup-overlay higherz"},[e("div",{staticClass:"popup"},[e("div",{staticClass:"displaycard__review"},[t._m(0),t._v(" "),e("div",{staticClass:"displaycard__review--content"},[e("p",[e("span",{staticClass:"displaycard__review--itemlogo"},[e("svg",[e("use",{attrs:{"xlink:href":n(284)+"#icon-banknote"}})])]),t._v("\n              Your loan request for "+t._s(t.current.name)+" loan of amount $"+t._s(t.formatNumber(t.amount,20))+"\n              has been submitted we'll be in touch\n            ")])]),t._v(" "),e("div",{staticClass:"displaycard__review--bottom"},[e("button",{staticClass:"button displaycard__review--btn",on:{click:t.refresh}},[t._v("\n              Okay\n            ")])])])])]):t._e(),t._v(" "),t.current&&t.reviewchoice?e("div",{staticClass:"popup-overlay higherz"},[e("div",{staticClass:"popup"},[e("div",{staticClass:"displaycard__review"},[e("div",{staticClass:"displaycard__review--header"},[t._m(1),t._v(" "),e("div",{staticClass:"displaycard__review--headerright"},[e("span",{staticClass:"displaycard__review--svgupback",on:{click:t.review}},[e("svg",[e("use",{attrs:{"xlink:href":n(284)+"#icon-arrow_drop_up"}})])])])]),t._v(" "),e("div",{staticClass:"displaycard__review--content"},[e("p",[e("span",{staticClass:"displaycard__review--itemlogo"},[e("svg",[e("use",{attrs:{"xlink:href":n(284)+"#icon-banknote"}})])]),t._v("\n              You intend to apply for a "+t._s(t.current.name)+" loan of amount $"+t._s(t.formatNumber(t.amount,20))+"\n              with an interest of "+t._s(t.current.interestRate)+" to be\n              "),e("span",[t._v("repayed within the duration of "+t._s(t.current.term.duration)+"\n                "+t._s(t.current.term.unit))])])]),t._v(" "),e("div",{staticClass:"displaycard__review--bottom"},[t.submitting?t._e():e("button",{staticClass:"button displaycard__review--btn",on:{click:t.submit}},[t._v("\n              Yes, submit loan request\n            ")]),t._v(" "),t.submitting?e("button",{staticClass:"button displaycard__review--btn loading blue-background"},[e("span")]):t._e()])])])]):t._e(),t._v(" "),e("div",{staticClass:"overview__content white-background content-body"},[e("div",{staticClass:"padding-top-bottom"}),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"padding-top-bottom"}),t._v(" "),t.current?e("div",{staticClass:"popup-overlay lowerz"},[e("div",{staticClass:"displaycard__applyform"},[e("div",{staticClass:"overview__transaction--header"},[e("div",{staticClass:"overview__transaction--h2 header-label displaycard__applyform--header"},[t._v("\n              Apply for "+t._s(t.current.name)+"\n            ")])]),t._v(" "),e("div",{staticClass:"padding-top-bottom"}),t._v(" "),e("div",{staticClass:"displaycard__formbody"},[t._m(3),t._v(" "),e("div",{staticClass:"displaycard__balance"},[e("span",{staticClass:"balancelabel"},[t._v("Minimum balance required:")]),t._v(" "),t.account?e("span",{staticClass:"balance darkerblue"},[t._v("$"+t._s(t.formatNumber(t.current.minimumbalanceallowed,20)))]):t._e()]),t._v(" "),e("div",{staticClass:"displaycard__balance"},[e("span",{staticClass:"balancelabel"},[t._v("Your balance:")]),t._v(" "),t.account?e("span",{staticClass:"balance"},[t._v("$"+t._s(t.formatNumber(t.account.balance,20)))]):t._e()]),t._v(" "),e("div",{staticClass:"padding-top-bottom"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"displaycard__rangeinput",attrs:{type:"range",min:"0",max:t.current.maximumamountallowed},domProps:{value:t.amount},on:{__r:function(e){t.amount=e.target.value}}}),t._v(" "),e("div",{staticClass:"displaycard__amounts"},[e("div",{staticClass:"displaycard__amount"},[e("div",{staticClass:"displaycard__amount--maximum"},[e("span",{staticClass:"label"},[t._v("maximum:")]),t._v(" "),e("span",{staticClass:"key orange"},[t._v("$"+t._s(t.formatNumber(t.current.maximumamountallowed,15)))])]),t._v(" "),e("label",[t._v("You get")]),t._v(" "),e("p",{staticClass:"displaycard__formslider--value"},[t._v("\n                  $"+t._s(t.formatNumber(t.amount,30))+"\n                ")])]),t._v(" "),e("div",{staticClass:"displaycard__amount"},[e("div",{staticClass:"displaycard__amount--maximum"},[e("span",{staticClass:"label"},[t._v("interest:")]),t._v(" "),e("span",{staticClass:"key darkerblue"},[t._v(t._s(t.formatNumber(t.current.interestRate,15)))])]),t._v(" "),e("label",[t._v("In total you will pay")]),t._v(" "),e("p",{staticClass:"displaycard__formslider--value"},[t._v("\n                  $"+t._s(t.formatNumber(t.totalrepayment,30))+"\n                ")])])]),t._v(" "),e("div",[e("div",{staticClass:"padding-top-bottom"}),t._v(" "),t.allowreview?t._e():e("button",{staticClass:"button curved tinylabel white orange-btn-faint"},[t._v("\n                Review Loan\n              ")]),t._v(" "),t.allowreview?e("button",{staticClass:"button curved tinylabel white orange-btn",on:{click:t.review}},[t._v("\n                Review Loan\n              ")]):t._e()])])])]):t._e(),t._v(" "),e("div",{staticClass:"flex-reverse-column highz relativeposition halfscreen-width-2"},t._l(t.loans,(function(n){var r=n.name,l=n.requirements,o=n.description,c=n._id,_=n.maximumamountallowed,d=n.interestRate,v=n.minimumbalanceallowed,m=n.term;return e("div",[_&&v?e("div",[e("LoanCard",{attrs:{name:r,_id:c,requirements:l,description:o,maximumamountallowed:_,interestRate:d,minimumbalanceallowed:v,term:m,setcurrent:t.setcurrent}})],1):t._e()])})),0)])],1)])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{UserHeader:n(287).default,LoanCard:n(325).default})}}]);