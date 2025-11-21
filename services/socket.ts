
/**
 * WebSocket Service
 * WebSocket 服务类
 * 
 * Handles real-time communication for terminal and chat events.
 * 处理终端和聊天事件的实时通信。
 */
class WebSocketService {
  private static instance: WebSocketService;
  private socket: WebSocket | null = null;
  private url: string = 'ws://localhost:8080/ws';
  private listeners: Map<string, ((data: any) => void)[]> = new Map();

  private constructor() {}

  /**
   * Get Singleton Instance
   * 获取单例实例
   */
  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  /**
   * Connect to WebSocket Server
   * 连接到 WebSocket 服务器
   * 
   * @param url Optional URL override / 可选的 URL 覆盖
   */
  public connect(url?: string): void {
    if (url) this.url = url;
    
    if (this.socket && (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)) {
      console.warn('[WS] Already connected or connecting');
      return;
    }

    console.log(`[WS] Connecting to ${this.url}...`);
    
    // In a real app, uncomment this. For demo, we just simulate.
    // this.socket = new WebSocket(this.url);
    
    // this.socket.onopen = this.onOpen.bind(this);
    // this.socket.onmessage = this.onMessage.bind(this);
    // this.socket.onclose = this.onClose.bind(this);
    // this.socket.onerror = this.onError.bind(this);
  }

  /**
   * Disconnect from WebSocket Server
   * 断开 WebSocket 连接
   */
  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  /**
   * Send Message
   * 发送消息
   * 
   * @param event Event Name / 事件名称
   * @param payload Data Payload / 数据载荷
   */
  public send(event: string, payload: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ event, payload }));
    } else {
      // console.warn('[WS] Socket not connected, message ignored:', event);
    }
  }

  /**
   * Subscribe to Event
   * 订阅事件
   * 
   * @param event Event Name / 事件名称
   * @param callback Callback Function / 回调函数
   */
  public on(event: string, callback: (data: any) => void): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)?.push(callback);
  }

  /**
   * Unsubscribe from Event
   * 取消订阅事件
   * 
   * @param event Event Name / 事件名称
   * @param callback Callback Function / 回调函数
   */
  public off(event: string, callback: (data: any) => void): void {
    if (!this.listeners.has(event)) return;
    const filtered = this.listeners.get(event)?.filter(cb => cb !== callback) || [];
    this.listeners.set(event, filtered);
  }

  // Private Handlers

  private onOpen(event: Event) {
    console.log('[WS] Connected');
  }

  private onMessage(event: MessageEvent) {
    try {
      const data = JSON.parse(event.data);
      const { event: eventName, payload } = data;
      
      if (this.listeners.has(eventName)) {
        this.listeners.get(eventName)?.forEach(cb => cb(payload));
      }
    } catch (e) {
      console.error('[WS] Failed to parse message', e);
    }
  }

  private onClose(event: CloseEvent) {
    console.log('[WS] Disconnected', event.code);
  }

  private onError(event: Event) {
    console.error('[WS] Error', event);
  }
}

export const socketService = WebSocketService.getInstance();
