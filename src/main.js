let demo = document.querySelector("#demo");
let style = document.querySelector("#style");

let string = `/* 你好，我是个小白
 接下来我演示一下我的前端功底
 首先我要准备一个div*/
 #div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来把div变成八卦图
首先把div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦由阴阳形成
一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%); 
}
/*再加两个球球*/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    transform: translateX(-50%);
    background:#000;
    border-radius:50%;
    top:0;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    transform: translateX(-50%);
    background:#fff;
    border-radius:50%;
    bottom:0;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";      //改回车
        } else if (string[n] === " ") {
            string2 += "&nbsp;";     //改空格
        } else {
            string2 += string[n];
        }
        demo.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        demo.scrollTo(0, 9999);//网页自动滚动
        n += 1;
        if (n < string.length) { step(); }
    }, 10);
};
step();
