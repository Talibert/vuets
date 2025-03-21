/**
 * Interface para lidar com respostas do tipo Advice
 */
export interface Advice {
  slip: {
    id: number;
    advice: string;
  };
}
