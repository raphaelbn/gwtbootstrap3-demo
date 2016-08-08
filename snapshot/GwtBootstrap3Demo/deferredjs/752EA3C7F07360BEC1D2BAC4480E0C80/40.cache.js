$wnd.GwtBootstrap3Demo.runAsyncCallback40("function CSc(){}\nfunction GSc(){}\nfunction ISc(){}\nfunction JSc(){JSc=lhb;FSc=new ISc}\nfunction Jwc(a){Nyb.call(this,a);Iwc(this)}\nfunction BSc(){QJb.call(this);OJb(this,DSc(new ESc))}\nfunction vSc(a,b,c){aJb();yJb.call(this,a,b,c,(dxc(),cxc))}\nfunction ESc(){this.a=(new GSc,JSc(),FSc);HSc(this.a)}\nfunction NXc(a){var b;if(!a.M){b=new BSc(new CSc);a.M=b}return a.M}\nfunction MXc(a){var b;if(!a.L){b=new vSc(BIb(dKb(a.a)),NXc(a),LXc(a));UIb((gKb(a.a),b),sKb(gKb(a.a)));a.L=b}return a.L}\nfunction HSc(a){if(!a.a){a.a=true;ax((fD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction DSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new G5b;X$b(a,(b=new s1b(VMd),X$b(b,(c=new k4b,c.a='Offline',j4b(c),c)),X$b(b,(d=new f0b,X$b(d,(e=new e2b((kec(),hec)),tlb((Tsb(),e.eb),'GPBYFDEFM',true),Xwc(e.b,ZSd),Y$b(e,e.b,0),e)),X$b(d,new Rwc((j=new iQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new jjb(j.a)).a)),X$b(d,(f=new X1c,v5b(f,(k=new iQb,k.a+=$Sd,new jjb(k.a)).a),tlb(f.eb,$Md,true),f)),X$b(d,new Rwc((l=new iQb,l.a+=_Sd,new jjb(l.a)).a)),X$b(d,(g=new X1c,v5b(g,(m=new iQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new jjb(m.a)).a),tlb(g.eb,$Md,true),g)),tlb(d.eb,'GPBYFDEEM',true),d)),X$b(b,(h=new x4b,X$b(h,(n=new M4b,X$b(n,(o=new e2b(gec),Xwc(o.b,'What is Offline?'),Y$b(o,o.b,0),o)),n)),X$b(h,(p=new z4b,X$b(p,new Jwc((q=new iQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new jjb(q.a)).a)),p)),X$b(h,new J4b),h)),X$b(b,(i=new x4b,X$b(i,(r=new M4b,X$b(r,(s=new e2b(gec),Xwc(s.b,'How to configure?'),Y$b(s,s.b,0),s)),r)),X$b(i,(t=new z4b,X$b(t,new Rwc((u=new iQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new jjb(u.a)).a)),X$b(t,(v=new X1c,v5b(v,(w=new iQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new jjb(w.a)).a),tlb(v.eb,$Md,true),v)),X$b(t,new Rwc((A=new iQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new jjb(A.a)).a)),X$b(t,(B=new X1c,v5b(B,(C=new iQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new jjb(C.a)).a),tlb(B.eb,$Md,true),B)),X$b(t,new Rwc((D=new iQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new jjb(D.a)).a)),X$b(t,(F=new X1c,v5b(F,(G=new iQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new jjb(G.a)).a),tlb(F.eb,$Md,true),F)),t)),X$b(i,new J4b),i)),b));return a}\nkhb(408,232,HJd,Jwc);khb(1008,44,TJd,vSc);var H5=yOb(LMd,'OfflinePresenter',1008);khb(1246,47,UJd,BSc);var M5=yOb(LMd,'OfflineView',1246);khb(1523,1,{},CSc);var L5=yOb(LMd,'OfflineView_BinderImpl',1523);khb(1524,1,{},ESc);var I5=yOb(LMd,'OfflineView_BinderImpl/Widgets',1524);khb(1871,1,{},GSc);var FSc;var K5=yOb(LMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1871);khb(1872,1,{},ISc);_.a=false;var J5=yOb(LMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1872);khb(930,1,fMd);_.Sb=function mYc(){LLb(this.b,MXc(this.a.a))};oHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")