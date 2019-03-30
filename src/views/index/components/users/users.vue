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
                <el-table :data="userInfo" stripe border class="table">
                    <el-table-column prop="pkId" label="用户id" min-width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" min-width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="sex" label="性别" min-width="100" align="center" >
                    </el-table-column>
                    <el-table-column prop="birth" label="生日" min-width="100" align="center" >
                    </el-table-column>
                    <el-table-column prop="telphone" label='电话' min-width="150"
                    align="center" >
                    </el-table-column>
                </el-table>
            </div>
            <div class="paging-box">
                <el-pagination background layout="prev, pager, next" :page-size="pageSize"
                 :total="totalCount"  :current-page="currentPage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import { getUserList } from '../../../../api/all';

export default {
    name: 'users',
    data() {
        return {
            totalCount: 10,
            pageSize: 10,
            currentPage: 1,
            orderState: '发货',
            userInfo: [{
                pkId: null,
                name: null,
                birth: null,
                sex: null,
                telphone: null,
            }],
        };
    },
    created() {
        this.getData();
    },
    mounted() { },
    methods: {
        getData() {
            getUserList().then((res) => {
                this.userInfo = res.data.data;
                console.log(res.data.data);
            });
        },
    },
    computed: {},
    watch: {},
    components: {
    },
};
</script>
