<template>
  <div v-if="isHomePage">
    <div class="header header--section" id="hero-section">
      <!-- Embed navigation component in the header -->
      <HeaderApp />
      <div class="header_section ml-6" v-show="mainContent">
        <div class="grid grid-flow-row gap-6">
          <h1
            class="text-[4.5rem] md:text-[5.5rem] lg:text-[7.5rem] leading-[1.15] font-bold text-white"
          >
            <span class="text-[#F7C35F]">Easy Farming</span><br />
            with the <br />
            simplest way.
          </h1>
          <div class="avaters">
            <img class="avater" src="/assets/user_profile_view.jpg" />

            <img class="avater" src="/assets/user_profile_man.jpg" />
            <img class="avater" src="/assets/user_profile_view.jpg" />
            <i class="fa-solid fa-play text-[#A6F4C5] mx-4 text-[1.8rem] rotate-[30deg]"></i>
            <h2 class="text-[2.6rem] md:text-[3.7rem] font-bold text-white">
              1000+<span class="font-normal hidden lg:inline-block">Registered</span>
            </h2>
          </div>
          <p class="text-[#e7e7e76c] font-normal md:text-[1.5rem]">
            Trusted by thousands of registered farmers and our<br />
            services have made a real impact in their farming lives
          </p>
          <li class="inline-block">
            <router-link to="/status" class="nav_link--btn inline-block"
              >Check our Farmer’s Status</router-link
            >
          </li>
        </div>
      </div>
    </div>
  </div>
  <!-- If not the home page, render the navigation component independently -->
  <div v-else>
    <HeaderApp />
  </div>

  <router-view v-slot="{ Component }" v-show="mainContent">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <FooterApp />
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { sharedMainContentState } from '@/stores/counter.js'
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'

const mainContent = sharedMainContentState
mainContent

// If home show embeded header nav
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
console.log(route.path === '/')

isHomePage
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s lienar;
  opacity: 0;
}
</style>
