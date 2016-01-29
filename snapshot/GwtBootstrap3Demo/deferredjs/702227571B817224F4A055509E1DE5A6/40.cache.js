$wnd.GwtBootstrap3Demo.runAsyncCallback40("function VMc(){}\nfunction ZMc(){}\nfunction _Mc(){}\nfunction aNc(){aNc=Sdb;YMc=new _Mc}\nfunction isc(a){nvb.call(this,a);hsc(this)}\nfunction UMc(){iGb.call(this);gGb(this,WMc(new XMc))}\nfunction OMc(a,b,c){uFb();SFb.call(this,a,b,c,(Esc(),Dsc))}\nfunction XMc(){this.a=(new ZMc,aNc(),YMc);$Mc(this.a)}\nfunction yRc(a){var b;if(!a.M){b=new UMc(new VMc);a.M=b}return a.M}\nfunction xRc(a){var b;if(!a.L){b=new OMc(VEb(xGb(a.a)),yRc(a),wRc(a));mFb((AGb(a.a),b),MGb(AGb(a.a)));a.L=b}return a.L}\nfunction $Mc(a){if(!a.a){a.a=true;_u((lB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction WMc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new V1b;pXb(a,(b=new HZb(jBd),pXb(b,(c=new z0b,c.a='Offline',y0b(c),c)),pXb(b,(d=new uYb,pXb(d,(e=new t$b((tac(),qac)),Vhb((tpb(),e.eb),'GPBYFDECM',true),wsc(e.b,uHd),qXb(e,e.b,0),e)),pXb(d,new qsc((j=new CMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Mfb(j.a)).a)),pXb(d,(f=new AXc,K1b(f,(k=new CMb,k.a+=vHd,new Mfb(k.a)).a),Vhb(f.eb,oBd,true),f)),pXb(d,new qsc((l=new CMb,l.a+=wHd,new Mfb(l.a)).a)),pXb(d,(g=new AXc,K1b(g,(m=new CMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Mfb(m.a)).a),Vhb(g.eb,oBd,true),g)),Vhb(d.eb,'GPBYFDEBM',true),d)),pXb(b,(h=new M0b,pXb(h,(n=new _0b,pXb(n,(o=new t$b(pac),wsc(o.b,'What is Offline?'),qXb(o,o.b,0),o)),n)),pXb(h,(p=new O0b,pXb(p,new isc((q=new CMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Mfb(q.a)).a)),p)),pXb(h,new Y0b),h)),pXb(b,(i=new M0b,pXb(i,(r=new _0b,pXb(r,(s=new t$b(pac),wsc(s.b,'How to configure?'),qXb(s,s.b,0),s)),r)),pXb(i,(t=new O0b,pXb(t,new qsc((u=new CMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Mfb(u.a)).a)),pXb(t,(v=new AXc,K1b(v,(w=new CMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Mfb(w.a)).a),Vhb(v.eb,oBd,true),v)),pXb(t,new qsc((A=new CMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Mfb(A.a)).a)),pXb(t,(B=new AXc,K1b(B,(C=new CMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Mfb(C.a)).a),Vhb(B.eb,oBd,true),B)),pXb(t,new qsc((D=new CMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Mfb(D.a)).a)),pXb(t,(F=new AXc,K1b(F,(G=new CMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Mfb(G.a)).a),Vhb(F.eb,oBd,true),F)),t)),pXb(i,new Y0b),i)),b));return a}\nRdb(406,232,yzd,isc);Rdb(972,49,fyd,OMc);var u3=SKb(_Ad,'OfflinePresenter',972);Rdb(1213,53,gyd,UMc);var z3=SKb(_Ad,'OfflineView',1213);Rdb(1452,1,{},VMc);var y3=SKb(_Ad,'OfflineView_BinderImpl',1452);Rdb(1453,1,{},XMc);var v3=SKb(_Ad,'OfflineView_BinderImpl/Widgets',1453);Rdb(1798,1,{},ZMc);var YMc;var x3=SKb(_Ad,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1798);Rdb(1799,1,{},_Mc);_.a=false;var w3=SKb(_Ad,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1799);Rdb(896,1,xAd);_.Sb=function WRc(){dIb(this.b,xRc(this.a.a))};Evd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")