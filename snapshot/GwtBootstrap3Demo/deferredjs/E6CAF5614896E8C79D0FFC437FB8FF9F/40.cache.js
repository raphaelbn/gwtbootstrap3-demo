$wnd.GwtBootstrap3Demo.runAsyncCallback40("function vSc(){}\nfunction zSc(){}\nfunction BSc(){}\nfunction CSc(){CSc=Bhb;ySc=new BSc}\nfunction Cwc(a){Lyb.call(this,a);Bwc(this)}\nfunction uSc(){NJb.call(this);LJb(this,wSc(new xSc))}\nfunction oSc(a,b,c){ZIb();vJb.call(this,a,b,c,(Ywc(),Xwc))}\nfunction xSc(){this.a=(new zSc,CSc(),ySc);ASc(this.a)}\nfunction GXc(a){var b;if(!a.M){b=new uSc(new vSc);a.M=b}return a.M}\nfunction FXc(a){var b;if(!a.L){b=new oSc(yIb(aKb(a.a)),GXc(a),EXc(a));RIb((dKb(a.a),b),pKb(dKb(a.a)));a.L=b}return a.L}\nfunction ASc(a){if(!a.a){a.a=true;mx((rD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction wSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new z5b;T$b(a,(b=new m1b(TMd),T$b(b,(c=new d4b,c.a='Offline',c4b(c),c)),T$b(b,(d=new __b,T$b(d,(e=new $1b((dec(),aec)),Glb(e.eb,'GPBYFDEFM',true),Qwc(e.b,ZSd),U$b(e,e.b,0),e)),T$b(d,new Kwc((j=new fQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new zjb(j.a)).a)),T$b(d,(f=new Q1c,o5b(f,(k=new fQb,k.a+=$Sd,new zjb(k.a)).a),Glb(f.eb,YMd,true),f)),T$b(d,new Kwc((l=new fQb,l.a+=_Sd,new zjb(l.a)).a)),T$b(d,(g=new Q1c,o5b(g,(m=new fQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new zjb(m.a)).a),Glb(g.eb,YMd,true),g)),Glb(d.eb,'GPBYFDEEM',true),d)),T$b(b,(h=new q4b,T$b(h,(n=new F4b,T$b(n,(o=new $1b(_dc),Qwc(o.b,'What is Offline?'),U$b(o,o.b,0),o)),n)),T$b(h,(p=new s4b,T$b(p,new Cwc((q=new fQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new zjb(q.a)).a)),p)),T$b(h,new C4b),h)),T$b(b,(i=new q4b,T$b(i,(r=new F4b,T$b(r,(s=new $1b(_dc),Qwc(s.b,'How to configure?'),U$b(s,s.b,0),s)),r)),T$b(i,(t=new s4b,T$b(t,new Kwc((u=new fQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new zjb(u.a)).a)),T$b(t,(v=new Q1c,o5b(v,(w=new fQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new zjb(w.a)).a),Glb(v.eb,YMd,true),v)),T$b(t,new Kwc((A=new fQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new zjb(A.a)).a)),T$b(t,(B=new Q1c,o5b(B,(C=new fQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new zjb(C.a)).a),Glb(B.eb,YMd,true),B)),T$b(t,new Kwc((D=new fQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new zjb(D.a)).a)),T$b(t,(F=new Q1c,o5b(F,(G=new fQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new zjb(G.a)).a),Glb(F.eb,YMd,true),F)),t)),T$b(i,new C4b),i)),b));return a}\nAhb(408,232,FJd,Cwc);Ahb(1011,44,RJd,oSc);var U5=vOb(JMd,'OfflinePresenter',1011);Ahb(1249,47,SJd,uSc);var Z5=vOb(JMd,'OfflineView',1249);Ahb(1527,1,{},vSc);var Y5=vOb(JMd,'OfflineView_BinderImpl',1527);Ahb(1528,1,{},xSc);var V5=vOb(JMd,'OfflineView_BinderImpl/Widgets',1528);Ahb(1875,1,{},zSc);var ySc;var X5=vOb(JMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1875);Ahb(1876,1,{},BSc);_.a=false;var W5=vOb(JMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1876);Ahb(933,1,dMd);_.Sb=function fYc(){ILb(this.b,FXc(this.a.a))};nHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")