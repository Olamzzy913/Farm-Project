<!-- <template>
  <div class="w-[32rem] md:w-[45rem] mt-8">
    <vee-form :validation-schema="schema" @submit="submitForm">
      <div class="mb-8 relative">
        <div>
          <label for="profile-pic-input">
            <img
              :src="profilePicture || defaultPicture"
              alt="Profile Picture"
              class="w-[12rem] h-[12rem] md:w-[16rem] md:h-[16rem] mx-auto cursor-pointer rounded-full mb-10"
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
          class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
          v-model="userData.firstName"
        />
        <ErrorMessage class="text-red-600" name="firstName" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="lastName"
          placeholder="Last Name"
          class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
          v-model="userData.lastName"
        />
        <ErrorMessage class="text-red-600" name="lastName" />
      </div>

      <div class="mb-8">
        <vee-field
          type="email"
          name="email"
          placeholder="Email"
          class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
          v-model="userData.email"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="phone"
          placeholder="Phone"
          class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
          v-model="userData.phone"
        />
        <ErrorMessage class="text-red-600" name="phone" />
      </div>

      <div class="mb-8">
        <vee-field name="password" :bails="false" v-slot="{ field, errors }">
          <div class="relative">
            <input
              v-if="showPassword"
              type="text"
              placeholder="Password"
              class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
              v-model="userData.password"
              v-bind="field"
            />
            <input
              v-else
              type="password"
              placeholder="Password"
              class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
              v-model="userData.password"
              v-bind="field"
            />
            <span class="button absolute right-8 top-[2.2rem]" @click="toggleShow">
              <span class="icon is-small is-right">
                <i
                  class="fas text-[1.5rem]"
                  :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                ></i>
              </span>
            </span>
          </div>
          <div class="text-red-600" v-for="error in errors" :key="error">
            {{ error }}
          </div>
        </vee-field>
      </div>

      <div class="flex flex-col w-full justify-center items-center">
        <button
          type="submit"
          class="w-full px-12 py-6 text-[1.5rem] font-normal bg-primary text-white rounded-lg"
        >
          Proceed
        </button>
        <router-link to="/register" class="block mb-10 text-[1.6rem]"
          >Don't have an account? <span class="text-light">sign in</span></router-link
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
    const errorMessage = ref('')
    const isLoading = ref(false)
    const defaultPicture = 'assets/upload_profile.jpg'
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

    const userData = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: ''
    })

    // Function to handle image upload
    const handleImageUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        // Convert the image file to a URL
        const imageUrl = URL.createObjectURL(file)
        profilePicture.value = imageUrl
        console.log(profilePicture.value)
        // Here you can add logic to send the image to your backend for storage
        // and update the user's profile picture
      }
    }
    const submitForm = () => {
      const acc = {
        account: {
          first_name: userData.value.firstName,
          last_name: userData.value.lastName,
          email: userData.value.email,
          phone: userData.value.phone,
          password: userData.value.password,
          profile_img: profilePicture?.value || defaultPicture
        }
      }
      console.log(acc)
      emit('first-form-submit', acc.value)
      toggleForm()
    }

    return {
      submitForm,
      handleImageUpload,
      defaultPicture,
      profilePicture,
      userData,
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
</script> -->

<template>
  <div class="w-[32rem] md:w-[45rem] mt-8">
    <vee-form :validation-schema="schema" @submit="submitForm">
      <div class="mb-8 relative">
        <div>
          <label for="profile-pic-input">
            <img
              :src="profilePicture || defaultPicture"
              alt="Profile Picture"
              class="w-[12rem] h-[12rem] md:w-[16rem] md:h-[16rem] mx-auto cursor-pointer rounded-full mb-10"
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
          class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
          v-model="firstData.firstName"
        />
        <ErrorMessage class="text-red-600" name="firstName" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="lastName"
          placeholder="Last Name"
          class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
          v-model="firstData.lastName"
        />
        <ErrorMessage class="text-red-600" name="lastName" />
      </div>

      <div class="mb-8">
        <vee-field
          type="email"
          name="email"
          placeholder="Email"
          class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
          v-model="firstData.email"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="phone"
          placeholder="Phone"
          class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
          v-model="firstData.phone"
        />
        <ErrorMessage class="text-red-600" name="phone" />
      </div>

      <div class="mb-8">
        <vee-field name="password" :bails="false" v-slot="{ field, errors }">
          <div class="relative">
            <input
              v-if="showPassword"
              type="text"
              placeholder="Password"
              class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
              v-model="firstData.password"
              v-bind="field"
            />
            <input
              v-else
              type="password"
              placeholder="Password"
              class="w-full outline-none border text-[1.8rem] font-light border-b p-4 rounded-[1rem]"
              v-model="firstData.password"
              v-bind="field"
            />
            <span class="button absolute right-8 top-[2.2rem]" @click="toggleShow">
              <span class="icon is-small is-right">
                <i
                  class="fas text-[1.5rem]"
                  :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                ></i>
              </span>
            </span>
          </div>
          <div class="text-red-600" v-for="error in errors" :key="error">
            {{ error }}
          </div>
        </vee-field>
      </div>

      <div class="flex flex-col w-full justify-center items-center">
        <button
          type="submit"
          class="w-full px-12 py-6 text-[1.5rem] font-normal bg-primary text-white rounded-lg"
        >
          Proceed
        </button>
        <router-link to="/register" class="block mb-10 text-[1.6rem]"
          >Don't have an account? <span class="text-light">sign in</span></router-link
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
    let defaultPicture = ref('assets/upload_profile.jpg')
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
      if (defaultPicture.value) {
        defaultPicture.value = 'assets/must_update.jpg'
      }
      if (profilePicture.value) {
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
