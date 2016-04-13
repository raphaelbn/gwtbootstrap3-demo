$wnd.GwtBootstrap3Demo.runAsyncCallback40("function JSc(){}\nfunction NSc(){}\nfunction PSc(){}\nfunction QSc(){QSc=zhb;MSc=new PSc}\nfunction Qwc(a){Xyb.call(this,a);Pwc(this)}\nfunction ISc(){hKb.call(this);fKb(this,KSc(new LSc))}\nfunction CSc(a,b,c){tJb();RJb.call(this,a,b,c,(kxc(),jxc))}\nfunction LSc(){this.a=(new NSc,QSc(),MSc);OSc(this.a)}\nfunction EXc(a){var b;if(!a.M){b=new ISc(new JSc);a.M=b}return a.M}\nfunction DXc(a){var b;if(!a.L){b=new CSc(UIb(wKb(a.a)),EXc(a),CXc(a));lJb((zKb(a.a),b),LKb(zKb(a.a)));a.L=b}return a.L}\nfunction OSc(a){if(!a.a){a.a=true;hx((tD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction KSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new Y5b;o_b(a,(b=new K1b(tMd),o_b(b,(c=new C4b,c.a='Offline',B4b(c),c)),o_b(b,(d=new x0b,o_b(d,(e=new w2b((Aec(),xec)),Dlb((_sb(),e.eb),'GPBYFDEFM',true),cxc(e.b,ASd),p_b(e,e.b,0),e)),o_b(d,new Ywc((j=new BQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new tjb(j.a)).a)),o_b(d,(f=new O1c,N5b(f,(k=new BQb,k.a+=BSd,new tjb(k.a)).a),Dlb(f.eb,yMd,true),f)),o_b(d,new Ywc((l=new BQb,l.a+=CSd,new tjb(l.a)).a)),o_b(d,(g=new O1c,N5b(g,(m=new BQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new tjb(m.a)).a),Dlb(g.eb,yMd,true),g)),Dlb(d.eb,'GPBYFDEEM',true),d)),o_b(b,(h=new P4b,o_b(h,(n=new c5b,o_b(n,(o=new w2b(wec),cxc(o.b,'What is Offline?'),p_b(o,o.b,0),o)),n)),o_b(h,(p=new R4b,o_b(p,new Qwc((q=new BQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new tjb(q.a)).a)),p)),o_b(h,new _4b),h)),o_b(b,(i=new P4b,o_b(i,(r=new c5b,o_b(r,(s=new w2b(wec),cxc(s.b,'How to configure?'),p_b(s,s.b,0),s)),r)),o_b(i,(t=new R4b,o_b(t,new Ywc((u=new BQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new tjb(u.a)).a)),o_b(t,(v=new O1c,N5b(v,(w=new BQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new tjb(w.a)).a),Dlb(v.eb,yMd,true),v)),o_b(t,new Ywc((A=new BQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new tjb(A.a)).a)),o_b(t,(B=new O1c,N5b(B,(C=new BQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new tjb(C.a)).a),Dlb(B.eb,yMd,true),B)),o_b(t,new Ywc((D=new BQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new tjb(D.a)).a)),o_b(t,(F=new O1c,N5b(F,(G=new BQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new tjb(G.a)).a),Dlb(F.eb,yMd,true),F)),t)),o_b(i,new _4b),i)),b));return a}\nyhb(405,231,hJd,Qwc);yhb(972,44,tJd,CSc);var b6=ROb(kMd,'OfflinePresenter',972);yhb(1210,47,uJd,ISc);var g6=ROb(kMd,'OfflineView',1210);yhb(1481,1,{},JSc);var f6=ROb(kMd,'OfflineView_BinderImpl',1481);yhb(1482,1,{},LSc);var c6=ROb(kMd,'OfflineView_BinderImpl/Widgets',1482);yhb(1831,1,{},NSc);var MSc;var e6=ROb(kMd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1831);yhb(1832,1,{},PSc);_.a=false;var d6=ROb(kMd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1832);yhb(894,1,GLd);_.Sb=function dYc(){cMb(this.b,DXc(this.a.a))};QGd(Oo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")