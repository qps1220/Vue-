/**
 * Created by qps on 2019/4/3.
 */
var app=new Vue({
  el:'#app',
  data:{
    list:[
      {id:1,
      name:'iphone7',
      price:8822,
      count:4},
      {id:1,
        name:'iphone5',
        price:8422,
        count:1},
      {id:1,
        name:'iphone4',
        price:8422,
        count:4},
      {id:1,
        name:'iphone3',
        price:8842,
        count:7}
    ]
  },
  computed:{
    totalPrice:function () {
      var total=0;
      for(var i=0;i<this.list.length;i++){
        var item =this.list[i];
        total+=item.price * item.count;
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
    }
  },
  methods:{
    handleReduce:function (index) {
      if(this.list[index].count===1) return;
      this.list[index].count--;
    },
    handleAdd:function (index) {
      this.list[index].count++;
    },
    handleRemove:function (index) {
      this.list.splice(index,1);
    }
  }
});
