import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from '@/apis/user';
import { mergeCartAPI } from "@/apis/cart";
import { useCartStore } from '@/stores/cartStore';

export const useUserStore = defineStore('user',()=>{
  const userInfo = ref({})
  const cartStore = useCartStore()

  const getUserInfo = async ({account,password})=>{
    const res = await loginAPI({account,password})
    userInfo.value = res.result 
    const data = cartStore.cartList.map(item => {
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    })
    await mergeCartAPI(data)
    cartStore.updateNewList()
  }
  const clearUserInfo = () => {
    userInfo.value = {}
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
{
  persist:true
}
)