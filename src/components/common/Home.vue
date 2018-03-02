<template>
    <el-container style="height: 100%">
        <el-header style="text-align: right; font-size: 12px">

            <v-header></v-header>

        </el-header>
        <el-container style="">

            <el-aside  style=" max-width: 150px; background-color: aqua; ">
                <v-sidebar></v-sidebar>
            </el-aside>


            <el-main>
                <transition name="el-fade-in-linear">
                    <router-view></router-view>
                </transition>
            </el-main>

        </el-container>
    </el-container>
</template>

<script>
    import vHeader from './Header.vue';
    import vSidebar from './Sidebar.vue';

    export default {
        components: {
            vHeader, vSidebar
        }
    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
       padding: 0;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>