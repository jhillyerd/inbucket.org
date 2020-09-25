(function(e){function t(t){for(var i,s,r=t[0],l=t[1],u=t[2],m=0,p=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/configurator/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"0403":function(e,t,n){},"16ec":function(e,t,n){},"566e":function(e,t,n){"use strict";var i=n("0403"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Inbucket Configurator (Beta)")]),n("ConfigForm"),n("br"),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    Please open an\n    "),n("a",{attrs:{href:"https://github.com/inbucket/inbucket.org/issues"}},[e._v("issue on GitHub")]),e._v("\n    to report a problem with this tool.\n  ")])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"config-form"}},[n("Zippy",{attrs:{title:"Global"}},[n("div",{staticClass:"config-item"},[n("h3",[e._v("Log Level")]),n("p",[e._v("\n        This setting controls the verbosity of log output. A small desktop installation should\n        probably select info, but a busy shared installation would be better off with warn or error.\n      ")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.logLevel,expression:"inbucket.logLevel"}],attrs:{type:"radio",value:"error"},domProps:{checked:e._q(e.inbucket.logLevel,"error")},on:{change:function(t){return e.$set(e.inbucket,"logLevel","error")}}}),n("samp",[e._v("error")]),e._v(":\n          output errors only.\n        ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.logLevel,expression:"inbucket.logLevel"}],attrs:{type:"radio",value:"warn"},domProps:{checked:e._q(e.inbucket.logLevel,"warn")},on:{change:function(t){return e.$set(e.inbucket,"logLevel","warn")}}}),n("samp",[e._v("warn")]),e._v(":\n          output errors and warnings.\n        ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.logLevel,expression:"inbucket.logLevel"}],attrs:{type:"radio",value:"info"},domProps:{checked:e._q(e.inbucket.logLevel,"info")},on:{change:function(t){return e.$set(e.inbucket,"logLevel","info")}}}),n("samp",[e._v("info")]),e._v(":\n          output errors, warnings and information about what Inbucket is doing.\n        ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.logLevel,expression:"inbucket.logLevel"}],attrs:{type:"radio",value:"debug"},domProps:{checked:e._q(e.inbucket.logLevel,"debug")},on:{change:function(t){return e.$set(e.inbucket,"logLevel","debug")}}}),n("samp",[e._v("debug")]),e._v(":\n          output everything, including debugging information.\n        ")])])]),n("div",{staticClass:"config-item"},[n("h3",[e._v("Mailbox Naming")]),n("p",[e._v("The mailbox naming setting determines the name of a mailbox for an incoming\n      message, and thus where it must be retrieved from later.")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.mailboxNaming,expression:"inbucket.mailboxNaming"}],attrs:{type:"radio",value:"local"},domProps:{checked:e._q(e.inbucket.mailboxNaming,"local")},on:{change:function(t){return e.$set(e.inbucket,"mailboxNaming","local")}}}),n("samp",[e._v("local")]),e._v(": ensures the domain is removed, such that:\n          "),n("ul",[n("li",[n("tt",[e._v("james@inbucket.org")]),e._v(" is stored in "),n("tt",[e._v("james")])],1),n("li",[n("tt",[e._v("james+spam@inbucket.org")]),e._v(" is stored in "),n("tt",[e._v("james")])],1)])])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.mailboxNaming,expression:"inbucket.mailboxNaming"}],attrs:{type:"radio",value:"full"},domProps:{checked:e._q(e.inbucket.mailboxNaming,"full")},on:{change:function(t){return e.$set(e.inbucket,"mailboxNaming","full")}}}),n("samp",[e._v("full")]),e._v(": retains the domain as part of the name, such that:\n          "),n("ul",[n("li",[n("tt",[e._v("james@inbucket.org")]),e._v(" is stored in "),n("tt",[e._v("james@inbucket.org")])],1),n("li",[n("tt",[e._v("james+spam@inbucket.org")]),e._v(" is stored in "),n("tt",[e._v("james@inbucket.org")])],1)])])])])]),n("Zippy",{attrs:{title:"SMTP"}},[n("TextInput",{attrs:{title:"Address and Port",hint:"address:port"},model:{value:e.inbucket.smtp.addr,callback:function(t){e.$set(e.inbucket.smtp,"addr",t)},expression:"inbucket.smtp.addr"}},[e._v("\n    The IPv4 address and TCP port number the SMTP server should listen on, separated by a colon.\n    Some operating systems may prevent Inbucket from listening on port 25 without escalated\n    privileges.  Using an IP address of 0.0.0.0 will cause Inbucket to listen on all available\n    network interfaces.\n    ")]),n("TextInput",{attrs:{title:"Greeting Domain",hint:"host or domain name"},model:{value:e.inbucket.smtp.domain,callback:function(t){e.$set(e.inbucket.smtp,"domain",t)},expression:"inbucket.smtp.domain"}},[e._v("\n    The domain used in the SMTP greeting: "),n("tt",[e._v("220 domain Inbucket SMTP ready")]),e._v(".  Most SMTP\n    clients appear to ignore this value.\n    ")],1),n("TextInput",{attrs:{title:"Maximum Recipients",hint:"positive integer"},model:{value:e.inbucket.smtp.maxRecipients,callback:function(t){e.$set(e.inbucket.smtp,"maxRecipients",t)},expression:"inbucket.smtp.maxRecipients"}},[e._v("\n    Maximum number of recipients allowed (SMTP "),n("tt",[e._v("RCPT TO")]),e._v(" phase).  If you are testing\n    a mailing list server, you may need to increase this value.  For comparison, the\n    Postfix SMTP server uses a default of 1000, it would be unwise to exceed this.\n    ")],1),n("TextInput",{attrs:{title:"Maximum Message Size",hint:"positive integer bytes"},model:{value:e.inbucket.smtp.maxMessageBytes,callback:function(t){e.$set(e.inbucket.smtp,"maxMessageBytes",t)},expression:"inbucket.smtp.maxMessageBytes"}},[e._v("\n    Maximum allowable size of a message (including headers) in bytes.  Messages\n    exceeding this size will be rejected during the SMTP "),n("tt",[e._v("DATA")]),e._v(" phase.\n    ")],1),n("div",{staticClass:"config-item"},[n("h3",[e._v("Default Recipient Accept Policy")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.smtp.defaultAccept,expression:"inbucket.smtp.defaultAccept"}],attrs:{type:"radio"},domProps:{value:!0,checked:e._q(e.inbucket.smtp.defaultAccept,!0)},on:{change:function(t){return e.$set(e.inbucket.smtp,"defaultAccept",!0)}}}),n("samp",[e._v("true")]),e._v(":\n          accept mail to any domain unless present in the reject domains list.\n        ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.smtp.defaultAccept,expression:"inbucket.smtp.defaultAccept"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.inbucket.smtp.defaultAccept,!1)},on:{change:function(t){return e.$set(e.inbucket.smtp,"defaultAccept",!1)}}}),n("samp",[e._v("false")]),e._v(":\n          recipients will be rejected unless their domain is present in the accept domains list.\n        ")])])]),n("TextInput",{directives:[{name:"show",rawName:"v-show",value:!e.inbucket.smtp.defaultAccept,expression:"!inbucket.smtp.defaultAccept"}],attrs:{title:"Accepted Recipient Domain List",hint:"comma separated domains"},model:{value:e.inbucket.smtp.acceptDomains,callback:function(t){e.$set(e.inbucket.smtp,"acceptDomains",t)},expression:"inbucket.smtp.acceptDomains"}},[e._v("\n    List of domains to accept mail for when "),n("em",[e._v("Default Recipient Accept Policy")]),e._v(" is false;\n    has no effect when true.\n    ")]),n("TextInput",{directives:[{name:"show",rawName:"v-show",value:e.inbucket.smtp.defaultAccept,expression:"inbucket.smtp.defaultAccept"}],attrs:{title:"Rejected Recipient Domain List",hint:"comma separated domains"},model:{value:e.inbucket.smtp.rejectDomains,callback:function(t){e.$set(e.inbucket.smtp,"rejectDomains",t)},expression:"inbucket.smtp.rejectDomains"}},[e._v("\n    List of domains to reject mail for when "),n("em",[e._v("Default Recipient Accept Policy")]),e._v(" is true;\n    has no effect when false.\n    ")]),n("div",{staticClass:"config-item"},[n("h3",[e._v("Default Recipient Store Policy")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.smtp.defaultStore,expression:"inbucket.smtp.defaultStore"}],attrs:{type:"radio"},domProps:{value:!0,checked:e._q(e.inbucket.smtp.defaultStore,!0)},on:{change:function(t){return e.$set(e.inbucket.smtp,"defaultStore",!0)}}}),n("samp",[e._v("true")]),e._v(":\n          store mail sent to any domain unless present in the discard domains list.\n        ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.smtp.defaultStore,expression:"inbucket.smtp.defaultStore"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.inbucket.smtp.defaultStore,!1)},on:{change:function(t){return e.$set(e.inbucket.smtp,"defaultStore",!1)}}}),n("samp",[e._v("false")]),e._v(":\n          messages will be discarded unless their domain is present in the store domains\n          list.\n        ")])])]),n("TextInput",{directives:[{name:"show",rawName:"v-show",value:!e.inbucket.smtp.defaultStore,expression:"!inbucket.smtp.defaultStore"}],attrs:{title:"Stored Recipient Domain List",hint:"comma separated domains"},model:{value:e.inbucket.smtp.storeDomains,callback:function(t){e.$set(e.inbucket.smtp,"storeDomains",t)},expression:"inbucket.smtp.storeDomains"}},[e._v("\n    List of domains to store mail for when "),n("em",[e._v("Default Recipient Store Policy")]),e._v(" is false;\n    has no effect when true.\n    ")]),n("TextInput",{directives:[{name:"show",rawName:"v-show",value:e.inbucket.smtp.defaultStore,expression:"inbucket.smtp.defaultStore"}],attrs:{title:"Discarded Recipient Domain List",hint:"comma separated domains"},model:{value:e.inbucket.smtp.discardDomains,callback:function(t){e.$set(e.inbucket.smtp,"discardDomains",t)},expression:"inbucket.smtp.discardDomains"}},[e._v("\n    Mail sent to these domains will not be stored by Inbucket.  This is helpful if\n    you are load or soak testing a service, and do not plan to inspect the resulting\n    emails.  Messages sent to a domain other than this will be stored normally.\n    Only has an effect when "),n("em",[e._v("Default Recipient Store Policy")]),e._v(" is true.\n    ")]),n("TextInput",{attrs:{title:"Network Idle Timeout",hint:"duration ending in s for seconds, m for minutes"},model:{value:e.inbucket.smtp.timeout,callback:function(t){e.$set(e.inbucket.smtp,"timeout",t)},expression:"inbucket.smtp.timeout"}},[e._v("\n    Delay before closing an idle SMTP connection.  The SMTP RFC recommends 300\n    seconds.  Consider reducing this *significantly* if you plan to expose Inbucket\n    to the public internet.\n    ")])],1),n("Zippy",{attrs:{title:"POP3"}},[n("TextInput",{attrs:{title:"Address and Port",hint:"address:port"},model:{value:e.inbucket.pop3.addr,callback:function(t){e.$set(e.inbucket.pop3,"addr",t)},expression:"inbucket.pop3.addr"}},[e._v("\n    The IPv4 address and TCP port number the POP3 server should listen on, separated\n    by a colon.  Some operating systems may prevent Inbucket from listening on port\n    110 without escalated privileges.  Using an IP address of 0.0.0.0 will cause\n    Inbucket to listen on all available network interfaces.\n    ")]),n("TextInput",{attrs:{title:"Greeting Domain",hint:"host or domain name"},model:{value:e.inbucket.pop3.domain,callback:function(t){e.$set(e.inbucket.pop3,"domain",t)},expression:"inbucket.pop3.domain"}},[n("p",[e._v("The domain used in the POP3 greeting:")]),n("tt",[e._v("+OK Inbucket POP3 server ready <26641.1522000423@domain>")]),n("p",[e._v("Most POP3 clients appear to ignore this value.")])],1),n("TextInput",{attrs:{title:"Network Idle Timeout",hint:"duration ending in s for seconds, m for minutes"},model:{value:e.inbucket.pop3.timeout,callback:function(t){e.$set(e.inbucket.pop3,"timeout",t)},expression:"inbucket.pop3.timeout"}},[e._v("\n    Delay before closing an idle POP3 connection.  The POP3 RFC recommends 600\n    seconds.  Consider reducing this "),n("em",[e._v("significantly")]),e._v(" if you plan to expose Inbucket\n    to the public internet.\n    ")])],1),n("Zippy",{attrs:{title:"Web"}},[n("TextInput",{attrs:{title:"Address and Port",hint:"address:port"},model:{value:e.inbucket.web.addr,callback:function(t){e.$set(e.inbucket.web,"addr",t)},expression:"inbucket.web.addr"}},[e._v("\n  The IPv4 address and TCP port number the HTTP server should listen on, separated\n  by a colon.  Some operating systems may prevent Inbucket from listening on port\n  80 without escalated privileges.  Using an IP address of 0.0.0.0 will cause\n  Inbucket to listen on all available network interfaces.\n  ")]),n("TextInput",{attrs:{title:"UI Directory",hint:"OS directory path"},model:{value:e.inbucket.web.uiDir,callback:function(t){e.$set(e.inbucket.web,"uiDir",t)},expression:"inbucket.web.uiDir"}},[n("p",[e._v("This directory contains the templates and static assets for the web user\n  interface.  You will need to change this if the current working directory\n  doesn't contain the "),n("tt",[e._v("ui")]),e._v(" directory at startup.")],1),n("p",[e._v("Inbucket will load templates from the "),n("tt",[e._v("templates")]),e._v(" sub-directory, and serve\n  static assets from the "),n("tt",[e._v("static")]),e._v(" sub-directory.")],1)]),n("TextInput",{attrs:{title:"Greeting HTML File",hint:"OS file path"},model:{value:e.inbucket.web.greetingFile,callback:function(t){e.$set(e.inbucket.web,"greetingFile",t)},expression:"inbucket.web.greetingFile"}},[e._v("\n  The content of the greeting file will be injected into the front page of\n  Inbucket.  It can be used to instruct users on how to send mail into your\n  Inbucket installation, as well as link to REST documentation, etc.\n  ")]),n("div",{staticClass:"config-item"},[n("h3",[e._v("Template Caching")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.web.templateCache,expression:"inbucket.web.templateCache"}],attrs:{type:"radio"},domProps:{value:!0,checked:e._q(e.inbucket.web.templateCache,!0)},on:{change:function(t){return e.$set(e.inbucket.web,"templateCache",!0)}}}),n("samp",[e._v("true")]),e._v(":\n        cache HTML templates after first use.\n      ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.web.templateCache,expression:"inbucket.web.templateCache"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.inbucket.web.templateCache,!1)},on:{change:function(t){return e.$set(e.inbucket.web,"templateCache",!1)}}}),n("samp",[e._v("false")]),e._v(":\n        always load HTML templates from disk, useful during Inbucket development.\n      ")])])]),n("TextInput",{attrs:{title:"Mailbox Prompt",hint:"text string"},model:{value:e.inbucket.web.mailboxPrompt,callback:function(t){e.$set(e.inbucket.web,"mailboxPrompt",t)},expression:"inbucket.web.mailboxPrompt"}},[n("p",[e._v("Text prompt displayed to the right of the mailbox name input field in the web\n  interface.  Can be used to nudge your users into typing just the mailbox name\n  instead of an entire email address.")]),n("p",[e._v("Set to an empty string to hide the prompt.")])]),n("TextInput",{attrs:{title:"Cookie Authentication Key",hint:"text string"},model:{value:e.inbucket.web.cookieAuthKey,callback:function(t){e.$set(e.inbucket.web,"cookieAuthKey",t)},expression:"inbucket.web.cookieAuthKey"}},[e._v("\n  Inbucket stores session information in an encrypted browser cookie.  Unless\n  specified, Inbucket generates a random key at startup.  The only notable data\n  stored in a user session is the list of recently accessed mailboxes.\n  ")]),n("div",{staticClass:"config-item"},[n("h3",[e._v("Monitor Visible")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.web.monitorVisible,expression:"inbucket.web.monitorVisible"}],attrs:{type:"radio"},domProps:{value:!0,checked:e._q(e.inbucket.web.monitorVisible,!0)},on:{change:function(t){return e.$set(e.inbucket.web,"monitorVisible",!0)}}}),n("samp",[e._v("true")]),e._v(":\n        the monitor tab will be available, allowing users to observe all\n        messages received by Inbucket as they arrive.\n      ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.web.monitorVisible,expression:"inbucket.web.monitorVisible"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.inbucket.web.monitorVisible,!1)},on:{change:function(t){return e.$set(e.inbucket.web,"monitorVisible",!1)}}}),n("samp",[e._v("false")]),e._v(":\n        the monitor will be hidden.\n      ")])]),n("p",[e._v("This setting has no impact on the availability of the underlying WebSocket,\n    which may be used by other parts of the Inbucket interface or continuous\n    integration tests.")])]),n("TextInput",{attrs:{title:"Monitor History",hint:"positive integer"},model:{value:e.inbucket.web.monitorHistory,callback:function(t){e.$set(e.inbucket.web,"monitorHistory",t)},expression:"inbucket.web.monitorHistory"}},[n("p",[e._v("The number of messages to remember on the "),n("em",[e._v("server")]),e._v(" for new Monitor clients.\n  Does not impact the amount of "),n("em",[e._v("new")]),e._v(" messages displayed by the Monitor.\n  Increasing this has no appreciable impact on memory use, but may slow down the\n  Monitor user interface.")]),n("p",[e._v("This setting also impacts the number of messages available via WebSocket.")]),n("p",[e._v("Setting to 0 will disable the monitor, but will probably break new mail\n  notifications in the web interface when I finally get around to implementing\n  them.")])])],1),n("Zippy",{attrs:{title:"Storage"}},[n("div",{staticClass:"config-item"},[n("h3",[e._v("Type")]),n("p",[e._v("Selects the storage implementation to use.  Currently Inbucket supports:")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.storage.type,expression:"inbucket.storage.type"}],attrs:{type:"radio",value:"file"},domProps:{checked:e._q(e.inbucket.storage.type,"file")},on:{change:function(t){return e.$set(e.inbucket.storage,"type","file")}}}),n("samp",[e._v("file")]),e._v(":\n        stores messages as individual files in a nested directory structure\n        based on the hash of the mailbox name.  Each mailbox also includes an index\n        file to speed up enumeration of the mailbox contents.\n        output errors only.\n      ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inbucket.storage.type,expression:"inbucket.storage.type"}],attrs:{type:"radio",value:"memory"},domProps:{checked:e._q(e.inbucket.storage.type,"memory")},on:{change:function(t){return e.$set(e.inbucket.storage,"type","memory")}}}),n("samp",[e._v("memory")]),e._v(":\n        stores messages in RAM, they will be lost if Inbucket is restarted,\n        or crashes, etc.\n      ")])]),n("p",[e._v("File storage is recommended for larger/shared installations.  Memory is better\n    suited to desktop or continuous integration test use cases.")])]),n("TextInput",{attrs:{title:"Parameters",hint:"see above"},model:{value:e.inbucket.storage.params,callback:function(t){e.$set(e.inbucket.storage,"params",t)},expression:"inbucket.storage.params"}},[n("p",[e._v("Parameters specific to the storage type selected.  Formatted as a comma\n    separated list of key:value pairs.")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"file"==e.inbucket.storage.type,expression:"inbucket.storage.type == 'file'"}]},[n("h4",[n("tt",[e._v("file")]),e._v(" type parameters")],1),n("ul",[n("li",[n("tt",[e._v("path")]),e._v(": Operating system specific path to the directory where mail should be\n          stored.\n        ")],1)]),n("p",[e._v("example: "),n("tt",[e._v("path:/tmp/inbucket")])],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:"memory"==e.inbucket.storage.type,expression:"inbucket.storage.type == 'memory'"}]},[n("h4",[n("tt",[e._v("memory")]),e._v(" type parameters")],1),n("ul",[n("li",[n("tt",[e._v("maxkb")]),e._v(": Maximum size of the mail store in kilobytes.  The oldest messages in\n          the store will be deleted to enforce the limit.  In-memory storage has some\n          overhead, for now it is recommended to set this to half the total amount of\n          memory you are willing to allocate to Inbucket.\n        ")],1)]),n("p",[e._v("example: "),n("tt",[e._v("maxkb:10240")])],1)])]),n("TextInput",{attrs:{title:"Retention Period",hint:"duration ending in m for minutes, h for hours"},model:{value:e.inbucket.storage.retentionPeriod,callback:function(t){e.$set(e.inbucket.storage,"retentionPeriod",t)},expression:"inbucket.storage.retentionPeriod"}},[n("p",[e._v("If set, Inbucket will scan the contents of its mail store once per minute,\n  removing messages older than this.  This will be enforced regardless of the type\n  of storage configured.")]),n("p",[e._v("Should be significantly longer than one minute, or 0 to disable.")])]),n("TextInput",{attrs:{title:"Retention Sleep",hint:"duration ending in ms for milliseconds, s for seconds"},model:{value:e.inbucket.storage.retentionSleep,callback:function(t){e.$set(e.inbucket.storage,"retentionSleep",t)},expression:"inbucket.storage.retentionSleep"}},[e._v("\n  Duration to sleep between scanning each mailbox for expired messages.\n  Increasing this number will reduce disk thrashing, but extend the length of time\n  required to complete a scan of the entire mail store.\n\n  This delay is still enforced for memory stores, but could be reduced from the\n  default.  Setting to "),n("tt",[e._v("0")]),e._v(" may degrade performance of HTTP/SMTP/POP3 services.\n  ")],1),n("TextInput",{attrs:{title:"Per Mailbox Message Cap",hint:"positive integer"},model:{value:e.inbucket.storage.mailboxMsgCap,callback:function(t){e.$set(e.inbucket.storage,"mailboxMsgCap",t)},expression:"inbucket.storage.mailboxMsgCap"}},[e._v("\n  Maximum messages allowed in a single mailbox, exceeding this will cause older\n  messages to be deleted from the mailbox.  A value of "),n("tt",[e._v("0")]),e._v(" will disable cap enforcement.\n  ")],1)],1),n("Zippy",{attrs:{title:"Environment Variables"}},[n("div",[n("label",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.format,expression:"format"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.format=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"bash"}},[e._v("Bash Exports")]),n("option",{attrs:{value:"compose"}},[e._v("Docker Compose")]),n("option",{attrs:{value:"docker"}},[e._v("Docker Shell")]),n("option",{attrs:{value:"systemd"}},[e._v("Systemd")]),n("option",{attrs:{value:"kubernetes"}},[e._v("Kubernetes configMap")])]),e._v("\n      Output format\n    ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.showDefaults,expression:"showDefaults"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showDefaults)?e._i(e.showDefaults,null)>-1:e.showDefaults},on:{change:function(t){var n=e.showDefaults,i=t.target,a=!!i.checked;if(Array.isArray(n)){var o=null,s=e._i(n,o);i.checked?s<0&&(e.showDefaults=n.concat([o])):s>-1&&(e.showDefaults=n.slice(0,s).concat(n.slice(s+1)))}else e.showDefaults=a}}}),e._v("\n      Show variables that are set to their default value\n    ")])]),n("br"),n("EnvList",{attrs:{config:e.inbucket,defaults:e.inbucketDefaults(),format:e.format,showDefaults:e.showDefaults}})],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(this.variables,(function(t,i){return n("div",{key:i,staticClass:"env-line"},[e._v("\n    "+e._s(t)+"\n  ")])})),0)},u=[],c=(n("7f7f"),{props:["config","defaults","format","showDefaults"],computed:{variables:function(){var e=this.config,t=this.defaults,n=[{name:"LOGLEVEL",value:e.logLevel,def:t.logLevel},{name:"MAILBOXNAMING",value:e.mailboxNaming,def:t.mailboxNaming},{name:"SMTP_ADDR",value:e.smtp.addr,def:t.smtp.addr},{name:"SMTP_DOMAIN",value:e.smtp.domain,def:t.smtp.domain},{name:"SMTP_MAXRECIPIENTS",value:e.smtp.maxRecipients,def:t.smtp.maxRecipients},{name:"SMTP_MAXMESSAGEBYTES",value:e.smtp.maxMessageBytes,def:t.smtp.maxMessageBytes},{name:"SMTP_DEFAULTACCEPT",value:e.smtp.defaultAccept,def:t.smtp.defaultAccept},{name:"SMTP_ACCEPTDOMAINS",value:e.smtp.acceptDomains,def:t.smtp.acceptDomains},{name:"SMTP_REJECTDOMAINS",value:e.smtp.rejectDomains,def:t.smtp.rejectDomains},{name:"SMTP_DEFAULTSTORE",value:e.smtp.defaultStore,def:t.smtp.defaultStore},{name:"SMTP_STOREDOMAINS",value:e.smtp.storeDomains,def:t.smtp.storeDomains},{name:"SMTP_DISCARDDOMAINS",value:e.smtp.discardDomains,def:t.smtp.discardDomains},{name:"SMTP_TIMEOUT",value:e.smtp.timeout,def:t.smtp.timeout},{name:"POP3_ADDR",value:e.pop3.addr,def:t.pop3.addr},{name:"POP3_DOMAIN",value:e.pop3.domain,def:t.pop3.domain},{name:"POP3_TIMEOUT",value:e.pop3.timeout,def:t.pop3.timeout},{name:"WEB_ADDR",value:e.web.addr,def:t.web.addr},{name:"WEB_UIDIR",value:e.web.uiDir,def:t.web.uiDir},{name:"WEB_GREETINGFILE",value:e.web.greetingFile,def:t.web.greetingFile},{name:"WEB_TEMPLATECACHE",value:e.web.templateCache,def:t.web.templateCache},{name:"WEB_MAILBOXPROMPT",value:e.web.mailboxPrompt,def:t.web.mailboxPrompt},{name:"WEB_COOKIEAUTHKEY",value:e.web.cookieAuthKey,def:t.web.cookieAuthKey},{name:"WEB_MONITORVISIBLE",value:e.web.monitorVisible,def:t.web.monitorVisible},{name:"WEB_MONITORHISTORY",value:e.web.monitorHistory,def:t.web.monitorHistory},{name:"STORAGE_TYPE",value:e.storage.type,def:t.storage.type},{name:"STORAGE_PARAMS",value:e.storage.params,def:t.storage.params},{name:"STORAGE_RETENTIONPERIOD",value:e.storage.retentionPeriod,def:t.storage.retentionPeriod},{name:"STORAGE_RETENTIONSLEEP",value:e.storage.retentionSleep,def:t.storage.retentionSleep},{name:"STORAGE_MAILBOXMSGCAP",value:e.storage.mailboxMsgCap,def:t.storage.mailboxMsgCap}],i=n.filter((function(t){return("SMTP_ACCEPTDOMAINS"!==t.name||!e.smtp.defaultAccept)&&(!("SMTP_REJECTDOMAINS"===t.name&&!e.smtp.defaultAccept)&&(("SMTP_STOREDOMAINS"!==t.name||!e.smtp.defaultStore)&&!("SMTP_DISCARDDOMAINS"===t.name&&!e.smtp.defaultStore)))}));switch(this.showDefaults||(i=i.filter((function(e){return e.value!==e.def}))),this.format){case"bash":return i.map((function(e){return"export INBUCKET_"+e.name+'="'+e.value+'"'}));case"compose":return i.map((function(e){return"INBUCKET_"+e.name+': "'+e.value+'"'}));case"docker":return i.map((function(e){return"-e INBUCKET_"+e.name+'="'+e.value+'" \\'}));case"systemd":return i.map((function(e){return"Environment=INBUCKET_"+e.name+"="+e.value}));case"kubernetes":return i.map((function(e){return"INBUCKET_"+e.name+': "'+e.value+'"'}));default:return console.log("unknown output format: "+this.format),[]}}}}),m=c,p=(n("e32e"),n("2877")),d=Object(p["a"])(m,l,u,!1,null,null,null),b=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"config-item"},[n("h3",[e._v(e._s(e.title))]),n("p",[e._t("default")],2),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text"},domProps:{value:e.text},on:{input:[function(t){t.target.composing||(e.text=t.target.value)},function(t){return e.$emit("input",t.target.value)}]}}),e._v("\n    "+e._s(e.hint)+"\n  ")])])},f=[],h={props:["title","value","hint"],data:function(){return{text:this.value}}},g=h,k=Object(p["a"])(g,v,f,!1,null,"02f9f4bf",null),_=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{on:{click:function(t){e.show=!e.show}}},[e.show?n("span",[e._v("▼")]):n("span",[e._v("▶")]),e._v("\n    "+e._s(e.title)+"\n  ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._t("default")],2)])},y=[],x={props:["title"],data:function(){return{show:!0}}},T=x,P=Object(p["a"])(T,w,y,!1,null,"20054aea",null),S=P.exports,I={components:{EnvList:b,TextInput:_,Zippy:S},data:function(){return{format:"bash",showDefaults:!1,inbucket:this.inbucketDefaults()}},methods:{inbucketDefaults:function(){return{logLevel:"info",mailboxNaming:"local",smtp:{addr:"0.0.0.0:2500",domain:"inbucket",maxRecipients:200,maxMessageBytes:1024e4,defaultAccept:!0,acceptDomains:"",rejectDomains:"",defaultStore:!0,storeDomains:"",discardDomains:"",timeout:"300s"},pop3:{addr:"0.0.0.0:1100",domain:"inbucket",timeout:"600s"},web:{addr:"0.0.0.0:9000",uiDir:"ui",greetingFile:"ui/greeting.html",templateCache:!0,mailboxPrompt:"@inbucket",cookieAuthKey:"",monitorVisible:!0,monitorHistory:30},storage:{type:"memory",params:"",retentionPeriod:"24h",retentionSleep:"50ms",mailboxMsgCap:500}}}}},M=I,D=(n("566e"),Object(p["a"])(M,s,r,!1,null,null,null)),A=D.exports,E={name:"App",components:{ConfigForm:A}},O=E,N=(n("034f"),Object(p["a"])(O,a,o,!1,null,null,null)),C=N.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(C)}}).$mount("#app")},"64a9":function(e,t,n){},e32e:function(e,t,n){"use strict";var i=n("16ec"),a=n.n(i);a.a}});
//# sourceMappingURL=app.250df33c.js.map