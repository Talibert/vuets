import type { ApiResponse } from '@/types/ApiResponse.ts'
import { onMounted, type Ref, ref } from 'vue'

export function useFetch(url: string): Ref<ApiResponse>{
  const apiResponse = ref<ApiResponse>({
    response: null, // ou um valor padrão
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
      apiResponse.value.response = json.slip.advice
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
      apiResponse.value.error = `Não foi possível acessar a API. Erro: ${errorMessage}`;
    } finally {
      apiResponse.value.loading = false;
    }
  }

  return apiResponse;
}
