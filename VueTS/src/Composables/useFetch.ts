import type { ApiResponse } from '@/types/ApiResponse.ts'
import { onMounted, type Ref, ref } from 'vue'

export function useFetch<T>(url: string): Ref<ApiResponse<T>>{
  const apiResponse: Ref<ApiResponse<T>> = ref({
    response: null, // ou um valor padrão para evitar problemas de tipagem
    error: null,
    loading: true,
  });

  onMounted(async () => {
    await getAdvice()
  })

  const getAdvice = async (): Promise<void> => {
    try{
      const req = await fetch(url);
      const json = await req.json()
      apiResponse.value.response = json as T;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
      apiResponse.value.error = `Não foi possível acessar a API. Erro: ${errorMessage}`;
    } finally {
      apiResponse.value.loading = false;
    }
  }

  return apiResponse;
}
