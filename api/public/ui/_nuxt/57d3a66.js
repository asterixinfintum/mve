(window.webpackJsonp=window.webpackJsonp||[]).push([[36,10],{284:function(e,t,n){e.exports=n.p+"img/sprite.94e5b04.svg"},285:function(e,t,n){e.exports=n.p+"img/logo.9c64eb0.png"},288:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this._self._c;return e("div",{staticClass:"userheader__logoarea"},[e("figure",[e("img",{attrs:{src:n(285)}})])])}],l={mixins:[n(89).a],mounted:function(){var e=this.$route.query.admin;this.getcurrentadmin(e),this.getusers(),this.getloans(),this.getinvestmentplans(),this.getsavingsplans(),this.getnotifications()}},o=n(28),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"dashboard__header userheader"},[e._m(0),e._v(" "),t("div",{staticClass:"userheader__menu"},[t("div",{staticClass:"userheader__menuitem",on:{click:function(t){return e.toadminroute("admin/dashboard/")}}},[t("span",[t("svg",{staticClass:"feature__icon"},[t("use",{attrs:{"xlink:href":n(284)+"#icon-user"}})])]),e._v(" "),t("label",[e._v("Users")])]),e._v(" "),t("div",{staticClass:"userheader__menuitem"},[t("span",[t("svg",{staticClass:"feature__icon"},[t("use",{attrs:{"xlink:href":n(284)+"#icon-hotairballoon"}})])]),e._v(" "),t("label",[e._v("General Notifications")])]),e._v(" "),t("div",{staticClass:"userheader__menuitem",on:{click:function(t){return e.toadminroute("admin/dashboard/loans")}}},[t("span",[t("svg",{staticClass:"feature__icon"},[t("use",{attrs:{"xlink:href":n(284)+"#icon-pig"}})])]),e._v(" "),t("label",[e._v("Loans")])]),e._v(" "),t("div",{staticClass:"userheader__menuitem",on:{click:function(t){return e.toadminroute("admin/dashboard/investmentplans")}}},[t("span",[t("svg",{staticClass:"feature__icon"},[t("use",{attrs:{"xlink:href":n(284)+"#icon-tree"}})])]),e._v(" "),t("label",[e._v("Investment Plans")])]),e._v(" "),t("div",{staticClass:"userheader__menuitem",on:{click:function(t){return e.toadminroute("admin/dashboard/savingsplans")}}},[t("span",[t("svg",{staticClass:"feature__icon"},[t("use",{attrs:{"xlink:href":n(284)+"#icon-wallet"}})])]),e._v(" "),t("label",[e._v("Savings Plans")])]),e._v(" "),t("div",{staticClass:"userheader__menuitem"},[t("span",[t("svg",{staticClass:"feature__icon"},[t("use",{attrs:{"xlink:href":n(284)+"#icon-gift"}})])]),e._v(" "),t("label",[e._v("Messages")])]),e._v(" "),t("div",{staticClass:"userheader__menuitem",on:{click:e.triggerlogout}},[t("span",[t("svg",{staticClass:"feature__icon"},[t("use",{attrs:{"xlink:href":n(284)+"#icon-key"}})])]),e._v(" "),t("label",[e._v("Logout")])])]),e._v(" "),t("div")])])}),r,!1,null,null,null);t.default=component.exports},401:function(e,t,n){"use strict";n.r(t);n(44),n(37),n(70);var r={data:function(){return{name:"",minimumaccountbalance:"",minimumdeposit:"",description:"",requirements:"",compoundingfrequency:"",frequency:"",foruser:null,frequencyunit:"",duration:"",unit:""}},mixins:[n(89).a],methods:{submit:function(){var e=this,t=this.name,n=this.minimumaccountbalance,r=this.minimumdeposit,l=this.description,o=this.requirements,c=this.foruser,d=this.compoundingfrequency,m=this.frequency,v=this.frequencyunit,f=this.duration,h=this.unit,_={name:t,minimumaccountbalance:n,minimumdeposit:r,description:l,requirements:o.split(","),foruser:c,compoundingfrequency:d,contributionplan:{frequency:m,frequencyunit:v},term:{duration:f,unit:h}};this.toggleverbiage("Adding new savingsplan item"),this.onspinner(),this.createsavingsitem(_).then((function(){e.toggleverbiage(null),e.offspinner(),e.toadminroute("admin/dashboard")}))}},computed:{userid:function(){var e=this.$route.query.user;return e||null},allowsubmit:function(){var e=this.name,t=this.minimumaccountbalance,n=this.minimumdeposit,r=this.description,l=this.requirements,o=this.compoundingfrequency,c=this.frequency,d=this.frequencyunit,m=this.duration,v=this.unit;return!!(e.length&&t.length&&n.length&&r.length&&o.length&&l.length&&c.length&&d.length&&m.length&&v.length)}},mounted:function(){this.userid&&(this.foruser=this.userid,this.getuser(this.userid))}},l=n(28),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"dashboard overview"},[t("AdminHeader"),e._v(" "),t("div",{staticClass:"dashboard__content halfscreen-width"},[t("div",{staticClass:"overview__transaction--header bottom-margin"},[t("div",{staticClass:"overview__transaction--h2 header-label capitalize"},[e._v("\n          Create a savings plan item to display to\n          "+e._s(e.userid&&e.userprofile?e.userprofile.details.firstname:"clients")+"\n        ")])]),e._v(" "),t("div",{staticClass:"input-area fullbody grid"},[t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Name")]),e._v(" "),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Choose what to name this savingsplan item",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Minimum account balance")]),e._v(" "),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minimumaccountbalance,expression:"minimumaccountbalance"}],attrs:{placeholder:"Minimum account balance to be elligible",type:"text"},domProps:{value:e.minimumaccountbalance},on:{input:function(t){t.target.composing||(e.minimumaccountbalance=t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"input-area fullbody grid"},[t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Minimum deposit allowed")]),e._v(" "),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.minimumdeposit,expression:"minimumdeposit"}],attrs:{type:"text",placeholder:""},domProps:{value:e.minimumdeposit},on:{input:function(t){t.target.composing||(e.minimumdeposit=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Compounding frequency (savings growth rate eg 0.6)")]),e._v(" "),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.compoundingfrequency,expression:"compoundingfrequency"}],attrs:{type:"text",placeholder:""},domProps:{value:e.compoundingfrequency},on:{input:function(t){t.target.composing||(e.compoundingfrequency=t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"input-area fullbody grid"},[t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Duration of savings eg (20)")]),e._v(" "),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"duration"}],attrs:{type:"text",placeholder:""},domProps:{value:e.duration},on:{input:function(t){t.target.composing||(e.duration=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Unit of Duration of savings eg (months, days, years etc)")]),e._v(" "),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.unit,expression:"unit"}],attrs:{type:"text",placeholder:""},domProps:{value:e.unit},on:{input:function(t){t.target.composing||(e.unit=t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"input-area fullbody grid"},[t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Frequency of deposits required eg (5)")]),e._v(" "),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.frequency,expression:"frequency"}],attrs:{type:"text",placeholder:""},domProps:{value:e.frequency},on:{input:function(t){t.target.composing||(e.frequency=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Unit of Frequency of depositseg (months, days, years etc)")]),e._v(" "),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.frequencyunit,expression:"frequencyunit"}],attrs:{type:"text",placeholder:""},domProps:{value:e.frequencyunit},on:{input:function(t){t.target.composing||(e.frequencyunit=t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Describe this savings plan")]),e._v(" "),t("div",{staticClass:"input"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{placeholder:"description for this savings plan"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"input-area fullbody"},[t("label",{staticClass:"smlabel"},[e._v("Requirements")]),e._v(" "),t("div",{staticClass:"input"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.requirements,expression:"requirements"}],attrs:{placeholder:"Requirements should be comma seperated"},domProps:{value:e.requirements},on:{input:function(t){t.target.composing||(e.requirements=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"overview__withddep"},[e.allowsubmit?t("button",{staticClass:"button orange-btn fontweight-3 half-flex-space loanbtn curved",on:{click:e.submit}},[e._v("\n          Submit\n        ")]):e._e(),e._v(" "),e.allowsubmit?e._e():t("button",{staticClass:"button orange-btn-faint fontweight-3 half-flex-space loanbtn curved"},[e._v("\n          Submit\n        ")])])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AdminHeader:n(288).default})}}]);