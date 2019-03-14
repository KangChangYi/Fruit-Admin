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
        .tool-box {
            @include displayCenter($justify-content: space-between);
        }
        .table-box{
            padding-top:20px;
        }
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
            <div class="tool-box">
                <div>
                    <el-input
                        placeholder="请输入商品名"
                        prefix-icon="el-icon-search"
                        v-model="input21"
                        style="width:200px;margin-right:10px"
                    >
                    </el-input>
                    <el-button type="primary" icon="el-icon-search" circle></el-button>
                </div>
                <el-button type="primary" @click="goTocommodityAdd">添加商品</el-button>
            </div>
            <div class="table-box">
                <el-table :data="tableData" stripe border class="table">
                    <el-table-column prop="name" label="商品名" min-width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="type" label="商品种类" min-width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="price" label="商品价格" min-width="70" align="center" >
                    </el-table-column>
                    <el-table-column prop="introduction" label='商品介绍' min-width="150"
                    align="center" >
                    </el-table-column>
                    <el-table-column prop="image" label="商品图片"  min-width="50" align="center" >
                        <template>
                            <el-tooltip class="item" effect="dark" placement="left">
                            <el-button type="text">查看图片</el-button>
                            <img slot="content" src="../../../../assets/image/icon-avatar.png" />
                            </el-tooltip>
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="操作"  min-width="50" align="center">
                         <template slot-scope="scope">
                             <el-button size="mini" type="danger"
                             @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
// import userGroupSelect from '../../../../components/userGroupSelect.vue';

export default {
    name: 'commodityManage',
    data() {
        return {
            totalCount: 100,
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
        goTocommodityAdd() {
            this.$router.push({
                name: 'commodityAdd',
            });
        },
    },
    computed: {},
    watch: {},
    components: {
        // userGroupSelect,
    },
};
</script>
