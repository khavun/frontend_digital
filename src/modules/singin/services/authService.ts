// src/services/authService.ts
export interface LoginResponse {
    success: boolean;
    email: string;
    token: string;
  }
  
  export const authService = {
    async login(email: string, password: string): Promise<LoginResponse> {
      // Static values for testing
      const STATIC_EMAIL = 'user@example.com';
      const STATIC_PASSWORD = 'password123';
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
            resolve({
              success: true,
              email,
              token: 'mock-token-123',
            });
          } else {
            reject(new Error('Invalid email or password'));
          }
        }, 500); // Simulate network delay
      });
    },
  };
  