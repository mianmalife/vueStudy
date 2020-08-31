<template>
  <div class="hello">
    <KForm :model="userInfo" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="userInfo.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="userInfo.password" placeholder="请输入密码"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="submit">提交</button>
      </KFormItem>
    </KForm>
  </div>
</template>
<script>
import KInput from './KInput.vue'
import KFormItem from './KFormItem.vue'
import KForm from './KForm.vue'
// import Notice from './Notice.vue'
// import KDialog from './k-dialog.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  components: {
    KInput,
    KFormItem,
    KForm
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate((valid) => {
        // const notice = this.$create(Notice, {
        //   title: '9999',
        //   message: valid ? '去登录' : '失败了',
        //   duration: 3000
        // })
        // notice.show()
        const dialog = this.$dialog({
          title: '提示',
          message: valid? '去登录': '用户名或密码错误',
          duration: 2000
        })
        dialog.show()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
