<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-200"></div>
        </div>
        
        <!-- Error State -->
        <div v-else-if="error" class="text-center py-20 text-red-400">
          <p>{{ error }}</p>
          <button @click="getArticles" class="mt-4 px-4 py-2 bg-amber-200 text-black rounded-lg hover:bg-amber-300">
            Try Again
          </button>
        </div>
        
        <!-- Articles List -->
        <div v-else class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="article in articles" :key="article.id">
            <a :href="article.url" target="_blank" rel="noopener noreferrer" 
               class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center transition-all">
              <div class="w-full pr-4">
                <div class="text-xs mb-1 text-slate-400 flex items-center italic">
                  <div class="h-[1px] w-20 bg-amber-200 md:w-5 aos-init aos-animate mr-2"></div> 
                  {{ formatDate(article.published_at) }}
                </div>
                <h1 class="text-sm md:text-md text-amber-200 font-bold mb-2 paraf">{{ article.title }}</h1>
                <div class="text-sm hidden md:block paraf text-gray-300">{{ article.description }}</div>
                <div class="flex items-center gap-2 mt-3">
                  <img :src="article.user.profile_image" class="w-6 h-6 rounded-full" :alt="article.user.name">
                  <span class="text-xs text-gray-400">{{ article.user.name }}</span>
                  <span class="text-xs text-gray-500">• {{ article.reading_time_minutes }} min read</span>
                </div>
                <div class="flex flex-wrap gap-1 mt-2">
                  <span v-for="tag in article.tag_list.slice(0, 3)" :key="tag" 
                        class="text-xs px-2 py-1 bg-[#282828] rounded text-gray-400">#{{ tag }}</span>
                </div>
              </div>
              <div>
                <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                  <img :src="article.cover_image || article.social_image || 'https://dev.to/assets/default-cover-image.png'" 
                       class="rounded-lg md:rounded-xl object-cover w-full h-full" alt="">
                </div>
              </div>
            </a>
          </article>
          
          <!-- Load More Button -->
          <div v-if="articles.length > 0" class="flex justify-center mt-6">
            <button @click="loadMore" :disabled="loadingMore"
                    class="px-6 py-3 bg-[#1e1e1f] text-amber-200 rounded-xl hover:bg-[#282828] transition-all disabled:opacity-50">
              <span v-if="loadingMore">Loading...</span>
              <span v-else>Load More Articles</span>
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">
          <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">
            Latest programming articles from Dev.to community
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"></div>
          <div class="hidden md:block">
            <div class="text-white text-md font-semibold">Topics</div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span v-for="topic in topics" :key="topic"
                    @click="selectTopic(topic)"
                    :class="['py-2 px-3 rounded-2xl text-xs cursor-pointer transition-all',
                             selectedTopic === topic ? 'bg-amber-200 text-black' : 'bg-[#1e1e1f] hover:bg-white/20 text-white']">
                {{ topic }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
      loading: true,
      loadingMore: false,
      error: null,
      page: 1,
      selectedTopic: 'javascript',
      topics: ['javascript', 'vue', 'react', 'python', 'webdev', 'typescript', 'nodejs', 'css', 'programming', 'tutorial']
    }
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      this.loading = true;
      this.error = null;
      this.page = 1;
      
      try {
        const response = await axios.get(`https://dev.to/api/articles`, {
          params: {
            tag: this.selectedTopic,
            per_page: 10,
            page: this.page
          }
        });
        this.articles = response.data;
      } catch (err) {
        this.error = 'Failed to load articles. Please try again.';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    
    async loadMore() {
      this.loadingMore = true;
      this.page++;
      
      try {
        const response = await axios.get(`https://dev.to/api/articles`, {
          params: {
            tag: this.selectedTopic,
            per_page: 10,
            page: this.page
          }
        });
        this.articles = [...this.articles, ...response.data];
      } catch (err) {
        console.error(err);
        this.page--;
      } finally {
        this.loadingMore = false;
      }
    },
    
    selectTopic(topic) {
      this.selectedTopic = topic;
      this.getArticles();
    },
    
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  }
}
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}
</style>
