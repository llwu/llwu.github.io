(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{tSgA:function(s,a){s.exports=function(s){const a="^[a-zA-Z][a-zA-Z0-9-]*",e="[!@#$^&',?+~`|:]",n=s.COMMENT(";","$"),o={className:"attribute",begin:a+"(?=\\s*=)"};return{name:"Augmented Backus-Naur Form",illegal:e,keywords:["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"].join(" "),contains:[o,n,{className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},{className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},{className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},{className:"symbol",begin:/%[si]/},s.QUOTE_STRING_MODE,s.NUMBER_MODE]}}}}]);