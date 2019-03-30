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
                <el-table :data="orderList" stripe border class="table">
                    <el-table-column prop="orderId" label="订单号" min-width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="productName" label="商品名称" min-width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="price" label="总价" min-width="100" align="center" >
                    </el-table-column>
                    <el-table-column prop="address" label="送单地址" min-width="100" align="center" >
                    </el-table-column>
                    <el-table-column prop="introduction" label='用户详情' min-width="100"
                    align="center" >
                        <template slot-scope="scope">
                            <el-tooltip class="item" effect="light" placement="left">
                            <el-button type="text">查看详情</el-button>
                            <div slot="content" style="line-height:25px">
                                <div>用户姓名：{{scope.row.name}}</div>
                                <div>电话：15658888888</div>
                                <div>性别：男</div>
                            </div>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="订单状态" min-width="100" align="center" >
                    </el-table-column>
                    <el-table-column label="操作"  min-width="160" align="center">
                          <template slot-scope="scope">
                             <el-button size="mini" type="primary" v-if="scope.row.status==='待发货'"
                             @click="clickPut(scope.$index, scope.row)">发货
                             </el-button>
                             <el-button size="mini" type="danger"
                             @click="clickDelete(scope.$index, scope.row)">删除</el-button>
                         </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="paging-box">
                <el-pagination background layout="prev, pager, next" :page-size="pageSize"
                 :total="totalCount" :current-page="currentPage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import { getOrderList, deleteOrder, updateOrderStatus } from '../../../../api/all';

export default {
    name: 'order',
    data() {
        return {
            totalCount: 10,
            pageSize: 10,
            currentPage: 1,
            orderList: [],
        };
    },
    created() {
        this.getData();
    },
    mounted() { },
    methods: {
        clickPut(index, row) {
            console.log(index, row);
            if (row.status === '待发货') {
                updateOrderStatus(row.orderId, '待收货').then((res) => {
                    console.log(res);
                    row.status = '待收货';
                });
            }
        },
        clickDelete(index, row) {
            console.log(index, row);
            this.$confirm('确认要删除该订单吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                // 删除订单
                console.log(row.orderId);
                deleteOrder(row.orderId).then((res) => {
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
        getData() {
            getOrderList().then((res) => {
                console.log(res.data.data);
                this.orderList = res.data.data;
            }).catch((err) => {
                console.log(err);
            });
        },
    },
    computed: {},
    watch: {},
    components: {
    },
};
</script>
