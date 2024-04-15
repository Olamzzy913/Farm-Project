<template>
  <main class="main">
    <section class="section py-[4rem] md:py-[12rem]">
      <div class="flex-col max-w-full w-full items-center justify-center flex">
        <h1 class="text-[1.7rem] md:text-[3rem] font-medium text-center">Create Account</h1>
        <FirstForm v-if="isActive" @first-form-submit="handleFirstFormSubmit" />
        <SecondForm v-else :first-data="firstFormData" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { activeForm } from '@/stores/form.js'
import FirstForm from '@/components/FirstRegForm.vue'
import SecondForm from '@/components/SecondRegForm.vue'

onMounted(() => {
  document.title = 'FarmCI | Create Account'
})

const firstFormData = ref('')

const handleFirstFormSubmit = (data) => {
  firstFormData.value = data
}

const isActive = activeForm
isActive, firstFormData, handleFirstFormSubmit
</script>
