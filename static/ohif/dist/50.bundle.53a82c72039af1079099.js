"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[50],{24050:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const o=JSON.parse('{"u2":"@ohif/extension-test"}').u2,i={id:"codingValues","SCT:69536005":{text:"Head",type:"site"},"SCT:45048000":{text:"Neck",type:"site"},"SCT:818981001":{text:"Abdomen",type:"site"},"SCT:816092008":{text:"Pelvis",type:"site"},"SCT:371861004":{text:"Mild intimal coronary irregularities",color:"green"},"SCT:194983005":{text:"Aortic insufficiency",color:"darkred"},"SCT:399232001":{text:"2-chamber"},"SCT:103340004":{text:"SAX"},"SCT:91134007":{text:"MV"},"SCT:122972007":{text:"PV"},"SCT:24422004":{text:"Axial",color:"#000000",type:"orientation"},"SCT:81654009":{text:"Coronal",color:"#000000",type:"orientation"},"SCT:30730003":{text:"Sagittal",color:"#000000",type:"orientation"}},a={id:"@ohif/contextMenuAnnotationCode",transform:function(e){const{code:t}=this;if(!t)throw new Error(`item ${this} has no code ref`);const n=e.get("codingValues")[t];return{...this,codeRef:t,code:{ref:t,...n},label:n.text,commands:[{commandName:"updateMeasurement"}]}}},s={id:"measurementsContextMenu",customizationType:"ohif.contextMenu",menus:[{id:"forExistingMeasurement",selector:e=>{let{nearbyToolData:t}=e;return!!t},items:[{customizationType:"ohif.contextSubMenu",label:"Site",actionType:"ShowSubMenu",subMenu:"siteSelectionSubMenu"},{customizationType:"ohif.contextSubMenu",label:"Finding",actionType:"ShowSubMenu",subMenu:"findingSelectionSubMenu"},{label:"Delete Measurement",commands:[{commandName:"deleteMeasurement"}]},{label:"Add Label",commands:[{commandName:"setMeasurementLabel"}]},{label:"IncludeSubMenu",selector:e=>{let{protocol:t}=e;return"@ohif/mnGrid"===t?.id},delegating:!0,subMenu:"orientationSelectionSubMenu"}]},{id:"orientationSelectionSubMenu",selector:e=>{let{nearbyToolData:t}=e;return!1},items:[{customizationType:"@ohif/contextMenuAnnotationCode",code:"SCT:24422004"},{customizationType:"@ohif/contextMenuAnnotationCode",code:"SCT:81654009"}]},{id:"findingSelectionSubMenu",selector:e=>{let{nearbyToolData:t}=e;return!1},items:[{customizationType:"@ohif/contextMenuAnnotationCode",code:"SCT:371861004"},{customizationType:"@ohif/contextMenuAnnotationCode",code:"SCT:194983005"}]},{id:"siteSelectionSubMenu",selector:e=>{let{nearbyToolData:t}=e;return!!t},items:[{customizationType:"@ohif/contextMenuAnnotationCode",code:"SCT:69536005"},{customizationType:"@ohif/contextMenuAnnotationCode",code:"SCT:45048000"}]}]};function u(e,t){const{sameAttribute:n,sameDisplaySetId:o}=this;if(!n)return console.log("sameAttribute not defined in",this),`sameAttribute not defined in ${this.id}`;if(!o)return console.log("sameDisplaySetId not defined in",this),`sameDisplaySetId not defined in ${this.id}`;const{displaySetMatchDetails:i,displaySets:a}=t,s=i.get(o);if(!s)return console.log("No match for display set",o),!1;const{displaySetInstanceUID:u}=s,r=a.find((e=>e.displaySetInstanceUID==u));if(!r)return console.log("No display set found with",u,"in",a),!1;return r[n]===e[n]}const r=(e,t)=>t?.displaySets?.length,c=(e,t)=>Math.max(...t?.displaySets?.map?.((e=>e.numImageFrames??0))||[0]),l={id:o,preRegistration:e=>{let{servicesManager:t}=e;const{hangingProtocolService:n}=t.services;n.addCustomAttribute("numberOfDisplaySets","Number of displays sets",r),n.addCustomAttribute("maxNumImageFrames","Maximum of number of image frames",c),n.addCustomAttribute("sameAs","Match an attribute in an existing display set",u)},getCustomizationModule:function(){return[{name:"custom-context-menu",value:[i,a,s]}]}}}}]);
//# sourceMappingURL=50.bundle.53a82c72039af1079099.js.map