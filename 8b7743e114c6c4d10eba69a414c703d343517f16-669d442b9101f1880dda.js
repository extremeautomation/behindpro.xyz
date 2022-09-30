"use strict";(self.webpackChunkbehiindpro_xyz=self.webpackChunkbehiindpro_xyz||[]).push([[167],{4125:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(4414);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(6532);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(8922);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}))},9399:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.NewsArticleJsonLd=t.BlogPostJsonLd=t.ArticleJsonLd=void 0;var o=n(r(7154)),i=n(r(6479)),a=n(r(9713)),c=n(r(7294)),l=r(9860);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,i=void 0===o?[]:o,a=e.datePublished,u=e.dateCreated,d=e.dateModified,p=void 0===d?a:d,f=e.authorType,m=void 0===f?"Person":f,b=e.authorName,y=e.description,g=e.publisherName,v=e.publisherLogo,O=e.body,h=e.overrides,j=e.keywords,P=e.speakable,w=e.defer,E=void 0!==w&&w,k=s({"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":t},headline:null!=r?r:n,image:i,datePublished:a,dateModified:p,dateCreated:u,author:{"@type":m,name:b},publisher:{"@type":"Organization",name:g,logo:{"@type":"ImageObject",url:v}},description:y,articleBody:O,speakable:P?P.map((function(e){return s({"@type":"SpeakableSpecification"},e)})):void 0,keywords:Array.isArray(j)?j.join(", "):j},h);return c.default.createElement(l.JsonLd,{defer:E,json:k})};t.ArticleJsonLd=d;t.BlogPostJsonLd=function(e){var t=e.overrides,r=e.defer,n=void 0!==r&&r,a=e.publisherLogo,l=void 0===a?"":a,u=e.publisherName,p=void 0===u?"":u,f=(0,i.default)(e,["overrides","defer","publisherLogo","publisherName"]);return c.default.createElement(d,(0,o.default)({defer:n,publisherName:p,publisherLogo:l},f,{overrides:s(s({},t),{},{"@type":"BlogPosting"})}))};t.NewsArticleJsonLd=function(e){var t=e.overrides,r=e.section,n=e.defer,a=void 0!==n&&n,l=(0,i.default)(e,["overrides","section","defer"]);return c.default.createElement(d,(0,o.default)({defer:a},l,{overrides:s(s({articleSection:r},t),{},{"@type":"NewsArticle"})}))}},203:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BlogJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BlogJsonLd=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,c=void 0===o?[]:o,u=e.datePublished,s=e.dateModified,d=void 0===s?null:s,p=e.authorName,f=e.authorType,m=void 0===f?"Person":f,b=e.keywords,y=e.description,g=e.publisherName,v=e.publisherLogo,O=e.posts,h=void 0===O?[]:O,j=e.issn,P=e.overrides,w=void 0===P?{}:P,E=e.defer,k=void 0!==E&&E,_=l({"@context":"https://schema.org","@type":"Blog",mainEntityOfPage:{"@type":"Blog","@id":t},headline:null!=r?r:n,keywords:b,issn:j,image:c,datePublished:u,dateModified:null!=d?d:u,description:y,author:p?{"@type":m,name:p}:void 0,publisher:g?{"@type":"Organization",name:g,logo:v?{"@type":"ImageObject",url:v}:void 0}:void 0,blogPost:h.map((function(e){return l({"@type":"BlogPosting"},e)}))},w);return i.default.createElement(a.JsonLd,{defer:k,json:_})}},2174:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BookJsonLd=void 0;var o=n(r(6479)),i=n(r(9713)),a=n(r(7294)),c=r(9860);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BookJsonLd=function(e){var t=e.name,r=e.author,n=e.url,i=e.workExample,l=void 0===i?[]:i,s=e.id,d=e.sameAs,p=e.overrides,f=void 0===p?{}:p,m=e.defer,b=void 0!==m&&m,y=u({"@context":"https://schema.org","@type":"Book",name:t,url:n,"@id":s,sameAs:d,author:u({"@type":"Person"},r),workExample:l.map((function(e){var t,r=e.bookFormat,n=e.potentialAction,i=e.author,a=(0,o.default)(e,["bookFormat","potentialAction","author"]);return u(u({"@type":"Book",bookFormat:(t=r,t?"https://schema.org/".concat(t):void 0)},a),{},{person:u({"@type":"Person"},i),potentialAction:u({"@type":"ReadAction"},n)})}))},f);return a.default.createElement(c.JsonLd,{defer:b,json:y})}},8812:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.BreadcrumbJsonLd=function(e){var t=e.itemListElements,r=void 0===t?[]:t,n=e.overrides,l=void 0===n?{}:n,u=e.defer,s=void 0!==u&&u,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name,"@type":"Thing"}}}))},l);return i.default.createElement(a.JsonLd,{defer:s,json:d})}},3995:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.CorporateContactJsonLd=void 0;var o=n(r(7294)),i=r(2055),a=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})).toString(),"]"):'"'.concat(e,'"')};t.CorporateContactJsonLd=function(e){var t=e.url,r=e.logo,n=e.contactPoint,c=e.defer,l=void 0!==c&&c,u='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(r?'"logo": "'.concat(r,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(a(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(a(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption.toString(),'"'):"","\n    }")}))}(n).toString(),"]\n  }");return o.default.createElement(i.Helmet,{defer:l},o.default.createElement("script",{type:"application/ld+json"},u))}},74:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.CourseJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.CourseJsonLd=function(e){var t=e.name,r=e.courseName,n=e.description,l=e.providerName,u=e.providerUrl,s=e.overrides,d=void 0===s?{}:s,p=e.defer,f=void 0!==p&&p,m=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Course",name:null!=t?t:r,description:n,provider:l?{"@type":"Organization",name:l,sameAs:u}:void 0},d);return i.default.createElement(a.JsonLd,{defer:f,json:m})}},4953:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.FAQJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.FAQJsonLd=function(e){var t,r=e.questions,n=e.overrides,l=void 0===n?{}:n,u=e.defer,s=void 0!==u&&u,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"FAQPage",mainEntity:(t=r,t.map((function(e){var t=e.question;return{"@type":"Question",acceptedAnswer:{"@type":"Answer",text:e.answer},name:t}})))},l);return i.default.createElement(a.JsonLd,{defer:s,json:d})}},6532:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(9399);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(203);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(2174);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var a=r(8812);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var c=r(3995);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var l=r(74);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var u=r(4953);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var s=r(9860);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var d=r(6833);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var p=r(5975);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}));var f=r(18);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var m=r(1650);Object.keys(m).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return m[e]}})}));var b=r(4538);Object.keys(b).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return b[e]}})}));var y=r(9756);Object.keys(y).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return y[e]}})}))},9860:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.JsonLd=void 0;var o=n(r(7294)),i=r(2055);t.JsonLd=function(e){var t=e.defer,r=e.json;return o.default.createElement(i.Helmet,{defer:t},o.default.createElement("script",{type:"application/ld+json"},JSON.stringify(r,null,2)))}},6833:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.LocalBusinessJsonLd=void 0;var o=n(r(9713)),i=n(r(6479)),a=n(r(7294)),c=r(9860);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={Mon:"Monday",Tues:"Tuesday",Wed:"Wednesday",Thurs:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"},d=function(e){var t;return"http://schema.org/".concat(null!==(t=s[e])&&void 0!==t?t:e)},p=function(e){return e?Array.isArray(e)?e.map(d):d(e):void 0},f=function(e){if(e)return Array.isArray(e)?e.map((function(e){var t=e.dayOfWeek,r=(0,i.default)(e,["dayOfWeek"]);return u({"@type":"OpeningHoursSpecification",dayOfWeek:p(t)},r)})):u(u({"@type":"OpeningHoursSpecification"},e),{},{dayOfWeek:p(e.dayOfWeek)})};t.LocalBusinessJsonLd=function(e){var t=e.type,r=e.id,n=e.name,o=e.description,i=e.url,l=e.telephone,s=e.address,d=e.geo,p=e.images,m=e.openingHours,b=e.rating,y=e.priceRange,g=e.overrides,v=void 0===g?{}:g,O=e.defer,h=void 0!==O&&O,j=u({"@context":"https://schema.org","@type":t,"@id":r,name:n,description:o,url:i,telephone:l,priceRange:y,image:p,geo:u({"@type":"GeoCoordinates"},d),address:u({"@type":"PostalAddress"},s),aggregateRating:b?u({"@type":"AggregateRating"},b):void 0,openingHoursSpecification:f(m)},v);return a.default.createElement(c.JsonLd,{defer:h,json:j})}},5975:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.LogoJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.LogoJsonLd=function(e){var t=e.url,r=e.logo,n=e.overrides,l=void 0===n?{}:n,u=e.defer,s=void 0!==u&&u,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Organization",url:t,logo:r},l);return i.default.createElement(a.JsonLd,{defer:s,json:d})}},18:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.ProductJsonLd=void 0;var o=n(r(6479)),i=n(r(9713)),a=n(r(7294)),c=r(9860);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={Discontinued:"http://schema.org/Discontinued",InStock:"http://schema.org/InStock",InStoreOnly:"http://schema.org/InStoreOnly",LimitedAvailability:"http://schema.org/LimitedAvailability",OnlineOnly:"http://schema.org/OnlineOnly",OutOfStock:"http://schema.org/OutOfStock",PreOrder:"http://schema.org/PreOrder",PreSale:"http://schema.org/PreSale",SoldOut:"http://schema.org/SoldOut"},d={DamagedCondition:"http://schema.org/DamagedCondition",NewCondition:"http://schema.org/NewCondition",RefurbishedCondition:"http://schema.org/RefurbishedCondition",UsedCondition:"http://schema.org/UsedCondition"};t.ProductJsonLd=function(e){var t,r,n,i=e.name,l=e.productName,p=e.images,f=void 0===p?[]:p,m=e.description,b=e.sku,y=e.gtin12,g=e.gtin,v=e.gtin8,O=e.gtin13,h=e.gtin14,j=e.mpn,P=e.brand,w=e.reviews,E=void 0===w?[]:w,k=e.aggregateRating,_=e.offers,L=e.offersType,S=void 0===L?"Offer":L,D=e.overrides,x=void 0===D?{}:D,A=e.defer,J=void 0!==A&&A,M=u({"@context":"https://schema.org","@type":"Product",name:null!=i?i:l,image:f,sku:b,gtin:g,gtin8:v,gtin12:y,gtin13:O,gtin14:h,mpn:j,brand:P?{"@type":"Brand",name:P}:void 0,description:m,review:E.map((function(e){var t=e.reviewRating;return u(u({"@type":"Review"},(0,o.default)(e,["reviewRating"])),{},{reviewRating:u({"@type":"Rating"},t)})})),aggregateRating:k?u({"@type":"AggregateRating"},k):void 0,offers:_?u(u({"@type":S},_),{},{availability:(n=_.availability,n?s[n]:void 0),itemCondition:(r=_.itemCondition,r?d[r]:void 0),seller:_.seller?{"@type":null!==(t=_.seller.type)&&void 0!==t?t:"Organization",name:_.seller.name}:void 0}):void 0},x);return a.default.createElement(c.JsonLd,{defer:J,json:M})}},1650:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SitelinksSearchBoxJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SitelinksSearchBoxJsonLd=function(e){var t=e.url,r=e.searchHandlerQueryStringUrl,n=e.overrides,l=void 0===n?{}:n,u=e.defer,s=void 0!==u&&u,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"WebSite",url:t,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"".concat(r,"{search_term_string}")},"query-input":"required name=search_term_string"}},l);return i.default.createElement(a.JsonLd,{defer:s,json:d})}},4538:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=void 0;var o=n(r(7294)),i=r(2055);t.SocialProfileJsonLd=function(e){var t=e.type,r=e.name,n=e.url,a=e.sameAs,c=void 0===a?[]:a,l=e.defer,u=void 0!==l&&l,s='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(r,'",\n    "url": "').concat(n,'",\n    "sameAs": [\n      ').concat(c.map((function(e){return'"'.concat(e,'"')})).toString(),"\n     ]\n  }");return o.default.createElement(i.Helmet,{defer:u},o.default.createElement("script",{type:"application/ld+json"},s))}},9756:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SpeakableJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SpeakableJsonLd=function(e){var t=e.xpath,r=e.cssSelector,n=e.overrides,l=void 0===n?{}:n,u=e.defer,s=void 0!==u&&u;if(t&&r)throw new Error("Speakable should use either xpath or the cssSelector, not both.");var d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"SpeakableSpecification",cssSelector:r,xpath:t},l);return i.default.createElement(a.JsonLd,{defer:s,json:d})}},1326:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.GatsbySeo=void 0;var o=n(r(7294)),i=r(1792);t.GatsbySeo=function(e){var t=e.metaTags,r=e.linkTags,n=e.canonical,a=e.description,c=e.facebook,l=e.htmlAttributes,u=e.language,s=e.languageAlternates,d=e.mobileAlternate,p=e.nofollow,f=e.noindex,m=e.openGraph,b=e.title,y=e.titleTemplate,g=e.twitter;return o.default.createElement(i.BaseSeo,{metaTags:t,linkTags:r,canonical:n,description:a,facebook:c,htmlAttributes:l,language:u,languageAlternates:s,mobileAlternate:d,nofollow:p,noindex:f,openGraph:m,title:b,titleTemplate:y,twitter:g})}},4414:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1792);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(1326);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}))},8922:function(){},8069:function(e,t,r){var n=r(7294);t.Z=function(){return n.createElement("footer",null,n.createElement("div",null,n.createElement("div",null,n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.scrollTo(0,0)},onKeyDown:null},n.createElement("img",{src:"/img/other/top.png",width:"13",height:"8",alt:"top"}))),n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.scrollTo(0,0)},onKeyDown:null},"up")),n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.scrollTo(0,0)},onKeyDown:null},n.createElement("img",{src:"/img/other/top.png",width:"13",height:"8",alt:"top"})))),n.createElement("div",null,n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.location="https://extremeautomation.io/"},onKeyDown:null},"created with",n.createElement("img",{src:"/img/other/love.png",width:"25",height:"23",alt:"love"}))),n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.location="https://extremeautomation.io/"},onKeyDown:null},"by")),n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.location="https://extremeautomation.io/"},onKeyDown:null},n.createElement("img",{src:"/img/other/ea.png",width:"120",height:"24",alt:"extremeautomation.io"}))))))}},2716:function(e,t,r){var n=r(7294),o=r(5414),i=r(4125);t.Z=function(e){var t=e.page,r=e.fm,a=e.menu,c={htmlAttributes:{lang:"en"},titleTemplate:"%s - Behind Proxyz",title:r&&r.title?r.title:"Introduction"},l={openGraph:{title:r&&r.title?r.title:"Introduction",description:r&&r.description?r.description:"List of tools",url:"https://behindpro.xyz/"+t,type:"article",article:{publishedTime:r&&r.date?r.date:"2022-01-01",authors:["Andrey Adamovich"],tags:r&&r.keywords?r.keywords.split(/,\s*/):["Tool"]},images:[{url:t&&t.length>0?"https://behindpro.xyz/static/logos/png-pixelated/"+t+".png":"https://behindpro.xyz/static/icons/favicon.png",alt:r&&r.title?r.title:"Behind Proxies"}]}},u={url:"https://behindpro.xyz/"+t,headline:r&&r.title?r.title:"Introduction",description:r&&r.description?r.description:"List of tools",images:t&&t.length>0?"https://behindpro.xyz/static/logos/png-pixelated/"+t+".png":"https://behindpro.xyz/static/icons/favicon.png",datePublished:r&&r.date?r.date:"2022-01-01",authorName:"Andrey Adamovich",publisherName:"Andrey Adamovich",publisherLogo:"https://extremeautomation.io/images/andrey-adamovich.jpg"},s=function(e){document.getElementById("burger").classList.toggle("open"),document.getElementById("navi").classList.toggle("show"),document.getElementById("blue1").classList.toggle("slide"),document.getElementById("blue2").classList.toggle("slide"),e.stopPropagation()},d=function(e){for(var t=document.querySelectorAll('[id^="submenu"]'),r=0;r<t.length;r++)t[r].id==="submenu"+e?(t[r].classList.toggle("open"),document.getElementById("sublist"+e).classList.toggle("expand")):(t[r].classList.remove("open"),document.getElementById("sublist"+t[r].id.substring(7)).classList.remove("expand"))};return n.createElement(n.Fragment,null,n.createElement(o.Z,c),n.createElement(i.GatsbySeo,l),n.createElement(i.ArticleJsonLd,u),n.createElement("header",null,n.createElement("div",null,n.createElement("div",null,n.createElement("div",null,n.createElement("a",{href:"/"},n.createElement("img",{src:"/img/other/logo.png",width:"60",height:"53",alt:"Behind Proxyz"}))),n.createElement("div",null,n.createElement("a",{href:"/"},"BEHIND PROXYZ")),n.createElement("div",null,n.createElement("div",{id:"burger",className:"burger",role:"button","aria-label":"menu",tabIndex:"0",onClick:s,onKeyDown:s},n.createElement("div",{className:"lines"})))))),n.createElement("div",{id:"blue1",className:"bg blue1"}),n.createElement("div",{id:"blue2",className:"bg blue2"}),n.createElement("nav",{id:"navi"},n.createElement("div",{id:"love"},n.createElement("div",null,n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.location="https://extremeautomation.io/"},onKeyDown:null},"created with",n.createElement("img",{src:"/img/other/love.png",width:"25",height:"23",alt:"love"}))),n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.location="https://extremeautomation.io/"},onKeyDown:null},"by")),n.createElement("div",null,n.createElement("span",{role:"link",tabIndex:"0",onClick:function(){return window.location="https://extremeautomation.io/"},onKeyDown:null},n.createElement("img",{src:"/img/other/ea.png",width:"120",height:"24",alt:"extremeautomation.io"}))))),n.createElement("div",{id:"menu"},Object.keys(a).map((function(e,t){return n.createElement("div",{className:"menu-item",key:"div1"+t},n.createElement("div",{className:"menu-row",key:"div2"+t},n.createElement("div",{key:"div3"+t},n.createElement("div",{id:"submenu"+t,className:"burger small",role:"button","aria-label":e,tabIndex:"0",onClick:function(){return d(t)},onKeyDown:null,key:"div4"+t},n.createElement("div",{className:"lines small",key:"div5"+t}))),n.createElement("div",{key:"div6"+t},n.createElement("span",{className:"cate",role:"link",tabIndex:"0",onClick:function(){return d(t)},onKeyDown:null,key:"span7"+t},e))),n.createElement("div",{id:"sublist"+t,className:"menu-row-group",key:"div8"+t},a[e].map((function(e,t){return n.createElement("div",{className:"menu-row",key:"div1"+t},n.createElement("div",{key:"div2"+t},"  …"),n.createElement("div",{key:"div3"+t},n.createElement("a",{href:"/"+e.page,key:"a4"+t},e.page)))}))))})))))}}}]);
//# sourceMappingURL=8b7743e114c6c4d10eba69a414c703d343517f16-669d442b9101f1880dda.js.map