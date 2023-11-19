"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[869],{9869:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var i,r,o,a,s,l,c,d,u,m,h,x,p,f=t(5705),g=t(6727),b=t(1686),Z=t.n(b),j=t(9434),v=t(6916),P=function(n){return n.contacts.items},y=function(n){return n.contacts.error},w=function(n){return n.contacts.isLoading},k=(0,v.P1)([P,function(n){return n.filtersList.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),C=t(208),M=t(971),_=t(4294),q=t(2419),I=t(168),L=t(6487),N=(0,L.ZP)(f.l0)(i||(i=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(4)})),z=(0,L.ZP)(f.gN)(r||(r=(0,I.Z)(["\n  border: none;\n  border-bottom: 1px solid grey;\n\n  &:focus {\n    outline: none;\n  }\n"]))),F=t(184),K=g.Ry().shape({name:g.Z_().min(2,"Min length is 2").max(20,"Max length is 20").required("This field is required"),number:g.Z_().required("This field is required").matches(/^[0-9.-]*$/,"Allowed only digits, dash and dots").min(5,"Min length is 5").max(15,"Max length is 15")}),S=function(){var n=(0,j.I0)(),e=(0,j.v9)(P);return(0,F.jsx)("div",{children:(0,F.jsx)(f.J9,{initialValues:{name:"",number:""},validationSchema:K,onSubmit:function(t,i){e.find((function(n){return n.name===t.name.trim()}))?Z().Notify.failure("".concat(t.name," already in contacts")):n((0,C.uK)({name:t.name.trim(),number:t.number.trim()})),i.resetForm()},children:(0,F.jsxs)(N,{children:[(0,F.jsx)(z,{name:"name",component:M.n,label:"Name",variant:"standard"}),(0,F.jsx)(z,{type:"tel",name:"number",component:M.n,label:"Number",variant:"standard"}),(0,F.jsx)(_.Z,{type:"submit",variant:"contained",endIcon:(0,F.jsx)(q.Z,{}),children:"Add contact"})]})})})},W=L.ZP.ul(o||(o=(0,I.Z)(["\n  list-style: none;\n  transition: 400ms ease-in;\n"]))),A=L.ZP.li(a||(a=(0,I.Z)(["\n  font-weight: 500;\n  padding: 5px;\n  position: relative;\n  transition: 200ms ease-in;\n\n  &:nth-child(1n + 2) {\n    border-top: 1px solid #e8e8e8;\n  }\n\n  &:hover,\n  :focus {\n    background-color: #ececec;\n\n    svg {\n      color: #fba2a2;\n    }\n  }\n"]))),T=L.ZP.button(s||(s=(0,I.Z)(["\n  margin-left: 10px;\n  border: 0;\n  max-width: 50px;\n  border-radius: 5px;\n  background: transparent;\n  padding: 0;\n  cursor: pointer;\n  transition: 200ms ease-in;\n  position: absolute;\n  right: 10px;\n\n  &:hover {\n    svg {\n      color: red;\n      transform: scale(1.2);\n    }\n  }\n\n  svg {\n    color: transparent;\n    transition: 200ms ease-in;\n\n    @media (max-width: 768px) {\n      color: #fba2a2;\n    }\n  }\n"]))),D=L.ZP.span(l||(l=(0,I.Z)(["\n  position: absolute;\n  right: 35px;\n  color: #696969;\n  font-size: 14px;\n"]))),E=L.ZP.span(c||(c=(0,I.Z)(["\n  margin-left: 20px;\n"]))),G=t(8820),J=function(){var n=(0,j.v9)(k),e=(0,j.I0)();return(0,F.jsx)(W,{children:n.map((function(n){return(0,F.jsxs)(A,{children:[(0,F.jsx)(E,{children:n.name}),(0,F.jsx)(D,{children:n.number}),(0,F.jsx)(T,{onClick:function(){e((0,C.GK)(n))},children:(0,F.jsx)(G.YK6,{size:15})})]},n.id)}))})},R=t(6471),V=(L.ZP.label(d||(d=(0,I.Z)(["\n  gap: ",";\n  font-weight: bold;\n"])),(function(n){return n.theme.spacing(2)})),L.ZP.input(u||(u=(0,I.Z)(["\n  margin-left: 10px;\n  border: none;\n  border-bottom: 1px solid grey;\n\n  &:focus {\n    outline: none;\n  }\n"]))),L.ZP.div(m||(m=(0,I.Z)(["\n  margin: 20px 0;\n"])))),Y=t(8675),$=function(){var n=(0,j.I0)();return(0,F.jsx)(V,{children:(0,F.jsx)(Y.Z,{fullWidth:!0,size:"small",label:"Find contacts by name",variant:"filled",onChange:function(e){n((0,R.M)(e.target.value))}})})},B=t(3656),H=L.ZP.div(h||(h=(0,I.Z)(["\n  max-width: 450px;\n  margin: 30px auto;\n  padding: 20px;\n"]))),O=L.ZP.h1(x||(x=(0,I.Z)(["\n  text-align: center;\n"]))),Q=L.ZP.h2(p||(p=(0,I.Z)(["\n  text-align: center;\n  margin-top: 20px;\n"]))),U=function(){var n=(0,j.v9)(w),e=(0,j.v9)(y),t=(0,j.v9)(P);return(0,F.jsxs)(H,{children:[(0,F.jsx)(O,{children:"Phonebook"}),(0,F.jsx)(S,{}),(0,F.jsx)(Q,{children:"Contacts"}),n&&(0,F.jsx)(B.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"56",visible:!0}),e&&(0,F.jsx)("b",{children:"Whoops! Something went wrong. Please try to reload the page."}),t.length>0?(0,F.jsx)($,{}):(0,F.jsx)("span",{children:"Contact list is empty"}),(0,F.jsx)(J,{})]})},X=t(4270),nn=t(2791);function en(){var n=(0,j.I0)();return(0,nn.useEffect)((function(){n((0,C.yF)())}),[n]),(0,F.jsxs)("div",{children:[(0,F.jsx)(X.q,{children:(0,F.jsx)("title",{children:"My Phonebook"})}),(0,F.jsx)(U,{})]})}}}]);
//# sourceMappingURL=869.c5cd7937.chunk.js.map