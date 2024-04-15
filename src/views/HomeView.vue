<template>
  <main class="main">
    <section
      class="section--1 hidden smi:block py-[40px] md:py-[120px] bg-gradient-to-tr from-[#5D6037] via-secondary to-secondary"
      id="section"
    >
      <div class="section">
        <div class="section_container gap-[1.8rem] md:gap-[8rem]">
          <div class="section_content">
            <h2 class="mb-10 text-white text-[1.7rem] font-light leading-[2.3rem]">
              We are Farm Central Intelligence. We help in increasing farmers productivity by
              providing valueable and helpful input resources
            </h2>

            <router-link to="/register" class="nav_link--btn inline-block"
              >Create account</router-link
            >
            <router-link to="/login" class="outline--btn ml-4">Login</router-link>
          </div>
          <div class="section_image">
            <img
              src="/assets/about_section.png"
              alt=""
              class="lg:h-[45rem] md:h-[35rem] h-[25rem]"
            />
          </div>
        </div>
      </div>
    </section>

    <div id="section2" class="section--1 block smi:hidden">
      <div class="sect__image p-20">
        <h2 class="text-white mt-[10rem] leading-[2rem] text-[1.7rem] text-center font-light">
          We are Farm Central Intelligence. We help in increasing farmers productivity by providing
          valueable and helpful input resources
        </h2>
      </div>
      <div
        class="flex flex-col px-[2rem] md:px-32 py-8 w-full bg-gradient-to-tr from-[#938244] to-secondary"
      >
        <router-link to="/register" class="nav_link--btn inline-block text-center py-[1rem] mb-6"
          >Create account</router-link
        >
        <router-link to="/login" class="outline--btn text-center py-[1rem]">Login</router-link>
      </div>
    </div>

    <section class="py-[40px] md:py-[120px] px-[2rem] section_bg" id="section2">
      <div class="section mt-[12rem]">
        <h1 class="text-white text-[1.7rem] smi:text-[2rem] title pb-2 font-bold">Our Aims</h1>
        <p class="text-white text-[1.5rem] smi:text-[1.7rem] mt-6 font-light">
          We aim to not just educate farmers on agricultural practices but to also provide them with
          necessary tools and resources that will help them take action. Furthermore, we are using
          smart tracking data powered by our patenated IVR solutions to track farmers and
          communicate to them in the effective application and utilisation of these inputs to yield
          better results. <br /><br />
          Through the use of smart tracking data, we are able to gather valueable insights into the
          farming process. By taking key metrics such as soil moisture levels, temperature and crop
          growth patterns. We can provide farmers with personalized recommendations for optimal
          input application.
        </p>
      </div>
    </section>

    <section
      ref="heroSection"
      class="section--2 py-[40px] relative md:py-[120px] overflow-hidden bg-gradient-to-br from-outlinePri via-secondary to-secondary"
      id="section1"
    >
      <div class="section">
        <div class="flex flex-col">
          <div class="section_content">
            <h2 class="text-white text-[3rem] smi:text-[4rem] mb-6 font-medium">Our Service</h2>
          </div>

          <div class="section_service">
            <div class="service_content--1 h-[54.4rem] w-[40.4rem] hidden md:block">
              <div class="overlay">
                <h1 class="text-[2rem] text-white font-medium">Farm Bank</h1>
                <p class="text-[1.4rem] text-white font-light">
                  Farm Bank is the outreach part of FarmCI that focused on engaging and educating
                  farmer's on best agricultural practices and application through partnerships with
                  different stakeholders like cooperative, government etc, through this we are able
                  to aggregate farmers data to build an updated and tailor database accessible to
                  our third party partners.
                </p>
              </div>
            </div>
            <div class="service_content--2 h-[54.4rem] w-[40.4rem] hidden md:block">
              <div class="overlay">
                <h1 class="text-[2rem] text-white font-medium">Pay CI</h1>
                <p class="text-[1.4rem] text-white font-light">
                  PayCI is a resulting parternship between FarmCI and MoMo to provide voice enabled
                  mobile wallet to farmers that helps them undertake financial transactions or
                  enabled mobile wallet to farmers that helps them undertake financial transactions
                  or savings / repaying their loan, it's our intiatives to help bank the unbanked
                  rural farmers through a very simple IVR banking wallet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:hidden">
          <div class="service_content--1 h-[44.4rem] w-[30.4rem]" v-show="isSection1">
            <div class="overlay">
              <h1 class="text-[2rem] text-white font-medium">Farm Bank</h1>
              <p class="text-[1.7rem] text-white font-light">
                Farm Bank is the outreach part of FarmCI that focused on engaging and educating
                farmer's on best agricultural practices and application through partnerships with
                different stakeholders like cooperative, government etc, through this we are able to
                aggregate farmers data to build an updated and tailor database accessible to our
                third party partners.
              </p>
            </div>
          </div>

          <div class="service_content--2 h-[44.4rem] w-[30.4rem]" v-show="!isSection1">
            <div class="overlay">
              <h1 class="text-[2rem] text-white font-medium">Pay CI</h1>
              <p class="text-[1.7rem] text-white font-light">
                PayCI is a resulting parternship between FarmCI and MoMo to provide voice enabled
                mobile wallet to farmers that helps them undertake financial transactions or enabled
                mobile wallet to farmers that helps them undertake financial transactions or savings
                / repaying their loan, it's our intiatives to help bank the unbanked rural farmers
                through a very simple IVR banking wallet.
              </p>
            </div>
          </div>

          <div class="mt-[2rem]">
            <i
              class="bx bxs-left-arrow-circle text-[#a5b9abea] text-[6rem] cursor-pointer"
              @click="toggleSection1"
            ></i>
            <i
              class="bx bxs-right-arrow-circle text-[#a5b9abea] text-[6rem] cursor-pointer"
              @click="toggleSection2"
            ></i>
          </div>
        </div>

        <div class="py-[40px] flex flex-col justify-center w-full">
          <h1 class="mb-8 text-center text-[3rem] smi:text-[4rem] text-white font-medium">
            Our Partners
          </h1>
          <div class="flex flex-wrap relative">
            <div class="slider">
              <div class="slide-track">
                <div class="bg-white h-[5rem] px-[4.5rem] pt-3">
                  <img src="/assets/afex_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem] pt-3">
                  <img src="/assets/afrimash_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem]">
                  <img src="/assets/iita_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem]">
                  <img src="/assets/comx_partner.png" class="w-[10rem] h-[5rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem] pt-3">
                  <img src="/assets/afex_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem] pt-3">
                  <img src="/assets/afrimash_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem]">
                  <img src="/assets/iita_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem]">
                  <img src="/assets/comx_partner.png" class="w-[10rem] h-[5rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem] pt-3">
                  <img src="/assets/afex_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem] pt-3">
                  <img src="/assets/afrimash_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem]">
                  <img src="/assets/iita_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem]">
                  <img src="/assets/comx_partner.png" class="w-[10rem] h-[5rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem] pt-3">
                  <img src="/assets/afex_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem] pt-3">
                  <img src="/assets/afrimash_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem]">
                  <img src="/assets/iita_partner.png" class="w-[10rem]" alt="" />
                </div>
                <div class="bg-white h-[5rem] px-[4.5rem]">
                  <img src="/assets/comx_partner.png" class="w-[10rem] h-[5rem]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section" class="bg-[#6D8C54]">
      <div class="blcok lg:grid grid-cols-2 justify-center items-center relative">
        <img
          src="/assets/why_abstract.png"
          alt=""
          class="hidden lg:block absolute bottom-0 right-0"
        />
        <img src="/assets/why_style.png" alt="" class="hidden lg:block absolute top-0 right-0" />

        <div class="service_content--image hidden lg:block relative">
          <img src="/assets/why_logo.png" alt="" class="hidden lg:block absolute top-8 -right-16" />
        </div>
        <div class="md:pl-[4rem] lg:pl-[4rem] py-[4rem] lg:py-[inherit] px-8 lg:px-[inherit]">
          <h1 class="text-white text-[3rem] md:text-[4rem] font-medium">Why Choose Us</h1>
          <div class="">
            <div class="flex py-6">
              <div
                class="inline-block items-center mb-4 rounded-full py-[15px] px-[17px] md:p-[15px] max-w-[5.2rem] w-[5.2rem] h-[4.9rem] md:h-[5.2rem] bg-secondary"
              >
                <i class="fa-solid fa-headset text-2xl text-center w-full h-full text-primary"></i>
              </div>
              <p class="text-white text-[1.2rem] md:text-[1.4rem] ml-10 font-light">
                IVR Support<br />
                We provide an IVR support system which our clients can dial up
                <br />
                and receive helpful farm inputs instructions in their desired language.
              </p>
            </div>
            <div class="flex py-6">
              <div
                class="inline-block items-center mb-4 rounded-full py-[15px] px-[17px] md:p-[15px] max-w-[5.2rem] w-[5.2rem] h-[4.8rem] md:h-[5.2rem] bg-secondary"
              >
                <i
                  class="fa-solid fa-phone-volume text-[1.5rem] text-center w-full h-full text-primary rotate-30"
                ></i>
              </div>
              <p class="text-white text-[1.2rem] md:text-[1.4rem] ml-10 font-light">
                Farmers Insurance<br />
                Provision of farmers insurance in form of loan to support our farmers<br />
                for input acqusition
              </p>
            </div>
            <div class="flex py-6">
              <div
                class="inline-block items-center mb-4 rounded-full p-[15px] max-w-[5.2rem] w-[5.2rem] h-[5rem] md:h-[5.2rem] bg-secondary"
              >
                <i class="fa-solid fa-tractor text-2xl text-center w-full h-full text-primary"></i>
              </div>
              <p class="text-white text-[1.2rem] md:text-[1.4rem] ml-10 font-light">
                Connect Farmers<br />
                We serve as an intermediary to connect our together our clients and <br />
                local farmers around them.
              </p>
            </div>
            <div class="flex py-6">
              <div
                class="inline-block items-center mb-4 rounded-full p-[15px] max-w-[5.2rem] w-[5.2rem] h-[4.9rem] md:h-[5.2rem] bg-secondary"
              >
                <i
                  class="fa-sharp fa-solid fa-timeline text-2xl text-center w-full h-full text-primary"
                ></i>
              </div>
              <p class="text-white text-[1.2rem] md:text-[1.4rem] ml-10 font-light">
                24/7 hours support<br />
                Our Customer service is availablefor full support 24 hours all day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-secondary py-[40px] md:py-[120px]" id="section">
      <div class="section">
        <div class="section__5 block lg:grid px-8 md:px-[inherit]">
          <div>
            <h1 class="text-white text-[3rem] md:text-[4rem] font-medium leading-[1] mb-2">
              Mission we <br />
              are working on
            </h1>
            <p class="text-white text-[1.4rem] font-light mb-6">
              Problem: Inadequate resources needed for true agricultural practices. <br /><br />
              Solution : Empowering farmers to become a true food innovator through access to
              inputs, financing, agricultural knowledge and resource and a first class training and
              certification.
              <br /><br />
              Process : Building the largest database of farmers in Africa and connecting them to
              adequate resources and training needed to become tomorrow's food innovator's.
            </p>
          </div>
          <div class="block lg:grid grid-rows-2 gap-10">
            <div class="w-[445px] h-[291px] rounded-xl hidden lg:block">
              <img src="/assets/farm_mission.png" alt="" />
            </div>
            <div class="block lg:grid grid-cols-2 gap-8">
              <div class="rounded-xl hidden lg:block">
                <img src="/assets/farm_product.png" alt="" class="rounded-xl" />
              </div>
              <div class="rounded-xl hidden lg:block">
                <img src="/assets/farm_equipment.png" alt="" class="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        <div class="section__5 block lg:grid justify-center items-center px-8 md:px-[inherit]">
          <div class="h-[419px] rounded-xl hidden lg:block">
            <img src="/assets/farm_store.png" alt="" />
          </div>
          <div>
            <h1 class="text-white text-[3rem] md:text-[4rem] font-medium leading-[1.2] mb-2">
              Traction
            </h1>
            <p class="text-white text-[1.4rem] font-light mb-8">
              We have helped 100 farmers connect to a better farming resources and almost 250 on our
              waiting list, chatbot and IVR assistance ready to be deployed for specific
              agricultural FAQ and enquiry.
            </p>
            <h1 class="text-white text-[3rem] md:text-[4rem] font-medium leading-[1] mb-2">
              Milestones
            </h1>
            <p class="text-white text-[1.4rem] font-light">
              Raised $10k to reach 10,000 plus farmers, have made some partnership with organization
              like Soiless Farmlab and Afex commodity exchange etc
            </p>
          </div>
        </div>
        <section class="pt-[40px] md:pt-[120px]">
          <div
            class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
          >
            <div
              class="grid grid-cols-4 gap-[.45rem] md:gap-[2rem] lg:gap-auto p-6 bg-white rounded-2xl"
            >
              <div class="text-center block relative">
                <h3 class="text-[2.3rem] font-bold">1000+</h3>
                <p
                  class="text-[.72rem] md:text-[1.5rem] leading-[.8rem] md:leading-[2rem] font-normal"
                >
                  Registered Farmers
                </p>
              </div>

              <div class="text-center block relative">
                <h3 class="text-[2.3rem] font-bold">$10k</h3>
                <p
                  class="text-[.72rem] md:text-[1.5rem] leading-[.8rem] md:leading-[2rem] font-normal"
                >
                  Raised So far
                </p>
              </div>

              <div class="text-center block relative">
                <h3 class="text-[2.3rem] font-bold">100</h3>
                <p
                  class="text-[.72rem] md:text-[1.5rem] leading-[.8rem] md:leading-[2rem] font-normal"
                >
                  Farmers connected to better farming
                </p>
              </div>

              <div class="text-center block relative">
                <h3 class="text-[2.3rem] font-bold">250</h3>
                <p
                  class="text-[.72rem] md:text-[1.5rem] leading-[.8rem] md:leading-[2rem] font-normal"
                >
                  Farmers on waiting list
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="bg-secondary py-[4rem] md:py-[11rem]" id="section">
      <div class="section">
        <div class="px-[2rem] lg:px[inherit]">
          <h1 class="text-center text-[3rem] md:text-[4rem] text-white font-medium">
            Meet the Heroes
          </h1>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slg:grid-cols-4 gap-10 justify-center align-middle mt-[5rem] lg:mt-[6rem]"
          >
            <div class="flex flex-col w-[25rem] mx-auto justify-center">
              <img
                src="/assets/farmci_founder.png"
                alt=""
                class="mx-auto w-[18rem] h-[28rem] rounded-[40rem]"
              />
              <p class="text-[1.6rem] text-center leading-[2.3rem] mt-4 text-white font-light">
                Yakubu Yinusa Temitope <br />
                Co-founder and CEO
              </p>
            </div>
            <div class="flex flex-col w-[25rem] justify-center mx-auto">
              <img
                src="/assets/farmci_co-founder.png"
                alt=""
                class="mx-auto w-[18rem] h-[28rem] rounded-[40rem]"
              />
              <p class="text-[1.6rem] leading-[2.3rem] mt-4 text-center text-white font-light">
                Abdulrasak Ideraoluwa Temitope <br />
                Co-founder and COO
              </p>
            </div>
            <div class="flex flex-col justify-center w-[25rem] mx-auto">
              <img
                src="/assets/farm_procurement.png"
                alt=""
                class="mx-auto w-[18rem] h-[28rem] rounded-[40rem]"
              />
              <p class="text-[1.6rem] leading-[2.3rem] mt-4 text-center text-white font-light">
                Ojegele Boluwaji <br />
                Procurement and People’s Operation
              </p>
            </div>
            <div class="flex flex-col justify-center w-[25rem] mx-auto">
              <img
                src="/assets/farm_consultant.png"
                alt=""
                class="mx-auto w-[18rem] h-[28rem] rounded-[40rem]"
              />
              <p class="text-[1.6rem] leading-[2.3rem] mt-4 text-center text-white font-light">
                Fashola Joseph Olamide <br />
                Business development consultant
              </p>
            </div>
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slg:grid-cols-4 gap-10 align-center items-center mt-8"
          >
            <div class="flex flex-col justify-center w-[25rem] mx-auto">
              <img
                src="/assets/farm_it.png"
                alt=""
                class="mx-auto w-[18rem] h-[28rem] rounded-[40rem]"
              />
              <p class="text-[1.6rem] leading-[2.3rem] mt-4 text-center text-white font-light">
                Francis Ajadioni <br />
                IT Consultant
              </p>
            </div>
            <div class="flex flex-col justify-center w-[25rem] mx-auto">
              <img
                src="/assets/farm_cto.png"
                alt=""
                class="mx-auto w-[18rem] h-[28rem] rounded-[40rem]"
              />
              <p class="text-[1.6rem] leading-[2.3rem] mt-4 text-center text-white font-light">
                Boluwatife <br />
                CTO
              </p>
            </div>
            <div class="flex flex-col justify-center w-[25rem] mx-auto">
              <img
                src="/assets/farm_designer.png"
                alt=""
                class="mx-auto w-[18rem] h-[28rem] rounded-[40rem]"
              />
              <p class="text-[1.6rem] leading-[2.3rem] mt-4 text-center text-white font-light">
                Aduragbemi <br />
                Product Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
