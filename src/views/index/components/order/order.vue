<style lang='scss' scoped>
@import "../../../../styles/public.scss";
.son-app {
    height:100vh;
    padding:20px;
    background: white;
    box-shadow: $box-shadow-base;
    border-radius: 3px;
    .commodity-layout {
        height: 300px;
        // .table-box{
        // }
        .paging-box{
            padding-top:20px;
            @include displayCenter();
        }
    }
}
.table {
    width:100%;
}
</style>

<template>
    <div class="son-app">
        <!-- 选项区域 -->
        <!-- <userGroupSelect></userGroupSelect> -->
        <div class="commodity-layout">
            <div class="table-box">
                <el-table :data="tableData" stripe border class="table">
                    <el-table-column prop="name" label="订单号" min-width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="type" label="用户id" min-width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="price" label="商品详情" min-width="100" align="center" >
                    </el-table-column>
                    <el-table-column prop="price" label="商品总价" min-width="100" align="center" >
                    </el-table-column>
                    <el-table-column prop="introduction" label='地址' min-width="150"
                    align="center" >
                    </el-table-column>
                    <el-table-column prop="address" label="操作"  min-width="50" align="center">
                          <template slot-scope="scope">
                             <el-button size="small" type="primary"
                             @click="handleEdit(scope.$index, scope.row)">{{orderState}}</el-button>
                             <!-- <el-button size="small" type="danger"
                             @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
                         </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="paging-box">
                <el-pagination background layout="prev, pager, next" page-size="10"
                 :total="totalCount">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'order',
    data() {
        return {
            totalCount: 100,
            orderState: '发货',
            tableData: [{
                name: '王小虎',
            }, {
                name: '王小虎',
            }, {
                name: '王小虎',
            }, {
                name: '王小虎',
            }],
        };
    },
    created() { },
    mounted() { },
    methods: {

    },
    computed: {},
    watch: {},
    components: {
    },
};
</script>
