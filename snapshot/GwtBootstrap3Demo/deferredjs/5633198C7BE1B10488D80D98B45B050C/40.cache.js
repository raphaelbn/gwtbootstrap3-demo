$wnd.GwtBootstrap3Demo.runAsyncCallback40("function mSc(){}\nfunction qSc(){}\nfunction sSc(){}\nfunction tSc(){tSc=thb;pSc=new sSc}\nfunction twc(a){Ryb.call(this,a);swc(this)}\nfunction lSc(){MJb.call(this);KJb(this,nSc(new oSc))}\nfunction fSc(a,b,c){YIb();uJb.call(this,a,b,c,(Pwc(),Owc))}\nfunction oSc(){this.a=(new qSc,tSc(),pSc);rSc(this.a)}\nfunction hXc(a){var b;if(!a.M){b=new lSc(new mSc);a.M=b}return a.M}\nfunction gXc(a){var b;if(!a.L){b=new fSc(xIb(_Jb(a.a)),hXc(a),fXc(a));QIb((cKb(a.a),b),oKb(cKb(a.a)));a.L=b}return a.L}\nfunction rSc(a){if(!a.a){a.a=true;ax((mD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction nSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new B5b;T$b(a,(b=new n1b(XLd),T$b(b,(c=new f4b,c.a='Offline',e4b(c),c)),T$b(b,(d=new a0b,T$b(d,(e=new _1b((dec(),aec)),xlb((Xsb(),e.eb),'GPBYFDEFM',true),Hwc(e.b,bSd),U$b(e,e.b,0),e)),T$b(d,new Bwc((j=new eQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new njb(j.a)).a)),T$b(d,(f=new r1c,q5b(f,(k=new eQb,k.a+=cSd,new njb(k.a)).a),xlb(f.eb,aMd,true),f)),T$b(d,new Bwc((l=new eQb,l.a+=dSd,new njb(l.a)).a)),T$b(d,(g=new r1c,q5b(g,(m=new eQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new njb(m.a)).a),xlb(g.eb,aMd,true),g)),xlb(d.eb,'GPBYFDEEM',true),d)),T$b(b,(h=new s4b,T$b(h,(n=new H4b,T$b(n,(o=new _1b(_dc),Hwc(o.b,'What is Offline?'),U$b(o,o.b,0),o)),n)),T$b(h,(p=new u4b,T$b(p,new twc((q=new eQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new njb(q.a)).a)),p)),T$b(h,new E4b),h)),T$b(b,(i=new s4b,T$b(i,(r=new H4b,T$b(r,(s=new _1b(_dc),Hwc(s.b,'How to configure?'),U$b(s,s.b,0),s)),r)),T$b(i,(t=new u4b,T$b(t,new Bwc((u=new eQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new njb(u.a)).a)),T$b(t,(v=new r1c,q5b(v,(w=new eQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new njb(w.a)).a),xlb(v.eb,aMd,true),v)),T$b(t,new Bwc((A=new eQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new njb(A.a)).a)),T$b(t,(B=new r1c,q5b(B,(C=new eQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new njb(C.a)).a),xlb(B.eb,aMd,true),B)),T$b(t,new Bwc((D=new eQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new njb(D.a)).a)),T$b(t,(F=new r1c,q5b(F,(G=new eQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new njb(G.a)).a),xlb(F.eb,aMd,true),F)),t)),T$b(i,new E4b),i)),b));return a}\nshb(406,231,LId,twc);shb(973,44,WId,fSc);var X5=uOb(OLd,'OfflinePresenter',973);shb(1211,47,XId,lSc);var a6=uOb(OLd,'OfflineView',1211);shb(1484,1,{},mSc);var _5=uOb(OLd,'OfflineView_BinderImpl',1484);shb(1485,1,{},oSc);var Y5=uOb(OLd,'OfflineView_BinderImpl/Widgets',1485);shb(1833,1,{},qSc);var pSc;var $5=uOb(OLd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1833);shb(1834,1,{},sSc);_.a=false;var Z5=uOb(OLd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1834);shb(895,1,iLd);_.Sb=function IXc(){HLb(this.b,gXc(this.a.a))};tGd(Oo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")