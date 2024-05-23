"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6720],{366720:function(J,E,n){n.r(E);var U=n(805574),M=n.n(U),N=n(97857),o=n.n(N),L=n(168400),r=n.n(L),d=n(667294),s=n(639389),Q=n.n(s),T=n(647759),y=n(693967),P=n.n(y),I=n(361446),R=n(438199),i=n(785893),O,p,x,g,K=(0,T.kc)(function(l){var e=l.token,t=l.css,_=e.colorSplit,a=e.iconCls,u=e.fontSizeIcon;return{prevNextNav:t(O||(O=r()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: `,`px;
      border-top: 1px solid `,`;
      display: flex;
    `])),e.fontSize,_),pageNav:t(p||(p=r()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all `,`;
      }

      .chinese {
        margin-inline-start: `,`px;
      }
    `])),a,u,e.motionDurationSlow,e.marginXXS),prevNav:t(x||(x=r()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end `,`;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `])),e.motionDurationSlow),nextNav:t(g||(g=r()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start `,`;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])),e.motionDurationSlow)}}),B=function l(e){return Array.isArray(e)?e.reduce(function(t,_){if(!_)return t;if("children"in _&&_.children){var a;return t.concat((a=l(_.children))!==null&&a!==void 0?a:[])}return t.concat(_)},[]):null},W=function(e){var t=e.rtl,_=K(),a=_.styles,u={className:"footer-nav-icon-before"},D={className:"footer-nav-icon-after"},S=t?(0,i.jsx)(s.RightOutlined,o()({},u)):(0,i.jsx)(s.LeftOutlined,o()({},u)),z=t?(0,i.jsx)(s.LeftOutlined,o()({},D)):(0,i.jsx)(s.RightOutlined,o()({},D)),X=(0,I.Z)({before:S,after:z}),j=M()(X,2),b=j[0],h=j[1],Z=(0,d.useContext)(R.Z),F=Z.isMobile,G=(0,d.useMemo)(function(){var c=B(b);if(!c)return[null,null];var v=-1;return c.forEach(function(A,H){A&&A.key===h&&(v=H)}),[c[v-1],c[v+1]]},[b,h]),C=M()(G,2),f=C[0],m=C[1];return F?null:(0,i.jsxs)("section",{className:a.prevNextNav,children:[f&&d.cloneElement(f.label,{className:P()(a.pageNav,a.prevNav,f.className)}),m&&d.cloneElement(m.label,{className:P()(a.pageNav,a.nextNav,m.className)})]})};E.default=W}}]);
