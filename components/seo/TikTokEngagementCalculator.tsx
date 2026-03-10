'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, Users, Heart, MessageCircle, Share2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TikTokEngagementCalculator() {
    const [views, setViews] = useState('')
    const [likes, setLikes] = useState('')
    const [comments, setComments] = useState('')
    const [shares, setShares] = useState('')
    
    const [result, setResult] = useState<{
        rate: number;
        rating: 'Poor' | 'Average' | 'Good' | 'Excellent';
        color: string;
    } | null>(null)

    const [error, setError] = useState<string | null>(null)

    const calculateEngagement = (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setResult(null)

        const v = parseInt(views.replace(/,/g, ''))
        const l = parseInt(likes.replace(/,/g, ''))
        const c = parseInt(comments.replace(/,/g, ''))
        const s = parseInt(shares.replace(/,/g, ''))

        if (isNaN(v) || isNaN(l) || isNaN(c) || isNaN(s) || v === 0) {
            setError('Please enter valid numbers for all fields. Views cannot be zero.')
            return
        }

        if (l + c + s > v) {
            setError('Total engagements (Likes + Comments + Shares) cannot exceed total views.')
            return
        }

        // Engagement Rate by Reach (ERR) Formula for TikTok
        const totalEngagements = l + c + s
        const rate = (totalEngagements / v) * 100

        let rating: 'Poor' | 'Average' | 'Good' | 'Excellent' = 'Average'
        let color = 'text-yellow-400'

        if (rate < 3) {
            rating = 'Poor'
            color = 'text-red-400'
        } else if (rate >= 3 && rate < 6) {
            rating = 'Average'
            color = 'text-yellow-400'
        } else if (rate >= 6 && rate < 9) {
            rating = 'Good'
            color = 'text-green-400'
        } else if (rate >= 9) {
            rating = 'Excellent'
            color = 'text-cyan-400'
        }

        setResult({ rate, rating, color })
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <form onSubmit={calculateEngagement} className="relative z-10 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Views */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2 flex items-center">
                                <Users className="w-4 h-4 mr-2 text-cyan-500" /> Total Views (Reach)
                            </label>
                            <input
                                type="number"
                                min="1"
                                value={views}
                                onChange={(e) => setViews(e.target.value)}
                                placeholder="e.g. 50000"
                                className="block w-full px-4 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all outline-none"
                                required
                            />
                        </div>

                        {/* Likes */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2 flex items-center">
                                <Heart className="w-4 h-4 mr-2 text-pink-500" /> Total Likes
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={likes}
                                onChange={(e) => setLikes(e.target.value)}
                                placeholder="e.g. 3500"
                                className="block w-full px-4 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all outline-none"
                                required
                            />
                        </div>

                        {/* Comments */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2 flex items-center">
                                <MessageCircle className="w-4 h-4 mr-2 text-blue-500" /> Total Comments
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                                placeholder="e.g. 120"
                                className="block w-full px-4 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none"
                                required
                            />
                        </div>

                        {/* Shares */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2 flex items-center">
                                <Share2 className="w-4 h-4 mr-2 text-green-500" /> Total Shares
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={shares}
                                onChange={(e) => setShares(e.target.value)}
                                placeholder="e.g. 450"
                                className="block w-full px-4 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all outline-none"
                                required
                            />
                        </div>
                    </div>

                    <Button 
                        type="submit"
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-6 rounded-xl text-lg font-semibold shadow-lg shadow-cyan-900/20"
                    >
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate Engagement Rate
                    </Button>

                    {error && (
                        <p className="flex items-center justify-center text-red-400 mt-4 text-sm font-medium">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {error}
                        </p>
                    )}
                </form>
            </div>

            {/* Results Display */}
            {result && (
                <div className="bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-500/20 rounded-3xl p-8 sm:p-12 text-center animate-in zoom-in-95 duration-500 shadow-2xl">
                    <h3 className="text-zinc-400 font-medium uppercase tracking-widest text-sm mb-4">Your True Engagement Rate</h3>
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <span className="text-6xl sm:text-7xl font-bold text-white tracking-tight">
                            {result.rate.toFixed(2)}<span className="text-4xl text-cyan-400">%</span>
                        </span>
                    </div>
                    
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <span className="text-zinc-400 mr-2 text-sm">Industry Rating:</span>
                        <span className={`font-bold uppercase tracking-wider ${result.color} flex items-center`}>
                            {result.rating === 'Excellent' && <TrendingUp className="w-4 h-4 mr-2" />}
                            {result.rating}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}
