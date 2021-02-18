(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{114:function(e,a,t){},123:function(e,a,t){"use strict";t.r(a);var s=t(15),l=t(6),r=t(50),i=t(51),o=t(53),c=t(52),n=t(0),d=t.n(n),m=t(12),b=t(1),f=t(3),u=t(7),v=t.n(u),p=(t(71),t(25)),j=t.n(p),h={type:j.a.string,tooltip:j.a.bool,as:j.a.elementType},O=d.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,l=e.className,r=e.type,i=void 0===r?"valid":r,o=e.tooltip,c=void 0!==o&&o,n=Object(f.a)(e,["as","className","type","tooltip"]);return d.a.createElement(s,Object(b.a)({},n,{ref:a,className:v()(l,i+"-"+(c?"tooltip":"feedback"))}))}));O.displayName="Feedback",O.propTypes=h;var x=O,N=d.a.createContext({controlId:void 0}),y=t(10),P=d.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,l=e.bsCustomPrefix,r=e.className,i=e.type,o=void 0===i?"checkbox":i,c=e.isValid,m=void 0!==c&&c,u=e.isInvalid,p=void 0!==u&&u,j=e.isStatic,h=e.as,O=void 0===h?"input":h,x=Object(f.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(n.useContext)(N),C=P.controlId,w=P.custom?[l,"custom-control-input"]:[s,"form-check-input"],g=w[0],E=w[1];return s=Object(y.a)(g,E),d.a.createElement(O,Object(b.a)({},x,{ref:a,type:o,id:t||C,className:v()(r,s,m&&"is-valid",p&&"is-invalid",j&&"position-static")}))}));P.displayName="FormCheckInput";var C=P,w=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,l=e.className,r=e.htmlFor,i=Object(f.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),o=Object(n.useContext)(N),c=o.controlId,m=o.custom?[s,"custom-control-label"]:[t,"form-check-label"],u=m[0],p=m[1];return t=Object(y.a)(u,p),d.a.createElement("label",Object(b.a)({},i,{ref:a,htmlFor:r||c,className:v()(l,t)}))}));w.displayName="FormCheckLabel";var g=w,E=d.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,l=e.bsCustomPrefix,r=e.inline,i=void 0!==r&&r,o=e.disabled,c=void 0!==o&&o,m=e.isValid,u=void 0!==m&&m,p=e.isInvalid,j=void 0!==p&&p,h=e.feedbackTooltip,O=void 0!==h&&h,P=e.feedback,w=e.className,E=e.style,I=e.title,F=void 0===I?"":I,k=e.type,R=void 0===k?"checkbox":k,V=e.label,L=e.children,S=e.custom,T=e.as,z=void 0===T?"input":T,G=Object(f.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===R||S,B=A?[l,"custom-control"]:[s,"form-check"],M=B[0],J=B[1];s=Object(y.a)(M,J);var D=Object(n.useContext)(N).controlId,W=Object(n.useMemo)((function(){return{controlId:t||D,custom:A}}),[D,A,t]),q=A||null!=V&&!1!==V&&!L,H=d.a.createElement(C,Object(b.a)({},G,{type:"switch"===R?"checkbox":R,ref:a,isValid:u,isInvalid:j,isStatic:!q,disabled:c,as:z}));return d.a.createElement(N.Provider,{value:W},d.a.createElement("div",{style:E,className:v()(w,s,A&&"custom-"+R,i&&s+"-inline")},L||d.a.createElement(d.a.Fragment,null,H,q&&d.a.createElement(g,{title:F},V),(u||j)&&d.a.createElement(x,{type:u?"valid":"invalid",tooltip:O},P))))}));E.displayName="FormCheck",E.Input=C,E.Label=g;var I=E,F=d.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,l=e.bsCustomPrefix,r=e.className,i=e.isValid,o=e.isInvalid,c=e.lang,m=e.as,u=void 0===m?"input":m,p=Object(f.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),j=Object(n.useContext)(N),h=j.controlId,O=j.custom?[l,"custom-file-input"]:[s,"form-control-file"],x=O[0],P=O[1];return s=Object(y.a)(x,P),d.a.createElement(u,Object(b.a)({},p,{ref:a,id:t||h,type:"file",lang:c,className:v()(r,s,i&&"is-valid",o&&"is-invalid")}))}));F.displayName="FormFileInput";var k=F,R=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,l=e.className,r=e.htmlFor,i=Object(f.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),o=Object(n.useContext)(N),c=o.controlId,m=o.custom?[s,"custom-file-label"]:[t,"form-file-label"],u=m[0],p=m[1];return t=Object(y.a)(u,p),d.a.createElement("label",Object(b.a)({},i,{ref:a,htmlFor:r||c,className:v()(l,t),"data-browse":i["data-browse"]}))}));R.displayName="FormFileLabel";var V=R,L=d.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,l=e.bsCustomPrefix,r=e.disabled,i=void 0!==r&&r,o=e.isValid,c=void 0!==o&&o,m=e.isInvalid,u=void 0!==m&&m,p=e.feedbackTooltip,j=void 0!==p&&p,h=e.feedback,O=e.className,P=e.style,C=e.label,w=e.children,g=e.custom,E=e.lang,I=e["data-browse"],F=e.as,R=void 0===F?"div":F,L=e.inputAs,S=void 0===L?"input":L,T=Object(f.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=g?[l,"custom"]:[s,"form-file"],G=z[0],A=z[1];s=Object(y.a)(G,A);var B=Object(n.useContext)(N).controlId,M=Object(n.useMemo)((function(){return{controlId:t||B,custom:g}}),[B,g,t]),J=null!=C&&!1!==C&&!w,D=d.a.createElement(k,Object(b.a)({},T,{ref:a,isValid:c,isInvalid:u,disabled:i,as:S,lang:E}));return d.a.createElement(N.Provider,{value:M},d.a.createElement(R,{style:P,className:v()(O,s,g&&"custom-file")},w||d.a.createElement(d.a.Fragment,null,g?d.a.createElement(d.a.Fragment,null,D,J&&d.a.createElement(V,{"data-browse":I},C)):d.a.createElement(d.a.Fragment,null,J&&d.a.createElement(V,null,C),D),(c||u)&&d.a.createElement(x,{type:c?"valid":"invalid",tooltip:j},h))))}));L.displayName="FormFile",L.Input=k,L.Label=V;var S=L,T=(t(72),d.a.forwardRef((function(e,a){var t,s,l=e.bsPrefix,r=e.bsCustomPrefix,i=e.type,o=e.size,c=e.htmlSize,m=e.id,u=e.className,p=e.isValid,j=void 0!==p&&p,h=e.isInvalid,O=void 0!==h&&h,x=e.plaintext,P=e.readOnly,C=e.custom,w=e.as,g=void 0===w?"input":w,E=Object(f.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(n.useContext)(N).controlId,F=C?[r,"custom"]:[l,"form-control"],k=F[0],R=F[1];if(l=Object(y.a)(k,R),x)(s={})[l+"-plaintext"]=!0,t=s;else if("file"===i){var V;(V={})[l+"-file"]=!0,t=V}else if("range"===i){var L;(L={})[l+"-range"]=!0,t=L}else if("select"===g&&C){var S;(S={})[l+"-select"]=!0,S[l+"-select-"+o]=o,t=S}else{var T;(T={})[l]=!0,T[l+"-"+o]=o,t=T}return d.a.createElement(g,Object(b.a)({},E,{type:i,size:c,ref:a,readOnly:P,id:m||I,className:v()(u,t,j&&"is-valid",O&&"is-invalid")}))})));T.displayName="FormControl";var z=Object.assign(T,{Feedback:x}),G=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.children,r=e.controlId,i=e.as,o=void 0===i?"div":i,c=Object(f.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(y.a)(t,"form-group");var m=Object(n.useMemo)((function(){return{controlId:r}}),[r]);return d.a.createElement(N.Provider,{value:m},d.a.createElement(o,Object(b.a)({},c,{ref:a,className:v()(s,t)}),l))}));G.displayName="FormGroup";var A=G,B=["xl","lg","md","sm","xs"],M=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,r=void 0===l?"div":l,i=Object(f.a)(e,["bsPrefix","className","as"]),o=Object(y.a)(t,"col"),c=[],n=[];return B.forEach((function(e){var a,t,s,l=i[e];if(delete i[e],"object"===typeof l&&null!=l){var r=l.span;a=void 0===r||r,t=l.offset,s=l.order}else a=l;var d="xs"!==e?"-"+e:"";a&&c.push(!0===a?""+o+d:""+o+d+"-"+a),null!=s&&n.push("order"+d+"-"+s),null!=t&&n.push("offset"+d+"-"+t)})),c.length||c.push(o),d.a.createElement(r,Object(b.a)({},i,{ref:a,className:v.a.apply(void 0,[s].concat(c,n))}))}));M.displayName="Col";var J=M,D=d.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,l=e.bsPrefix,r=e.column,i=e.srOnly,o=e.className,c=e.htmlFor,m=Object(f.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),u=Object(n.useContext)(N).controlId;l=Object(y.a)(l,"form-label");var p="col-form-label";"string"===typeof r&&(p=p+" "+p+"-"+r);var j=v()(o,l,i&&"sr-only",r&&p);return c=c||u,r?d.a.createElement(J,Object(b.a)({as:"label",className:j,htmlFor:c},m)):d.a.createElement(s,Object(b.a)({ref:a,className:j,htmlFor:c},m))}));D.displayName="FormLabel",D.defaultProps={column:!1,srOnly:!1};var W=D,q=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,r=void 0===l?"small":l,i=e.muted,o=Object(f.a)(e,["bsPrefix","className","as","muted"]);return t=Object(y.a)(t,"form-text"),d.a.createElement(r,Object(b.a)({},o,{ref:a,className:v()(s,t,i&&"text-muted")}))}));q.displayName="FormText";var H=q,K=d.a.forwardRef((function(e,a){return d.a.createElement(I,Object(b.a)({},e,{ref:a,type:"switch"}))}));K.displayName="Switch",K.Input=I.Input,K.Label=I.Label;var Q=K,U=t(65),X=Object(U.a)("form-row"),Y=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,l=e.className,r=e.validated,i=e.as,o=void 0===i?"form":i,c=Object(f.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(y.a)(t,"form"),d.a.createElement(o,Object(b.a)({},c,{ref:a,className:v()(l,r&&"was-validated",s&&t+"-inline")}))}));Y.displayName="Form",Y.defaultProps={inline:!1},Y.Row=X,Y.Group=A,Y.Control=z,Y.Check=I,Y.File=S,Y.Switch=Q,Y.Label=W,Y.Text=H;var Z=Y,$=t(108),_=(t(73),t(17)),ee=(t(114),t(2)),ae=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,r=t.value;e.setState(Object(l.a)({},s,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(Object(s.a)({},e.state))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,s=e.password;return Object(ee.jsx)("div",{className:"registerPageWrapper",children:Object(ee.jsx)("div",{className:"registerPageContainer",children:Object(ee.jsxs)(Z,{onSubmit:this.handleSubmit,children:[Object(ee.jsx)("h2",{children:"Register"}),Object(ee.jsxs)(Z.Group,{controlId:"formBasicName",children:[Object(ee.jsx)(Z.Label,{children:"Name"}),Object(ee.jsx)(Z.Control,{name:"name",type:"name",value:a,onChange:this.handleChange,placeholder:"Enter name",autoComplete:"off"})]}),Object(ee.jsxs)(Z.Group,{controlId:"formBasicEmail",children:[Object(ee.jsx)(Z.Label,{children:"Email address"}),Object(ee.jsx)(Z.Control,{name:"email",type:"email",value:t,onChange:this.handleChange,placeholder:"Enter email",autoComplete:"off"})]}),Object(ee.jsxs)(Z.Group,{controlId:"formBasicPassword",children:[Object(ee.jsx)(Z.Label,{children:"Password"}),Object(ee.jsx)(Z.Control,{name:"password",type:"password",value:s,onChange:this.handleChange,placeholder:"Enter password",autoComplete:"off"})]}),Object(ee.jsx)($.a,{variant:"primary",type:"submit",children:"Register"})]})})})}}]),t}(n.Component);a.default=Object(m.b)(null,{onRegister:_.a.register})(ae)}}]);
//# sourceMappingURL=7.37579981.chunk.js.map