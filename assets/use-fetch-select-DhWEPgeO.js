import"./index-CCNeBscs.js";/* empty css                   *//* empty css                 *//* empty css               *//* empty css                     *//* empty css                  *//* empty css                */import{r as u,f as w,t as x,v as r,x as f,L as d,J as i,R as v,u as l,I as p,a2 as R,G as k,ai as A,h as E,z as C}from"./vue-V9u7w0-f.js";import{E as D,o as L,a3 as M,ae as T,af as B,ag as F}from"./element-zW3XFg-9.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-_W0GpTmX.js";function O(c){const{api:a}=c,o=u(!1),e=u([]),m=u(""),t=()=>{o.value=!0,e.value=[],a().then(s=>{e.value=s.data}).finally(()=>{o.value=!1})};return w(()=>{t()}),{loading:o,options:e,value:m}}const P={code:0,data:[{label:"苹果",value:1},{label:"香蕉",value:2},{label:"橘子",value:3,disabled:!0}],message:"获取 Select 数据成功"},S="接口发生错误";function y(){return new Promise((c,a)=>{setTimeout(()=>{Math.random()<.8?c(P):(a(new Error(S)),D.error(S))},2e3)})}const G={class:"app-container"},I=x({__name:"use-fetch-select",setup(c){const{loading:a,options:o,value:e}=O({api:y});return(m,t)=>{const s=L,h=F,g=T,V=B,_=M;return r(),f("div",G,[d(s,{shadow:"never"},{default:i(()=>t[2]||(t[2]=[R(" 该示例是演示：通过 composable 自动调用 api 后拿到 Select 组件需要的数据并传递给 Select 组件 ")])),_:1}),v((r(),p(s,{header:"Select 示例",shadow:"never"},{default:i(()=>[d(g,{modelValue:l(e),"onUpdate:modelValue":t[0]||(t[0]=n=>E(e)?e.value=n:null),filterable:""},{default:i(()=>[(r(!0),f(k,null,A(l(o),(n,b)=>(r(),p(h,C({ref_for:!0},n,{key:b,placeholder:"请选择"}),null,16))),128))]),_:1},8,["modelValue"])]),_:1})),[[_,l(a)]]),v((r(),p(s,{header:"Select V2 示例（如果数据量过多，可以选择该组件）",shadow:"never"},{default:i(()=>[d(V,{modelValue:l(e),"onUpdate:modelValue":t[1]||(t[1]=n=>E(e)?e.value=n:null),options:l(o),filterable:"",placeholder:"请选择"},null,8,["modelValue","options"])]),_:1})),[[_,l(a)]])])}}}),Y=N(I,[["__scopeId","data-v-15aa76c1"]]);export{Y as default};
