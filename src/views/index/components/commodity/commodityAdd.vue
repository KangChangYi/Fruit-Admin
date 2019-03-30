<style lang='scss' scoped>
@import "../../../../styles/public.scss";
.son-app {
    height: 100vh;
    padding: 15px 25px;
    background: white;
    box-shadow: $box-shadow-base;
    border-radius: 3px;
}
.cell-box {
    min-height: 60px;
    @include displayCenter($justify-content: flex-start);
    .title {
        width: 90px;
    }
    .form {
        width: 250px;
    }
}
</style>

<template>
    <div class="son-app">
        <div class="cell-box">
            <div class="title">商品名</div>
            <div class="form">
                <el-input v-model="commodity.name" placeholder="请输入商品名"></el-input>
            </div>
        </div>
        <div class="cell-box">
            <div class="title">商品类型</div>
            <div class="form">
                <el-select v-model="commodity.type" placeholder="请选择" style="width:250px;">
                    <el-option v-for="item in commodityType" :key="item.label"
                     :label="item.label" :value="item.label">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="cell-box">
            <div class="title">价格</div>
            <div class="form">
                <el-input v-model="commodity.price" placeholder="请输入价格"></el-input>
            </div>
        </div>
        <div class="cell-box">
            <div class="title">商品介绍</div>
            <div class="form">
                <el-input v-model="commodity.introduction" placeholder="请输入商品介绍"></el-input>
            </div>
        </div>
        <div class="cell-box" style="marin:0px;" >
            <div class="title">商品图片</div>
            <div class="form">
                <Cropper :width="width" :height="height" imgtype="Base"
                 v-on:datafromCropper="datafromCropper"></Cropper>
            </div>
        </div>
        <div class="cell-box" style="marin:0px;" >
            <div class="title"></div>
            <div class="form">
                <el-button type="primary" :loading="false" long
                 style="width:250px" @click="submit">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { insertFruits } from '../../../../api/all';
import Cropper from '../../../../components/Cropper.vue';

export default {
    name: 'commodityAdd',
    data() {
        return {
            // 截图子组件宽高
            width: 200,
            height: 200,
            // 表单
            commodity: {
                name: null,
                type: null,
                price: null,
                introduction: null,
                image: null,
            },
            commodityType: [{
                label: '水果类',
            }, {
                label: '零食类',
            }],
        };
    },
    created() { },
    mounted() { },
    methods: {
        submit() {
            console.log(this.commodity);
            insertFruits(this.commodity).then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            });
        },
        datafromCropper(data) {
            const CropperInfo = data;
            this.commodity.image = CropperInfo;
        },
    },
    computed: {
    },
    watch: {},
    components: {
        Cropper,
    },
};
</script>
