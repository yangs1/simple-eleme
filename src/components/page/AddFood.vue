<template>
    <div>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>

        <el-row :gutter="20">

            <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>

            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>

        </el-row>
    </div>
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
                tableData: Array(20).fill(item)
            }
        }
    };
</script>

<style scoped>

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .el-row {
        margin-bottom: 20px;
    }
</style>