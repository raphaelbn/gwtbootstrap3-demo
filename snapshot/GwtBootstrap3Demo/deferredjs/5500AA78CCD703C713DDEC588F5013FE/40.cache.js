$wnd.GwtBootstrap3Demo.runAsyncCallback40("function OKc(){}\nfunction SKc(){}\nfunction UKc(){}\nfunction VKc(){VKc=Qbb;RKc=new UKc}\nfunction sqc(a){jtb.call(this,a);rqc(this)}\nfunction NKc(){JEb.call(this);HEb(this,PKc(new QKc))}\nfunction HKc(a,b,c){VDb();rEb.call(this,a,b,c,(Nqc(),Mqc))}\nfunction QKc(){this.a=(new SKc,VKc(),RKc);TKc(this.a)}\nfunction UOc(a){var b;if(!a.M){b=new NKc(new OKc);a.M=b}return a.M}\nfunction TOc(a){var b;if(!a.L){b=new HKc(uDb(YEb(a.a)),UOc(a),SOc(a));NDb((_Eb(a.a),b),lFb(_Eb(a.a)));a.L=b}return a.L}\nfunction TKc(a){if(!a.a){a.a=true;av((gB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction PKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new h0b;MVb(a,(b=new bYb(Gsd),MVb(b,(c=new V$b,c.a='Offline',U$b(c),c)),MVb(b,(d=new QWb,MVb(d,(e=new PYb((Y8b(),V8b)),Tfb((onb(),e.eb),'GPBYFDECM',true),Fqc(e.b,Jyd),NVb(e,e.b,0),e)),MVb(d,new zqc((j=new _Kb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Kdb(j.a)).a)),MVb(d,(f=new WUc,Y_b(f,(k=new _Kb,k.a+=Kyd,new Kdb(k.a)).a),Tfb(f.eb,Lsd,true),f)),MVb(d,new zqc((l=new _Kb,l.a+=Lyd,new Kdb(l.a)).a)),MVb(d,(g=new WUc,Y_b(g,(m=new _Kb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Kdb(m.a)).a),Tfb(g.eb,Lsd,true),g)),Tfb(d.eb,'GPBYFDEBM',true),d)),MVb(b,(h=new g_b,MVb(h,(n=new v_b,MVb(n,(o=new PYb(U8b),Fqc(o.b,'What is Offline?'),NVb(o,o.b,0),o)),n)),MVb(h,(p=new i_b,MVb(p,new sqc((q=new _Kb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Kdb(q.a)).a)),p)),MVb(h,new s_b),h)),MVb(b,(i=new g_b,MVb(i,(r=new v_b,MVb(r,(s=new PYb(U8b),Fqc(s.b,'How to configure?'),NVb(s,s.b,0),s)),r)),MVb(i,(t=new i_b,MVb(t,new zqc((u=new _Kb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Kdb(u.a)).a)),MVb(t,(v=new WUc,Y_b(v,(w=new _Kb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Kdb(w.a)).a),Tfb(v.eb,Lsd,true),v)),MVb(t,new zqc((A=new _Kb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Kdb(A.a)).a)),MVb(t,(B=new WUc,Y_b(B,(C=new _Kb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Kdb(C.a)).a),Tfb(B.eb,Lsd,true),B)),MVb(t,new zqc((D=new _Kb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Kdb(D.a)).a)),MVb(t,(F=new WUc,Y_b(F,(G=new _Kb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Kdb(G.a)).a),Tfb(F.eb,Lsd,true),F)),t)),MVb(i,new s_b),i)),b));return a}\nPbb(397,226,Tqd,sqc);Pbb(917,48,Bpd,HKc);var D2=qJb(tsd,'OfflinePresenter',917);Pbb(1155,51,Cpd,NKc);var I2=qJb(tsd,'OfflineView',1155);Pbb(1388,1,{},OKc);var H2=qJb(tsd,'OfflineView_BinderImpl',1388);Pbb(1389,1,{},QKc);var E2=qJb(tsd,'OfflineView_BinderImpl/Widgets',1389);Pbb(1723,1,{},SKc);var RKc;var G2=qJb(tsd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1723);Pbb(1724,1,{},UKc);_.a=false;var F2=qJb(tsd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1724);Pbb(841,1,Rrd);_.Sb=function qPc(){EGb(this.b,TOc(this.a.a))};end(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
