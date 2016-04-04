$wnd.GwtBootstrap3Demo.runAsyncCallback40("function cSc(){}\nfunction gSc(){}\nfunction iSc(){}\nfunction jSc(){jSc=xhb;fSc=new iSc}\nfunction jwc(a){Zyb.call(this,a);iwc(this)}\nfunction bSc(){aKb.call(this);$Jb(this,dSc(new eSc))}\nfunction XRc(a,b,c){mJb();KJb.call(this,a,b,c,(Fwc(),Ewc))}\nfunction eSc(){this.a=(new gSc,jSc(),fSc);hSc(this.a)}\nfunction ZWc(a){var b;if(!a.M){b=new bSc(new cSc);a.M=b}return a.M}\nfunction YWc(a){var b;if(!a.L){b=new XRc(NIb(pKb(a.a)),ZWc(a),XWc(a));eJb((sKb(a.a),b),EKb(sKb(a.a)));a.L=b}return a.L}\nfunction hSc(a){if(!a.a){a.a=true;bx((pD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction dSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new S5b;h_b(a,(b=new E1b(MLd),h_b(b,(c=new w4b,c.a='Offline',v4b(c),c)),h_b(b,(d=new r0b,h_b(d,(e=new q2b((uec(),rec)),Flb((dtb(),e.eb),'GPBYFDEFM',true),xwc(e.b,RRd),i_b(e,e.b,0),e)),h_b(d,new rwc((j=new uQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new vjb(j.a)).a)),h_b(d,(f=new h1c,H5b(f,(k=new uQb,k.a+=SRd,new vjb(k.a)).a),Flb(f.eb,RLd,true),f)),h_b(d,new rwc((l=new uQb,l.a+=TRd,new vjb(l.a)).a)),h_b(d,(g=new h1c,H5b(g,(m=new uQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new vjb(m.a)).a),Flb(g.eb,RLd,true),g)),Flb(d.eb,'GPBYFDEEM',true),d)),h_b(b,(h=new J4b,h_b(h,(n=new Y4b,h_b(n,(o=new q2b(qec),xwc(o.b,'What is Offline?'),i_b(o,o.b,0),o)),n)),h_b(h,(p=new L4b,h_b(p,new jwc((q=new uQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new vjb(q.a)).a)),p)),h_b(h,new V4b),h)),h_b(b,(i=new J4b,h_b(i,(r=new Y4b,h_b(r,(s=new q2b(qec),xwc(s.b,'How to configure?'),i_b(s,s.b,0),s)),r)),h_b(i,(t=new L4b,h_b(t,new rwc((u=new uQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new vjb(u.a)).a)),h_b(t,(v=new h1c,H5b(v,(w=new uQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new vjb(w.a)).a),Flb(v.eb,RLd,true),v)),h_b(t,new rwc((A=new uQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new vjb(A.a)).a)),h_b(t,(B=new h1c,H5b(B,(C=new uQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new vjb(C.a)).a),Flb(B.eb,RLd,true),B)),h_b(t,new rwc((D=new uQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new vjb(D.a)).a)),h_b(t,(F=new h1c,H5b(F,(G=new uQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new vjb(G.a)).a),Flb(F.eb,RLd,true),F)),t)),h_b(i,new V4b),i)),b));return a}\nwhb(406,231,zId,jwc);whb(972,44,LId,XRc);var _5=KOb(DLd,'OfflinePresenter',972);whb(1210,47,MId,bSc);var e6=KOb(DLd,'OfflineView',1210);whb(1483,1,{},cSc);var d6=KOb(DLd,'OfflineView_BinderImpl',1483);whb(1484,1,{},eSc);var a6=KOb(DLd,'OfflineView_BinderImpl/Widgets',1484);whb(1832,1,{},gSc);var fSc;var c6=KOb(DLd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1832);whb(1833,1,{},iSc);_.a=false;var b6=KOb(DLd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1833);whb(894,1,ZKd);_.Sb=function yXc(){XLb(this.b,YWc(this.a.a))};hGd(Oo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")