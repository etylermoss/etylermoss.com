(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),d=r(a("8OQS")),s=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=g(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,x=S&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var P=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+l+o+d+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,d=l.default.createElement(C,(0,s.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),C=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&x&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||S&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=P(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,d=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,S=e.durationFadeIn,x=e.Tag,v=e.itemProp,O=e.loading,j=e.draggable,P=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,s.default)({opacity:P?1:0,transition:R?"opacity "+S+"ms":"none"},d),z="boolean"==typeof b?"lightgray":b,V={transitionDelay:S+"ms"},H=(0,s.default)({opacity:this.state.imgLoaded?0:1},R&&V,d,f),T={title:t,alt:this.state.isVisible?"":a,style:H,className:g,itemProp:v};if(p){var D=p,W=m(p);return l.default.createElement(x,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(x,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),z&&l.default.createElement(x,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&V)}),W.base64&&l.default.createElement(E,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:T,imageVariants:D,generateSources:I}),W.tracedSVG&&l.default.createElement(E,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:T,imageVariants:D,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(D),l.default.createElement(C,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:O,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:O},W,{imageVariants:D}))}}))}if(h){var M=h,N=m(h),q=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete q.display,l.default.createElement(x,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},z&&l.default.createElement(x,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:z,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},R&&V)}),N.base64&&l.default.createElement(E,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:T,imageVariants:M,generateSources:I}),N.tracedSVG&&l.default.createElement(E,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:T,imageVariants:M,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(M),l.default.createElement(C,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:O,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:O},N,{imageVariants:M}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}R.propTypes={resolutions:k,sizes:z,fixed:V(c.default.oneOfType([k,c.default.arrayOf(k)])),fluid:V(c.default.oneOfType([z,c.default.arrayOf(z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=R;t.default=H},"FXw+":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return w}));var r=a("PcS7"),i=a("2A+t"),n=a("izhR"),o=a("blIu"),d=a("VXBa"),s=a("6o60"),l=a("q1tI"),c=a.n(l),u=a("Wbzz"),f=a("9eSz"),g=a.n(f),m=function(e){var t=Object(u.useStaticQuery)("2523224014").file;return c.a.createElement("div",e,c.a.createElement(g.a,{fluid:t.childImageSharp.fluid}))};function p(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}var h=function(e){return"0 0 5px 0px "+e.colors.shadow},b={container:{position:"relative",flexDirection:["column","row"],boxShadow:[h,"none"]},image:{overflow:"hidden",boxShadow:["none",h]},infoContainer:function(e){return{display:"inline-block",position:[null,"absolute"],width:[null,"30em","40em"],bottom:[null,"8%","7%"],left:[null,"11%","8%"],textDecoration:"none",padding:["0.3em","0.45em"],backgroundColor:"primary",color:function(t){return e?t.colors.modes.dark.bold:"bold"}}},headerContainer:{margin:["0em 0 0.65em 0","0em 0 0.75em 0"]},title:{margin:0},date:{margin:"0 0 0 auto"},excerpt:{margin:0,fontSize:"0.8em"}},S=function(e){var t=e.info,a=e.pathPrefix,r=e.fluid,o=e.forceDarkColorMode,d=void 0!==o&&o,s=e.imageSx,l=p(e,["info","pathPrefix","fluid","forceDarkColorMode","imageSx"]),c=""+a+t.slug;return Object(i.c)(n.b,Object.assign({sx:Object.assign({},b.container)},l),Object(i.c)(u.Link,{to:c},Object(i.c)(g.a,{fluid:r,sx:Object.assign({},b.image,s)})),Object(i.c)(u.Link,{to:c,sx:b.infoContainer(d)},Object(i.c)(n.b,{sx:b.headerContainer},Object(i.c)("h3",{sx:b.title},t.title),Object(i.c)("time",{sx:b.date,dateTime:t.date.toISOString()},t.date.toLocaleDateString())),t.excerpt?Object(i.c)("p",{sx:b.excerpt},t.excerpt):null))},x={container:{boxShadow:function(e){return"0 0 3px 0px "+e.colors.shadow},backgroundColor:"background"},image:{overflow:"hidden"},infoContainer:{display:"inline-block",textDecoration:"none",padding:["0.3em","0.45em"],color:"cardText",backgroundColor:"card",width:"100%"},title:{margin:0},date:{margin:"0 0 0 auto"}},v=function(e){var t=e.info,a=e.pathPrefix,r=e.fluid,n=(e.forceDarkColorMode,e.imageSx),o=e.infoSx,d=p(e,["info","pathPrefix","fluid","forceDarkColorMode","imageSx","infoSx"]);return Object(i.c)("div",Object.assign({sx:Object.assign({},x.container)},d),Object(i.c)(u.Link,{to:""+a+t.slug},Object(i.c)(g.a,{fluid:r,sx:Object.assign({},x.image,n)}),Object(i.c)("div",{sx:Object.assign({},x.infoContainer,o)},Object(i.c)("h3",{sx:x.title},t.title),Object(i.c)("time",{sx:x.date,dateTime:t.date.toISOString()},t.date.toLocaleDateString()))))},y={width:["14em","17em","20em"],float:["none","right","right"],margin:["0 auto 0 auto","0 0 0 1.5em","0 0 0 2em"],borderRadius:"50%",boxShadow:"none"},O={portrait:y,portraitDark:Object.assign({},y,{boxShadow:"0 0 15px -5px #9696F3"}),greetings:{margin:"1em 0 0.3em 0",wordSpacing:"0.3em",fontSize:2,color:"primary"},title:{margin:0,a:{color:"text",textDecoration:"none"}},clearFloat:{clear:"both"},featuredPostHeader:{margin:"4em 0 0.5em 0"},featuredPost:{},featuredPostImage:{width:["unset","30em","42em"],height:["14em","19em","24em"]},recentPostsHeader:{margin:"2.5em 0 0.5em 0",textAlign:"center"},recentPostsContainer:{flexFlow:"row wrap",justifyContent:"space-evenly",alignItems:"flex-start",alignContent:"stretch",flex:"0 1 auto"},recentPost:{flexBasis:["75%","40%","30%"],maxWidth:["75%","40%","30%"],fontSize:"0.8em",marginBottom:"2em"},recentPostImage:{height:["12em","15em"]},recentPostInfo:{height:["unset","5em"]}},w=(t.default=function(e){var t=e.data,a=e.pageContext,l=Object(o.a)().title,c=Object(r.b)()[0],u=function(e,t){return e.edges.reduce((function(e,a){var r,i=a.node.frontmatter,n=i.slug,o=i.title,d=i.date,s=i.featuredImage,l=void 0===s?void 0:s,c=t.edges.find((function(e){return e.node.relativePath===l})),u={slug:n,title:o,date:d,childImageSharp:null==c||null===(r=c.node)||void 0===r?void 0:r.childImageSharp};return e.push(u),e}),[])}(t.recentPosts,t.recentPostsImages);return Object(i.c)(d.a,null,Object(i.c)(s.a,{title:"Home"}),Object(i.c)("main",null,Object(i.c)(m,{sx:"dark"===c?O.portraitDark:O.portrait}),Object(i.c)("p",{sx:O.greetings},"Hello, Hallo, Hola"),Object(i.c)("h1",{sx:O.title},l,"."),Object(i.c)("p",null,"I'm a 19 year old student and programmer. I study Computer Science at the University of Nottingham (2020 - 2024). Outside of education I tinker with electronics, programming, graphic design, and photography."),Object(i.c)("div",{sx:O.clearFloat}),Object(i.c)("h2",{sx:O.featuredPostHeader},"Featured Post"),Object(i.c)(S,{fluid:t.featuredImage?t.featuredImage.childImageSharp.fluid:t.genericImage.childImageSharp.fluid,pathPrefix:"/posts/",info:Object.assign({},a,{date:new Date(a.date)}),sx:O.featuredPost,forceDarkColorMode:!0,imageSx:O.featuredPostImage}),Object(i.c)("h2",{sx:O.recentPostsHeader},"Recent Posts"),Object(i.c)(n.b,{sx:O.recentPostsContainer},u.map((function(e){var a,r;return Object(i.c)(v,{fluid:null!==(a=null===(r=e.childImageSharp)||void 0===r?void 0:r.fluid)&&void 0!==a?a:t.genericImage.childImageSharp.fluid,pathPrefix:"/posts/",info:{title:e.title,slug:e.slug,date:new Date(e.date)},sx:O.recentPost,imageSx:O.recentPostImage,infoSx:O.recentPostInfo})})))))},"3840248842")}}]);
//# sourceMappingURL=component---src-templates-index-page-index-tsx-90fa9d335858ba54c8e5.js.map