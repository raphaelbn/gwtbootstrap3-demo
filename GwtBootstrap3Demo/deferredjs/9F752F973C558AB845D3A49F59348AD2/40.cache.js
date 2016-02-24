$wnd.GwtBootstrap3Demo.runAsyncCallback40("function WRc(){}\nfunction $Rc(){}\nfunction aSc(){}\nfunction bSc(){bSc=Hhb;ZRc=new aSc}\nfunction bwc(a){dzb.call(this,a);awc(this)}\nfunction VRc(){$Jb.call(this);YJb(this,XRc(new YRc))}\nfunction PRc(a,b,c){kJb();IJb.call(this,a,b,c,(xwc(),wwc))}\nfunction YRc(){this.a=(new $Rc,bSc(),ZRc);_Rc(this.a)}\nfunction zWc(a){var b;if(!a.M){b=new VRc(new WRc);a.M=b}return a.M}\nfunction yWc(a){var b;if(!a.L){b=new PRc(LIb(nKb(a.a)),zWc(a),xWc(a));cJb((qKb(a.a),b),CKb(qKb(a.a)));a.L=b}return a.L}\nfunction _Rc(a){if(!a.a){a.a=true;bx((CD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction XRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new N5b;f_b(a,(b=new z1b(BKd),f_b(b,(c=new r4b,c.a='Offline',q4b(c),c)),f_b(b,(d=new m0b,f_b(d,(e=new l2b((mec(),jec)),Llb((jtb(),e.eb),'GPBYFDEFM',true),pwc(e.b,EQd),g_b(e,e.b,0),e)),f_b(d,new jwc((j=new sQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Bjb(j.a)).a)),f_b(d,(f=new B0c,C5b(f,(k=new sQb,k.a+=FQd,new Bjb(k.a)).a),Llb(f.eb,GKd,true),f)),f_b(d,new jwc((l=new sQb,l.a+=GQd,new Bjb(l.a)).a)),f_b(d,(g=new B0c,C5b(g,(m=new sQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Bjb(m.a)).a),Llb(g.eb,GKd,true),g)),Llb(d.eb,'GPBYFDEEM',true),d)),f_b(b,(h=new E4b,f_b(h,(n=new T4b,f_b(n,(o=new l2b(iec),pwc(o.b,'What is Offline?'),g_b(o,o.b,0),o)),n)),f_b(h,(p=new G4b,f_b(p,new bwc((q=new sQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Bjb(q.a)).a)),p)),f_b(h,new Q4b),h)),f_b(b,(i=new E4b,f_b(i,(r=new T4b,f_b(r,(s=new l2b(iec),pwc(s.b,'How to configure?'),g_b(s,s.b,0),s)),r)),f_b(i,(t=new G4b,f_b(t,new jwc((u=new sQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Bjb(u.a)).a)),f_b(t,(v=new B0c,C5b(v,(w=new sQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Bjb(w.a)).a),Llb(v.eb,GKd,true),v)),f_b(t,new jwc((A=new sQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Bjb(A.a)).a)),f_b(t,(B=new B0c,C5b(B,(C=new sQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Bjb(C.a)).a),Llb(B.eb,GKd,true),B)),f_b(t,new jwc((D=new sQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Bjb(D.a)).a)),f_b(t,(F=new B0c,C5b(F,(G=new sQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Bjb(G.a)).a),Llb(F.eb,GKd,true),F)),t)),f_b(i,new Q4b),i)),b));return a}\nGhb(406,228,sHd,bwc);Ghb(968,44,DHd,PRc);var y6=IOb(sKd,'OfflinePresenter',968);Ghb(1203,48,EHd,VRc);var D6=IOb(sKd,'OfflineView',1203);Ghb(1475,1,{},WRc);var C6=IOb(sKd,'OfflineView_BinderImpl',1475);Ghb(1476,1,{},YRc);var z6=IOb(sKd,'OfflineView_BinderImpl/Widgets',1476);Ghb(1819,1,{},$Rc);var ZRc;var B6=IOb(sKd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1819);Ghb(1820,1,{},aSc);_.a=false;var A6=IOb(sKd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1820);Ghb(892,1,QJd);_.Sb=function XWc(){VLb(this.b,yWc(this.a.a))};_Ed(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")