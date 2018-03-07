<template>
    <el-menu default-active="1-4-1" :default-openeds="['1', '3']" class="sidebar-menu" :collapse="false" >
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>

            <el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "sidebar.vue"
    }
</script>

<style scoped>
    .sidebar-menu{
        text-align: left!important;
    }
    ul li{
        padding-right: 0!important;
    }
</style>