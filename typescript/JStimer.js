var div=document.createElement('div');
document.body.appendChild(div);
var obj=new Time.Test(div);
var button=document.createElement('button');
button.innerHTML='start';
button.onclick=function(){
	obj.start();
}
document.body.appendChild(button);
var buttons=document.createElement('button');
buttons.innerHTML='stop';
buttons.onclick=function(){
	obj.stop();
}
document.body.appendChild(buttons);