$wnd.GwtBootstrap3Demo.runAsyncCallback40("function dTc(){}\nfunction hTc(){}\nfunction jTc(){}\nfunction kTc(){kTc=Xhb;gTc=new jTc}\nfunction kxc(a){uzb.call(this,a);jxc(this)}\nfunction cTc(){pKb.call(this);nKb(this,eTc(new fTc))}\nfunction YSc(a,b,c){BJb();ZJb.call(this,a,b,c,(Dxc(),Cxc))}\nfunction fTc(){this.a=(new hTc,kTc(),gTc);iTc(this.a)}\nfunction oYc(a){var b;if(!a.M){b=new cTc(new dTc);a.M=b}return a.M}\nfunction nYc(a){var b;if(!a.L){b=new YSc(aJb(EKb(a.a)),oYc(a),mYc(a));tJb((HKb(a.a),b),TKb(HKb(a.a)));a.L=b}return a.L}\nfunction iTc(a){if(!a.a){a.a=true;Kx((ND(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction eTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new h6b;w_b(a,(b=new V1b(RNd),w_b(b,(c=new N4b,c.a='Offline',M4b(c),c)),w_b(b,(d=new I0b,w_b(d,(e=new H2b((Nec(),Kec)),_lb((ztb(),e.eb),'GPBYFDEFM',true),yxc(e.b,WTd),x_b(e,e.b,0),e)),w_b(d,new sxc((j=new JQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Rjb(j.a)).a)),w_b(d,(f=new y2c,Y5b(f,(k=new JQb,k.a+=XTd,new Rjb(k.a)).a),_lb(f.eb,WNd,true),f)),w_b(d,new sxc((l=new JQb,l.a+=YTd,new Rjb(l.a)).a)),w_b(d,(g=new y2c,Y5b(g,(m=new JQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Rjb(m.a)).a),_lb(g.eb,WNd,true),g)),_lb(d.eb,'GPBYFDEEM',true),d)),w_b(b,(h=new $4b,w_b(h,(n=new n5b,w_b(n,(o=new H2b(Jec),yxc(o.b,'What is Offline?'),x_b(o,o.b,0),o)),n)),w_b(h,(p=new a5b,w_b(p,new kxc((q=new JQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Rjb(q.a)).a)),p)),w_b(h,new k5b),h)),w_b(b,(i=new $4b,w_b(i,(r=new n5b,w_b(r,(s=new H2b(Jec),yxc(s.b,'How to configure?'),x_b(s,s.b,0),s)),r)),w_b(i,(t=new a5b,w_b(t,new sxc((u=new JQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Rjb(u.a)).a)),w_b(t,(v=new y2c,Y5b(v,(w=new JQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Rjb(w.a)).a),_lb(v.eb,WNd,true),v)),w_b(t,new sxc((A=new JQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Rjb(A.a)).a)),w_b(t,(B=new y2c,Y5b(B,(C=new JQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Rjb(C.a)).a),_lb(B.eb,WNd,true),B)),w_b(t,new sxc((D=new JQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Rjb(D.a)).a)),w_b(t,(F=new y2c,Y5b(F,(G=new JQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Rjb(G.a)).a),_lb(F.eb,WNd,true),F)),t)),w_b(i,new k5b),i)),b));return a}\nWhb(409,233,EKd,kxc);Whb(1013,44,PKd,YSc);var n6=ZOb(HNd,'OfflinePresenter',1013);Whb(1252,47,QKd,cTc);var s6=ZOb(HNd,'OfflineView',1252);Whb(1529,1,{},dTc);var r6=ZOb(HNd,'OfflineView_BinderImpl',1529);Whb(1530,1,{},fTc);var o6=ZOb(HNd,'OfflineView_BinderImpl/Widgets',1530);Whb(1877,1,{},hTc);var gTc;var q6=ZOb(HNd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1877);Whb(1878,1,{},jTc);_.a=false;var p6=ZOb(HNd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1878);Whb(935,1,bNd);_.Sb=function PYc(){kMb(this.b,nYc(this.a.a))};mId(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")