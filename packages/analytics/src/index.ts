interface VibehogConfig {
  projectId: string;
  apiKey: string;
  endpoint?: string;
}

interface EventProperties {
  [key: string]: any;
}

interface UserTraits {
  [key: string]: any;
}

export class Vibehog {
  private config: VibehogConfig;
  private userId: string | null = null;

  constructor(config: VibehogConfig) {
    this.config = {
      endpoint: 'https://api.vibehog.com/v1',
      ...config,
    };
  }

  /**
   * Track a custom event
   */
  async track(eventName: string, properties?: EventProperties): Promise<void> {
    const payload = {
      event: eventName,
      properties: {
        ...properties,
        timestamp: new Date().toISOString(),
      },
      userId: this.userId,
      projectId: this.config.projectId,
    };

    await this.sendRequest('/events', payload);
  }

  /**
   * Identify a user
   */
  async identify(userId: string, traits?: UserTraits): Promise<void> {
    this.userId = userId;

    const payload = {
      userId,
      traits: {
        ...traits,
        identifiedAt: new Date().toISOString(),
      },
      projectId: this.config.projectId,
    };

    await this.sendRequest('/identify', payload);
  }

  /**
   * Track a page view
   */
  async page(name: string, properties?: EventProperties): Promise<void> {
    await this.track('page_view', {
      name,
      ...properties,
    });
  }

  private async sendRequest(path: string, payload: any): Promise<void> {
    try {
      const response = await fetch(`${this.config.endpoint}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Vibehog tracking error:', error);
      // In a production environment, you might want to implement retry logic
      // or queue failed events for later retry
    }
  }
} 