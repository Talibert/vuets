/**
 * Interface que vai encapsular uma resposta da API. Ela é parametrizada, pois a resposta pode ser uma outra interface
 */
export interface ApiResponse<T> {
  response: T | null;
  error: string| null;
  loading: boolean;
}
