"use strict";(self.webpackChunkCalculator=self.webpackChunkCalculator||[]).push([[538],{1538:(J,m,s)=>{s.r(m),s.d(m,{LoginModule:()=>d});var p=s(6895),l=s(433),c=s(2386);class f{constructor(){this.name="",this.role="User",this.userName="",this.password=""}}var n=s(8256),h=s(1481),_=s(3071),b=s(2532);function v(o,t){1&o&&(n.TgZ(0,"h1"),n._uU(1,"Login"),n.qZA())}function x(o,t){1&o&&(n.TgZ(0,"h1"),n._uU(1,"Register"),n.qZA())}function C(o,t){if(1&o){const e=n.EpF();n.TgZ(0,"div",9)(1,"label",19),n._uU(2,"Full Name"),n.qZA(),n.TgZ(3,"input",20,21),n.NdJ("ngModelChange",function(i){n.CHM(e);const u=n.oxw();return n.KtG(u.user.name=i)}),n.qZA(),n.TgZ(5,"div",13),n._uU(6," Full Name is required "),n.qZA()()}if(2&o){const e=n.MAs(4),r=n.oxw();n.xp6(3),n.Q6J("ngModel",r.user.name),n.xp6(2),n.Q6J("hidden",e.valid||e.pristine)}}function M(o,t){if(1&o){const e=n.EpF();n.TgZ(0,"button",22),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.login())}),n._uU(1,"Login"),n.qZA()}if(2&o){n.oxw();const e=n.MAs(9);n.Q6J("disabled",!e.form.valid)}}function Z(o,t){if(1&o){const e=n.EpF();n.TgZ(0,"button",22),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.register())}),n._uU(1,"Register"),n.qZA()}if(2&o){n.oxw();const e=n.MAs(9);n.Q6J("disabled",!e.form.valid)}}function L(o,t){if(1&o){const e=n.EpF();n.TgZ(0,"div",23),n._uU(1,"Not a member? "),n.TgZ(2,"a",24),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.toggle())}),n._uU(3,"Register"),n.qZA()()}}function y(o,t){if(1&o){const e=n.EpF();n.TgZ(0,"div",23),n._uU(1,"Already a member? "),n.TgZ(2,"a",24),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.toggle())}),n._uU(3,"Login"),n.qZA()()}}class g{constructor(t,e,r,i,u){this.router=t,this.route=e,this.titleService=r,this.userService=i,this.authService=u,this.isValid=!0,this.isLogin=!0,this.errorMessage=""}ngOnInit(){this.titleService.setTitle("Calculator - Login"),this.user=new f,this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}login(){this.userService.login(this.user).subscribe(t=>{t&&t.ok?t.body.isValid?(this.isValid=!0,this.authService.setCurrentUser(t.body),this.router.navigateByUrl(this.returnUrl)):(this.isValid=!1,this.errorMessage=t.body.error):this.isValid=!1})}register(){this.userService.register(this.user).subscribe(t=>{t&&t.ok?t.body.isValid?(this.isValid=!0,this.authService.setCurrentUser(t.body),this.router.navigateByUrl(this.returnUrl)):(this.isValid=!1,this.errorMessage=t.body.error):this.isValid=!1})}toggle(){this.isLogin=!this.isLogin}}g.\u0275fac=function(t){return new(t||g)(n.Y36(c.F0),n.Y36(c.gz),n.Y36(h.Dx),n.Y36(_.K),n.Y36(b.e))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-login"]],decls:32,vars:13,consts:[[1,"container","component-body"],[1,"row"],[1,"col-md-5","mx-auto"],[1,"myform","form"],[1,"logo","mb-3"],[1,"col-md-12","text-center"],[4,"ngIf"],["loginForm","ngForm"],["class","form-group",4,"ngIf"],[1,"form-group"],["for","username"],["type","text","name","username","id","username","required","","aria-describedby","usernameHelp","placeholder","Enter Username",1,"form-control",3,"ngModel","ngModelChange"],["username","ngModel"],[1,"alert","alert-danger",3,"hidden"],["for","password"],["type","password","name","password","id","password","required","","aria-describedby","passwordHelp","placeholder","Enter Password",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],["class"," btn btn-block mybtn btn-primary tx-tfm",3,"disabled","click",4,"ngIf"],["class","text-center mt-3",4,"ngIf"],["for","fullname"],["type","text","name","fullname","id","fullname","required","","aria-describedby","fullnameHelp","placeholder","Enter Full Name",1,"form-control",3,"ngModel","ngModelChange"],["fullname","ngModel"],[1,"btn","btn-block","mybtn","btn-primary","tx-tfm",3,"disabled","click"],[1,"text-center","mt-3"],[1,"navLink",3,"click"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n.YNc(6,v,2,0,"h1",6),n.YNc(7,x,2,0,"h1",6),n.qZA()(),n.TgZ(8,"form",null,7),n.YNc(10,C,7,2,"div",8),n.TgZ(11,"div",9)(12,"label",10),n._uU(13,"Username"),n.qZA(),n.TgZ(14,"input",11,12),n.NdJ("ngModelChange",function(i){return e.user.userName=i}),n.qZA(),n.TgZ(16,"div",13),n._uU(17," Username is required "),n.qZA()(),n.TgZ(18,"div",9)(19,"label",14),n._uU(20,"Password"),n.qZA(),n.TgZ(21,"input",15,16),n.NdJ("ngModelChange",function(i){return e.user.password=i}),n.qZA(),n.TgZ(23,"div",13),n._uU(24," Password is required "),n.qZA()(),n.TgZ(25,"div",13),n._uU(26),n.qZA(),n.TgZ(27,"div",5),n.YNc(28,M,2,1,"button",17),n.YNc(29,Z,2,1,"button",17),n.qZA()(),n.YNc(30,L,4,0,"div",18),n.YNc(31,y,4,0,"div",18),n.qZA()()()()),2&t){const r=n.MAs(15),i=n.MAs(22);n.xp6(6),n.Q6J("ngIf",e.isLogin),n.xp6(1),n.Q6J("ngIf",!e.isLogin),n.xp6(3),n.Q6J("ngIf",!e.isLogin),n.xp6(4),n.Q6J("ngModel",e.user.userName),n.xp6(2),n.Q6J("hidden",r.valid||r.pristine),n.xp6(5),n.Q6J("ngModel",e.user.password),n.xp6(2),n.Q6J("hidden",i.valid||i.pristine),n.xp6(2),n.Q6J("hidden",e.isValid),n.xp6(1),n.hij(" ",e.errorMessage," "),n.xp6(2),n.Q6J("ngIf",e.isLogin),n.xp6(1),n.Q6J("ngIf",!e.isLogin),n.xp6(1),n.Q6J("ngIf",e.isLogin),n.xp6(1),n.Q6J("ngIf",!e.isLogin)}},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.On,l.F,p.O5],styles:["a[_ngcontent-%COMP%]{text-decoration:none!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-family:Kaushan Script,cursive}.myform[_ngcontent-%COMP%]{position:relative;display:flex;padding:1rem;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:1.1rem;outline:0;max-width:500px}.tx-tfm[_ngcontent-%COMP%]{text-transform:uppercase}.mybtn[_ngcontent-%COMP%]{border-radius:50px}.login-or[_ngcontent-%COMP%]{position:relative;color:#aaa;margin-top:10px;margin-bottom:10px;padding-top:10px;padding-bottom:10px}.span-or[_ngcontent-%COMP%]{display:block;position:absolute;left:50%;top:-2px;margin-left:-25px;background-color:#fff;width:50px;text-align:center}.hr-or[_ngcontent-%COMP%]{height:1px;margin-top:0!important;margin-bottom:0!important}.google[_ngcontent-%COMP%]{color:#666;width:100%;height:40px;text-align:center;outline:none;border:1px solid lightgrey}form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red}#second[_ngcontent-%COMP%]{display:none}.component-body[_ngcontent-%COMP%]{padding-top:51px}"]});const T=[{path:"",component:g}];class a{}a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[c.Bz.forChild(T),c.Bz]});class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=n.oAB({type:d}),d.\u0275inj=n.cJS({imports:[l.u5,p.ez,a]})}}]);