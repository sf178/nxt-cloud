(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["highlight/lisp-js-js","highlight/lisp"],{91943:e=>{e.exports=function(e){const n="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",i="\\|[^]*?\\|",a="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",s={className:"literal",begin:"\\b(t{1}|nil)\\b"},l={className:"number",variants:[{begin:a,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+a+" +"+a,end:"\\)"}]},g=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),t=e.COMMENT(";","$",{relevance:0}),b={begin:"\\*",end:"\\*"},c={className:"symbol",begin:"[:&]"+n},r={begin:n,relevance:0},o={begin:i},d={contains:[l,g,b,c,{begin:"\\(",end:"\\)",contains:["self",s,g,l,r]},r],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+i}]},h={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},u={begin:"\\(\\s*",end:"\\)"},p={endsWithParent:!0,relevance:0};return u.contains=[{className:"name",variants:[{begin:n,relevance:0},{begin:i}]},p],p.contains=[d,h,u,s,l,g,t,b,c,o,r],{name:"Lisp",illegal:/\S/,contains:[l,e.SHEBANG(),s,g,t,d,h,u,r]}}},59998:(e,n,i)=>{!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/lisp" instead of "highlight.js/lib/languages/lisp.js"'))}(),e.exports=i(91943)}}]);
//# sourceMappingURL=lisp-js-js.js.map?v=a150ada2ae872409a49b