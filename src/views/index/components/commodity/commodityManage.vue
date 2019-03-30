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
            <div>
                <el-button type="primary" @click="goTocommodityAdd">添加商品</el-button>
            </div>
            <div class="table-box">
                <el-table :data="fruitsList" stripe border class="table">
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
                        <template slot-scope="scope">
                            <el-tooltip class="item" effect="dark" placement="left">
                            <el-button type="text">查看图片</el-button>
                            <img slot="content" v-bind:src="scope.row.image" />
                            </el-tooltip>
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="操作"  min-width="90" align="center">
                         <template slot-scope="scope">
                             <el-button size="mini" type="warning"
                             @click="clickModify(scope.$index, scope.row)">修改</el-button>
                             <el-button size="mini" type="danger"
                             @click="clickDelete(scope.$index, scope.row)">删除</el-button>
                         </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="paging-box">
                <el-pagination background layout="prev, pager, next" :page-size="pageSize"
                 :total="totalCount" :current-page="currentPage" @current-change="changePage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { getFruitsList, deleteFruits } from '../../../../api/all';

export default {
    name: 'commodityManage',
    data() {
        return {
            pageSize: 10,
            totalCount: 0,
            currentPage: 0,
            fruitsList: [],
        };
    },
    created() {
        this.getData(10, 1);
    },
    mounted() { },
    methods: {
        getData(pageSize, currentPage) {
            getFruitsList(pageSize, currentPage).then((res) => {
                console.log(res.data);
                this.fruitsList = res.data.data.list;
                this.totalCount = res.data.data.totalCount;
                this.currentPage = res.data.data.currentPage;
            }).catch((err) => {
                console.log(err);
            });
        },
        goTocommodityAdd() {
            this.$router.push({
                name: 'commodityAdd',
            });
        },
        clickModify(index, row) {
            console.log(index, row);
        },
        clickDelete(index, row) {
            console.log(index, row);
            this.$confirm('确认要删除该商品吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                // 删除商品接口
                console.log(row.pkId);
                deleteFruits(row.pkId).then((res) => {
                    console.log(res.data);
                    if (res) {
                        this.fruitsList.splice(index, 1);
                        this.$message({
                            type: 'success',
                            message: '删除成功!',
                        });
                    }
                }).catch((err) => {
                    console.log(err);
                    if (err) {
                        this.$message({
                            type: 'errow',
                            message: '删除失败!',
                        });
                    }
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除',
                });
            });
        },
        changePage(e) {
            this.getData(10, e);
        },
    },
    computed: {},
    watch: {},
    components: {
    },
};
</script>
