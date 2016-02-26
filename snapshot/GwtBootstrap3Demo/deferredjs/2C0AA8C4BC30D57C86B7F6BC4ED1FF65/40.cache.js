$wnd.GwtBootstrap3Demo.runAsyncCallback40("function vSc(){}\nfunction zSc(){}\nfunction BSc(){}\nfunction CSc(){CSc=Mhb;ySc=new BSc}\nfunction Cwc(a){izb.call(this,a);Bwc(this)}\nfunction uSc(){uKb.call(this);sKb(this,wSc(new xSc))}\nfunction oSc(a,b,c){GJb();cKb.call(this,a,b,c,(Ywc(),Xwc))}\nfunction xSc(){this.a=(new zSc,CSc(),ySc);ASc(this.a)}\nfunction $Wc(a){var b;if(!a.M){b=new uSc(new vSc);a.M=b}return a.M}\nfunction ZWc(a){var b;if(!a.L){b=new oSc(fJb(JKb(a.a)),$Wc(a),YWc(a));yJb((MKb(a.a),b),YKb(MKb(a.a)));a.L=b}return a.L}\nfunction ASc(a){if(!a.a){a.a=true;hx((ID(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction wSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new j6b;B_b(a,(b=new X1b(bLd),B_b(b,(c=new P4b,c.a='Offline',O4b(c),c)),B_b(b,(d=new K0b,B_b(d,(e=new J2b((Nec(),Kec)),Qlb((mtb(),e.eb),'GPBYFDEFM',true),Qwc(e.b,eRd),C_b(e,e.b,0),e)),B_b(d,new Kwc((j=new OQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Gjb(j.a)).a)),B_b(d,(f=new a1c,$5b(f,(k=new OQb,k.a+=fRd,new Gjb(k.a)).a),Qlb(f.eb,gLd,true),f)),B_b(d,new Kwc((l=new OQb,l.a+=gRd,new Gjb(l.a)).a)),B_b(d,(g=new a1c,$5b(g,(m=new OQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Gjb(m.a)).a),Qlb(g.eb,gLd,true),g)),Qlb(d.eb,'GPBYFDEEM',true),d)),B_b(b,(h=new a5b,B_b(h,(n=new p5b,B_b(n,(o=new J2b(Jec),Qwc(o.b,'What is Offline?'),C_b(o,o.b,0),o)),n)),B_b(h,(p=new c5b,B_b(p,new Cwc((q=new OQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Gjb(q.a)).a)),p)),B_b(h,new m5b),h)),B_b(b,(i=new a5b,B_b(i,(r=new p5b,B_b(r,(s=new J2b(Jec),Qwc(s.b,'How to configure?'),C_b(s,s.b,0),s)),r)),B_b(i,(t=new c5b,B_b(t,new Kwc((u=new OQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Gjb(u.a)).a)),B_b(t,(v=new a1c,$5b(v,(w=new OQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Gjb(w.a)).a),Qlb(v.eb,gLd,true),v)),B_b(t,new Kwc((A=new OQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Gjb(A.a)).a)),B_b(t,(B=new a1c,$5b(B,(C=new OQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Gjb(C.a)).a),Qlb(B.eb,gLd,true),B)),B_b(t,new Kwc((D=new OQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Gjb(D.a)).a)),B_b(t,(F=new a1c,$5b(F,(G=new OQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Gjb(G.a)).a),Qlb(F.eb,gLd,true),F)),t)),B_b(i,new m5b),i)),b));return a}\nLhb(405,230,UHd,Cwc);Lhb(967,44,eId,oSc);var D6=cPb(UKd,'OfflinePresenter',967);Lhb(1202,48,fId,uSc);var I6=cPb(UKd,'OfflineView',1202);Lhb(1472,1,{},vSc);var H6=cPb(UKd,'OfflineView_BinderImpl',1472);Lhb(1473,1,{},xSc);var E6=cPb(UKd,'OfflineView_BinderImpl/Widgets',1473);Lhb(1817,1,{},zSc);var ySc;var G6=cPb(UKd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1817);Lhb(1818,1,{},BSc);_.a=false;var F6=cPb(UKd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1818);Lhb(891,1,qKd);_.Sb=function wXc(){pMb(this.b,ZWc(this.a.a))};AFd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")