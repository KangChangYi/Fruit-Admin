<style lang='scss' scoped>
@import "../../../../styles/public.scss";
// 不缩进及缩进样式
.el-menu-vertical-demo {
    min-height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border: none;
    position: relative;
    z-index: 21;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.menu-icon {
    width: 14px;
    height: 14px;
    padding-right: 16px;
}

// menu hover
.el-submenu {
    .el-menu-item {
        background-color: $navigate-dark-color !important;
        &:hover {
            color: white !important;
            background-color: $navigate-hover-color !important;
        }
    }
}
</style>

<template>
    <div>
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#304156"
            text-color="#bfcbd9"
            :collapse="isCollapse"
            router
        >
            <el-menu-item index="commodityManage">
                <img
                    src="../../../../assets/image/icon-ban.png"
                    class="menu-icon"
                >
                <span slot="title">商品管理</span>
            </el-menu-item>

            <el-menu-item index="order">
                <img
                    src="../../../../assets/image/icon-edition.png"
                    class="menu-icon"
                >
                <span slot="title">订单管理</span>
            </el-menu-item>

            <el-menu-item index="users">
                <img
                    src="../../../../assets/image/icon-user.png"
                    class="menu-icon"
                >
                <span slot="title">用户列表</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'naviMenu',
    data() {
        return {};
    },
    props: {
        isCollapse: Boolean,
    },
    created() { },
    methods: {},
    computed: {},
    watch: {},
    components: {},
};
</script>
