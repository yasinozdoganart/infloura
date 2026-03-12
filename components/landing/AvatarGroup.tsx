import Image from "next/image"

export function AvatarGroup() {
    const avatars = [
        { id: 1, src: "https://i.pravatar.cc/100?img=33" },
        { id: 2, src: "https://i.pravatar.cc/100?img=47" },
        { id: 3, src: "https://i.pravatar.cc/100?img=12" },
        { id: 4, src: "https://i.pravatar.cc/100?img=60" },
        { id: 5, src: "https://i.pravatar.cc/100?img=5" },
    ]

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 px-4">
            <div className="flex -space-x-3 isolate">
                {avatars.map((avatar) => (
                    <div key={avatar.id} className="relative w-10 h-10 rounded-full border-2 border-[#030303] overflow-hidden bg-zinc-800 ring-1 ring-white/5">
                        <Image
                            src={avatar.src}
                            alt="Creator"
                            fill
                            sizes="40px"
                            priority={avatar.id === 1}
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="text-sm text-zinc-400 font-medium tracking-wide text-center sm:text-left whitespace-nowrap">
                Joined by <span className="text-white font-bold tracking-tight">+1,000</span> creators
            </div>
        </div>
    )
}
