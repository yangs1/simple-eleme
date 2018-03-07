<template>

    <div>
        <section class="fixed-button">
            <div class="circular-card menus"  @click="dialogFormVisible = true">
                <i class="el-icon-delete"></i>
                <p>添加菜单</p>
            </div>
            <div class="circular-card foods">
                <i class="el-icon-delete"></i>
                <p>添加菜品</p>
            </div>
            <div class="circular-card main">
                <i class="el-icon-delete"></i>
                <p>添加</p>
            </div>

        </section>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                dialogFormVisible : false,
                formLabelWidth: '120px',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
            }
        }
    }
</script>

<style scoped>
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