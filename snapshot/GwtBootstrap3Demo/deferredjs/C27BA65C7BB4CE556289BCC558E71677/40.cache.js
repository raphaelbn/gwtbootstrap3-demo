$wnd.GwtBootstrap3Demo.runAsyncCallback40("function tNc(){}\nfunction xNc(){}\nfunction zNc(){}\nfunction ANc(){ANc=qeb;wNc=new zNc}\nfunction Isc(a){Nvb.call(this,a);Hsc(this)}\nfunction sNc(){IGb.call(this);GGb(this,uNc(new vNc))}\nfunction mNc(a,b,c){UFb();qGb.call(this,a,b,c,(ctc(),btc))}\nfunction vNc(){this.a=(new xNc,ANc(),wNc);yNc(this.a)}\nfunction WRc(a){var b;if(!a.M){b=new sNc(new tNc);a.M=b}return a.M}\nfunction VRc(a){var b;if(!a.L){b=new mNc(tFb(XGb(a.a)),WRc(a),URc(a));MFb(($Gb(a.a),b),kHb($Gb(a.a)));a.L=b}return a.L}\nfunction yNc(a){if(!a.a){a.a=true;_u((AB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction uNc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new t2b;PXb(a,(b=new f$b(sBd),PXb(b,(c=new Z0b,c.a='Offline',Y0b(c),c)),PXb(b,(d=new UYb,PXb(d,(e=new T$b((Tac(),Qac)),tib((Tpb(),e.eb),'GPBYFDECM',true),Wsc(e.b,CHd),QXb(e,e.b,0),e)),PXb(d,new Qsc((j=new aNb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new kgb(j.a)).a)),PXb(d,(f=new YXc,i2b(f,(k=new aNb,k.a+=DHd,new kgb(k.a)).a),tib(f.eb,xBd,true),f)),PXb(d,new Qsc((l=new aNb,l.a+=EHd,new kgb(l.a)).a)),PXb(d,(g=new YXc,i2b(g,(m=new aNb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new kgb(m.a)).a),tib(g.eb,xBd,true),g)),tib(d.eb,'GPBYFDEBM',true),d)),PXb(b,(h=new k1b,PXb(h,(n=new z1b,PXb(n,(o=new T$b(Pac),Wsc(o.b,'What is Offline?'),QXb(o,o.b,0),o)),n)),PXb(h,(p=new m1b,PXb(p,new Isc((q=new aNb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new kgb(q.a)).a)),p)),PXb(h,new w1b),h)),PXb(b,(i=new k1b,PXb(i,(r=new z1b,PXb(r,(s=new T$b(Pac),Wsc(s.b,'How to configure?'),QXb(s,s.b,0),s)),r)),PXb(i,(t=new m1b,PXb(t,new Qsc((u=new aNb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new kgb(u.a)).a)),PXb(t,(v=new YXc,i2b(v,(w=new aNb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new kgb(w.a)).a),tib(v.eb,xBd,true),v)),PXb(t,new Qsc((A=new aNb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new kgb(A.a)).a)),PXb(t,(B=new YXc,i2b(B,(C=new aNb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new kgb(C.a)).a),tib(B.eb,xBd,true),B)),PXb(t,new Qsc((D=new aNb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new kgb(D.a)).a)),PXb(t,(F=new YXc,i2b(F,(G=new aNb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new kgb(G.a)).a),tib(F.eb,xBd,true),F)),t)),PXb(i,new w1b),i)),b));return a}\npeb(405,231,Hzd,Isc);peb(970,49,oyd,mNc);var X3=qLb(iBd,'OfflinePresenter',970);peb(1211,53,pyd,sNc);var a4=qLb(iBd,'OfflineView',1211);peb(1450,1,{},tNc);var _3=qLb(iBd,'OfflineView_BinderImpl',1450);peb(1451,1,{},vNc);var Y3=qLb(iBd,'OfflineView_BinderImpl/Widgets',1451);peb(1795,1,{},xNc);var wNc;var $3=qLb(iBd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1795);peb(1796,1,{},zNc);_.a=false;var Z3=qLb(iBd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1796);peb(894,1,GAd);_.Sb=function sSc(){DIb(this.b,VRc(this.a.a))};Nvd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")