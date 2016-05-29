$wnd.GwtBootstrap3Demo.runAsyncCallback40("function CSc(){}\nfunction GSc(){}\nfunction ISc(){}\nfunction JSc(){JSc=Ahb;FSc=new ISc}\nfunction Jwc(a){Yyb.call(this,a);Iwc(this)}\nfunction BSc(){TJb.call(this);RJb(this,DSc(new ESc))}\nfunction vSc(a,b,c){dJb();BJb.call(this,a,b,c,(dxc(),cxc))}\nfunction ESc(){this.a=(new GSc,JSc(),FSc);HSc(this.a)}\nfunction NXc(a){var b;if(!a.M){b=new BSc(new CSc);a.M=b}return a.M}\nfunction MXc(a){var b;if(!a.L){b=new vSc(EIb(gKb(a.a)),NXc(a),LXc(a));XIb((jKb(a.a),b),vKb(jKb(a.a)));a.L=b}return a.L}\nfunction HSc(a){if(!a.a){a.a=true;ax((mD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction DSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new I5b;$$b(a,(b=new u1b(OMd),$$b(b,(c=new m4b,c.a='Offline',l4b(c),c)),$$b(b,(d=new h0b,$$b(d,(e=new g2b((kec(),hec)),Elb((ctb(),e.eb),'GPBYFDEFM',true),Xwc(e.b,USd),_$b(e,e.b,0),e)),$$b(d,new Rwc((j=new lQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new ujb(j.a)).a)),$$b(d,(f=new X1c,x5b(f,(k=new lQb,k.a+=VSd,new ujb(k.a)).a),Elb(f.eb,TMd,true),f)),$$b(d,new Rwc((l=new lQb,l.a+=WSd,new ujb(l.a)).a)),$$b(d,(g=new X1c,x5b(g,(m=new lQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new ujb(m.a)).a),Elb(g.eb,TMd,true),g)),Elb(d.eb,'GPBYFDEEM',true),d)),$$b(b,(h=new z4b,$$b(h,(n=new O4b,$$b(n,(o=new g2b(gec),Xwc(o.b,'What is Offline?'),_$b(o,o.b,0),o)),n)),$$b(h,(p=new B4b,$$b(p,new Jwc((q=new lQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new ujb(q.a)).a)),p)),$$b(h,new L4b),h)),$$b(b,(i=new z4b,$$b(i,(r=new O4b,$$b(r,(s=new g2b(gec),Xwc(s.b,'How to configure?'),_$b(s,s.b,0),s)),r)),$$b(i,(t=new B4b,$$b(t,new Rwc((u=new lQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new ujb(u.a)).a)),$$b(t,(v=new X1c,x5b(v,(w=new lQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new ujb(w.a)).a),Elb(v.eb,TMd,true),v)),$$b(t,new Rwc((A=new lQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new ujb(A.a)).a)),$$b(t,(B=new X1c,x5b(B,(C=new lQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new ujb(C.a)).a),Elb(B.eb,TMd,true),B)),$$b(t,new Rwc((D=new lQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new ujb(D.a)).a)),$$b(t,(F=new X1c,x5b(F,(G=new lQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new ujb(G.a)).a),Elb(F.eb,TMd,true),F)),t)),$$b(i,new L4b),i)),b));return a}\nzhb(408,232,BJd,Jwc);zhb(976,44,OJd,vSc);var X5=BOb(FMd,'OfflinePresenter',976);zhb(1214,47,PJd,BSc);var a6=BOb(FMd,'OfflineView',1214);zhb(1491,1,{},CSc);var _5=BOb(FMd,'OfflineView_BinderImpl',1491);zhb(1492,1,{},ESc);var Y5=BOb(FMd,'OfflineView_BinderImpl/Widgets',1492);zhb(1840,1,{},GSc);var FSc;var $5=BOb(FMd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1840);zhb(1841,1,{},ISc);_.a=false;var Z5=BOb(FMd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1841);zhb(898,1,_Ld);_.Sb=function mYc(){OLb(this.b,MXc(this.a.a))};jHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")