export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          password: string | null;
          subscribed?: boolean | null;
        };
        Insert: {
          id: string;
          email: string | null;
          password: string | null;
          subscribed?: boolean | null;
        };
        Update: {
          id: string;
          email?: string | null;
          password?: string | null;
          subscribed?: boolean | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
