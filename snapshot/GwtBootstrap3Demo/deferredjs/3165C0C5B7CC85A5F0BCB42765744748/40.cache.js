$wnd.GwtBootstrap3Demo.runAsyncCallback40("function pSc(){}\nfunction tSc(){}\nfunction vSc(){}\nfunction wSc(){wSc=lhb;sSc=new vSc}\nfunction wwc(a){Jyb.call(this,a);vwc(this)}\nfunction oSc(){EJb.call(this);CJb(this,qSc(new rSc))}\nfunction iSc(a,b,c){QIb();mJb.call(this,a,b,c,(Swc(),Rwc))}\nfunction rSc(){this.a=(new tSc,wSc(),sSc);uSc(this.a)}\nfunction AXc(a){var b;if(!a.M){b=new oSc(new pSc);a.M=b}return a.M}\nfunction zXc(a){var b;if(!a.L){b=new iSc(pIb(TJb(a.a)),AXc(a),yXc(a));IIb((WJb(a.a),b),gKb(WJb(a.a)));a.L=b}return a.L}\nfunction uSc(a){if(!a.a){a.a=true;ax((dD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction qSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new t5b;L$b(a,(b=new f1b(WMd),L$b(b,(c=new Z3b,c.a='Offline',Y3b(c),c)),L$b(b,(d=new U_b,L$b(d,(e=new T1b((Zdc(),Wdc)),plb((Psb(),e.eb),'GPBYFDEFM',true),Kwc(e.b,_Sd),M$b(e,e.b,0),e)),L$b(d,new Ewc((j=new YPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new fjb(j.a)).a)),L$b(d,(f=new K1c,i5b(f,(k=new YPb,k.a+=aTd,new fjb(k.a)).a),plb(f.eb,_Md,true),f)),L$b(d,new Ewc((l=new YPb,l.a+=bTd,new fjb(l.a)).a)),L$b(d,(g=new K1c,i5b(g,(m=new YPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new fjb(m.a)).a),plb(g.eb,_Md,true),g)),plb(d.eb,'GPBYFDEEM',true),d)),L$b(b,(h=new k4b,L$b(h,(n=new z4b,L$b(n,(o=new T1b(Vdc),Kwc(o.b,'What is Offline?'),M$b(o,o.b,0),o)),n)),L$b(h,(p=new m4b,L$b(p,new wwc((q=new YPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new fjb(q.a)).a)),p)),L$b(h,new w4b),h)),L$b(b,(i=new k4b,L$b(i,(r=new z4b,L$b(r,(s=new T1b(Vdc),Kwc(s.b,'How to configure?'),M$b(s,s.b,0),s)),r)),L$b(i,(t=new m4b,L$b(t,new Ewc((u=new YPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new fjb(u.a)).a)),L$b(t,(v=new K1c,i5b(v,(w=new YPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new fjb(w.a)).a),plb(v.eb,_Md,true),v)),L$b(t,new Ewc((A=new YPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new fjb(A.a)).a)),L$b(t,(B=new K1c,i5b(B,(C=new YPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new fjb(C.a)).a),plb(B.eb,_Md,true),B)),L$b(t,new Ewc((D=new YPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new fjb(D.a)).a)),L$b(t,(F=new K1c,i5b(F,(G=new YPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new fjb(G.a)).a),plb(F.eb,_Md,true),F)),t)),L$b(i,new w4b),i)),b));return a}\nkhb(408,232,JJd,wwc);khb(1012,44,UJd,iSc);var E5=mOb(MMd,'OfflinePresenter',1012);khb(1250,47,VJd,oSc);var J5=mOb(MMd,'OfflineView',1250);khb(1527,1,{},pSc);var I5=mOb(MMd,'OfflineView_BinderImpl',1527);khb(1528,1,{},rSc);var F5=mOb(MMd,'OfflineView_BinderImpl/Widgets',1528);khb(1875,1,{},tSc);var sSc;var H5=mOb(MMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1875);khb(1876,1,{},vSc);_.a=false;var G5=mOb(MMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1876);khb(934,1,gMd);_.Sb=function _Xc(){zLb(this.b,zXc(this.a.a))};qHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")