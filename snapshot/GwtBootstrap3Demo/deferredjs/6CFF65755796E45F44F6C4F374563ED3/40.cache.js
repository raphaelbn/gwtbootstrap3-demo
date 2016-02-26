$wnd.GwtBootstrap3Demo.runAsyncCallback40("function ARc(){}\nfunction ERc(){}\nfunction GRc(){}\nfunction HRc(){HRc=Rgb;DRc=new GRc}\nfunction Hvc(a){nyb.call(this,a);Gvc(this)}\nfunction zRc(){zJb.call(this);xJb(this,BRc(new CRc))}\nfunction tRc(a,b,c){LIb();hJb.call(this,a,b,c,(bwc(),awc))}\nfunction CRc(){this.a=(new ERc,HRc(),DRc);FRc(this.a)}\nfunction dWc(a){var b;if(!a.M){b=new zRc(new ARc);a.M=b}return a.M}\nfunction cWc(a){var b;if(!a.L){b=new tRc(kIb(OJb(a.a)),dWc(a),bWc(a));DIb((RJb(a.a),b),bKb(RJb(a.a)));a.L=b}return a.L}\nfunction FRc(a){if(!a.a){a.a=true;hx((kD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction BRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new o5b;G$b(a,(b=new a1b(fKd),G$b(b,(c=new U3b,c.a='Offline',T3b(c),c)),G$b(b,(d=new P_b,G$b(d,(e=new O1b((Sdc(),Pdc)),Vkb((rsb(),e.eb),'GPBYFDEFM',true),Vvc(e.b,kQd),H$b(e,e.b,0),e)),G$b(d,new Pvc((j=new TPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Lib(j.a)).a)),G$b(d,(f=new f0c,d5b(f,(k=new TPb,k.a+=lQd,new Lib(k.a)).a),Vkb(f.eb,kKd,true),f)),G$b(d,new Pvc((l=new TPb,l.a+=mQd,new Lib(l.a)).a)),G$b(d,(g=new f0c,d5b(g,(m=new TPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Lib(m.a)).a),Vkb(g.eb,kKd,true),g)),Vkb(d.eb,'GPBYFDEEM',true),d)),G$b(b,(h=new f4b,G$b(h,(n=new u4b,G$b(n,(o=new O1b(Odc),Vvc(o.b,'What is Offline?'),H$b(o,o.b,0),o)),n)),G$b(h,(p=new h4b,G$b(p,new Hvc((q=new TPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Lib(q.a)).a)),p)),G$b(h,new r4b),h)),G$b(b,(i=new f4b,G$b(i,(r=new u4b,G$b(r,(s=new O1b(Odc),Vvc(s.b,'How to configure?'),H$b(s,s.b,0),s)),r)),G$b(i,(t=new h4b,G$b(t,new Pvc((u=new TPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Lib(u.a)).a)),G$b(t,(v=new f0c,d5b(v,(w=new TPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Lib(w.a)).a),Vkb(v.eb,kKd,true),v)),G$b(t,new Pvc((A=new TPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Lib(A.a)).a)),G$b(t,(B=new f0c,d5b(B,(C=new TPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Lib(C.a)).a),Vkb(B.eb,kKd,true),B)),G$b(t,new Pvc((D=new TPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Lib(D.a)).a)),G$b(t,(F=new f0c,d5b(F,(G=new TPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Lib(G.a)).a),Vkb(F.eb,kKd,true),F)),t)),G$b(i,new r4b),i)),b));return a}\nQgb(405,230,YGd,Hvc);Qgb(968,44,iHd,tRc);var I5=hOb(YJd,'OfflinePresenter',968);Qgb(1203,48,jHd,zRc);var N5=hOb(YJd,'OfflineView',1203);Qgb(1473,1,{},ARc);var M5=hOb(YJd,'OfflineView_BinderImpl',1473);Qgb(1474,1,{},CRc);var J5=hOb(YJd,'OfflineView_BinderImpl/Widgets',1474);Qgb(1816,1,{},ERc);var DRc;var L5=hOb(YJd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1816);Qgb(1817,1,{},GRc);_.a=false;var K5=hOb(YJd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1817);Qgb(892,1,uJd);_.Sb=function BWc(){uLb(this.b,cWc(this.a.a))};FEd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")