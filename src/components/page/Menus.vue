<template>
    <el-container style="height: 100%">

        <el-aside width="250px" style="background-color: royalblue" class="menus-aside">

            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" class="menus-search"> </el-input>
            <ul class="menus-lists">
                <li class="active">
                    闽菜
                </li>
                <li>
                    粤菜{{test}}
                </li>
                <li>
                    家常便饭
                </li>
            </ul>
        </el-aside>


        <el-main class="foods-main">
            <h5> 天天特价 {{test}}</h5>
            <el-row class="food-cards" :gutter="10">

                <el-col :span="8" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 0 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </el-main>

        <v-fix-button></v-fix-button>
    </el-container>
</template>

<script>

    import vFixButton from './FixButton.vue';

    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                currentDate: new Date(),
                test:"666",
            };
        },
        components: {
            vFixButton
        },
        methods: {
            open3() {
                this.$prompt('请输入邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        }
    };
</script>

<style scoped>
 .menus-search{
     margin: 20px 10px;
     width: 85%;

 }
    .menus-aside{
        border-right: 1px solid #000;
        height: 100%;
    }
    .menus-lists{
        text-align: center;
        padding-left: 0;
        line-height: 32px;
    }
    .menus-lists li{
        cursor:pointer;
    }
 .menus-lists li:hover{
     background-color: red;
     border-left: 3px solid #111;
 }
 .menus-lists li.active{
     border-left: 3px solid #111;
     background-color: red;
 }


.foods-main{
    text-align: left;
    margin: 0 20px;
}
 .food-cards .time {
     font-size: 13px;
     color: #999;
 }

 .food-cards .bottom {
     margin-top: 13px;
     line-height: 12px;
 }

 .food-cards .button {
     padding: 0;
     float: right;
 }

 .food-cards .image {
     max-width: 100px;
     width: 100%;
     display: block;
 }

 .food-cards .clearfix:before,
 .food-cards .clearfix:after {
     display: table;
     content: "";
 }

 .food-cards .clearfix:after {
     clear: both
 }
    .food-cards .el-card{
        margin-top: 15px;
    }

    .fixed-button{
        width: 65px;
        background-color: #e20f41;
        position: absolute;
        right: 35px;
        bottom: 60px;
        font-size: 18px;
        cursor: pointer;

    }
 .fixed-button:hover .circular-card.foods, .fixed-button:hover .circular-card.menus{

     display: block;
 }

 .fixed-button .circular-card{
     border-radius: 100%;
     width: 65px;
     height: 55px;
     padding-top: 10px;
     margin-top: 10px;
 }
 .fixed-button .circular-card p{
     margin-top: 0;
     font-size: 12px;
 }

 .fixed-button .circular-card.main{
     background-color: aqua;
 }
 .fixed-button .circular-card.foods{
     background-color: #2f2eff;
     display: none;
 }
 .fixed-button .circular-card.menus{
     background-color: #40ff3a;
     display: none;
 }
</style>