//了解接口、可选属性、函数类型、数组类型、class类型、继承接口、混合类型
function printlabels(labelobj) {
    console.log(labelobj.label);
}
var myobj = { label: 'hello nomall' };
printlabels(myobj);
function printlabel(labelobj) {
    console.log(labelobj.label);
}
var myobj = { label: 'hello interface' };
printlabel(myobj);
function printusb(pu) {
    console.log(pu.name);
    //console.log(pu.age);
}
var my = { name: 'iem' };
printusb(my);
