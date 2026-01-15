// export * from './api/auth';
// export * from './api/events';

// Типы ответов от сервера
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}