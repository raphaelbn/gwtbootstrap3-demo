$wnd.GwtBootstrap3Demo.runAsyncCallback39("function WGc(){}\nfunction $Gc(){}\nfunction aHc(){}\nfunction bHc(){bHc=N8;ZGc=new aHc}\nfunction Vmc(a){cqb.call(this,a);Umc(this)}\nfunction VGc(){sBb.call(this);qBb(this,XGc(new YGc))}\nfunction PGc(a,b,c){EAb();aBb.call(this,a,b,c,(onc(),nnc))}\nfunction YGc(){this.a=(new $Gc,bHc(),ZGc);_Gc(this.a)}\nfunction UKc(a){var b;if(!a.I){b=new VGc(new WGc);a.I=b}return a.I}\nfunction TKc(a){var b;if(!a.H){b=new PGc(dAb(HBb(a.a)),UKc(a),SKc(a));wAb((KBb(a.a),b),WBb(KBb(a.a)));a.H=b}return a.H}\nfunction _Gc(a){if(!a.a){a.a=true;zu((mA(),'.GPBYFDEOL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEPL{margin-top:0 !important;}.GPBYFDEAM{margin-left:5px;}'));return true}return false}\nfunction XGc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new NYb;ASb(a,(b=new OUb(Imd),ASb(b,(c=new zXb,c.a='Offline',yXb(c),c)),ASb(b,(d=new BTb,ASb(d,(e=new yVb((z5b(),w5b)),Ucb((mkb(),e.db),'GPBYFDEPL',true),gnc(e.b,Usd),BSb(e,e.b,0),e)),ASb(d,new anc((j=new QHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Lab(j.a)).a)),ASb(d,(f=new RQc,CYb(f,(k=new QHb,k.a+=Vsd,new Lab(k.a)).a),Ucb(f.db,Nmd,true),f)),ASb(d,new anc((l=new QHb,l.a+=Wsd,new Lab(l.a)).a)),ASb(d,(g=new RQc,CYb(g,(m=new QHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Lab(m.a)).a),Ucb(g.db,Nmd,true),g)),Ucb(d.db,'GPBYFDEOL',true),d)),ASb(b,(h=new MXb,ASb(h,(n=new _Xb,ASb(n,(o=new yVb(v5b),gnc(o.b,'What is Offline?'),BSb(o,o.b,0),o)),n)),ASb(h,(p=new OXb,ASb(p,new Vmc((q=new QHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Lab(q.a)).a)),p)),ASb(h,new YXb),h)),ASb(b,(i=new MXb,ASb(i,(r=new _Xb,ASb(r,(s=new yVb(v5b),gnc(s.b,'How to configure?'),BSb(s,s.b,0),s)),r)),ASb(i,(t=new OXb,ASb(t,new anc((u=new QHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Lab(u.a)).a)),ASb(t,(v=new RQc,CYb(v,(w=new QHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Lab(w.a)).a),Ucb(v.db,Nmd,true),v)),ASb(t,new anc((A=new QHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Lab(A.a)).a)),ASb(t,(B=new RQc,CYb(B,(C=new QHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Lab(C.a)).a),Ucb(B.db,Nmd,true),B)),ASb(t,new anc((D=new QHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Lab(D.a)).a)),ASb(t,(F=new RQc,CYb(F,(G=new QHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Lab(G.a)).a),Ucb(F.db,Nmd,true),F)),t)),ASb(i,new YXb),i)),b));return a}\nM8(386,220,Xkd,Vmc);M8(898,48,Jjd,PGc);var V_=fGb(vmd,'OfflinePresenter',898);M8(1131,51,Kjd,VGc);var $_=fGb(vmd,'OfflineView',1131);M8(1358,1,{},WGc);var Z_=fGb(vmd,'OfflineView_BinderImpl',1358);M8(1359,1,{},YGc);var W_=fGb(vmd,'OfflineView_BinderImpl/Widgets',1359);M8(1687,1,{},$Gc);var ZGc;var Y_=fGb(vmd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1687);M8(1688,1,{},aHc);_.a=false;var X_=fGb(vmd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1688);M8(823,1,Vld);_.Ob=function rMc(){tDb(this.b,TKc(this.a.a))};shd(mm)(39);\n//# sourceURL=GwtBootstrap3Demo-39.js\n")
