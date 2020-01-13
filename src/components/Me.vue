<template>
  <div id="me">
    我就是
    <h5>{{$route.query.name}}</h5>
    <h5>{{$route.query.age}}</h5>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
    document.title = '我的';
  }
}
</script>