// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: 
    {
        
    },

    start () 
    {
        Test();
    },

    Test : function() 
    {
        var json = '{"key":"value","jian":"zhi"}';
        var obj =JSON.parse(json);

        console.log(obj);         //控制台返回  Object
        console.log(obj.key);     //控制台返回  value
        console.log(obj.jian);    //控制台返回  zhi
    }
});
