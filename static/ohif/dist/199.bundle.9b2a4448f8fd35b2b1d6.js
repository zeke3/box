"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[199],{31199:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});const r=JSON.parse('{"u2":"@ohif/extension-cornerstone-dicom-rt"}').u2,s=`${r}.sopClassHandlerModule.dicom-rt`;var o=t(32735),a=t(62771),c=t(22737);const{DicomMessage:i,DicomMetaDictionary:u}=c.default.data,l=c.default.data.Colors.dicomlab2RGB;async function I(e,n,t,r){const s=e.getModuleEntry("@ohif/extension-cornerstone.utilityModule.common"),o=e.getActiveDataSource()[0],{bulkDataURI:a}=o.getConfig?.()||{},{dicomLoaderService:c}=s.exports;!function(e){e.images.map((e=>({imageId:e.imageId,sopInstanceUID:e.SOPInstanceUID})))}(t);n.isLoaded=!0;let l=n.instance;if(a&&a.enabled)await async function(e,n){if(!e||!e.ROIContourSequence)return Promise.reject("Invalid instance object or ROIContourSequence");const t=new Map;for(const r of e.ROIContourSequence){const s=r.ReferencedROINumber;if(r&&r.ContourSequence)for(const o of r.ContourSequence){if(!o||!o.ContourData)return Promise.reject("Invalid Contour or ContourData");const r=o.ContourData;if(Array.isArray(r))t.has(s)?t.get(s).push(Promise.resolve(r)):t.set(s,[Promise.resolve(r)]);else{if(!r||!r.BulkDataURI)return Promise.reject(`Invalid ContourData: ${r}`);{const o=r.BulkDataURI;if(!n||!n.retrieve||!n.retrieve.bulkDataURI)return Promise.reject("Invalid datasource object or retrieve function");const a=n.retrieve.bulkDataURI({BulkDataURI:o,StudyInstanceUID:e.StudyInstanceUID,SeriesInstanceUID:e.SeriesInstanceUID,SOPInstanceUID:e.SOPInstanceUID});t.has(s)?t.get(s).push(a):t.set(s,[a])}}}else t.set(s,[Promise.resolve([])])}const r=new Map;for(const[e,n]of t.entries())r.set(e,await Promise.allSettled(n));e.ROIContourSequence.forEach((e=>{try{const n=e.ReferencedROINumber,t=r.get(n);e.ContourSequence&&e.ContourSequence.forEach(((e,n)=>{const r=t[n];if("fulfilled"===r.status)if(Array.isArray(r.value)&&r.value.every(Number.isFinite))e.ContourData=r.value;else{const n=new Uint8Array(r.value),t=(new TextDecoder).decode(n);"string"==typeof t&&t.includes("\\")?e.ContourData=t.split("\\").map(parseFloat):e.ContourData=[]}else console.error(r.reason)}))}catch(e){console.error(e)}}))}(l,o);else{const e=await c.findDicomDataPromise(n,null,r),t=i.readFile(e),s=u.naturalizeDataset(t.dict);s._meta=u.namifyDataset(t.meta),l=s}const{StructureSetROISequence:I,ROIContourSequence:S,RTROIObservationsSequence:f}=l,R={StructureSetLabel:l.StructureSetLabel,SeriesInstanceUID:l.SeriesInstanceUID,ROIContours:[],visible:!0};for(let e=0;e<S.length;e++){const n=S[e],{ContourSequence:t}=n;if(!t)continue;const r=!1,s=(D=t,Array.isArray(D)?D:[D]),o=[];for(let e=0;e<s.length;e++){const{ContourImageSequence:n,ContourData:t,NumberOfContourPoints:r,ContourGeometricType:a}=s[e];let c=!1;const i=[];for(let e=0;e<3*r;e+=3)i.push({x:t[e],y:t[e+1],z:t[e+2]});switch(a){case"CLOSED_PLANAR":case"OPEN_PLANAR":case"POINT":c=!0;break;default:continue}o.push({numberOfPoints:r,points:i,type:a,isSupported:c})}d(R,I,f,n,o,r)}var D;return R}function d(e,n,t,r,s,o){const a=n.find((e=>e.ROINumber===r.ReferencedROINumber)),c={ROINumber:a.ROINumber,ROIName:a.ROIName,ROIGenerationAlgorithm:a.ROIGenerationAlgorithm,ROIDescription:a.ROIDescription,isSupported:o,contourPoints:s,visible:!0};!function(e,n){let{ROIDisplayColor:t,RecommendedDisplayCIELabValue:r}=e;!t&&r&&(t=l(r));t&&(n.colorArray=[...t])}(r,c),t&&function(e,n,t){const r=n.find((e=>e.ReferencedROINumber===t));if(r){const{ObservationNumber:n,ROIObservationDescription:t,RTROIInterpretedType:s,ROIInterpreter:o}=r;e.RTROIObservations={ObservationNumber:n,ROIObservationDescription:t,RTROIInterpretedType:s,ROIInterpreter:o}}}(c,t,r.ReferencedROINumber),e.ROIContours.push(c)}const S=["1.2.840.10008.5.1.4.1.1.481.3"];let f={};function R(e,n,t){const r=e[0],{StudyInstanceUID:o,SeriesInstanceUID:c,SOPInstanceUID:i,SeriesDescription:u,SeriesNumber:l,SeriesDate:d,SOPClassUID:R,wadoRoot:D,wadoUri:m,wadoUriRoot:p}=r,O={Modality:"RTSTRUCT",loading:!1,isReconstructable:!1,displaySetInstanceUID:a.utils.guid(),SeriesDescription:u,SeriesNumber:l,SeriesDate:d,SOPInstanceUID:i,SeriesInstanceUID:c,StudyInstanceUID:o,SOPClassHandlerId:s,SOPClassUID:R,referencedImages:null,referencedSeriesInstanceUID:null,referencedDisplaySetInstanceUID:null,isDerivedDisplaySet:!0,isLoaded:!1,isHydrated:!1,structureSet:null,sopClassUids:S,instance:r,wadoRoot:D,wadoUriRoot:p,wadoUri:m,isOverlayDisplaySet:!0};let y=r.ReferencedSeriesSequence;if(r.ReferencedFrameOfReferenceSequence&&!r.ReferencedSeriesSequence&&(r.ReferencedSeriesSequence=function(e){const n=[];return e.forEach((e=>{const{RTReferencedStudySequence:t}=e;t.forEach((e=>{const{RTReferencedSeriesSequence:t}=e;t.forEach((e=>{const t=[],{ContourImageSequence:r,SeriesInstanceUID:s}=e;r.forEach((e=>{t.push({ReferencedSOPInstanceUID:e.ReferencedSOPInstanceUID,ReferencedSOPClassUID:e.ReferencedSOPClassUID})}));const o={SeriesInstanceUID:s,ReferencedInstanceSequence:t};n.push(o)}))}))})),n}(r.ReferencedFrameOfReferenceSequence),y=r.ReferencedSeriesSequence),!y)throw new Error("ReferencedSeriesSequence is missing for the RTSTRUCT");const g=y[0];return O.referencedImages=r.ReferencedSeriesSequence.ReferencedInstanceSequence,O.referencedSeriesInstanceUID=g.SeriesInstanceUID,O.getReferenceDisplaySet=()=>{const{DisplaySetService:e}=n.services,t=e.getDisplaySetsForSeries(O.referencedSeriesInstanceUID);if(!t||0===t.length)throw new Error("Referenced DisplaySet is missing for the RT");const r=t[0];return O.referencedDisplaySetInstanceUID=r.displaySetInstanceUID,r},O.load=e=>{let{headers:r}=e;return function(e,n,t,r){const{SOPInstanceUID:s}=e,{segmentationService:o}=n.services;(e.loading||e.isLoaded)&&f[s],0;return e.loading=!0,f[s]=new Promise((async(n,s)=>{if(!e.structureSet){const n=await I(t,e,e.getReferenceDisplaySet(),r);e.structureSet=n}const a=!0;o.createSegmentationForRTDisplaySet(e,null,a).then((()=>{e.loading=!1,n()})).catch((n=>{e.loading=!1,s(n)}))})),f[s]}(O,n,t,r)},[O]}const D=function(e){let{servicesManager:n,extensionManager:t}=e;return[{name:"dicom-rt",sopClassUids:S,getDisplaySetsFromSeries:e=>R(e,n,t)}]};function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}const p=o.lazy((()=>t.e(581).then(t.bind(t,72581)))),O=e=>o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading...")},o.createElement(p,e)),y={id:r,getViewportModule(e){let{servicesManager:n,extensionManager:t}=e;return[{name:"dicom-rt",component:e=>o.createElement(O,m({servicesManager:n,extensionManager:t},e))}]},getSopClassHandlerModule:D}}}]);
//# sourceMappingURL=199.bundle.9b2a4448f8fd35b2b1d6.js.map