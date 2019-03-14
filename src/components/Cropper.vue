<style lang="scss" scoped>
  @import '../styles/public.scss';
  .info-left {
    width: fit-content;
  }
  .wrapper {
    width: 400px;
    height: 300px;
  }
  .test-button {
    @include displayCenter($align-items: flex-start);
    flex-direction: column;
  }
  .out-file {
    width: 250px; // float: left;
    height: 35px;
    cursor: pointer;
    text-align: center;
    margin: 10px 10px 10px 0;
    color: white;
    line-height: 33px;
    border: 1px solid rgb(46, 177, 89);
    border-radius: 5px;
    background: rgb(46, 177, 89);
    transition: all 0.3s;
  }
  .out-file:hover {
    border: 1px rgb(31, 183, 230) solid;
    background: rgb(61, 196, 106);
  }
  #confirm {
    width: 100px;
    background: rgb(255, 153, 0);
    border: 1px rgb(255, 176, 57) solid;
  }
</style>

<template>
  <div class="info-left">
    <div class="test-button">
      <label class="out-file" for="file1">选择图片</label>
      <input type="file" id="file1" style="position:absolute; clip:rect(0 0 0 0);"
      accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
      <div class="wrapper" v-if="Croppershow">
        <VueCropper ref="cropper" :img="example3.img" :autoCrop="example3.autoCrop"
        :autoCropWidth="example3.autoCropWidth" :autoCropHeight="example3.autoCropHeight"
        :fixedBox="example3.fixedBox" :canMove="example3.canMove"></VueCropper>
      </div>
      <div v-if="Croppershow" class="out-file" id="confirm" @click="confirmImg">确定截取
      </div>
    </div>
  </div>
</template>

<script>
import {
    VueCropper,
} from 'vue-cropper';

export default {
    name: 'Cropper',
    props: {
        width: Number,
        height: Number,
        imgtype: String,
    },
    components: {
        VueCropper,
    },
    data() {
        return {
            Croppershow: false,
            // previews: {},
            example3: {
                img: '',
                autoCrop: true,
                autoCropWidth: this.width,
                autoCropHeight: this.height,
                fixedBox: true,
                centerBox: true,
            },
        };
    },
    methods: {
        // 截图完成
        confirmImg() {
        // 获取截图信息Blob  or Data
            if (this.imgtype === 'Blob') {
                this.$refs.cropper.getCropBlob((data) => {
                    this.$emit('datafromCropper', data);
                    // 全局提示
                    this.$message.success('已截取');
                });
            } else if (this.imgtype === 'Base') {
                this.$refs.cropper.getCropData((data) => {
                    this.$emit('datafromCropper', data);
                    // 全局提示
                    this.$message.success('已截取');
                });
            }
        },
        // 上传图片
        uploadImg(e) {
        // this.example3.img    设置默认图片
            const file = e.target.files[0]; // 获取input file中的第一个文件属性
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                console.log('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种');
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                let data;
                if (typeof e.target.result === 'object') {
                    // 把Array Buffer转化为blob 如果是base64不需要
                    data = window.URL.createObjectURL(new Blob([e.target.result]));
                } else {
                    data = e.target.result;
                }
                this.example3.img = data;
            };
            // 显示截图层
            this.Croppershow = true;
            // 转化为base64
            // reader.readAsDataURL(file)
            // 转化为blob
            reader.readAsArrayBuffer(file);
            return false;
        },
    },
};
</script>
