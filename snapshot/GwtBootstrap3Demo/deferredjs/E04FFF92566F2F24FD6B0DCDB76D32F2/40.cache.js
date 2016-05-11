$wnd.GwtBootstrap3Demo.runAsyncCallback40("function nSc(){}\nfunction rSc(){}\nfunction tSc(){}\nfunction uSc(){uSc=ihb;qSc=new tSc}\nfunction uwc(a){Dyb.call(this,a);twc(this)}\nfunction mSc(){MJb.call(this);KJb(this,oSc(new pSc))}\nfunction gSc(a,b,c){YIb();uJb.call(this,a,b,c,(Qwc(),Pwc))}\nfunction pSc(){this.a=(new rSc,uSc(),qSc);sSc(this.a)}\nfunction yXc(a){var b;if(!a.M){b=new mSc(new nSc);a.M=b}return a.M}\nfunction xXc(a){var b;if(!a.L){b=new gSc(xIb(_Jb(a.a)),yXc(a),wXc(a));QIb((cKb(a.a),b),oKb(cKb(a.a)));a.L=b}return a.L}\nfunction sSc(a){if(!a.a){a.a=true;dx((gD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction oSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new C5b;T$b(a,(b=new o1b(AMd),T$b(b,(c=new g4b,c.a='Offline',f4b(c),c)),T$b(b,(d=new b0b,T$b(d,(e=new a2b((eec(),bec)),mlb((Isb(),e.eb),'GPBYFDEFM',true),Iwc(e.b,GSd),U$b(e,e.b,0),e)),T$b(d,new Cwc((j=new eQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new cjb(j.a)).a)),T$b(d,(f=new I1c,r5b(f,(k=new eQb,k.a+=HSd,new cjb(k.a)).a),mlb(f.eb,FMd,true),f)),T$b(d,new Cwc((l=new eQb,l.a+=ISd,new cjb(l.a)).a)),T$b(d,(g=new I1c,r5b(g,(m=new eQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new cjb(m.a)).a),mlb(g.eb,FMd,true),g)),mlb(d.eb,'GPBYFDEEM',true),d)),T$b(b,(h=new t4b,T$b(h,(n=new I4b,T$b(n,(o=new a2b(aec),Iwc(o.b,'What is Offline?'),U$b(o,o.b,0),o)),n)),T$b(h,(p=new v4b,T$b(p,new uwc((q=new eQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new cjb(q.a)).a)),p)),T$b(h,new F4b),h)),T$b(b,(i=new t4b,T$b(i,(r=new I4b,T$b(r,(s=new a2b(aec),Iwc(s.b,'How to configure?'),U$b(s,s.b,0),s)),r)),T$b(i,(t=new v4b,T$b(t,new Cwc((u=new eQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new cjb(u.a)).a)),T$b(t,(v=new I1c,r5b(v,(w=new eQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new cjb(w.a)).a),mlb(v.eb,FMd,true),v)),T$b(t,new Cwc((A=new eQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new cjb(A.a)).a)),T$b(t,(B=new I1c,r5b(B,(C=new eQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new cjb(C.a)).a),mlb(B.eb,FMd,true),B)),T$b(t,new Cwc((D=new eQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new cjb(D.a)).a)),T$b(t,(F=new I1c,r5b(F,(G=new eQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new cjb(G.a)).a),mlb(F.eb,FMd,true),F)),t)),T$b(i,new F4b),i)),b));return a}\nhhb(407,232,mJd,uwc);hhb(976,44,AJd,gSc);var F5=uOb(rMd,'OfflinePresenter',976);hhb(1214,47,BJd,mSc);var K5=uOb(rMd,'OfflineView',1214);hhb(1489,1,{},nSc);var J5=uOb(rMd,'OfflineView_BinderImpl',1489);hhb(1490,1,{},pSc);var G5=uOb(rMd,'OfflineView_BinderImpl/Widgets',1490);hhb(1837,1,{},rSc);var qSc;var I5=uOb(rMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1837);hhb(1838,1,{},tSc);_.a=false;var H5=uOb(rMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1838);hhb(898,1,NLd);_.Sb=function ZXc(){HLb(this.b,xXc(this.a.a))};WGd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")