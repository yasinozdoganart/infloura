export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    email: string
                    full_name: string | null
                    plan_type: 'free' | 'pro_monthly' | 'pro_annual'
                    stripe_customer_id: string | null
                    stripe_subscription_id: string | null
                    trial_ends_at: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id: string
                    email: string
                    full_name?: string | null
                    plan_type?: 'free' | 'pro_monthly' | 'pro_annual'
                    stripe_customer_id?: string | null
                    stripe_subscription_id?: string | null
                    trial_ends_at?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    email?: string
                    full_name?: string | null
                    plan_type?: 'free' | 'pro_monthly' | 'pro_annual'
                    stripe_customer_id?: string | null
                    stripe_subscription_id?: string | null
                    trial_ends_at?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            platforms: {
                Row: {
                    id: string
                    user_id: string
                    platform_name: 'youtube' | 'tiktok' | 'instagram' | 'x'
                    is_active: boolean
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    platform_name: 'youtube' | 'tiktok' | 'instagram' | 'x'
                    is_active?: boolean
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    platform_name?: 'youtube' | 'tiktok' | 'instagram' | 'x'
                    is_active?: boolean
                    created_at?: string
                }
            }
            monthly_metrics: {
                Row: {
                    id: string
                    platform_id: string
                    user_id: string
                    month: string
                    followers: number | null
                    monthly_views: number | null
                    engagement_rate: number | null
                    rpm: number | null
                    upload_frequency: number | null
                    niche: string | null
                    country: string | null
                    content_type: string | null
                    actual_revenue: number | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    platform_id: string
                    user_id: string
                    month: string
                    followers?: number | null
                    monthly_views?: number | null
                    engagement_rate?: number | null
                    rpm?: number | null
                    upload_frequency?: number | null
                    niche?: string | null
                    country?: string | null
                    content_type?: string | null
                    actual_revenue?: number | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    platform_id?: string
                    user_id?: string
                    month?: string
                    followers?: number | null
                    monthly_views?: number | null
                    engagement_rate?: number | null
                    rpm?: number | null
                    upload_frequency?: number | null
                    niche?: string | null
                    country?: string | null
                    content_type?: string | null
                    actual_revenue?: number | null
                    created_at?: string
                }
            }
            simulations: {
                Row: {
                    id: string
                    user_id: string
                    platform_name: string
                    input_data: Json
                    conservative_projection: Json | null
                    realistic_projection: Json | null
                    aggressive_projection: Json | null
                    milestones: Json | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    platform_name: string
                    input_data: Json
                    conservative_projection?: Json | null
                    realistic_projection?: Json | null
                    aggressive_projection?: Json | null
                    milestones?: Json | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    platform_name?: string
                    input_data?: Json
                    conservative_projection?: Json | null
                    realistic_projection?: Json | null
                    aggressive_projection?: Json | null
                    milestones?: Json | null
                    created_at?: string
                }
            }
            ai_reports: {
                Row: {
                    id: string
                    user_id: string
                    simulation_id: string | null
                    report_type: 'roadmap' | 'risk_analysis' | 'optimization' | null
                    content: Json
                    tokens_used: number | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    simulation_id?: string | null
                    report_type?: 'roadmap' | 'risk_analysis' | 'optimization' | null
                    content: Json
                    tokens_used?: number | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    simulation_id?: string | null
                    report_type?: 'roadmap' | 'risk_analysis' | 'optimization' | null
                    content?: Json
                    tokens_used?: number | null
                    created_at?: string
                }
            }
        }
    }
}
