<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="err">{{err}}</p>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  data () {
    return {
      err: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const des = { [this.prop]: rules }
      const validator = new Schema(des)
      return validator.validate({ [this.prop]: value }, error => {
        if (error) {
          this.err = error[0].message
        } else {
          this.err = ''
        }
      })
    }
  }
}
</script>

<style>

</style>
