(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{572:function(i,n,t){},683:function(i,n,t){"use strict";var o=t(572);t.n(o).a},770:function(i,n,t){"use strict";t.r(n);var o={data:function(){return{backgroundLoading:"primary",colorLoading:"#fff"}},methods:{openLoadingContained:function(){var i=this;this.$vs.loading({background:this.backgroundLoading,color:this.colorLoading,container:"#button-with-loading",scale:.45}),setTimeout(function(){i.$vs.loading.close("#button-with-loading > .con-vs-loading")},3e3)},openLoadingInDiv:function(){var i=this;this.$vs.loading({container:"#div-with-loading",scale:.6}),setTimeout(function(){i.$vs.loading.close("#div-with-loading > .con-vs-loading")},3e3)}}},a=(t(683),t(1)),s=Object(a.a)(o,function(){var i=this.$createElement,n=this._self._c||i;return n("div",{staticClass:"centerx"},[n("vs-button",{staticClass:"vs-con-loading__container",attrs:{id:"button-with-loading","vs-type":"relief","vs-color":"primary"},on:{click:this.openLoadingContained}},[this._v("Button with Loading")]),n("vs-button",{attrs:{"vs-type":"relief","vs-color":"primary"},on:{click:this.openLoadingInDiv}},[this._v("Div with Loading")]),this._m(0)],1)},[function(){var i=this.$createElement,n=this._self._c||i;return n("div",{staticClass:"fill-row"},[n("div",{staticClass:"vs-con-loading__container",attrs:{id:"div-with-loading"}},[this._v("Load Me!")])])}],!1,null,null,null);n.default=s.exports}}]);