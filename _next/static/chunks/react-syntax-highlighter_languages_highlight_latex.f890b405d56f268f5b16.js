(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[108],{FVXi:function(e,n){e.exports=function(e){const n=[{begin:/\^{6}[0-9a-f]{6}/},{begin:/\^{5}[0-9a-f]{5}/},{begin:/\^{4}[0-9a-f]{4}/},{begin:/\^{3}[0-9a-f]{3}/},{begin:/\^{2}[0-9a-f]{2}/},{begin:/\^{2}[\u0000-\u007f]/}],a=[{className:"keyword",begin:/\\/,relevance:0,contains:[{endsParent:!0,begin:function(...e){return"("+e.map(e=>{return(n=e)?"string"===typeof n?n:n.source:null;var n}).join("|")+")"}(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)","Provides(?:Expl)?(?:Package|Class|File)","(?:DeclareOption|ProcessOptions)","(?:documentclass|usepackage|input|include)","makeat(?:letter|other)","ExplSyntax(?:On|Off)","(?:new|renew|provide)?command","(?:re)newenvironment","(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand","(?:New|Renew|Provide|Declare)DocumentEnvironment","(?:(?:e|g|x)?def|let)","(?:begin|end)","(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)","caption","(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)","(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)","(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)","(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)","(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)","(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map(e=>e+"(?![a-zA-Z@:_])"))},{endsParent:!0,begin:new RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*","[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}","[qs]__?[a-zA-Z](?:_?[a-zA-Z])+","use(?:_i)?:[a-zA-Z]*","(?:else|fi|or):","(?:if|cs|exp):w","(?:hbox|vbox):n","::[a-zA-Z]_unbraced","::[a-zA-Z:]"].map(e=>e+"(?![a-zA-Z:_])").join("|"))},{endsParent:!0,variants:n},{endsParent:!0,relevance:0,variants:[{begin:/[a-zA-Z@]+/},{begin:/[^a-zA-Z@]?/}]}]},{className:"params",relevance:0,begin:/#+\d?/},{variants:n},{className:"built_in",relevance:0,begin:/[$&^_]/},{className:"meta",begin:"% !TeX",end:"$",relevance:10},e.COMMENT("%","$",{relevance:0})],i={begin:/\{/,end:/\}/,relevance:0,contains:["self",...a]},t=e.inherit(i,{relevance:0,endsParent:!0,contains:[i,...a]}),r={begin:/\[/,end:/\]/,endsParent:!0,relevance:0,contains:[i,...a]},s={begin:/\s+/,relevance:0},c=[t],o=[r],l=function(e,n){return{contains:[s],starts:{relevance:0,contains:e,starts:n}}},d=function(e,n){return{begin:"\\\\"+e+"(?![a-zA-Z@:_])",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\"+e},relevance:0,contains:[s],starts:n}},g=function(n,a){return e.inherit({begin:"\\\\begin(?=\\s*\\r?\\n?\\s*\\{"+n+"\\})",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\begin"},relevance:0},l(c,a))},m=(n="string")=>e.END_SAME_AS_BEGIN({className:n,begin:/(.|\r?\n)/,end:/(.|\r?\n)/,excludeBegin:!0,excludeEnd:!0,endsParent:!0}),p=function(e){return{className:"string",end:"(?=\\\\end\\{"+e+"\\})"}},b=(e="string")=>({relevance:0,begin:/\{/,starts:{endsParent:!0,contains:[{className:e,end:/(?=\})/,endsParent:!0,contains:[{begin:/\{/,end:/\}/,relevance:0,contains:["self"]}]}]}});return{name:"LaTeX",aliases:["TeX"],contains:[...[...["verb","lstinline"].map(e=>d(e,{contains:[m()]})),d("mint",l(c,{contains:[m()]})),d("mintinline",l(c,{contains:[b(),m()]})),d("url",{contains:[b("link"),b("link")]}),d("hyperref",{contains:[b("link")]}),d("href",l(o,{contains:[b("link")]})),...[].concat(...["","\\*"].map(e=>[g("verbatim"+e,p("verbatim"+e)),g("filecontents"+e,l(c,p("filecontents"+e))),...["","B","L"].map(n=>g(n+"Verbatim"+e,l(o,p(n+"Verbatim"+e))))])),g("minted",l(o,l(c,p("minted"))))],...a]}}}}]);