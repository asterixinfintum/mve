(window.webpackJsonp=window.webpackJsonp||[]).push([[41,9,10,13,30],{282:function(t,e,n){t.exports=n.p+"img/sprite.4e150a7.svg"},283:function(t,e,n){t.exports=n.p+"img/logo.8af91aa.png"},284:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("div",{staticClass:"userheader__logoarea"},[t("figure",[t("img",{attrs:{src:n(283)}})])])}],l={mixins:[n(90).a],mounted:function(){var t=this.$route.query.admin;this.getcurrentadmin(t),this.getusers(),this.getloans(),this.getinvestmentplans(),this.getsavingsplans(),this.getnotifications()}},o=n(28),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"dashboard__header userheader"},[t._m(0),t._v(" "),e("div",{staticClass:"userheader__menu"},[e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-user"}})])]),t._v(" "),e("label",[t._v("Users")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem"},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-hotairballoon"}})])]),t._v(" "),e("label",[t._v("General Notifications")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/loans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-pig"}})])]),t._v(" "),e("label",[t._v("Loans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/investmentplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-tree"}})])]),t._v(" "),e("label",[t._v("Investment Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:function(e){return t.toadminroute("admin/dashboard/savingsplans")}}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-wallet"}})])]),t._v(" "),e("label",[t._v("Savings Plans")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem"},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-gift"}})])]),t._v(" "),e("label",[t._v("Messages")])]),t._v(" "),e("div",{staticClass:"userheader__menuitem",on:{click:t.triggerlogout}},[e("span",[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-key"}})])]),t._v(" "),e("label",[t._v("Logout")])])]),t._v(" "),e("div")])])}),r,!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n.r(e);n(52),n(37),n(70);var r=n(1),l=(n(24),{mixins:[n(90).a],props:["togglenotform"],data:function(){return{label:"",description:""}},methods:{callcreatenotification:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var label,n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return label=t.label,n=t.description,r=t.userid,l={user:r,label:label,description:n,type:"notification"},t.toggleverbiage("Creating notification"),t.onspinner(),e.prev=4,e.next=7,t.createnotification(l);case 7:if(t.toggleverbiage(null),t.offspinner(),!t.userid){e.next=13;break}return t.togglenotform(),e.next=13,t.getusernotifications(t.user);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error("Error in handleCreateNotification:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})))()}},computed:{userid:function(){return this.$route.params.user},allowsubmit:function(){var label=this.label,t=this.description;return!(!label.length||!t.length)}}}),o=n(28),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-overlay"},[e("div",{staticClass:"addnotification popup"},[e("div",{staticClass:"apply relativeposition"},[e("span",{staticClass:"sidex",on:{click:t.togglenotform}},[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-x-altx-alt"}})])]),t._v(" "),e("div",{staticClass:"apply__content"},[e("div",{staticClass:"apply__form"},[e("div",{staticClass:"overview__transaction--header bottom-margin"},[e("div",{staticClass:"overview__transaction--h2 header-label capitalize"},[t._v("\n              "+t._s("Add a Notification to ".concat(t.userprofile.details.firstname," ").concat(t.userprofile.details.lastname,"'s Profile"))+"\n            ")])]),t._v(" "),e("div",{staticClass:"input-area"},[e("label",{staticClass:"smlabel"},[t._v("Notification Topic")]),t._v(" "),e("label",{staticClass:"smlabel tinylabel fontweight-5",class:{fonterror:"this input should contain just numbers"===t.authError}}),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],attrs:{placeholder:"Topic"},domProps:{value:t.label},on:{input:function(e){e.target.composing||(t.label=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input-area"},[e("label",{staticClass:"smlabel"},[t._v("Notification Content")]),t._v(" "),e("label",{staticClass:"smlabel tinylabel fontweight-5",class:{fonterror:"this input should contain just numbers"===t.authError}}),t._v(" "),e("div",{staticClass:"input"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{placeholder:"Content"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),t._v(" "),t.allowsubmit?e("div",{staticClass:"overview__withddep"},[e("button",{staticClass:"button orange-btn fontweight-3 half-flex-space curved",on:{click:t.callcreatenotification}},[t._v("\n              Add Notification\n            ")])]):t._e(),t._v(" "),t.allowsubmit?t._e():e("div",{staticClass:"overview__withddep"},[e("button",{staticClass:"button orange-btn-faint fontweight-3 half-flex-space curved"},[t._v("\n              Add Notification\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);n(52);var r=n(1),l=(n(24),{mixins:[n(90).a],props:["togglemessageform"],data:function(){return{label:"",content:""}},methods:{callcreatemessage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var label,content,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return label=t.label,content=t.content,n=t.userid,r={user:n,label:label,content:content,adminmsg:!0},t.toggleverbiage("Creating User Message"),t.onspinner(),e.prev=4,e.next=7,t.senduseramessage(r);case 7:t.toggleverbiage(null),t.offspinner(),t.userid&&t.togglemessageform(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error("Error in handleSendMessage:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})))()}},computed:{userid:function(){return this.$route.params.user},allowsubmit:function(){var label=this.label,content=this.content;return!(!label.length||!content.length)}}}),o=n(28),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-overlay"},[e("div",{staticClass:"addnotification popup"},[e("div",{staticClass:"apply relativeposition"},[e("span",{staticClass:"sidex",on:{click:t.togglemessageform}},[e("svg",{staticClass:"feature__icon"},[e("use",{attrs:{"xlink:href":n(282)+"#icon-x-altx-alt"}})])]),t._v(" "),e("div",{staticClass:"apply__content"},[e("div",{staticClass:"apply__form"},[e("div",{staticClass:"overview__transaction--header bottom-margin"},[e("div",{staticClass:"overview__transaction--h2 header-label capitalize"},[t._v("\n              "+t._s("Add a Message to ".concat(t.userprofile.details.firstname," ").concat(t.userprofile.details.lastname,"'s Profile"))+"\n            ")])]),t._v(" "),e("div",{staticClass:"input-area"},[e("label",{staticClass:"smlabel"},[t._v("Message Topic")]),t._v(" "),e("label",{staticClass:"smlabel tinylabel fontweight-5",class:{fonterror:"this input should contain just numbers"===t.authError}}),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],attrs:{placeholder:"Topic"},domProps:{value:t.label},on:{input:function(e){e.target.composing||(t.label=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input-area"},[e("label",{staticClass:"smlabel"},[t._v("Message Content")]),t._v(" "),e("label",{staticClass:"smlabel tinylabel fontweight-5",class:{fonterror:"this input should contain just numbers"===t.authError}}),t._v(" "),e("div",{staticClass:"input"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"Content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),t.allowsubmit?e("div",{staticClass:"overview__withddep"},[e("button",{staticClass:"button orange-btn fontweight-3 half-flex-space curved",on:{click:t.callcreatemessage}},[t._v("\n              Add Message\n            ")])]):t._e(),t._v(" "),t.allowsubmit?t._e():e("div",{staticClass:"overview__withddep"},[e("button",{staticClass:"button orange-btn-faint fontweight-3 half-flex-space curved"},[t._v("\n              Add Message\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);n(52);var r={data:function(){return{addnotification:!1,addmessage:!1}},mixins:[n(90).a],computed:{userid:function(){return this.$route.params.user}},methods:{togglenotform:function(){if(this.addnotification)return this.addnotification=!1;this.addnotification=!0},togglemessageform:function(){if(this.addmessage)return this.addmessage=!1;this.addmessage=!0}},mounted:function(){this.getuser(this.userid),this.getusertransactions(this.userid),this.getusernotifications(this.userid)}},l=n(28),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"dashboard overview"},[e("AdminHeader"),t._v(" "),t.addnotification&&t.userprofile?e("div",[e("AddNotification",{attrs:{togglenotform:t.togglenotform}})],1):t._e(),t._v(" "),t.addmessage&&t.userprofile?e("div",[e("CreateMessageAdmin",{attrs:{togglemessageform:t.togglemessageform}})],1):t._e(),t._v(" "),t.userprofile?e("div",{staticClass:"dashboard__content"},[e("div",{staticClass:"overview__transaction--header bottom-margin"},[e("div",{staticClass:"overview__transaction--h2 header-label capitalize"},[t._v("\n          "+t._s("".concat(t.userprofile.details.firstname," ").concat(t.userprofile.details.lastname,"'s Profile"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"dashboard__usersub bottom-margin"},[e("div",{staticClass:"dashboard__usersubbtns flex-default"},[e("span",[e("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4",on:{click:t.togglenotform}},[t._v("\n              Add Notification\n            ")])]),t._v(" "),e("span",[e("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4",on:{click:t.togglemessageform}},[t._v("\n              Create Message\n            ")])]),t._v(" "),e("span",[e("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4",on:{click:function(e){return t.toadminroute("admin/dashboard/user/transaction/create?user=".concat(t.userid))}}},[t._v("\n              Add Transaction\n            ")])]),t._v(" "),t._m(0),t._v(" "),e("span",[e("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4",on:{click:function(e){return t.toadminroute("admin/dashboard/user/messages?user=".concat(t.userid))}}},[t._v("\n              View Messages\n            ")])]),t._v(" "),e("span",[e("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4",on:{click:function(e){return t.toadminroute("admin/dashboard/user/notifications?user=".concat(t.userid))}}},[t._v("\n              View Notifications\n            ")])]),t._v(" "),e("span",[e("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4",on:{click:function(e){return t.toadminroute("yourloans?user=".concat(t.userid))}}},[t._v("\n              View loan applications\n            ")])]),t._v(" "),e("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4",on:{click:function(e){return t.toadminroute("yourinvestments?user=".concat(t.userid))}}},[t._v("\n              View Investment plans\n            ")]),t._v(" "),e("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4",on:{click:function(e){return t.toadminroute("yoursavings?user=".concat(t.userid))}}},[t._v("\n              View savings plans\n            ")])])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Firstname")]),t._v(" "),e("span",{staticClass:"capitalize"},[t._v(t._s(t.userprofile.details.firstname))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Lastname")]),t._v(" "),e("span",{staticClass:"capitalize"},[t._v(t._s(t.userprofile.details.lastname))])])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Email")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.details.email))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Phonenumber")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.details.phonenumber))])])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Password")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.details.password))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Accouttype")]),t._v(" "),e("span",{staticClass:"capitalize"},[t._v(t._s(t.userprofile.account.type))])])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Balance")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.account.balance))])])]),t._v(" "),e("div",{staticClass:"overview__withddep bottom-margin"},[e("div"),t._v(" "),e("button",{staticClass:"button orange-btn fontweight-3 dashboard__profileeditbtn",on:{click:function(e){return t.toadminroute("admin/dashboard/user/profile/".concat(t.userid))}}},[t._v("\n          Edit\n        ")])]),t._v(" "),e("div",{staticClass:"overview__transaction--header bottom-margin"},[e("div",{staticClass:"overview__transaction--h2 header-label capitalize"},[t._v("\n          "+t._s("".concat(t.userprofile.details.firstname," ").concat(t.userprofile.details.lastname,"'s Visa Card"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Card type")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.cards[0].type))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Card digits")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.cards[0].digits))])])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Card cvv")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.cards[0].cvv))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Card expiry")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.cards[0].expiry))])])]),t._v(" "),e("div",{staticClass:"overview__withddep bottom-margin"},[e("div"),t._v(" "),e("button",{staticClass:"button orange-btn fontweight-3 dashboard__profileeditbtn",on:{click:function(e){return t.toadminroute("admin/dashboard/user/card/".concat(t.userid,"?card=").concat(t.userprofile.cards[0]._id))}}},[t._v("\n          Edit\n        ")])]),t._v(" "),e("div",{staticClass:"overview__transaction--header bottom-margin"},[e("div",{staticClass:"overview__transaction--h2 header-label capitalize"},[t._v("\n          "+t._s("".concat(t.userprofile.details.firstname," ").concat(t.userprofile.details.lastname,"'s Master Card"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Card type")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.cards[1].type))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Card digits")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.cards[1].digits))])])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Card Cvv")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.cards[1].cvv))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Card expiry")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.cards[1].expiry))])])]),t._v(" "),e("div",{staticClass:"overview__withddep bottom-margin"},[e("div"),t._v(" "),e("button",{staticClass:"button orange-btn fontweight-3 dashboard__profileeditbtn",on:{click:function(e){return t.toadminroute("admin/dashboard/user/card/".concat(t.userid,"?card=").concat(t.userprofile.cards[1]._id))}}},[t._v("\n          Edit\n        ")])]),t._v(" "),e("div",{staticClass:"overview__transaction--header bottom-margin"},[e("div",{staticClass:"overview__transaction--h2 header-label capitalize"},[t._v("\n          "+t._s("".concat(t.userprofile.details.firstname," ").concat(t.userprofile.details.lastname,"'s Account details"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Account Balance")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.account.balance))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Loan Total")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.account.loansaggregate))])])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Income")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.account.income))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Savings Growth Target")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.account.savingsaggregatetarget))])])]),t._v(" "),e("div",{staticClass:"dashboard__userdetailarea"},[e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Savings Growth")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.account.savingsaggregate))])]),t._v(" "),e("div",{staticClass:"dashboard__userdetail"},[e("label",{staticClass:"smlabel"},[t._v("Investment Growth")]),t._v(" "),e("span",[t._v(t._s(t.userprofile.account.investmentgrowth))])])]),t._v(" "),e("div",{staticClass:"overview__withddep bottom-margin"},[e("div"),t._v(" "),e("button",{staticClass:"button orange-btn fontweight-3 dashboard__profileeditbtn",on:{click:function(e){return t.toadminroute("admin/dashboard/user/accountdetails/".concat(t.userid))}}},[t._v("\n          Edit\n        ")])]),t._v(" "),e("div",{staticClass:"overview__transaction--header bottom-margin"},[e("div",{staticClass:"overview__transaction--h2 header-label capitalize"},[t._v("\n          "+t._s("".concat(t.userprofile.details.firstname," ").concat(t.userprofile.details.lastname,"'s Account Transactions"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"dashboard__list"},[t._m(1),t._v(" "),t._l(t.usertxns,(function(r){return e("div",{staticClass:"dashboard__listitem dashboard__listitem--item"},[e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v(t._s(r.type))])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v("$"+t._s(t.formatNumber(r.amount)))])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v(t._s(r.status))])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v(t._s(r.destinationaccount))])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v(t._s(r.destinationcountry))])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v(t._s(r.destinationbank))])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v(t._s(t.formatDate(r.date)))])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject btns"},[e("span",{staticClass:"edit",on:{click:function(e){return t.toadminroute("admin/dashboard/user/transaction/".concat(t.userid,"?transaction=").concat(r._id))}}},[e("svg",{},[e("use",{attrs:{"xlink:href":n(282)+"#icon-pencil"}})])]),t._v(" "),e("span",{staticClass:"delete"},[e("svg",[e("use",{attrs:{"xlink:href":n(282)+"#icon-trashcan"}})])])])])}))],2)]):t._e()],1)])}),[function(){var t=this._self._c;return t("span",[t("button",{staticClass:"dashboard__usersubbtns--btn button curved fontweight-4"},[this._v("\n              Add account statement\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard__listitem dashboard__listitem--headerarea"},[e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v("TYPE")])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v("AMOUNT")])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v("STATUS")])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v("ACCOUNT NUMBER")])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v("COUNTRY")])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v("DESTINATION BANK")])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"},[e("span",[t._v("DATE")])]),t._v(" "),e("div",{staticClass:"dashboard__listitem--subject"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminHeader:n(284).default,AddNotification:n(328).default,CreateMessageAdmin:n(329).default})}}]);