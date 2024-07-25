export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "driver-stats-dirt_oval": {
        Row: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }
        Insert: {
          club_name?: string | null
          country_code?: string | null
          driver_id: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Update: {
          club_name?: string | null
          country_code?: string | null
          driver_id?: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Relationships: []
      }
      "driver-stats-dirt_road": {
        Row: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }
        Insert: {
          club_name?: string | null
          country_code?: string | null
          driver_id: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Update: {
          club_name?: string | null
          country_code?: string | null
          driver_id?: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Relationships: []
      }
      "driver-stats-formula_car": {
        Row: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }
        Insert: {
          club_name?: string | null
          country_code?: string | null
          driver_id: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Update: {
          club_name?: string | null
          country_code?: string | null
          driver_id?: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Relationships: []
      }
      "driver-stats-oval": {
        Row: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }
        Insert: {
          club_name?: string | null
          country_code?: string | null
          driver_id: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Update: {
          club_name?: string | null
          country_code?: string | null
          driver_id?: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Relationships: []
      }
      "driver-stats-sports_car": {
        Row: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }
        Insert: {
          club_name?: string | null
          country_code?: string | null
          driver_id: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Update: {
          club_name?: string | null
          country_code?: string | null
          driver_id?: number
          driver_name?: string | null
          irating?: number | null
          laps?: number | null
          laps_lead?: number | null
          license_letter?: string | null
          pos?: number | null
          safety_rating?: number | null
          starts?: number | null
          wins?: number | null
        }
        Relationships: []
      }
      "iracing-data-api-auth": {
        Row: {
          header: Json
          id: number
          updated_at: string
        }
        Insert: {
          header?: Json
          id?: number
          updated_at?: string
        }
        Update: {
          header?: Json
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      last_updates: {
        Row: {
          data_type: string
          updated_at: string
        }
        Insert: {
          data_type: string
          updated_at?: string
        }
        Update: {
          data_type?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_dirt_oval_drivers_by_name_prefix: {
        Args: {
          prefix: string
        }
        Returns: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }[]
      }
      search_dirt_road_drivers_by_name_prefix: {
        Args: {
          prefix: string
        }
        Returns: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }[]
      }
      search_formula_cars_drivers_by_name_prefix: {
        Args: {
          prefix: string
        }
        Returns: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }[]
      }
      search_oval_drivers_by_name_prefix: {
        Args: {
          prefix: string
        }
        Returns: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }[]
      }
      search_sports_cars_drivers_by_name_prefix: {
        Args: {
          prefix: string
        }
        Returns: {
          club_name: string | null
          country_code: string | null
          driver_id: number
          driver_name: string | null
          irating: number | null
          laps: number | null
          laps_lead: number | null
          license_letter: string | null
          pos: number | null
          safety_rating: number | null
          starts: number | null
          wins: number | null
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
