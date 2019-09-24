<template>
<div>
    <div class="header">
        <ul class="header_list">
            <li class="left">
               <router-link to="javascript;'" class="map"><img src="../../public/images/dizhi1.png" alt=""></router-link>
                <router-link to="javascript:;">北京市</router-link> 
            </li>
            <li class="center">
                <router-link to="javascript:;">
                    <img src="../../public/images/logo.png">
                </router-link>
            </li>
            <li class="right">
                <router-link to="javascript:;"><img src="../../public/images/search.png"></router-link>
                <router-link to="javascript:;"><img src="../../public/images/more.png"></router-link>
            </li>
        </ul>
    </div>
    <div class="footerbar">
        <mt-tab-container v-model="active"> 
            <mt-tab-container-item id="tab1">
                1  
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2"> 2 
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3"> 3 
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4">  4
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar fixed v-model="active">   
            <mt-tab-item id="tab1"> 
                精选       	       
            </mt-tab-item>        	       
            <mt-tab-item id="tab2">
                蛋糕
            </mt-tab-item>    
            <mt-tab-item id="tab3">
                小食
            </mt-tab-item>    
            <mt-tab-item id="tab4">
                购物车
            </mt-tab-item>    
        </mt-tabbar>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return {
           active:""
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
   a{
       text-decoration: none;
   }
   .header{
       height:3rem;
       margin:0;
       padding:0;
       overflow: hidden;
   }
   .header .header_list{
        position:fixed;
       z-index:1000;
       width:100%;
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
   .header_list li a{
       display: inline-block;
       height:3rem;
   }
   .header_list .left{
       width:6rem;
       text-align: center;
   }
   .header .header_list .map img{
       height:.8rem;
       vertical-align: middle;
   }
   .header .header_list .left a{
       color: #8d8d8d;
       font-size: 1rem;
       line-height: 3rem;   
   }
    .header .header_list .left a+a{
        margin-left: .1rem;
    }
    .header_list .center{
        line-height: 3rem;
    }
   .header_list .center img{
       height:.8rem;
       vertical-align: middle;
   }

   .header .header_list .right img{
       height:1.2rem;
   }
   .header_list .right{
       width:5rem;
       display: flex;
       justify-content: space-around;
       align-items: center;
   }
   .header .header_list .right a{
       display: inline-block;
       height:1.2rem;
       text-align: center;
       width:2.5rem;
   }
   .header_list .right a+a{
       border-left:.1rem solid #8d8d8d;
   }

   .mint-tabbar a.mint-tab-item .mint-tab-item-label{
        font-size:1rem;
        line-height: 2rem;
        height:2rem;
    }

</style>

