import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

export function useCategory(){
  const categoryData = ref({}) 
  const route = useRoute()
  const getCategory = async(id=route.params.id) =>{
    const res = await getCategoryAPI(id)
    console.log('xxxxxxx');

    console.log(res);
    
    categoryData.value = res.result
    // console.log(res.result);
    
  }
  onMounted(() => getCategory())
  // 路由参数变化时,重新请求数据
  onBeforeRouteUpdate((to)=> {
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}