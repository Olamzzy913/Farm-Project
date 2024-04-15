<template>
  <div class="w-[24rem] md:w-[32rem] mt-8">
    <vee-form :validation-schema="schema" @submit="submitForm">
      <div class="mb-8 relative">
        <div>
          <label for="profile-pic-input">
            <img
              :src="profilePicture || defaultPicture"
              alt="Profile Picture"
              class="w-[9rem] h-[9rem] md:w-[12rem] md:h-[12rem] mx-auto cursor-pointer rounded-full mb-10"
            />
          </label>

          <input
            id="profile-pic-input"
            type="file"
            style="display: none"
            @change="handleImageUpload"
          />
        </div>
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="firstName"
          placeholder="First Name"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="firstData.firstName"
        />
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="firstName" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="lastName"
          placeholder="Last Name"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="firstData.lastName"
        />
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="lastName" />
      </div>

      <div class="mb-8">
        <vee-field
          type="email"
          name="email"
          placeholder="Email"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="firstData.email"
        />
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="email" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="phone"
          placeholder="Phone"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="firstData.phone"
        />
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="phone" />
      </div>

      <div class="mb-8">
        <vee-field name="password" :bails="false" v-slot="{ field, errors }">
          <div class="relative">
            <input
              v-if="showPassword"
              type="text"
              placeholder="Password"
              class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
              v-model="firstData.password"
              v-bind="field"
            />
            <input
              v-else
              type="password"
              placeholder="Password"
              class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
              v-model="firstData.password"
              v-bind="field"
            />
            <span class="button absolute right-[1.8rem] top-[1.3rem]" @click="toggleShow">
              <span class="icon is-small is-right">
                <i
                  class="fas text-[1.2rem]"
                  :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                ></i>
              </span>
            </span>
          </div>
          <div class="text-red-600 text-[0.85rem]" v-for="error in errors" :key="error">
            {{ error }}
          </div>
        </vee-field>
      </div>

      <div class="flex flex-col w-full justify-center items-center">
        <button
          type="submit"
          class="w-full px-6 py-3 text-[1.4rem] font-light bg-primary text-white rounded-lg"
        >
          Proceed
        </button>
        <router-link to="/login" class="block mb-10 text-[1.2rem]"
          >Don't have an account? <span class="text-light">Sign in</span></router-link
        >
      </div>
    </vee-form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { activeForm } from '@/stores/form.js'

export default {
  name: 'FirstRegForm',
  data() {
    return {
      schema: {
        firstName: 'required|min:3|max:100|alpha_spaces',
        lastName: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        phone: 'required|min:11|max:11|numeric',
        password: 'required|min:9|max:100|excluded:password'
      }
    }
  },
  setup(props, { emit }) {
    const profilePicture = ref(null)
    const filePro = ref(null)
    const errorMessage = ref('')
    const isLoading = ref(false)
    let defaultPicture = ref('./assets/upload_profile.jpg')
    const showPassword = ref(false)
    const password = ref(null)

    function toggleForm() {
      activeForm.value = !activeForm.value
    }

    function buttonLabel() {
      return this.showPassword ? 'Hide' : 'Show'
    }

    function toggleShow() {
      this.showPassword = !this.showPassword
    }

    const firstData = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: ''
    })

    // Function to handle image upload
    const handleImageUpload = (event) => {
      const file = event.target.files[0]
      filePro.value = file
      if (file) {
        // Convert the image file to a URL
        const imageUrl = URL.createObjectURL(file)
        profilePicture.value = imageUrl

        console.log(file)
      }
    }

    const submitForm = () => {
      const acc = {
        first_name: firstData.value.firstName, //FCI|Ola|6142350  farmci2024
        last_name: firstData.value.lastName,
        email: firstData.value.email,
        phone: firstData.value.phone,
        password: firstData.value.password
      }
      firstData.value = acc
      console.log(acc)
      emit('first-form-submit', firstData.value)
      toggleForm()
    }

    return {
      firstData,
      filePro,
      submitForm,
      handleImageUpload,
      defaultPicture,
      profilePicture,
      isLoading,
      errorMessage,
      buttonLabel,
      password,
      toggleForm,
      showPassword,
      toggleShow
    }
  }
}
</script>
