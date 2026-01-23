<template>
  <main
    class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
    <div class="space-y-2 text-center md:text-left px-10">
      <p class="text-amber-200">{{ t('home.hello') }}</p>
      <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">Ilham Bustomi</h1>
      <div class="py-2">
        <h1
          class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up"
          ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p class="text-white pr-4 fade-in-from-left">{{ t('home.welcome') }} <span class="wave">👋🏼</span></p>
      <br>
    </div>
    <div class="flex justify-center md:justify-start fadein-right"><img alt="avatar" fetchpriority="high" width="300" height="300" decoding="async" data-nimg="1"
        class="w-10/12 md:h-auto rounded-full border-4 border-amber-200 pict" src="https://masrori.my.id/fto_tmi/DSC07917.JPG">
    </div>
  </main>
</template>

<script>
import { useI18n } from '../composables/useI18n';
import { computed, watch, onMounted, ref, nextTick } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const { t, locale } = useI18n();
    const typewriter = ref(null);
    
    // Config
    const period = 2000;
    
    // State
    const txt = ref('');
    const loopNum = ref(0);
    const isDeleting = ref(false);
    
    // Computed roles based on current locale
    const toRotate = computed(() => [
      t('home.role_vendor'), 
      t('home.role_student')
    ]);

    const tick = () => {
      // Safety check if component unmounted
      if (!typewriter.value) {
        return;
      }

      let i = loopNum.value % toRotate.value.length;
      let fullTxt = toRotate.value[i];

      if (isDeleting.value) {
        txt.value = fullTxt.substring(0, txt.value.length - 1);
      } else {
        txt.value = fullTxt.substring(0, txt.value.length + 1);
      }
      
      typewriter.value.innerHTML = `<span class="wrap">${txt.value}</span>`;

      let delta = 200 - Math.random() * 100;

      if (isDeleting.value) {
        delta /= 2;
      }

      if (!isDeleting.value && txt.value === fullTxt) {
        delta = period;
        isDeleting.value = true;
      } else if (isDeleting.value && txt.value === '') {
        isDeleting.value = false;
        loopNum.value++;
        delta = 500;
      }

      setTimeout(() => {
        tick();
      }, delta);
    };

    onMounted(() => {
      nextTick(() => {
        tick();
      });
    });

    // Reset typewriter when language changes to prevent stuck text
    watch(locale, () => {
       isDeleting.value = true; // Force delete to clear old language text
    });

    return { 
      t, 
      typewriter, 
      txt,
      toRotate
    };
  }
}
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg)
  }

  10% {
    transform: rotate(14deg)
  }

  20% {
    transform: rotate(-8deg)
  }

  30% {
    transform: rotate(14deg)
  }

  40% {
    transform: rotate(-4deg)
  }

  50% {
    transform: rotate(10deg)
  }

  60% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(0deg)
  }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
-webkit-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
-moz-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-1 {
  animation-delay: 200ms;
}
.fadein-2 {
  animation-delay: 400ms;
}
.fadein-3 {
  animation-delay: 600ms;
}
.fade-500 {
  animation-delay: 500ms;
}
</style>
