(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{GCDn:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,[n.createElement("title",{id:"small-location",key:0},"Location"),n.createElement("path",{fill:"#FF444F",d:"M8 0c3.314 0 6 2.686 6 6 0 2.126-1.775 5.17-5.31 9.218L8 16l-.374-.422C3.88 11.35 2 8.188 2 6c0-3.314 2.686-6 6-6zm0 1C5.239 1 3 3.239 3 6c0 1.687 1.466 4.31 4.411 7.802l.589.686.589-.686C11.534 10.31 13 7.687 13 6c0-2.761-2.239-5-5-5zm0 3.1c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm0 1c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z",key:1})])}r.defaultProps={role:"img","aria-labelledby":"small-location",width:"16",height:"16",viewBox:"0 0 16 16"},e.exports=r,r.default=r},Hx6W:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return s}));a("q1tI");var n=a("vOnD"),r=a("O4Du"),i=a("Z/CU"),o=a("Ma3E"),c=a.n(o),l=(Object(n.c)(c.a).withConfig({displayName:"_team-card__ChevronRight",componentId:"o8uvdz-0"})(["transform:rotate(180deg);width:16px;height:16px;"]),Object(n.d)(["0%,20%,80%,100%{transform:translateX(0) rotate(180deg);}40%{transform:translateX(18px) rotate(180deg);}50%{transform:translateX(0) rotate(180deg);}60%{transform:translateX(9px) rotate(180deg);}"])),m=Object(n.c)(i.d).withConfig({displayName:"_team-card__StyledCard",componentId:"o8uvdz-1"})(["text-decoration:none;position:relative;height:",";width:100%;box-shadow:0 16px 20px 0 rgba(0,0,0,0.05),0 0 20px 0 rgba(0,0,0,0.05);border-radius:4px;background:var(--color-white);transition:all 0.3s;overflow:hidden;cursor:pointer;&:hover{transform:translateY(-1.1rem) scale(1.02);#carousel-chevron-icon-svg{g{fill:var(--color-red);}animation:"," 1.2s infinite;}}"],(function(e){return e.height?e.height:"auto"}),l),s=n.c.article.withConfig({displayName:"_team-card__NormalCard",componentId:"o8uvdz-2"})(["position:relative;height:",";width:100%;box-shadow:0 16px 20px 0 rgba(0,0,0,0.05),0 0 20px 0 rgba(0,0,0,0.05);border-radius:4px;background:var(--color-white);"],(function(e){return e.height?e.height:"auto"}));n.c.div.withConfig({displayName:"_team-card__ImageWrapper",componentId:"o8uvdz-3"})(["height:144px;width:100%;"]),n.c.div.withConfig({displayName:"_team-card__StyledContent",componentId:"o8uvdz-4"})(["padding:3.2rem;width:100%;"]),Object(n.c)(r.j).withConfig({displayName:"_team-card__StyledHeader",componentId:"o8uvdz-5"})(["margin-bottom:0.8rem;font-size:var(--text-size-sm);"]),n.c.div.withConfig({displayName:"_team-card__StyledLink",componentId:"o8uvdz-6"})(["position:absolute;bottom:3.2rem;right:3.2rem;"])},c1Lk:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("vOnD"),o=a("ilPa"),c=a("yRqq"),l=a("vTjG"),m=a("aC/h"),s=a("wYtL"),d=a("srZm"),u=a.n(d),p=i.c.form.withConfig({displayName:"_search-form__StyledForm",componentId:"sc-1rymifi-0"})(["position:relative;input{&::placeholder{opacity:1 !important;}}@media ","{margin-top:4.6rem;.input-wrapper{width:100% !important;}}"],m.a.tabletL),h=Object(i.c)(u.a).withConfig({displayName:"_search-form__StyledSearchIcon",componentId:"sc-1rymifi-1"})(["position:absolute;left:1.6rem;top:1.2rem;height:16px;width:16px;path{fill:var(--color-black);}"]),g=r.a.memo((function(e){var t=e.search,a=e.setSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(h,null),r.a.createElement(s.b,{style:{marginLeft:"4rem"},value:t,onChange:function(e){return a(e.target.value)},placeholder:"Search jobs",autoFocus:!0})))}));g.displayName="SearchForm";var f=g,b=a("KQm4"),_=a("g2Kc"),y=a("O4Du"),v=i.c.div.withConfig({displayName:"_search-filters__FilterContainer",componentId:"sc-8sx1ca-0"})(["width:100%;max-width:28.2rem;@media ","{max-width:unset;}"],m.a.tabletL),w=i.c.div.withConfig({displayName:"_search-filters__AccordionWrapper",componentId:"sc-8sx1ca-1"})(["div:first-child{box-shadow:unset;}"]),E=Object(i.c)(y.t).withConfig({displayName:"_search-filters__ClearFilter",componentId:"sc-8sx1ca-2"})(["margin-left:1.6rem;cursor:pointer;&:hover{text-decoration:underline;}"]),x={padding:0},C={borderBottom:"1px solid var(--color-grey-2)",display:"flex"},j=Object(i.c)(_.e).withConfig({displayName:"_search-filters__CheckboxWrapper",componentId:"sc-8sx1ca-3"})(["cursor:pointer;"]),k=function(e){var t=e.filters,a=e.setFilters,n=function(e){t.includes(e)?a(t.filter((function(t){return t!==e}))):a([].concat(Object(b.a)(t),[e]))};return r.a.createElement(v,null,r.a.createElement(_.e,{jc:"space-between"},r.a.createElement(y.t,{size:"var(--text-size-xs)"},"Filters"),r.a.createElement(E,{onClick:function(){return a([])},size:"var(--text-size-xs)"},"Clear filters")),r.a.createElement(y.i,{height:"2px"}),r.a.createElement(w,null,r.a.createElement(y.a,{has_single_state:!0,is_default_open:!0},r.a.createElement(y.b,{header:"Teams",header_style:x,style:C,arrow_thin:!0},r.a.createElement(_.e,{direction:"column",m:"1.6rem 0 0.8rem"},Object.keys(c.g).sort().map((function(e,a){return r.a.createElement(j,{key:a,jc:"flex-start",ai:"center",mb:"0.8rem",onClick:function(){return n(e)}},r.a.createElement(y.h,{onChange:function(){return n(e)},checked:t.includes(e),secondary:!0}),r.a.createElement(y.t,null,c.g[e]))})))),r.a.createElement(y.b,{header:"Location",header_style:x,style:C,arrow_thin:!0},r.a.createElement(_.e,{direction:"column",m:"1.6rem 0 0.8rem"},Object.keys(l.g).sort().map((function(e,a){return r.a.createElement(j,{key:a,jc:"flex-start",ai:"center",mb:"0.8rem",onClick:function(){return n(e)}},r.a.createElement(y.h,{onChange:function(){return n(e)},checked:t.includes(e),secondary:!0}),r.a.createElement(y.t,null,l.g[e]))})))))))},z=a("Hx6W"),O=a("txul"),I=a("GCDn"),N=a.n(I),S=Object(i.c)(N.a).withConfig({displayName:"_card-list__StyledLocation",componentId:"sc-5uzb9c-0"})(["margin-right:0.8rem;& path{fill:var(--color-black);}"]),F=Object(i.c)(z.a).withConfig({displayName:"_card-list__JobCard",componentId:"sc-5uzb9c-1"})(["padding:3.2rem;margin-bottom:2.4rem;&:last-child{margin-bottom:0;}> ","{margin-top:1.6rem;@media ","{margin-bottom:1.6rem;}}"],_.e,m.a.tabletL),L=i.c.ul.withConfig({displayName:"_card-list__Ul",componentId:"sc-5uzb9c-2"})(["list-style-type:disc;font-size:var(--text-size-s);padding-left:2rem;color:var(--color-black);margin-top:1.6rem;margin-bottom:2.8rem;"]),D=i.c.li.withConfig({displayName:"_card-list__Li",componentId:"sc-5uzb9c-3"})(["margin-bottom:1.6rem;&:last-child{margin-bottom:0;}"]),T=Object(i.c)(y.i).withConfig({displayName:"_card-list__StyledDivider",componentId:"sc-5uzb9c-4"})(["margin-top:1.6rem;margin-bottom:1.6rem;"]),W=Object(i.c)(_.e).withConfig({displayName:"_card-list__StyledFlex",componentId:"sc-5uzb9c-5"})(["margin:0 2.4rem;@media ","{margin:0;}"],m.a.tabletL),q=function(e){var t=e.position;return r.a.createElement(F,{to:"careers/jobs/job#"+Object(O.z)(t.id)},r.a.createElement(y.j,{size:"var(--text-size-sm)"},t.title),r.a.createElement(_.e,{jc:"flex-start",ai:"center",tablet_ai:"flex-start",tablet_direction:"column"},r.a.createElement(y.t,null,c.g[t.team]),r.a.createElement(W,{width:"auto",height:"auto",ai:"center"},r.a.createElement(S,null),r.a.createElement(y.t,null,l.g[t.location])),r.a.createElement(_.j.Desktop,null,r.a.createElement(y.t,null,t.type))),r.a.createElement(_.j.Desktop,null,r.a.createElement(T,{height:"2px"}),r.a.createElement(y.t,{weight:"bold"},"Qualifications:"),r.a.createElement(L,null,t.qualifications&&t.qualifications.map((function(e,t){return r.a.createElement(D,{key:t},r.a.createElement(y.t,null,e))})))),r.a.createElement(_.e,null,r.a.createElement(s.c,{flat:"true",to:"/careers/jobs/job#"+Object(O.z)(t.id)},"View more")))},P=Object(i.c)(y.t).withConfig({displayName:"_pagination__TopText",componentId:"sc-1d0vyzc-0"})(["font-size:var(--text-size-xs);margin-bottom:2.6rem;margin-top:5.4rem;"]),R=Object(i.c)(s.a).withConfig({displayName:"_pagination__ButtonLeft",componentId:"sc-1d0vyzc-1"})(["margin-right:1.6rem;"]),A=function(e){var t=e.children,a=e.page_limit,n=r.a.Children.toArray(t),i=n.length,o=i>a,c=r.a.useState(a),l=c[0],m=c[1],d=r.a.useState(l-a),u=d[0],p=d[1],h=l<i,g=l>a,f=o?l:i,b=n.slice(u,f);r.a.useEffect((function(){m(a),p(0)}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.e,{jc:"space-between"},r.a.createElement(P,null,"Viewing "+(u+1)+"-"+f+" of "+i)),b.map((function(e){return e})),o&&r.a.createElement(_.e,{jc:"space-between",ai:"center"},r.a.createElement(P,null,"Viewing "+(u+1)+"-"+f+" of "+i),r.a.createElement(_.e,{width:"auto"},r.a.createElement(R,{flat:!0,onClick:function(){var e=l-a;g&&(e<a?(m(a),p(0)):(m(e),p(e-a)),window.scrollTo({top:0,behavior:"smooth"}))},disabled:!g},"Previous"),r.a.createElement(s.a,{flat:!0,onClick:function(){var e=l+a;h&&(e>i?(m(i),p(l)):(m(e),p(e-a)),window.scrollTo({top:0,behavior:"smooth"}))},disabled:!h},"Next"))))},B=function(){return r.a.createElement("div",{style:{marginTop:"10rem"}},r.a.createElement(y.j,{as:"h2",size:"var(--text-size-l)",align:"center"},"No results found."),r.a.createElement(y.t,{align:"center",style:{marginTop:"1.6rem"}},"There are currently no open positions. Search again or try removing filters."))},H=a("PkOE"),U=a.n(H),J=Object(i.c)(U.a).withConfig({displayName:"_badges__CrossIconStyled",componentId:"sc-1oymmgi-0"})(["height:16px;width:16px;g{g{g{fill:var(--color-black);}}}"]),X=i.c.div.withConfig({displayName:"_badges__BadgeContainer",componentId:"sc-1oymmgi-1"})(["border-radius:12px;background-color:var(--color-grey-11);padding:3px 8px;margin:0.4rem;display:flex;align-items:center;svg{margin-left:8px;cursor:pointer;}"]),G=Object(i.c)(_.e).withConfig({displayName:"_badges__BadgeWrapper",componentId:"sc-1oymmgi-2"})(["flex-wrap:wrap;> *:not(:last-child){margin-right:0.8rem;}"]),V=function(e){var t=e.text,a=e.onClick;return r.a.createElement(X,null,r.a.createElement(y.t,{size:"var(--text-size-xxs)"},t),r.a.createElement(J,{onClick:a}))},Z=function(e){var t=e.filters,a=e.setFilters;return r.a.createElement(G,{jc:"unset"},t.map((function(e,n){return r.a.createElement(V,{onClick:function(){return n=e,void a(t.filter((function(e){return e!==n})));var n},key:n,text:c.a[e]})})))},K=a("8k0H"),M=a("Z/CU"),Q=Object(i.c)(y.i).withConfig({displayName:"jobs__StyledDivider",componentId:"sc-184jvr1-0"})(["margin:0 5rem;@media ","{display:none;}"],m.a.tabletL),Y=function(){var e=new URLSearchParams(window.location.search).get("filter");return e?e.split(",").filter((function(e){return!!c.g[e]||!!l.g[e]})):[]},$=function(){var e=new URLSearchParams(window.location.search).get("search");return e||""},ee=Object(O.f)((function(e,t){return a=e,n=t,r=["?filter="],Array.isArray(a)&&(a.length?a.forEach((function(e,t){0===t?r.push(e):r.push(","+e)})):r.splice(1,r.length)),r.push("&search="+n),void window.history.pushState(null,null,r.join(""));var a,n,r}),400),te=Object(i.c)(_.b).withConfig({displayName:"jobs__SearchContainer",componentId:"sc-184jvr1-1"})(["@media ","{flex-direction:column;}"],m.a.tabletL),ae=function(e,t){var a=Object(c.e)(e);return Object(o.a)(a,t.trim(),{keys:["title","team","location"],threshold:o.a.rankings.WORD_STARTS_WITH})};t.default=Object(M.e)()((function(){if(!Object(O.s)())return null;var e=r.a.useState(Y),t=e[0],a=e[1],n=r.a.useState($),i=n[0],o=n[1],c=r.a.useState((function(){return ae(t,i)})),l=c[0],m=c[1];return r.a.useEffect((function(){ee(t,i);var e=ae(t,i);m(e)}),[i,t]),r.a.createElement(K.a,{type:"careers",padding_top:"10rem"},r.a.createElement(_.h,{title:Object(M.g)("Job roles listing | Deriv"),description:Object(M.g)("Find your role at Deriv by browsing our job listing. Filter by team and location to find the perfect job for you."),no_index:!0}),r.a.createElement(_.i,null,r.a.createElement(te,{align:"flex-start"},r.a.createElement(k,{filters:t,setFilters:a}),r.a.createElement(Q,{height:"104.6rem",width:"2px"}),r.a.createElement(_.e,{direction:"column"},r.a.createElement(f,{search:i,setSearch:o}),r.a.createElement(Z,{filters:t,setFilters:a}),!!l.length&&r.a.createElement(A,{page_limit:4},l.map((function(e,t){return r.a.createElement(q,{key:t,position:e})}))),!l.length&&r.a.createElement(B,null)))))}))}}]);
//# sourceMappingURL=component---src-pages-careers-jobs-index-js-001bdfe6fb18dc6799a7.js.map