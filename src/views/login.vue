<template>
  <a-form
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
      >
        Log in 
      </a-button>
    </a-form-item>
  </a-form>
  {{ Token }}
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { computed, defineComponent, reactive, UnwrapRef } from 'vue';
import { loginApi } from '@A/login.ts'
import { useStore } from 'vuex'
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  setup() {
    const store = useStore()
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const handleFinish = async (values: FormState) => {
      const data = {
        userName: formState.user,
        password: formState.password
      }
      const logins = await store.dispatch('user/login', data)
    };
    
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };

    const Token = computed(() => {
      return store.getters.token
    })
    return {
      formState,
      handleFinish,
      handleFinishFailed,
      Token
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>