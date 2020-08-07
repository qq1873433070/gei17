<template>
  <div class="home">
    <p class="s1">dsfsdfsdf</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    //跨域请求
    this.axios.get("mock/60/api/message/list",{
      params:{}
    }).then((res) => {
      console.log(res);
    }).catch(function (error) {
        console.log(error);
    });

    // this.axios.get("http://47.111.250.151:8081/api/Question/GetQuestion",{
    //   params:{
        
    //   }
    // }).then((res) => {
      
    //   console.log(res);
    // }).catch(function (error) {
    //     console.log(error);
    // });
    // fetch("http://122.112.179.240:9005/api/masterData/getAllTemplate?pageNum=1&pageSize=10",{
    //   method:'GET',
    //   headers:{ 'Content-Type': 'application/json' },
    //   //body: JSON.stringify({key:value}), //POST传参方式
    //   credentials: 'include' //允许携带cookie
    // })//fetch返回的是promise对象。所以fetch().then()第一个then里返回的并不是真正的数据。而是一个promise，所以我们需要通过链式操作第二个then()来获取真正的数据。
    // .then(res => {
    //     return res.json();
    // })
    // .then(res => {
    //   // 这里返回的数据就是我们想要请求的json数据
    //   if(res.message == "OK") {
    //     console.log(res.responseBody.list);
    //   }
    // })
  }
}
</script>
<style lang="stylus">
  .s1 {
    width :750px;
    height:300px;
    background:red;
  }
</style>
