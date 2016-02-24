$wnd.GwtBootstrap3Demo.runAsyncCallback40("function tRc(){}\nfunction xRc(){}\nfunction zRc(){}\nfunction ARc(){ARc=ehb;wRc=new zRc}\nfunction Avc(a){Cyb.call(this,a);zvc(this)}\nfunction sRc(){xJb.call(this);vJb(this,uRc(new vRc))}\nfunction mRc(a,b,c){JIb();fJb.call(this,a,b,c,(Wvc(),Vvc))}\nfunction vRc(){this.a=(new xRc,ARc(),wRc);yRc(this.a)}\nfunction YVc(a){var b;if(!a.M){b=new sRc(new tRc);a.M=b}return a.M}\nfunction XVc(a){var b;if(!a.L){b=new mRc(iIb(MJb(a.a)),YVc(a),WVc(a));BIb((PJb(a.a),b),_Jb(PJb(a.a)));a.L=b}return a.L}\nfunction yRc(a){if(!a.a){a.a=true;bx((nD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction uRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new k5b;E$b(a,(b=new Y0b(ZJd),E$b(b,(c=new Q3b,c.a='Offline',P3b(c),c)),E$b(b,(d=new L_b,E$b(d,(e=new K1b((Ldc(),Idc)),ilb((Isb(),e.eb),'GPBYFDEFM',true),Ovc(e.b,cQd),F$b(e,e.b,0),e)),E$b(d,new Ivc((j=new RPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new $ib(j.a)).a)),E$b(d,(f=new $_c,_4b(f,(k=new RPb,k.a+=dQd,new $ib(k.a)).a),ilb(f.eb,cKd,true),f)),E$b(d,new Ivc((l=new RPb,l.a+=eQd,new $ib(l.a)).a)),E$b(d,(g=new $_c,_4b(g,(m=new RPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new $ib(m.a)).a),ilb(g.eb,cKd,true),g)),ilb(d.eb,'GPBYFDEEM',true),d)),E$b(b,(h=new b4b,E$b(h,(n=new q4b,E$b(n,(o=new K1b(Hdc),Ovc(o.b,'What is Offline?'),F$b(o,o.b,0),o)),n)),E$b(h,(p=new d4b,E$b(p,new Avc((q=new RPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new $ib(q.a)).a)),p)),E$b(h,new n4b),h)),E$b(b,(i=new b4b,E$b(i,(r=new q4b,E$b(r,(s=new K1b(Hdc),Ovc(s.b,'How to configure?'),F$b(s,s.b,0),s)),r)),E$b(i,(t=new d4b,E$b(t,new Ivc((u=new RPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new $ib(u.a)).a)),E$b(t,(v=new $_c,_4b(v,(w=new RPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new $ib(w.a)).a),ilb(v.eb,cKd,true),v)),E$b(t,new Ivc((A=new RPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new $ib(A.a)).a)),E$b(t,(B=new $_c,_4b(B,(C=new RPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new $ib(C.a)).a),ilb(B.eb,cKd,true),B)),E$b(t,new Ivc((D=new RPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new $ib(D.a)).a)),E$b(t,(F=new $_c,_4b(F,(G=new RPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new $ib(G.a)).a),ilb(F.eb,cKd,true),F)),t)),E$b(i,new n4b),i)),b));return a}\ndhb(406,228,QGd,Avc);dhb(968,44,_Gd,mRc);var X5=fOb(QJd,'OfflinePresenter',968);dhb(1203,48,aHd,sRc);var a6=fOb(QJd,'OfflineView',1203);dhb(1475,1,{},tRc);var _5=fOb(QJd,'OfflineView_BinderImpl',1475);dhb(1476,1,{},vRc);var Y5=fOb(QJd,'OfflineView_BinderImpl/Widgets',1476);dhb(1819,1,{},xRc);var wRc;var $5=fOb(QJd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1819);dhb(1820,1,{},zRc);_.a=false;var Z5=fOb(QJd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1820);dhb(892,1,mJd);_.Sb=function uWc(){sLb(this.b,XVc(this.a.a))};yEd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")