import { ref, onMounted } from 'vue'

 onMounted(() => {
      document.title = 'Farm Central Intellience'
    })
// remove section-hidden

//carousel
const isSection1 = ref(true)

// Function to toggle the sections
const toggleSection1 = () => {
  isSection1.value = true
}

const toggleSection2 = () => {
  isSection1.value = false
}

isSection1, toggleSection1, toggleSection2

//smooth scroll
const section1 = ref(null)
const section2 = ref(null)

const scrollToSection = (to, from, next) => {
  const section1 = to.hash.substr(1)
  const sectionElement = document.getElementById(section1)
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' })
  }
  next()
}

const scrollToSection2 = (to, from, next) => {
  const section2 = to.hash.substr(1)
  const sectionElement = document.getElementById(section2)
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' })
  }
  next()
}

onBeforeRouteUpdate(scrollToSection, scrollToSection2)
onBeforeRouteLeave((to, from, next) => {
  window.scrollTo(0, 0) // Scroll to top before leaving the route
  next()
})

section1, section2

onMounted(() => {
  const section1 = window.location.hash.substr(1)
  const sectionElement = document.getElementById(section1)
  const sectionElement2 = document.getElementById(section2)
  if (sectionElement ?? sectionElement2) {
    sectionElement.scrollIntoView({ behavior: 'smooth' })
  }
})
</script>

<style scoped>
.overlay {
  background: transparent green;
}
</style>
