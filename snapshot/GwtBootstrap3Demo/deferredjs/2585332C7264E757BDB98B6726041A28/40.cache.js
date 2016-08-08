$wnd.GwtBootstrap3Demo.runAsyncCallback40("function GSc(){}\nfunction KSc(){}\nfunction MSc(){}\nfunction NSc(){NSc=Chb;JSc=new MSc}\nfunction Nwc(a){$yb.call(this,a);Mwc(this)}\nfunction FSc(){VJb.call(this);TJb(this,HSc(new ISc))}\nfunction zSc(a,b,c){fJb();DJb.call(this,a,b,c,(hxc(),gxc))}\nfunction ISc(){this.a=(new KSc,NSc(),JSc);LSc(this.a)}\nfunction RXc(a){var b;if(!a.M){b=new FSc(new GSc);a.M=b}return a.M}\nfunction QXc(a){var b;if(!a.L){b=new zSc(GIb(iKb(a.a)),RXc(a),PXc(a));ZIb((lKb(a.a),b),xKb(lKb(a.a)));a.L=b}return a.L}\nfunction LSc(a){if(!a.a){a.a=true;ax((mD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction HSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new K5b;a_b(a,(b=new w1b(YMd),a_b(b,(c=new o4b,c.a='Offline',n4b(c),c)),a_b(b,(d=new j0b,a_b(d,(e=new i2b((oec(),lec)),Glb((etb(),e.eb),'GPBYFDEFM',true),_wc(e.b,cTd),b_b(e,e.b,0),e)),a_b(d,new Vwc((j=new nQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new wjb(j.a)).a)),a_b(d,(f=new _1c,z5b(f,(k=new nQb,k.a+=dTd,new wjb(k.a)).a),Glb(f.eb,bNd,true),f)),a_b(d,new Vwc((l=new nQb,l.a+=eTd,new wjb(l.a)).a)),a_b(d,(g=new _1c,z5b(g,(m=new nQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new wjb(m.a)).a),Glb(g.eb,bNd,true),g)),Glb(d.eb,'GPBYFDEEM',true),d)),a_b(b,(h=new B4b,a_b(h,(n=new Q4b,a_b(n,(o=new i2b(kec),_wc(o.b,'What is Offline?'),b_b(o,o.b,0),o)),n)),a_b(h,(p=new D4b,a_b(p,new Nwc((q=new nQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new wjb(q.a)).a)),p)),a_b(h,new N4b),h)),a_b(b,(i=new B4b,a_b(i,(r=new Q4b,a_b(r,(s=new i2b(kec),_wc(s.b,'How to configure?'),b_b(s,s.b,0),s)),r)),a_b(i,(t=new D4b,a_b(t,new Vwc((u=new nQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new wjb(u.a)).a)),a_b(t,(v=new _1c,z5b(v,(w=new nQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new wjb(w.a)).a),Glb(v.eb,bNd,true),v)),a_b(t,new Vwc((A=new nQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new wjb(A.a)).a)),a_b(t,(B=new _1c,z5b(B,(C=new nQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new wjb(C.a)).a),Glb(B.eb,bNd,true),B)),a_b(t,new Vwc((D=new nQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new wjb(D.a)).a)),a_b(t,(F=new _1c,z5b(F,(G=new nQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new wjb(G.a)).a),Glb(F.eb,bNd,true),F)),t)),a_b(i,new N4b),i)),b));return a}\nBhb(408,232,LJd,Nwc);Bhb(1008,44,WJd,zSc);var Y5=DOb(OMd,'OfflinePresenter',1008);Bhb(1246,47,XJd,FSc);var b6=DOb(OMd,'OfflineView',1246);Bhb(1523,1,{},GSc);var a6=DOb(OMd,'OfflineView_BinderImpl',1523);Bhb(1524,1,{},ISc);var Z5=DOb(OMd,'OfflineView_BinderImpl/Widgets',1524);Bhb(1873,1,{},KSc);var JSc;var _5=DOb(OMd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1873);Bhb(1874,1,{},MSc);_.a=false;var $5=DOb(OMd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1874);Bhb(930,1,iMd);_.Sb=function qYc(){QLb(this.b,QXc(this.a.a))};sHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")