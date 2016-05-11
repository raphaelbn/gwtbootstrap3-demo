$wnd.GwtBootstrap3Demo.runAsyncCallback40("function JSc(){}\nfunction NSc(){}\nfunction PSc(){}\nfunction QSc(){QSc=Dhb;MSc=new PSc}\nfunction Qwc(a){dzb.call(this,a);Pwc(this)}\nfunction ISc(){gKb.call(this);eKb(this,KSc(new LSc))}\nfunction CSc(a,b,c){sJb();QJb.call(this,a,b,c,(kxc(),jxc))}\nfunction LSc(){this.a=(new NSc,QSc(),MSc);OSc(this.a)}\nfunction UXc(a){var b;if(!a.M){b=new ISc(new JSc);a.M=b}return a.M}\nfunction TXc(a){var b;if(!a.L){b=new CSc(TIb(vKb(a.a)),UXc(a),SXc(a));kJb((yKb(a.a),b),KKb(yKb(a.a)));a.L=b}return a.L}\nfunction OSc(a){if(!a.a){a.a=true;ax((oD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction KSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new Y5b;n_b(a,(b=new K1b(WMd),n_b(b,(c=new C4b,c.a='Offline',B4b(c),c)),n_b(b,(d=new x0b,n_b(d,(e=new w2b((Aec(),xec)),Llb((jtb(),e.eb),'GPBYFDEFM',true),cxc(e.b,_Sd),o_b(e,e.b,0),e)),n_b(d,new Ywc((j=new AQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Bjb(j.a)).a)),n_b(d,(f=new c2c,N5b(f,(k=new AQb,k.a+=aTd,new Bjb(k.a)).a),Llb(f.eb,_Md,true),f)),n_b(d,new Ywc((l=new AQb,l.a+=bTd,new Bjb(l.a)).a)),n_b(d,(g=new c2c,N5b(g,(m=new AQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Bjb(m.a)).a),Llb(g.eb,_Md,true),g)),Llb(d.eb,'GPBYFDEEM',true),d)),n_b(b,(h=new P4b,n_b(h,(n=new c5b,n_b(n,(o=new w2b(wec),cxc(o.b,'What is Offline?'),o_b(o,o.b,0),o)),n)),n_b(h,(p=new R4b,n_b(p,new Qwc((q=new AQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Bjb(q.a)).a)),p)),n_b(h,new _4b),h)),n_b(b,(i=new P4b,n_b(i,(r=new c5b,n_b(r,(s=new w2b(wec),cxc(s.b,'How to configure?'),o_b(s,s.b,0),s)),r)),n_b(i,(t=new R4b,n_b(t,new Ywc((u=new AQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Bjb(u.a)).a)),n_b(t,(v=new c2c,N5b(v,(w=new AQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Bjb(w.a)).a),Llb(v.eb,_Md,true),v)),n_b(t,new Ywc((A=new AQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Bjb(A.a)).a)),n_b(t,(B=new c2c,N5b(B,(C=new AQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Bjb(C.a)).a),Llb(B.eb,_Md,true),B)),n_b(t,new Ywc((D=new AQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Bjb(D.a)).a)),n_b(t,(F=new c2c,N5b(F,(G=new AQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Bjb(G.a)).a),Llb(F.eb,_Md,true),F)),t)),n_b(i,new _4b),i)),b));return a}\nChb(408,232,JJd,Qwc);Chb(975,44,VJd,CSc);var $5=QOb(NMd,'OfflinePresenter',975);Chb(1213,47,WJd,ISc);var d6=QOb(NMd,'OfflineView',1213);Chb(1490,1,{},JSc);var c6=QOb(NMd,'OfflineView_BinderImpl',1490);Chb(1491,1,{},LSc);var _5=QOb(NMd,'OfflineView_BinderImpl/Widgets',1491);Chb(1839,1,{},NSc);var MSc;var b6=QOb(NMd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1839);Chb(1840,1,{},PSc);_.a=false;var a6=QOb(NMd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1840);Chb(897,1,hMd);_.Sb=function tYc(){bMb(this.b,TXc(this.a.a))};qHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")