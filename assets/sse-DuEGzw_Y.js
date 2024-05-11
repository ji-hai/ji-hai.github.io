import{_ as r}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BB62F2Sv.js";import{l,r as a,m as c,S as i,R as u,u as d,q as n,V as o}from"./vue-chunks-DuYwYYUM.js";import"./index-BnHiHPD0.js";import"./element-plus-t0Lc7SBq.js";/* empty css                  */const _=n("i",null,"本例子使用node搭建服务",-1),p=n("h1",null," 什么是sse（Server-Sent Events） ",-1),f=n("p",null," SSE（Server-Sent Events）是一种用于实现服务器主动向客户端推送数据的技术，也被称为“事件流”（Event Stream）。 它基于 HTTP 协议，利用了其长连接特性，在客户端与服务器之间建立一条持久化连接， 并通过这条连接实现服务器向客户端的实时数据推送。 ",-1),h=n("h1",null," SSE技术的基本原理 ",-1),m=n("p",null,[n("ol",null,[n("li",null," 客户端向服务器发送一个GET请求，带有指定的header，表示可以接收事件流类型，并禁用任何的事件缓存。 "),n("li",null," 服务器返回一个响应，带有指定的header，表示事件的媒体类型和编码， 以及使用分块传输编码（chunked）来流式传输动态生成的内容。 "),n("li",null," 服务器在有数据更新时，向客户端发送一个或多个名称：值字段组成的事件，由单个换行符分隔。事件之间由两个换行符分隔。 服务器可以发送事件数据、事件类型、事件ID和重试时间等字段。 "),n("li",null," 客户端使用EventSource接口来创建一个对象，打开连接，并订阅onopen、 onmessage和onerror等事件处理程序来处理连接状态和接收消息。 "),n("li",null," 客户端可以使用GET查询参数来传递数据给服务器，也可以使用close方法来关闭连接。 ")])],-1),S=n("h1",null," 数据格式 ",-1),v=n("p",null," SSE 可以传输文本和二进制格式的数据，但只支持单向数据流，即只能由服务器向客户端推送数据。 WebSocket 支持双向数据流，客户端和服务器可以互相发送消息，并且没有消息大小限制。 ",-1),g=n("h1",null," 代码实现 ",-1),E=n("p",null,[o(" 前端： "),n("pre",{style:{backgroundColor:"#111",color:"#fff"}},`
        const es = new EventSource('http://127.0.0.1:3000/sse')
        
        const currentData = ref('')

        // 监听 message 事件
        es.onmessage = (event) => {

        // 挂到载体上面
        currentData.value = event.data

        }

        es.onopen = function (event) {

          console.log('连接成功', event)

        } 

        es.onerror = function (error) {

        // 监听错误
        console.log('错误', error)

        }
      `),o(" node: "),n("pre",{style:{backgroundColor:"#111",color:"#fff"}},`
        // 挂载路由
         router.get('/sse', function(req, res, next) {

           // 如果需要返回跨域头
           res.setHeader('Content-Type', 'text/event-stream');

           res.setHeader('Cache-Control', 'no-cache');

           res.setHeader('Connection', 'keep-alive');

           res.setHeader('Access-Control-Allow-Origin', '*'); // 这里修改允许跨域访问的网站

           // 及时发送刷新响应头
           res.flushHeaders();

           setInterval(()=>{

             const data = {

               message: \`Current time is \${new Date().toLocaleTimeString()}\`

             };

             res.write(\`data: \${JSON.stringify(data)}\\n\\n\`);

           }, 2000)

         })
      `)],-1),y=l({name:"SSE",__name:"sse",setup(C){const t=new EventSource("http://127.0.0.1:3000/sse"),s=a("");return t.onmessage=e=>{s.value=e.data},t.onopen=function(e){console.log("连接成功",e)},t.onerror=function(e){console.log("错误",e)},(e,k)=>(c(),i(d(r),{title:"SSE"},{default:u(()=>[_,p,f,h,m,S,v,g,E]),_:1}))}});export{y as default};
//# sourceMappingURL=sse-DuEGzw_Y.js.map
