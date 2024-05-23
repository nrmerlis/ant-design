"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8301],{368301:function(Un,Q,t){t.r(Q);var ln=t(97857),f=t.n(ln),cn=t(168400),a=t.n(cn),sn=t(667294),dn=t(605071),q=t(647759),U=t(693967),o=t.n(U),nn=t(385956),E=t(785893),M,en,tn,un=(0,q.kc)(function(_){var i=_.token,A=_.css,P=i.antCls;return{anchorToc:A(M||(M=a()([`
      scrollbar-width: thin;
      scrollbar-color: unset;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),P,P,i.fontSizeSM),tocWrapper:A(en||(en=a()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      padding: `,`px;
      border-radius: `,`px;
      box-sizing: border-box;
      margin-inline-end: calc(16px - 100vw + 100%);
      z-index: 10;
      .toc-debug {
        color: `,`;
        &:hover {
          color: `,`;
        }
      }
      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - `,`px) !important;
        margin: auto;
        overflow: auto;
        padding: `,`px;
        backdrop-filter: blur(8px);
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),i.headerHeight+i.contentMarginTop-8,i.paddingXS,i.borderRadius,i.purple6,i.purple5,i.headerHeight+i.contentMarginTop+24,i.paddingXXS,i.screenLG),articleWrapper:A(tn||(tn=a()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 `,`px;
        }
      }
    `])),i.screenLG,i.paddingLG*2)}}),fn=function(i){var A=i.showDebug,P=i.debugDemos,C=P===void 0?[]:P,vn=un(),w=vn.styles,$=(0,q.Fg)(),j=(0,nn.useRouteMeta)(),k=(0,nn.useTabMeta)(),hn=function(v){var x;return{href:"#".concat(v.id),title:v.title,key:v.id,children:(x=v.children)===null||x===void 0?void 0:x.filter(function(S){return A||!C.includes(S.id)}).map(function(S){return{key:S.id,href:"#".concat(S.id),title:(0,E.jsx)("span",{className:o()({"toc-debug":C.includes(S.id)}),children:S==null?void 0:S.title})}})}},gn=sn.useMemo(function(){return((k==null?void 0:k.toc)||j.toc).reduce(function(B,v){if(v.depth===2)B.push(f()({},v));else if(v.depth===3){var x=B[B.length-1];x&&(x.children=x.children||[],x.children.push(f()({},v)))}return B},[])},[k==null?void 0:k.toc,j.toc]);return j.frontmatter.toc?(0,E.jsx)("section",{className:w.tocWrapper,children:(0,E.jsx)(dn.Z,{affix:!1,className:w.anchorToc,targetOffset:$.anchorTop,showInkInFixed:!0,items:gn.map(hn)})}):null};Q.default=fn},605071:function(Un,Q,t){t.d(Q,{Z:function(){return Xn}});var ln=t(97857),f=t.n(ln),cn=t(9783),a=t.n(cn),sn=t(719632),dn=t.n(sn),q=t(805574),U=t.n(q),o=t(667294),nn=t(693967),E=t.n(nn),M=t(656790),en=t(517423),tn=t(982673),un=t(658192),fn=t(252901),_=t(73287),i=t(670544),A=o.createContext(void 0),P=A,C=t(785893),vn=function(n){var e=n.href,s=n.title,h=n.prefixCls,u=n.children,X=n.className,g=n.target,R=n.replace,N=o.useContext(P),L=N||{},K=L.registerLink,H=L.unregisterLink,Z=L.scrollTo,W=L.onClick,b=L.activeLink,mn=L.direction;o.useEffect(function(){return K==null||K(e),function(){H==null||H(e)}},[e]);var I=function(O){R&&(O.preventDefault(),window.location.replace(e)),W==null||W(O,{title:s,href:e}),Z==null||Z(e)};if(!1)var pn;var F=o.useContext(_.E_),G=F.getPrefixCls,m=G("anchor",h),rn=b===e,Bn=E()("".concat(m,"-link"),X,a()({},"".concat(m,"-link-active"),rn)),Cn=E()("".concat(m,"-link-title"),a()({},"".concat(m,"-link-title-active"),rn));return(0,C.jsxs)("div",{className:Bn,children:[(0,C.jsx)("a",{className:Cn,href:e,title:typeof s=="string"?s:"",target:g,onClick:I,children:s}),mn!=="horizontal"?u:null]})},w=vn,$=t(900210),j=t(548073),k=t(286665),hn=t(986943),gn=function(n){var e=n.componentCls,s=n.holderOffsetBlock,h=n.motionDurationSlow,u=n.lineWidthBold,X=n.colorPrimary,g=n.lineType,R=n.colorSplit,N=n.calc;return a()({},"".concat(e,"-wrapper"),a()(a()(a()({marginBlockStart:N(s).mul(-1).equal(),paddingBlockStart:s},e,f()(f()({},(0,j.Wf)(n)),{},a()({position:"relative",paddingInlineStart:u},"".concat(e,"-link"),a()(a()({paddingBlock:n.linkPaddingBlock,paddingInline:"".concat((0,$.unit)(n.linkPaddingInlineStart)," 0"),"&-title":f()(f()({},j.vS),{},{position:"relative",display:"block",marginBlockEnd:n.anchorTitleBlock,color:n.colorText,transition:"all ".concat(n.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},"&-active > ".concat(e,"-link-title"),{color:n.colorPrimary}),"".concat(e,"-link"),{paddingBlock:n.anchorPaddingBlockSecondary})))),"&:not(".concat(e,"-wrapper-horizontal)"),a()({},e,a()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat((0,$.unit)(u)," ").concat(g," ").concat(R),content:'" "'}},"".concat(e,"-ink"),a()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(h," ease-in-out"),width:u,backgroundColor:X},"&".concat(e,"-ink-visible"),{display:"inline-block"})))),"".concat(e,"-fixed ").concat(e,"-ink ").concat(e,"-ink"),{display:"none"}))},B=function(n){var e=n.componentCls,s=n.motionDurationSlow,h=n.lineWidthBold,u=n.colorPrimary;return a()({},"".concat(e,"-wrapper-horizontal"),a()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"".concat((0,$.unit)(n.lineWidth)," ").concat(n.lineType," ").concat(n.colorSplit),content:'" "'}},e,a()(a()({overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},"".concat(e,"-link:first-of-type"),{paddingInline:0}),"".concat(e,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(s," ease-in-out, width ").concat(s," ease-in-out"),height:h,backgroundColor:u})))},v=function(n){return{linkPaddingBlock:n.paddingXXS,linkPaddingInlineStart:n.padding}},x=(0,k.I$)("Anchor",function(d){var n=d.fontSize,e=d.fontSizeLG,s=d.paddingXXS,h=d.calc,u=(0,hn.TS)(d,{holderOffsetBlock:s,anchorPaddingBlockSecondary:h(s).div(2).equal(),anchorTitleBlock:h(n).div(14).mul(3).equal(),anchorBallSize:h(e).div(2).equal()});return[gn(u),B(u)]},v);function S(){return window}function In(d,n){if(!d.getClientRects().length)return 0;var e=d.getBoundingClientRect();return e.width||e.height?n===window?(n=d.ownerDocument.documentElement,e.top-n.clientTop):e.top-n.getBoundingClientRect().top:e.top}var Dn=/#([\S ]+)$/,wn=function(n){var e,s=n.rootClassName,h=n.prefixCls,u=n.className,X=n.style,g=n.offsetTop,R=n.affix,N=R===void 0?!0:R,L=n.showInkInFixed,K=L===void 0?!1:L,H=n.children,Z=n.items,W=n.direction,b=W===void 0?"vertical":W,mn=n.bounds,I=n.targetOffset,pn=n.onClick,F=n.onChange,G=n.getContainer,m=n.getCurrentAnchor,rn=n.replace;if(!1)var Bn;var Cn=o.useState([]),xn=U()(Cn,2),O=xn[0],On=xn[1],Kn=o.useState(null),Mn=U()(Kn,2),V=Mn[0],Hn=Mn[1],Sn=o.useRef(V),_n=o.useRef(null),yn=o.useRef(null),En=o.useRef(!1),an=o.useContext(_.E_),Zn=an.direction,z=an.anchor,Fn=an.getTargetContainer,Gn=an.getPrefixCls,y=Gn("anchor",h),jn=(0,i.Z)(y),Vn=x(y,jn),Ln=U()(Vn,3),Jn=Ln[0],Yn=Ln[1],Qn=Ln[2],J=(e=G!=null?G:Fn)!==null&&e!==void 0?e:S,Tn=JSON.stringify(O),qn=(0,M.zX)(function(r){O.includes(r)||On(function(l){return[].concat(dn()(l),[r])})}),ne=(0,M.zX)(function(r){O.includes(r)&&On(function(l){return l.filter(function(c){return c!==r})})}),ee=function(){var l,c=(l=_n.current)===null||l===void 0?void 0:l.querySelector(".".concat(y,"-link-title-active"));if(c&&yn.current){var T=yn.current.style,p=b==="horizontal";T.top=p?"":"".concat(c.offsetTop+c.clientHeight/2,"px"),T.height=p?"":"".concat(c.clientHeight,"px"),T.left=p?"".concat(c.offsetLeft,"px"):"",T.width=p?"".concat(c.clientWidth,"px"):"",p&&(0,en.Z)(c,{scrollMode:"if-needed",block:"nearest"})}},te=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,p=[],bn=J();if(l.forEach(function(D){var Y=Dn.exec(D==null?void 0:D.toString());if(Y){var Wn=document.getElementById(Y[1]);if(Wn){var zn=In(Wn,bn);zn<=c+T&&p.push({link:D,top:zn})}}}),p.length){var on=p.reduce(function(D,Y){return Y.top>D.top?Y:D});return on.link}return""},Pn=(0,M.zX)(function(r){if(Sn.current!==r){var l=typeof m=="function"?m(r):r;Hn(l),Sn.current=l,F==null||F(r)}}),kn=o.useCallback(function(){if(!En.current){var r=te(O,I!==void 0?I:g||0,mn);Pn(r)}},[Tn,I,g]),Rn=o.useCallback(function(r){Pn(r);var l=Dn.exec(r);if(l){var c=document.getElementById(l[1]);if(c){var T=J(),p=(0,tn.Z)(T,!0),bn=In(c,T),on=p+bn;on-=I!==void 0?I:g||0,En.current=!0,(0,un.Z)(on,{getContainer:J,callback:function(){En.current=!1}})}}},[I,g]),re=E()(Yn,Qn,jn,s,"".concat(y,"-wrapper"),a()(a()({},"".concat(y,"-wrapper-horizontal"),b==="horizontal"),"".concat(y,"-rtl"),Zn==="rtl"),u,z==null?void 0:z.className),ae=E()(y,a()({},"".concat(y,"-fixed"),!N&&!K)),oe=E()("".concat(y,"-ink"),a()({},"".concat(y,"-ink-visible"),V)),ie=f()(f()({maxHeight:g?"calc(100vh - ".concat(g,"px)"):"100vh"},z==null?void 0:z.style),X),le=function r(l){return Array.isArray(l)?l.map(function(c){return(0,o.createElement)(w,f()(f()({replace:rn},c),{},{key:c.key}),b==="vertical"&&r(c.children))}):null},Nn=(0,C.jsx)("div",{ref:_n,className:re,style:ie,children:(0,C.jsxs)("div",{className:ae,children:[(0,C.jsx)("span",{className:oe,ref:yn}),"items"in n?le(Z):H]})});o.useEffect(function(){var r=J();return kn(),r==null||r.addEventListener("scroll",kn),function(){r==null||r.removeEventListener("scroll",kn)}},[Tn]),o.useEffect(function(){typeof m=="function"&&Pn(m(Sn.current||""))},[m]),o.useEffect(function(){ee()},[b,m,Tn,V]);var ce=o.useMemo(function(){return{registerLink:qn,unregisterLink:ne,scrollTo:Rn,activeLink:V,onClick:pn,direction:b}},[V,pn,Rn,b]);return Jn((0,C.jsx)(P.Provider,{value:ce,children:N?(0,C.jsx)(fn.Z,{offsetTop:g,target:J,children:Nn}):Nn}))},$n=wn,An=$n;An.Link=w;var Xn=An}}]);
