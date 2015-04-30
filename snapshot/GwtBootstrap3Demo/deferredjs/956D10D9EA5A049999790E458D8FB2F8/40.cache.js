$wnd.GwtBootstrap3Demo.runAsyncCallback40("function lEc(){}\nfunction pEc(){}\nfunction rEc(){}\nfunction sEc(){sEc=I8;oEc=new rEc}\nfunction kEc(){YAb(this,mEc(new nEc))}\nfunction Ujc(a){Epb.call(this,a);Tjc(this)}\nfunction eEc(a,b,c){nAb();JAb.call(this,a,b,c,(nkc(),mkc))}\nfunction nEc(){this.a=(new pEc,sEc(),oEc);qEc(this.a)}\nfunction nIc(a){var b;if(!a.L){b=new kEc(new lEc);a.L=b}return a.L}\nfunction mIc(a){var b;if(!a.K){b=new eEc(Ozb(lBb(a.a)),nIc(a),lIc(a));fAb((oBb(a.a),b),ABb(oBb(a.a)));a.K=b}return a.K}\nfunction qEc(a){if(!a.a){a.a=true;Hu((jA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction mEc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new xXb;BRb(a,(b=new LTb(zjd),BRb(b,(c=new oWb,c.a='Offline',nWb(c),c)),BRb(b,(d=new ySb,BRb(d,(e=new uUb((b4b(),$3b)),Lcb((bkb(),e.db),'GPBYFDECM',true),fkc(e.b,Lpd),CRb(e,e.b,0),e)),BRb(d,new _jc((j=new fHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Cab(j.a)).a)),BRb(d,(f=new pOc,mXb(f,(k=new fHb,k.a+=Mpd,new Cab(k.a)).a),Lcb(f.db,Ejd,true),f)),BRb(d,new _jc((l=new fHb,l.a+=Npd,new Cab(l.a)).a)),BRb(d,(g=new pOc,mXb(g,(m=new fHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Cab(m.a)).a),Lcb(g.db,Ejd,true),g)),Lcb(d.db,'GPBYFDEBM',true),d)),BRb(b,(h=new AWb,BRb(h,(n=new PWb,BRb(n,(o=new uUb(Z3b),fkc(o.b,'What is Offline?'),CRb(o,o.b,0),o)),n)),BRb(h,(p=new CWb,BRb(p,new Ujc((q=new fHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Cab(q.a)).a)),p)),BRb(h,new MWb),h)),BRb(b,(i=new AWb,BRb(i,(r=new PWb,BRb(r,(s=new uUb(Z3b),fkc(s.b,'How to configure?'),CRb(s,s.b,0),s)),r)),BRb(i,(t=new CWb,BRb(t,new _jc((u=new fHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Cab(u.a)).a)),BRb(t,(v=new pOc,mXb(v,(w=new fHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Cab(w.a)).a),Lcb(v.db,Ejd,true),v)),BRb(t,new _jc((A=new fHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Cab(A.a)).a)),BRb(t,(B=new pOc,mXb(B,(C=new fHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Cab(C.a)).a),Lcb(B.db,Ejd,true),B)),BRb(t,new _jc((D=new fHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Cab(D.a)).a)),BRb(t,(F=new pOc,mXb(F,(G=new fHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Cab(G.a)).a),Lcb(F.db,Ejd,true),F)),t)),BRb(i,new MWb),i)),b));return a}\nH8(378,216,Ohd,Ujc);H8(897,48,Agd,eEc);var M_=wFb(ojd,'OfflinePresenter',897);H8(1132,Bgd,Cgd,kEc);var R_=wFb(ojd,'OfflineView',1132);H8(1361,1,{},lEc);var Q_=wFb(ojd,'OfflineView_BinderImpl',1361);H8(1362,1,{},nEc);var N_=wFb(ojd,'OfflineView_BinderImpl/Widgets',1362);H8(1687,1,{},pEc);var oEc;var P_=wFb(ojd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1687);H8(1688,1,{},rEc);_.a=false;var O_=wFb(ojd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1688);H8(821,1,Mid);_.Ob=function LIc(){KCb(this.b,mIc(this.a.a))};led(mm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
