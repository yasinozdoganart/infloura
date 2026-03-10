'use client'

import { useState } from 'react'
import { Download, Link2, AlertCircle, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function YoutubeThumbnailDownloader() {
    const [url, setUrl] = useState('')
    const [videoId, setVideoId] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const extractVideoId = (inputUrl: string) => {
        // Handle various YouTube URL formats
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
        const match = inputUrl.match(regExp)
        return (match && match[7].length === 11) ? match[7] : null
    }

    const handleFetch = (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setVideoId(null)

        if (!url.trim()) {
            setError('Please enter a YouTube URL')
            return
        }

        const id = extractVideoId(url)
        if (!id) {
            setError('Invalid YouTube URL. Please make sure the link is correct.')
            return
        }

        setVideoId(id)
    }

    const downloadImage = async (imgUrl: string, quality: string) => {
        try {
            // We use fetch to get the blob so we can force a download rather than opening in new tab
            const response = await fetch(imgUrl)
            const blob = await response.blob()
            const blobUrl = window.URL.createObjectURL(blob)
            
            const a = document.createElement('a')
            a.href = blobUrl
            a.download = `youtube-thumbnail-${videoId}-${quality}.jpg`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            window.URL.revokeObjectURL(blobUrl)
        } catch (err) {
            console.error('Download failed, opening in new tab instead', err)
            window.open(imgUrl, '_blank')
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <form onSubmit={handleFetch} className="relative z-10">
                    <label htmlFor="url" className="block text-sm font-medium text-zinc-400 mb-2">
                        Paste YouTube Video URL
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Link2 className="h-5 w-5 text-zinc-500" />
                            </div>
                            <input
                                id="url"
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://www.youtube.com/watch?v=..."
                                className="block w-full pl-11 pr-4 py-4 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all outline-none"
                            />
                        </div>
                        <Button 
                            type="submit"
                            className="bg-red-600 hover:bg-red-500 text-white py-4 px-8 rounded-2xl h-auto font-semibold shadow-lg shadow-red-900/20"
                        >
                            Get Thumbnail
                        </Button>
                    </div>
                    {error && (
                        <p className="flex items-center text-red-400 mt-4 text-sm font-medium">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {error}
                        </p>
                    )}
                </form>
            </div>

            {videoId && (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-2xl font-bold text-white flex items-center">
                        <ImageIcon className="w-6 h-6 mr-3 text-red-500" />
                        Thumbnail Results
                    </h2>
                    
                    <div className="bg-[#111] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mb-6 relative group">
                            <img 
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                                alt="High Resolution YouTube Thumbnail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button 
                                    onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, 'HD')}
                                    className="bg-white text-black hover:bg-zinc-200"
                                >
                                    <Download className="w-4 h-4 mr-2" /> Download Full HD (1080p)
                                </Button>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                            <Button 
                                variant="outline" 
                                className="w-full justify-start text-zinc-300 border-white/10 hover:bg-white/5 hover:text-white"
                                onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, 'HD')}
                            >
                                <Download className="w-4 h-4 mr-2" /> HD (1280x720)
                            </Button>
                            <Button 
                                variant="outline" 
                                className="w-full justify-start text-zinc-300 border-white/10 hover:bg-white/5 hover:text-white"
                                onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`, 'SD')}
                            >
                                <Download className="w-4 h-4 mr-2" /> SD (640x480)
                            </Button>
                            <Button 
                                variant="outline" 
                                className="w-full justify-start text-zinc-300 border-white/10 hover:bg-white/5 hover:text-white"
                                onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`, 'Normal')}
                            >
                                <Download className="w-4 h-4 mr-2" /> Normal (480x360)
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
