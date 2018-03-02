<template>
    <el-container style="height: 100%">

        <el-aside width="250px" style="background-color: royalblue" class="menus-aside">

            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" class="menus-search"> </el-input>
            <ul class="menus-lists">
                <li class="active">
                    闽菜
                </li>
                <li>
                    粤菜
                </li>
                <li>
                    家常便饭
                </li>
            </ul>
        </el-aside>


        <el-main class="foods-main">
            <h5> 天天特价 </h5>
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
    </el-container>
</template>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                currentDate: new Date()
            };
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
</style>