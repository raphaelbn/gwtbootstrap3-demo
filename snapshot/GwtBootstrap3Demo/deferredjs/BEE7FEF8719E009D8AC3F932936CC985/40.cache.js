$wnd.GwtBootstrap3Demo.runAsyncCallback40("function $Rc(){}\nfunction cSc(){}\nfunction eSc(){}\nfunction fSc(){fSc=phb;bSc=new eSc}\nfunction fwc(a){zyb.call(this,a);ewc(this)}\nfunction ZRc(){BJb.call(this);zJb(this,_Rc(new aSc))}\nfunction TRc(a,b,c){NIb();jJb.call(this,a,b,c,(Bwc(),Awc))}\nfunction aSc(){this.a=(new cSc,fSc(),bSc);dSc(this.a)}\nfunction VWc(a){var b;if(!a.M){b=new ZRc(new $Rc);a.M=b}return a.M}\nfunction UWc(a){var b;if(!a.L){b=new TRc(mIb(QJb(a.a)),VWc(a),TWc(a));FIb((TJb(a.a),b),dKb(TJb(a.a)));a.L=b}return a.L}\nfunction dSc(a){if(!a.a){a.a=true;mx((rD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction _Rc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new n5b;H$b(a,(b=new a1b(ALd),H$b(b,(c=new T3b,c.a='Offline',S3b(c),c)),H$b(b,(d=new P_b,H$b(d,(e=new O1b((Rdc(),Odc)),ulb(e.eb,'GPBYFDEFM',true),twc(e.b,GRd),I$b(e,e.b,0),e)),H$b(d,new nwc((j=new VPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new njb(j.a)).a)),H$b(d,(f=new d1c,c5b(f,(k=new VPb,k.a+=HRd,new njb(k.a)).a),ulb(f.eb,FLd,true),f)),H$b(d,new nwc((l=new VPb,l.a+=IRd,new njb(l.a)).a)),H$b(d,(g=new d1c,c5b(g,(m=new VPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new njb(m.a)).a),ulb(g.eb,FLd,true),g)),ulb(d.eb,'GPBYFDEEM',true),d)),H$b(b,(h=new e4b,H$b(h,(n=new t4b,H$b(n,(o=new O1b(Ndc),twc(o.b,'What is Offline?'),I$b(o,o.b,0),o)),n)),H$b(h,(p=new g4b,H$b(p,new fwc((q=new VPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new njb(q.a)).a)),p)),H$b(h,new q4b),h)),H$b(b,(i=new e4b,H$b(i,(r=new t4b,H$b(r,(s=new O1b(Ndc),twc(s.b,'How to configure?'),I$b(s,s.b,0),s)),r)),H$b(i,(t=new g4b,H$b(t,new nwc((u=new VPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new njb(u.a)).a)),H$b(t,(v=new d1c,c5b(v,(w=new VPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new njb(w.a)).a),ulb(v.eb,FLd,true),v)),H$b(t,new nwc((A=new VPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new njb(A.a)).a)),H$b(t,(B=new d1c,c5b(B,(C=new VPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new njb(C.a)).a),ulb(B.eb,FLd,true),B)),H$b(t,new nwc((D=new VPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new njb(D.a)).a)),H$b(t,(F=new d1c,c5b(F,(G=new VPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new njb(G.a)).a),ulb(F.eb,FLd,true),F)),t)),H$b(i,new q4b),i)),b));return a}\nohb(406,231,nId,fwc);ohb(973,44,zId,TRc);var T5=jOb(rLd,'OfflinePresenter',973);ohb(1211,47,AId,ZRc);var Y5=jOb(rLd,'OfflineView',1211);ohb(1485,1,{},$Rc);var X5=jOb(rLd,'OfflineView_BinderImpl',1485);ohb(1486,1,{},aSc);var U5=jOb(rLd,'OfflineView_BinderImpl/Widgets',1486);ohb(1832,1,{},cSc);var bSc;var W5=jOb(rLd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1832);ohb(1833,1,{},eSc);_.a=false;var V5=jOb(rLd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1833);ohb(895,1,NKd);_.Sb=function uXc(){wLb(this.b,UWc(this.a.a))};YFd(Oo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")