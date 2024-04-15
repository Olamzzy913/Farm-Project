<template>
  <div class="w-[24rem] md:w-[32rem] mt-8">
    <vee-form :validation-schema="schema" @submit="submitForm">
      <div class="mb-8">
        <vee-field
          as="select"
          name="country"
          placeholder="Country"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="userDataApp.usercountry"
        >
          <option value="Nigeria">Nigeria</option>
          <option value="">Country</option>
        </vee-field>
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="country" />
      </div>

      <div class="mb-8">
        <vee-field
          as="select"
          name="state"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="userDataApp.userstate"
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
          <option value="">State</option>
        </vee-field>
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="state" />
      </div>

      <div class="mb-8">
        <vee-field
          name="lga"
          placeholder="Local Government Area"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="userDataApp.userlga"
        >
        </vee-field>
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="lga" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="street_address"
          placeholder="Address"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="userDataApp.street_address"
        />
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="street_address" />
      </div>
      <div class="mb-8">
        <vee-field
          type="text"
          name="nin"
          placeholder="National Identification Number"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="userDataApp.usernin"
        />
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="nin" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="bvn"
          placeholder="BVN"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="userDataApp.userbvn"
        />
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="bvn" />
      </div>

      <div class="mb-8">
        <vee-field
          as="select"
          name="gender"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="userDataApp.usergender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="">Gender</option>
        </vee-field>
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="gender" />
      </div>

      <div class="mb-8">
        <vee-field
          type="text"
          name="crop_type"
          placeholder="Crop Type"
          class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
          v-model="userDataApp.crop_type"
        />
        <ErrorMessage class="text-red-600 text-[0.85rem]" name="crop_type" />
      </div>

      <div class="flex flex-col w-full justify-center items-center">
        <button
          type="submit"
          class="w-full px-6 py-3 text-[1.4rem] font-light bg-primary text-white rounded-lg"
        >
          <div class="loader mx-auto" v-if="registering"></div>
          <span v-else>Submit</span>
        </button>
        <button
          @click="toggleForm()"
          class="w-full px-6 py-3 mt-4 text-[1.4rem] hover:bg-primary hover:text-white text-primary font-normal border border-primary rounded-lg"
        >
          Back
        </button>
        <router-link to="/login" class="block mb-10 text-[1.2rem]"
          >Don't have an account? <span class="text-light">sign in</span></router-link
        >
      </div>
    </vee-form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useRegisterUser from '@/include/registerUser'
// import { activeForm } from '@/stores/form.js'

export default {
  name: 'SecondRegForm',
  data() {
    return {
      schema: {
        nin: 'required|min:11|max:11|numeric',
        bvn: 'required|min:11|max:11|numeric',
        state: 'required',
        crop_type: 'required|min:3|max:11',
        street_address: 'required|min:3|max:100',
        lga: 'required',
        gender: 'required',
        country: 'required'
      }
    }
  },
  props: {
    firstData: Object
  },
  setup(props) {
    const { registering, error, success, registerUser } = useRegisterUser()
    const userDataApp = ref({
      usernin: '',
      userbvn: '',
      userstate: '',
      street_address: '',
      crop_type: '',
      userlga: '',
      usercountry: '',
      usergender: ''
    })

    // function toggleForm() {
    //   activeForm.value = !activeForm.value
    // }

    const submitForm = () => {
      console.log('First Data:', props.firstData)
      console.log('Second Data:', userDataApp.value)
      const data = {
        account: props.firstData,
        nin: userDataApp.value.usernin,
        bvn: userDataApp.value.userbvn,
        crop_type: userDataApp.value.crop_type,
        gender: userDataApp.value.usergender,
        street_address: userDataApp.value.street_address,
        state: userDataApp.value.userstate,
        lga: userDataApp.value.userlga,
        country: userDataApp.value.usercountry
      }
      console.log(data)
      registerUser(data)
    }

    return {
      // toggleForm,
      registerUser,
      registering,
      error,
      success,
      userDataApp,
      submitForm
    }
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
