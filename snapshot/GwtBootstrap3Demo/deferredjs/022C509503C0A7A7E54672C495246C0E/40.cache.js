$wnd.GwtBootstrap3Demo.runAsyncCallback40("function oEc(){}\nfunction sEc(){}\nfunction uEc(){}\nfunction vEc(){vEc=h9;rEc=new uEc}\nfunction nEc(){aBb(this,pEc(new qEc))}\nfunction Xjc(a){Tpb.call(this,a);Wjc(this)}\nfunction hEc(a,b,c){rAb();NAb.call(this,a,b,c,(qkc(),pkc))}\nfunction qEc(){this.a=(new sEc,vEc(),rEc);tEc(this.a)}\nfunction qIc(a){var b;if(!a.L){b=new nEc(new oEc);a.L=b}return a.L}\nfunction pIc(a){var b;if(!a.K){b=new hEc(Szb(pBb(a.a)),qIc(a),oIc(a));jAb((sBb(a.a),b),EBb(sBb(a.a)));a.K=b}return a.K}\nfunction tEc(a){if(!a.a){a.a=true;Ku((xA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction pEc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new AXb;ERb(a,(b=new PTb(njd),ERb(b,(c=new rWb,c.a='Offline',qWb(c),c)),ERb(b,(d=new CSb,ERb(d,(e=new yUb((e4b(),b4b)),ldb(e.db,'GPBYFDECM',true),ikc(e.b,Cpd),FRb(e,e.b,0),e)),ERb(d,new ckc((j=new jHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new fbb(j.a)).a)),ERb(d,(f=new sOc,pXb(f,(k=new jHb,k.a+=Dpd,new fbb(k.a)).a),ldb(f.db,sjd,true),f)),ERb(d,new ckc((l=new jHb,l.a+=Epd,new fbb(l.a)).a)),ERb(d,(g=new sOc,pXb(g,(m=new jHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new fbb(m.a)).a),ldb(g.db,sjd,true),g)),ldb(d.db,'GPBYFDEBM',true),d)),ERb(b,(h=new DWb,ERb(h,(n=new SWb,ERb(n,(o=new yUb(a4b),ikc(o.b,'What is Offline?'),FRb(o,o.b,0),o)),n)),ERb(h,(p=new FWb,ERb(p,new Xjc((q=new jHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new fbb(q.a)).a)),p)),ERb(h,new PWb),h)),ERb(b,(i=new DWb,ERb(i,(r=new SWb,ERb(r,(s=new yUb(a4b),ikc(s.b,'How to configure?'),FRb(s,s.b,0),s)),r)),ERb(i,(t=new FWb,ERb(t,new ckc((u=new jHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new fbb(u.a)).a)),ERb(t,(v=new sOc,pXb(v,(w=new jHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new fbb(w.a)).a),ldb(v.db,sjd,true),v)),ERb(t,new ckc((A=new jHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new fbb(A.a)).a)),ERb(t,(B=new sOc,pXb(B,(C=new jHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new fbb(C.a)).a),ldb(B.db,sjd,true),B)),ERb(t,new ckc((D=new jHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new fbb(D.a)).a)),ERb(t,(F=new sOc,pXb(F,(G=new jHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new fbb(G.a)).a),ldb(F.db,sjd,true),F)),t)),ERb(i,new PWb),i)),b));return a}\ng9(379,216,Bhd,Xjc);g9(896,48,ngd,hEc);var l0=AFb(bjd,'OfflinePresenter',896);g9(1131,ogd,pgd,nEc);var q0=AFb(bjd,'OfflineView',1131);g9(1363,1,{},oEc);var p0=AFb(bjd,'OfflineView_BinderImpl',1363);g9(1364,1,{},qEc);var m0=AFb(bjd,'OfflineView_BinderImpl/Widgets',1364);g9(1689,1,{},sEc);var rEc;var o0=AFb(bjd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1689);g9(1690,1,{},uEc);_.a=false;var n0=AFb(bjd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1690);g9(820,1,zid);_.Ob=function OIc(){OCb(this.b,pIc(this.a.a))};ced(mm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
