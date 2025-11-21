
import { LoginRequest, User } from '../types';

/**
 * Generic API Response Interface
 * 通用 API 响应接口
 */
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

const BASE_URL = '/api/v1';

/**
 * Base HTTP Request Method
 * 基础 HTTP 请求方法
 * 
 * @param endpoint API Endpoint / API 端点
 * @param options Fetch Options / Fetch 配置项
 * @returns Promise<T>
 */
async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  // Simulate network delay
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 800));

  // Mock Response Logic (Replace with real fetch in production)
  // 模拟响应逻辑 (生产环境中请替换为真实的 fetch 调用)
  // const response = await fetch(`${BASE_URL}${endpoint}`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     ...options.headers,
  //   },
  //   ...options,
  // });
  // if (!response.ok) {
  //   throw new Error(`HTTP Error: ${response.status}`);
  // }
  // return response.json();

  console.log(`[API] Request to ${endpoint}`, options);

  // Return mock success
  return {
    code: 200,
    message: 'Success',
    data: {} as T
  } as any; 
}

export const authApi = {
  /**
   * User Login Interface
   * 用户登录接口
   * 
   * Method: POST
   * Path: /auth/login
   * 
   * @param credentials LoginRequest { email, password }
   * @returns Promise<User>
   */
  login: async (credentials: LoginRequest): Promise<User> => {
    // In a real app, this would be:
    // return request<User>('/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify(credentials)
    // });

    // Mock Implementation
    console.log('[API] Logging in with:', credentials.email || credentials.phone);
    
    await new Promise(resolve => setTimeout(resolve, 500));

    if (credentials.email && credentials.email.includes('error')) {
      throw new Error('Invalid credentials');
    }

    return {
      id: 'user-123',
      name: 'Agent User',
      email: credentials.email || 'user@example.com',
      avatar: 'https://ui-avatars.com/api/?name=Agent+User',
      role: 'admin'
    };
  },

  /**
   * User Logout Interface
   * 用户登出接口
   * 
   * Method: POST
   * Path: /auth/logout
   */
  logout: async (): Promise<void> => {
    return request<void>('/auth/logout', {
      method: 'POST'
    });
  },

  /**
   * Get Current User Profile
   * 获取当前用户信息
   * 
   * Method: GET
   * Path: /users/me
   */
  getProfile: async (): Promise<User> => {
    return request<User>('/users/me', {
      method: 'GET'
    });
  }
};

export const chatApi = {
  /**
   * Create New Conversation
   * 创建新对话
   * 
   * Method: POST
   * Path: /chats
   */
  createSession: async (title: string) => {
    return request('/chats', {
      method: 'POST',
      body: JSON.stringify({ title })
    });
  },

  /**
   * Get Conversation History
   * 获取对话历史
   * 
   * Method: GET
   * Path: /chats/{id}/messages
   */
  getMessages: async (sessionId: string) => {
    return request(`/chats/${sessionId}/messages`);
  }
};
