<!--
 * @Author: luobei luobei@seewintech.com
 * @Date: 2023-07-10 14:15:10
 * @LastEditors: luobei luobei@seewintech.com
 * @LastEditTime: 2023-07-17 10:38:28
 * @FilePath: \vue2sass\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div style="width: 500px; display:flex;flex-wrap: wrap;">
      <div style="width: 200px; border: 1px solid #ccc"></div>
    </div>
    <el-button @click="getTxtFile">获取txt文件</el-button>
    <el-button @click="getDocFile">获取doc文件</el-button>
    <hr />
    <div v-if="textUrl" class="imgPreview">
      {{ textUrl }}
    </div>
  </div>
</template>

<script>
  import { getFileBlob } from '@/api/index'
  export default {
    data() {
      return {
        content: '',
        textUrl: ''
      }
    },
    mounted() {
      // this.initUpload()
      
    },
    methods: {
      getTxtFile() {
        getFileBlob('txt').then(res => {

          // console.log(res)
          // this.blobChangeXlsx(res.data, '测试的文件')


          let _this = this
          let blob = new Blob([res.data])
          var reader = new window.FileReader();
          reader.readAsText(blob,'utf-8');
          reader.onloadend = function (e) {
            _this.textUrl = e.target.result
            _this.photoUrl= '';
            _this.videoUrl= '';
            console.log(_this.textUrl)
          }
        })
      },
      getDocFile(){
        getFileBlob('doc').then(res => {
          console.log(res)
          this.blobChangeXlsx(res.data, '测试的文件', 'text/plain', 'doc')
          let _this = this
          let blob = res.data
          var reader = new window.FileReader();
          reader.readAsText(blob,'utf-8');
          reader.onloadend = function (e) {
            _this.textUrl = e.target.result
            _this.photoUrl= '';
            _this.videoUrl= '';
            console.log(_this.textUrl)
          }
        })
      },
      blobChangeXlsx(data, fileName, type = 'text/plain', suffix = 'txt') {
        // type 为需要导出的文件类型，此处为xls表格类型
        const blob = new Blob(data, { type })
        // 兼容不同浏览器的URL对象
        console.log(type, 'type')
        const url = window.URL || window.webkitURL || window.moxURL
        // 创建下载链接
        const downloadHref = url.createObjectURL(blob)
        // 创建a标签并为其添加属性
        let downloadLink = document.createElement('a')
        downloadLink.href = downloadHref
        downloadLink.download = `${fileName}.${suffix}`
        // 触发点击事件执行下载
        downloadLink.click()
      },
      initUpload() {
        const fileInput = document.getElementById("fileInput");
        fileInput.addEventListener("change", () => {
          let file = fileInput.files[0]; // 获取用户选择的第一个文件
          let reader = new FileReader(); // 创建 FileReader 对象
          reader.onload = this.showFile; // 添加 onload 事件监听器
          reader.readAsText(file, "utf-8"); // 以 utf-8 编码格式读取文件内容
        });
      },
      showFile(e) {
        this.content = e.target.result; // 获取 FileReader 对象的 result 属性
      }
    },
  }
</script>
<style lang="scss" scoped>
  .content {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    margin: 20px auto;
  }
</style>
