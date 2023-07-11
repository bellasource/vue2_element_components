<template>
  <div>
    <div class="btn-wrap">
      <el-button type="primary" @click="handleAdd">Add</el-button>
      <el-button @click="handleValidate">Valid</el-button>
    </div>
    <el-form style="width: 600px" ref="formRef" :model="form" size="mini">
      <el-table :data="form.tableData" border size="mini" valign="top">
        <el-table-column prop="id" label="Id"></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column label="计划收入" style="padding: 0">
          <template #default="scope">
            <el-form-item
              :prop="'tableData.' + scope.$index + '.income'"
              :rules="formRules.income"
            >
              <el-input v-model="scope.row.income"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column
          label="计划支出"
          style="padding: 0"
          class="jihuazhichu"
        >
          <template #default="scope">
            <el-form-item
              :prop="'tableData.' + scope.$index + '.expenditure'"
              :rules="formRules.expenditure"
            >
              <el-input v-model="scope.row.expenditure"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100px">
          <template v-slot="{ $index }">
            <span @click="handleDeleteRow($index)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          tableData: [],
        },
        formRules: {
          income: [
            {
              required: true,
              message: '请填写预计收入',
              trigger: 'blur',
            },
          ],
          expenditure: [
            {
              required: true,
              message: '请填写预计支出',
              trigger: 'blur',
            },
          ],
        },
      }
    },
    mounted() {
      this.form.tableData = [
        {
          id: 1,
          name: '1',
          income: '',
          expenditure: '',
        },
        {
          id: 2,
          name: '2',
          income: '',
          expenditure: '',
        },
      ]
    },
    methods: {
      handleAdd() {
        console.log('handleAdd')
        this.form.tableData.push({
          id: Date.now(),
          name: '名字',
          income: '',
          expenditure: '',
        })
      },
      handleDeleteRow(index) {
        this.form.tableData.splice(index, 1)
      },
      handleValidate() {
        console.log('handleValidate')
        this.$refs['formRef'].validate((valid) => {
          if (valid) {
            console.log('校验通过')
          } else {
            console.log('校验不通过')
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .btn-wrap {
    text-align: right;
    // margin-bottom: 20px;
  }
  :deep(.el-form-item) {
    margin-bottom: 0 !important;
  }
  :deep(.el-form-item__error) {
    position: static;
  }
  // :deep(.el-table__cell) {
  //   padding: 0!important;
  // }
</style>
