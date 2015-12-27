$wnd.GwtBootstrap3Demo.runAsyncCallback40("function iMc(){}\nfunction mMc(){}\nfunction oMc(){}\nfunction pMc(){pMc=Gdb;lMc=new oMc}\nfunction Orc(a){Qub.call(this,a);Nrc(this)}\nfunction hMc(){SFb.call(this);QFb(this,jMc(new kMc))}\nfunction bMc(a,b,c){cFb();AFb.call(this,a,b,c,(isc(),hsc))}\nfunction kMc(){this.a=(new mMc,pMc(),lMc);nMc(this.a)}\nfunction FQc(a){var b;if(!a.M){b=new hMc(new iMc);a.M=b}return a.M}\nfunction EQc(a){var b;if(!a.L){b=new bMc(DEb(fGb(a.a)),FQc(a),DQc(a));WEb((iGb(a.a),b),uGb(iGb(a.a)));a.L=b}return a.L}\nfunction nMc(a){if(!a.a){a.a=true;kv((yB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction jMc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new z1b;XWb(a,(b=new mZb(Rxd),XWb(b,(c=new d0b,c.a='Offline',c0b(c),c)),XWb(b,(d=new _Xb,XWb(d,(e=new $Zb((Z9b(),W9b)),Khb(e.eb,'GPBYFDECM',true),asc(e.b,bEd),YWb(e,e.b,0),e)),XWb(d,new Wrc((j=new jMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Efb(j.a)).a)),XWb(d,(f=new HWc,o1b(f,(k=new jMb,k.a+=cEd,new Efb(k.a)).a),Khb(f.eb,Wxd,true),f)),XWb(d,new Wrc((l=new jMb,l.a+=dEd,new Efb(l.a)).a)),XWb(d,(g=new HWc,o1b(g,(m=new jMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Efb(m.a)).a),Khb(g.eb,Wxd,true),g)),Khb(d.eb,'GPBYFDEBM',true),d)),XWb(b,(h=new q0b,XWb(h,(n=new F0b,XWb(n,(o=new $Zb(V9b),asc(o.b,'What is Offline?'),YWb(o,o.b,0),o)),n)),XWb(h,(p=new s0b,XWb(p,new Orc((q=new jMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Efb(q.a)).a)),p)),XWb(h,new C0b),h)),XWb(b,(i=new q0b,XWb(i,(r=new F0b,XWb(r,(s=new $Zb(V9b),asc(s.b,'How to configure?'),YWb(s,s.b,0),s)),r)),XWb(i,(t=new s0b,XWb(t,new Wrc((u=new jMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Efb(u.a)).a)),XWb(t,(v=new HWc,o1b(v,(w=new jMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Efb(w.a)).a),Khb(v.eb,Wxd,true),v)),XWb(t,new Wrc((A=new jMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Efb(A.a)).a)),XWb(t,(B=new HWc,o1b(B,(C=new jMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Efb(C.a)).a),Khb(B.eb,Wxd,true),B)),XWb(t,new Wrc((D=new jMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Efb(D.a)).a)),XWb(t,(F=new HWc,o1b(F,(G=new jMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Efb(G.a)).a),Khb(F.eb,Wxd,true),F)),t)),XWb(i,new C0b),i)),b));return a}\nFdb(401,230,dwd,Orc);Fdb(959,49,Mud,bMc);var B3=zKb(Hxd,'OfflinePresenter',959);Fdb(1193,53,Nud,hMc);var G3=zKb(Hxd,'OfflineView',1193);Fdb(1429,1,{},iMc);var F3=zKb(Hxd,'OfflineView_BinderImpl',1429);Fdb(1430,1,{},kMc);var C3=zKb(Hxd,'OfflineView_BinderImpl/Widgets',1430);Fdb(1771,1,{},mMc);var lMc;var E3=zKb(Hxd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1771);Fdb(1772,1,{},oMc);_.a=false;var D3=zKb(Hxd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1772);Fdb(883,1,dxd);_.Sb=function bRc(){NHb(this.b,EQc(this.a.a))};ksd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")