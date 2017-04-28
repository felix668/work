/**
 * module模式
 *1.模块化、可复用
 *2.封装变量和函数
 */
//js闭包
//(function(){
	
//}());
//全局变量
//var a;
//function hel(){
//	var b;//局部
//	c;//全局
//}
//(function($,w){
	
//}(jQuery,window));
//js module
/**
*var jksymodule=function(vip){
*	//声明私有变量
*	var Yvip=document.getElementById(vip);
*	YQ='123456';
*	return {
*		//公开的成员
*		add:function(t){
*			if(t>=12){
*				var Yv=t;
*				Yvip.innerHtml="年费"+Yv+'--QQ:'+YQ;
*			}else{
*				var Mv=t;
*				Yvip.innerHtml="月费"+Mv;
*			}
*		}
*	}
*}
* var jm=new jksymodule("vip");
* jm.add(12);
*/

//interface srtingv{
//	isAccep(s:string):boolean;
//}
//var lettersRegexp=/^[A-Za-z]+$]/;
//var numberRegexp=/^[0-9]+$/;

//class lettersOne implements srtingv{
//	isAccep(s:string):boolean{
//		return lettersRegexp;
//	}
//}
//class zipcode implements srtingv{
//	isAccep(s:string):boolean{
//		return s.length===5 && numberRegexp.test(s);
//	}
//}

//module Validation{
//	export interface StringValidator{
//		isAccep(s:string):boolean;
//	}
//	var lettersRegexp=/^[A-Za-z]+$]/;
//	var numberRegexp=/^[0-9]+$/;
//	export class lettersOne implements srtingv{
//		isAccep(s:string){
//			return lettersRegexp;
//	}
//	export class zipcode implements srtingv{
//		isAccep(s:string){
//			return s.length===5 && numberRegexp.test(s);
//	}
//}
//使用方式
module Time{
	export class Test{
		element:HTMLElement;
		span:HTMLElement;
		timer:number
		;
		constructor(e:HTMLElement){
			this.element=e;
			this.element.innerHTML="现在时间是：";
			this.span=document.createElement("span");
			this.element.appendChild(this.span);
			this.span.innerHTML=new Date().toString();
		}
		start(){
			this.timer=setInterval(()=>this.span.innerHTML=new Date().toTimeString(),500);
			console.log(new Date());
		}
		stop(){
			clearInterval(this.timer);
		}
	}
}












