(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{33:function(e,n,t){"use strict";t.r(n);var a,i,r=t(1),c=t.n(r),o=t(6),l=t.n(o),s=t(2),d=t(3),u=t(0),j=s.d.header(a||(a=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  background: ",";\n  height: 100px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.primary})),p=s.d.h1(i||(i=Object(d.a)(["\n  margin: 0;\n  width: 8.5in;\n  font-family: 'Caveat', cursive;\n  font-size: 84px;\n  font-weight: 700;\n  text-align: center;\n  color: white;\n"])));var b,h=function(){return Object(u.jsx)(j,{children:Object(u.jsx)(p,{children:"Resume Builder"})})},x=t(7),m=t(8),f=t(4),O=t(5),g=t(36),v=t(20),D=s.d.section(b||(b=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.0625in;\n\n  h2 {\n    font-size: 32px;\n    padding-left: 0.25in;\n    padding-bottom: 0.0625in;\n  }\n"])));var C,y=function(e){var n=e.title,t=e.children;return Object(u.jsxs)(D,{children:[Object(u.jsx)("h2",{children:n}),t]})},w=t(35),S=s.d.div(C||(C=Object(d.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.0625in;\n  padding: 0.25in;\n  margin-bottom: 0.125in;\n  border-radius: 20px;\n  background-color: white;\n  box-shadow: ",";\n  transform-origin: top;\n\n  &.expand-enter {\n    transform: scale(0);\n  }\n  &.expand-enter-active {\n    transform: scale(1);\n    transition: transform 250ms;\n  }\n  &.expand-exit {\n    transform: scale(1);\n  }\n  &.expand-exit-active {\n    transform: scale(0);\n    transition: transform 250ms;\n  }\n"])),(function(e){return e.theme.boxShadow}));var A,k=function(e){var n=e.children,t=e.isMounted;return Object(u.jsx)(w.a,{in:t,timeout:250,unmountOnExit:!0,classNames:"expand",children:Object(u.jsx)(S,{children:n})})},E=s.d.input(A||(A=Object(d.a)(["\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 0.125in 0 0.0625in;\n  font-family: 'Karma', serif;\n  font-size: 16px;\n\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid ",";\n  }\n"])),(function(e){return e.theme.colors.primary}));var B,z=function(e){var n=e.onChange,t=e.placeholder,a=e.name,i=e.value;return Object(u.jsx)(E,{type:"text",onChange:n,placeholder:t,name:a,value:i})},M=s.d.textarea(B||(B=Object(d.a)(["\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 0.125in;\n  padding-left: 0;\n  resize: none;\n  font-family: 'Karma', serif;\n  font-size: 16px;\n\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid ",";\n  }\n"])),(function(e){return e.theme.colors.primary}));var N=function(e){var n=e.onChange,t=e.placeholder,a=e.name,i=e.value;return Object(u.jsx)(M,{onChange:n,placeholder:t,name:a,value:i,rows:5})};var P,R,U,L,T,q=function(e){var n=e.personalData,t=e.onChange,a=Object(r.useState)(!1),i=Object(O.a)(a,2),c=i[0],o=i[1];return Object(r.useEffect)((function(){o(!0)}),[]),Object(u.jsx)(y,{title:"Personal",children:Object(u.jsxs)(k,{isMounted:c,children:[Object(u.jsx)(z,{onChange:function(e){return t(e)},placeholder:"First name",name:"firstName",value:n.firstName}),Object(u.jsx)(z,{onChange:function(e){return t(e)},placeholder:"Last name",name:"lastName",value:n.lastName}),Object(u.jsx)(z,{onChange:function(e){return t(e)},placeholder:"Title",name:"title",value:n.title}),Object(u.jsx)(z,{onChange:function(e){return t(e)},placeholder:"Street address",name:"streetAddress",value:n.streetAddress}),Object(u.jsx)(z,{onChange:function(e){return t(e)},placeholder:"City / State / Zip",name:"cityStateZip",value:n.cityStateZip}),Object(u.jsx)(z,{onChange:function(e){return t(e)},placeholder:"Phone number",name:"phone",value:n.phone}),Object(u.jsx)(z,{onChange:function(e){return t(e)},placeholder:"Email address",name:"email",value:n.email}),Object(u.jsx)(N,{onChange:function(e){return t(e)},placeholder:"Summary",name:"summary",value:n.summary})]})})},Z=s.d.button(P||(P=Object(d.a)(["\n  border: 4px solid white;\n  color: ",";\n  background-color: transparent;\n  border-radius: 20px;\n  line-height: 0;\n  height: 40px;\n  padding: 8px 0;\n  margin: 0 8px;\n  font-family: 'Caveat', cursive;\n  font-size: 18px;\n  font-weight: 700;\n  box-shadow: ",";\n  cursor: pointer;\n  transition: background-color 200ms, color 200ms;\n\n  ",";\n\n  ",";\n\n  ","\n\n  ","\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.boxShadow}),(function(e){return!(e.deleteBtn||e.resetBtn)&&Object(s.c)(R||(R=Object(d.a)(["\n      &:hover {\n        color: white;\n        background-color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primaryActive}))}),(function(e){return e.deleteBtn&&Object(s.c)(U||(U=Object(d.a)(["\n      width: 48px;\n      height: 48px;\n      line-height: 0;\n      display: flex;\n      border: none;\n      padding: 18px 10px 0;\n      margin: 0;\n      font-size: 48px;\n      position: absolute;\n      top: 0;\n      right: 0;\n      box-shadow: none;\n    "])))}),(function(e){return e.addBtn&&Object(s.c)(L||(L=Object(d.a)(["\n      width: 40px;\n      height: 40px;\n      line-height: 0;\n      border-radius: 20px;\n      align-self: center;\n      background-color: white;\n      font-size: 42px;\n      padding: 0 6px 8px 0;\n      margin: 0;\n    "])))}),(function(e){return e.resetBtn&&Object(s.c)(T||(T=Object(d.a)(["\n      &:hover {\n        color: white;\n        background-color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.colors.reset}),(function(e){return e.theme.colors.resetActive}))}));var J=function(e){var n=e.addBtn,t=e.deleteBtn,a=e.resetBtn,i=e.onClick,r=e.children;return Object(u.jsx)(Z,{addBtn:n,deleteBtn:t,resetBtn:a,onClick:i,children:r})};var H=function(e){var n=e.id,t=e.itemData,a=e.onChange,i=e.onDelete,c=Object(r.useState)(!1),o=Object(O.a)(c,2),l=o[0],s=o[1];return Object(r.useEffect)((function(){s(!0)}),[]),Object(u.jsxs)(k,{isMounted:l,children:[Object(u.jsx)(J,{deleteBtn:!0,onClick:function(){s(!1),setTimeout((function(){i(n)}),250)},children:"\xd7"}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"Title / Role",name:"title",value:t.title}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"Company",name:"company",value:t.company}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"Location",name:"location",value:t.location}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"Start Date",name:"startDate",value:t.startDate}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"End Date",name:"endDate",value:t.endDate})]})};var F=function(e){var n=e.experienceData,t=e.onChange,a=e.onAdd,i=e.onDelete,r=n.map((function(e){return Object(u.jsx)(H,{id:e.id,itemData:e,onChange:t,onDelete:i},e.id)}));return Object(u.jsxs)(y,{title:"Experience",children:[r,Object(u.jsx)(J,{addBtn:!0,onClick:a,children:"+"})]})};var I=function(e){var n=e.id,t=e.itemData,a=e.onChange,i=e.onDelete,c=Object(r.useState)(!1),o=Object(O.a)(c,2),l=o[0],s=o[1];return Object(r.useEffect)((function(){s(!0)}),[]),Object(u.jsxs)(k,{isMounted:l,children:[Object(u.jsx)(J,{deleteBtn:!0,onClick:function(){s(!1),setTimeout((function(){i(n)}),250)},children:"\xd7"}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"School",name:"school",value:t.school}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"Degree / Certificate / Diploma",name:"degree",value:t.degree}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"Concentration",name:"concentration",value:t.concentration}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"Location",name:"location",value:t.location}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"Start Date",name:"startDate",value:t.startDate}),Object(u.jsx)(z,{onChange:function(e){return a(e,n)},placeholder:"End Date",name:"endDate",value:t.endDate})]})};var W,K,G=function(e){var n=e.educationData,t=e.onChange,a=e.onAdd,i=e.onDelete,r=n.map((function(e){return Object(u.jsx)(I,{id:e.id,itemData:e,onChange:t,onDelete:i},e.id)}));return Object(u.jsxs)(y,{title:"Education",children:[r,Object(u.jsx)(J,{addBtn:!0,onClick:a,children:"+"})]})},Q=s.d.div(W||(W=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.25in;\n  width: 8.5in;\n  min-width: 8.5in;\n  max-width: 8.5in;\n\n  h2 {\n    font-family: 'Caveat', cursive;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),V=s.d.div(K||(K=Object(d.a)(["\n  align-self: stretch;\n  display: flex;\n  justify-content: stretch;\n  margin-top: 20px;\n\n  > * {\n    flex-basis: calc(100% / 3);\n  }\n"])));var X,Y,$,_=function(e){var n=e.resumeData,t=e.onChangePersonal,a=e.onChangeExperience,i=e.onAddExperience,r=e.onDeleteExperience,c=e.onChangeEducation,o=e.onAddEducation,l=e.onDeleteEducation,s=e.onLoadSample,d=e.onMakePdf,j=e.onReset;return Object(u.jsxs)(Q,{children:[Object(u.jsx)(q,{personalData:n.personal,onChange:t}),Object(u.jsx)(F,{experienceData:n.experience,onChange:a,onAdd:i,onDelete:r}),Object(u.jsx)(G,{educationData:n.education,onChange:c,onAdd:o,onDelete:l}),Object(u.jsxs)(V,{children:[Object(u.jsx)(J,{onClick:s,children:"Load Sample"}),Object(u.jsx)(J,{onClick:d,children:"Make PDF"}),Object(u.jsx)(J,{resetBtn:!0,onClick:j,children:"Reset"})]})]})},ee=s.d.div(X||(X=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),ne=s.d.div(Y||(Y=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    font-size: 42px;\n  }\n\n  span {\n    font-size: 24px;\n  }\n"]))),te=s.d.div($||($=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n\n  span {\n    font-size: 12px;\n  }\n"])));var ae,ie,re=function(e){var n=e.personalData,t=n.firstName,a=n.lastName,i=n.title,r=n.streetAddress,c=n.cityStateZip,o=n.email,l=n.phone;return Object(u.jsxs)(ee,{children:[Object(u.jsxs)(ne,{children:[Object(u.jsxs)("h1",{children:[t.toUpperCase(),Object(u.jsx)("br",{}),a.toUpperCase()]}),Object(u.jsx)("span",{children:i})]}),Object(u.jsxs)(te,{children:[Object(u.jsx)("span",{children:r}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("span",{children:o}),Object(u.jsx)("span",{children:l})]})]})},ce=s.d.div(ae||(ae=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.0625in;\n\n  & > span {\n    font-size: 12px;\n  }\n\n  & > span:first-of-type {\n    font-size: 16px;\n  }\n"]))),oe=s.d.div(ie||(ie=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  span:nth-child(1) {\n    font-size: 20px;\n    font-weight: 600;\n  }\n"])));var le,se,de=function(e){var n=e.itemData;return Object(u.jsxs)(ce,{children:[Object(u.jsxs)(oe,{children:[Object(u.jsx)("span",{children:n.title}),Object(u.jsxs)("span",{children:[n.startDate," - ",n.endDate]})]}),Object(u.jsx)("span",{children:n.company}),Object(u.jsx)("span",{children:n.location})]})},ue=s.d.div(le||(le=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.0625in;\n\n  & > span {\n    font-size: 12px;\n  }\n\n  & > span:first-of-type {\n    font-size: 16px;\n  }\n"]))),je=s.d.div(se||(se=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  span:nth-child(1) {\n    font-size: 20px;\n    font-weight: 600;\n  }\n"])));var pe,be,he=function(e){var n=e.itemData;return Object(u.jsxs)(ue,{children:[Object(u.jsxs)(je,{children:[Object(u.jsx)("span",{children:n.school}),Object(u.jsxs)("span",{children:[n.startDate," - ",n.endDate]})]}),Object(u.jsxs)("span",{children:[n.degree,", ",n.concentration]}),Object(u.jsx)("span",{children:n.location})]})},xe=s.d.div(pe||(pe=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 0.25in;\n\n  h2 {\n    font-weight: 900;\n    padding-left: 0;\n  }\n"]))),me=s.d.div(be||(be=Object(d.a)([""])));var fe,Oe,ge=function(e){var n=e.personalData,t=e.experienceData,a=e.educationData,i=t.map((function(e){return Object(u.jsx)(de,{itemData:e},e.id)})),r=a.map((function(e){return Object(u.jsx)(he,{itemData:e},e.id)}));return Object(u.jsxs)(xe,{children:[Object(u.jsx)(y,{title:"Summary".toUpperCase(),children:Object(u.jsx)(me,{children:n.summary})}),Object(u.jsx)(y,{title:"Experience".toUpperCase(),children:i}),Object(u.jsx)(y,{title:"Education".toUpperCase(),children:r})]})},ve=s.d.div(fe||(fe=Object(d.a)(["\n  width: 8.5in;\n  min-width: 8.5in;\n  max-width: 8.5in;\n  height: 11in;\n  padding: 0.5in;\n  position: sticky;\n  top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 0.3in;\n  background-color: white;\n  box-shadow: ",";\n"])),(function(e){return e.theme.boxShadow})),De=Object(r.forwardRef)((function(e,n){var t=e.resumeData;return Object(u.jsxs)(ve,{ref:n,children:[Object(u.jsx)(re,{personalData:t.personal}),Object(u.jsx)(ge,{personalData:t.personal,experienceData:t.experience,educationData:t.education})]})})),Ce={personal:{firstName:"",lastName:"",title:"",streetAddress:"",cityStateZip:"",phone:"",email:"",summary:""},experience:[{id:Object(g.a)(),title:"",company:"",location:"",startDate:"",endDate:""}],education:[{id:Object(g.a)(),school:"",degree:"",concentration:"",location:"",startDate:"",endDate:""}]},ye={personal:{firstName:"Steven",lastName:"Careers",title:"Web Developer",streetAddress:"2101 Waverley St.",cityStateZip:"Palo Alto, CA 94301",phone:"012-345-6789",email:"steve.careers@apple.com",summary:"Donec molestie nibh magna. Aliquam erat volutpat. Donec vel orci neque. Curabitur dignissim bibendum libero, vitae aliquam ipsum gravida sed. Sed vel lectus in orci tincidunt consectetur. Mauris vitae condimentum neque. Nulla vulputate sem ac enim iaculis rhoncus. Aenean bibendum volutpat pulvinar. Maecenas posuere pretium diam, ut pellentesque velit ullamcorper vitae. Cras vel risus quis."},experience:[{id:Object(g.a)(),title:"Web Developer",company:"Apple Inc.",location:"Cupertino, CA, USA",startDate:"Dec 1996",endDate:"present"},{id:Object(g.a)(),title:"Junior Developer",company:"Apple Inc.",location:"Cupertino, CA, USA",startDate:"Apr 1976",endDate:"Dec 1996"},{id:Object(g.a)(),title:"Game Designer",company:"Atari",location:"Sunnyvale, CA, USA",startDate:"Jan 1974",endDate:"Apr 1976"}],education:[{id:Object(g.a)(),school:"Reed College",degree:"Bachelor of Science (unfinished)",concentration:"Computer Science",location:"Portland, OR, USA",startDate:"Sep 1972",endDate:"Dec 1972"},{id:Object(g.a)(),school:"Homestead High School",degree:"High School Diploma",concentration:"Computer Science",location:"Cupertino, CA, USA",startDate:"Aug 1968",endDate:"May 1972"}]},we=s.d.main(Oe||(Oe=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.25in;\n  max-width: 17.5in;\n  margin: 0 auto;\n  padding: 0.25in 0 0.5in 0;\n\n  @media (max-width: 17.25in) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])));var Se=function(){var e=Object(r.useState)(Ce),n=Object(O.a)(e,2),t=n[0],a=n[1],i=Object(r.useRef)(null),c=Object(v.useReactToPrint)({content:function(){return i.current}});return Object(u.jsxs)(we,{children:[Object(u.jsx)(_,{resumeData:t,onChangePersonal:function(e){var n=e.target||HTMLTextAreaElement,t=n.name,i=n.value;a((function(e){return Object(f.a)(Object(f.a)({},e),{},{personal:Object(f.a)(Object(f.a)({},e.personal),{},Object(m.a)({},t,i))})}))},onChangeExperience:function(e,n){var t=e.target,i=t.name,r=t.value;a((function(e){var t=e.experience.map((function(e){return e.id===n?Object(f.a)(Object(f.a)({},e),{},Object(m.a)({},i,r)):e}));return Object(f.a)(Object(f.a)({},e),{},{experience:Object(x.a)(t)})}))},onAddExperience:function(){a((function(e){return Object(f.a)(Object(f.a)({},e),{},{experience:[].concat(Object(x.a)(e.experience),[{id:Object(g.a)(),title:"",company:"",location:"",startDate:"",endDate:""}])})}))},onDeleteExperience:function(e){a((function(n){var t=n.experience.filter((function(n){return n.id!==e}));return Object(f.a)(Object(f.a)({},n),{},{experience:Object(x.a)(t)})}))},onChangeEducation:function(e,n){var t=e.target,i=t.name,r=t.value;a((function(e){var t=e.education.map((function(e){return e.id===n?Object(f.a)(Object(f.a)({},e),{},Object(m.a)({},i,r)):e}));return Object(f.a)(Object(f.a)({},e),{},{education:Object(x.a)(t)})}))},onAddEducation:function(){a((function(e){return Object(f.a)(Object(f.a)({},e),{},{education:[].concat(Object(x.a)(e.education),[{id:Object(g.a)(),school:"",degree:"",concentration:"",location:"",startDate:"",endDate:""}])})}))},onDeleteEducation:function(e){a((function(n){var t=n.education.filter((function(n){return n.id!==e}));return Object(f.a)(Object(f.a)({},n),{},{education:Object(x.a)(t)})}))},onLoadSample:function(){a(ye)},onMakePdf:c,onReset:function(){a(Ce)}}),Object(u.jsx)(De,{resumeData:t,ref:i})]})};var Ae,ke=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(Se,{})]})},Ee={colors:{primary:"#0dacba",primaryActive:"#01a0af",reset:"#CC2222",resetActive:"#C01616"},boxShadow:"0 4px 10px rgba(0, 0, 0, 0.5)"},Be=Object(s.b)(Ae||(Ae=Object(d.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    word-wrap: break-word;\n  }\n\n  html {\n    font-family: 'Jost', serif;\n    position: relative;\n  }\n\n  h1, h2 {\n    line-height: 1;\n  }\n"])));l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsxs)(s.a,{theme:Ee,children:[Object(u.jsx)(Be,{}),Object(u.jsx)(ke,{})]})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0ac756c2.chunk.js.map