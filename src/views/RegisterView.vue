<template>
  <main class="main">
    <section class="section py-[4rem] md:py-[12rem]">
      <!-- Create account -->
      <div class="flex-col max-w-full w-full items-center justify-center flex">
        <h1 class="text-[2rem] md:text-6xl font-normal text-center">Create Account</h1>
        <div class="w-[32rem] md:w-[45rem] mt-10">
          <!-- Registration form -->
          <vee-form :validation-schema="schema" @submit="handleSubmit">
            <!-- Registration Form Field -->
            <div class="mb-8">
              <label for="firstName" class="text-[1.6rem]">First Name</label>
              <vee-field
                type="text"
                name="firstName"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.firstName"
              />
              <ErrorMessage class="text-red-600" name="firstName" />
            </div>

            <div class="mb-8">
              <label for="lastName" class="text-[1.6rem]">Last Name</label>
              <vee-field
                type="text"
                name="lastName"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.lastName"
              />
              <ErrorMessage class="text-red-600" name="lastName" />
            </div>

            <div class="mb-8">
              <label for="email" class="text-[1.6rem]">Email</label>
              <vee-field
                type="email"
                name="email"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.email"
              />
              <ErrorMessage class="text-red-600" name="email" />
            </div>

            <div class="mb-8">
              <label for="phone" class="text-[1.6rem]">Phone Number</label>
              <vee-field
                type="text"
                name="phone"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.phone"
              />
              <ErrorMessage class="text-red-600" name="phone" />
            </div>

            <div class="mb-8">
              <label for="gender" class="text-[1.6rem]">Gender</label>
              <vee-field
                as="select"
                name="gender"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.usergender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value=""></option>
              </vee-field>
              <ErrorMessage class="text-red-600" name="gender" />
            </div>

            <div class="mb-8">
              <label for="crop_type" class="text-[1.6rem]">Crop Type</label>
              <vee-field
                type="text"
                name="crop_type"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.crop_type"
              />
              <ErrorMessage class="text-red-600" name="crop_type" />
            </div>

            <div class="mb-8">
              <label for="nin" class="text-[1.6rem]">National Identification Number - NIN</label>
              <vee-field
                type="text"
                name="nin"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.usernin"
              />
              <ErrorMessage class="text-red-600" name="nin" />
            </div>

            <div class="mb-8">
              <label for="street_address" class="text-[1.6rem]">Address</label>
              <vee-field
                type="text"
                name="street_address"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.street_address"
              />
              <ErrorMessage class="text-red-600" name="street_address" />
            </div>

            <div class="mb-8">
              <label for="lga" class="text-[1.6rem]">Local Government Area</label>
              <vee-field
                as="select"
                name="lga"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.userlga"
              >
                <option value="Abadam">Abadam</option>
                <option value="Abaji">Abaji</option>
                <option value=""></option>
              </vee-field>
              <ErrorMessage class="text-red-600" name="lga" />
            </div>

            <div class="mb-8">
              <label for="state" class="text-[1.6rem]">State</label>
              <vee-field
                as="select"
                name="state"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.userstate"
              >
                <option value="Abia ">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
                <option value=""></option>
              </vee-field>
              <ErrorMessage class="text-red-600" name="state" />
            </div>

            <div class="mb-8">
              <label for="Country" class="text-[1.6rem]">Country</label>
              <vee-field
                as="select"
                name="country"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                v-model="userData.usercountry"
              >
                <option value="Nigeria">Nigeria</option>
              </vee-field>
              <ErrorMessage class="text-red-600" name="country" />
            </div>

            <div class="mb-8">
              <label for="password" class="text-[1.6rem]">Password</label>
              <vee-field name="password" :bails="false" v-slot="{ field, errors }">
                <input
                  class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                  v-model="userData.password"
                  type="password"
                  v-bind="field"
                />
                <div class="text-red-600" v-for="error in errors" :key="error">
                  {{ error }}
                </div>
              </vee-field>
            </div>
            <!-- Registration Form Submit Button -->
            <div class="flex flex-col w-full justify-center items-center">
              <button
                type="submit"
                class="w-full cursor-pointer px-[2.5rem] py-[1.6rem] text-center text-white text-[2rem] bg-primary rounded-2xl"
              >
                <div class="loader mx-auto" v-if="registering"></div>
                <span v-else>Submit</span>
              </button>
              <router-link to="/login" class="block mb-10 text-[1.6rem]"
                >Already have an account? <span class="text-light">Login Here</span></router-link
              >
            </div>
          </vee-form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import useRegisterUser from '@/include/registerUser'

export default {
  name: 'RegisterView',
  data() {
    return {
      schema: {
        firstName: 'required|min:3|max:100|alpha_spaces',
        lastName: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        phone: 'required|min:11|max:11|numeric',
        nin: 'required|min:11|max:11|numeric',
        state: 'required',
        crop_type: 'required|min:3|max:11',
        street_address: 'required|min:3|max:100',
        lga: 'required',
        gender: 'required|min:4|max:6',
        country: 'required',
        password: 'required|min:9|max:100|excluded:password'
      }
    }
  },
  setup() {
    const { registering, error, success, registerUser } = useRegisterUser()

    const userData = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      usernin: '',
      userstate: '',
      street_address: '',
      crop_type: '',
      lga: '',
      usercountry: '',
      usergender: '',
      userlanguage: '',
      password: ''
    })

    function handleSubmit() {
      const data = {
        account: {
          first_name: userData.value.firstName,
          last_name: userData.value.lastName,
          email: userData.value.email,
          phone: userData.value.phone,
          password: userData.value.password
        },
        nin: userData.value.usernin,
        bvn: '12933390303',
        crop_type: userData.value.crop_type,
        gender: userData.value.usergender,
        street_address: userData.value.street_address,
        state: userData.value.userstate,
        lga: userData.value.userlga,
        country: userData.value.usercountry
      }
      console.log(data)
      registerUser(data)
    }

    return { userData, registering, error, success, handleSubmit }
  }
}
</script>

<style scoped>
.loader {
  width: 32px;
  padding: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: white;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
