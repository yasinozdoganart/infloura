'use client'

import { motion } from "framer-motion"
import React from 'react'

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        handle: "@sarahj_creates",
        platform: "YouTube & TikTok",
        content: "The math engine completely changed how I look at my business. I stopped guessing and started executing the custom AI roadmap. Hit $10k/mo in 4 months.",
        avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
        id: 2,
        name: "Marcus Wright",
        handle: "@marcus_tech",
        platform: "YouTube",
        content: "I always struggled with consistency. The 12-month projections showed me exactly what would happen if I just stuck to my upload schedule. Incredible tool.",
        avatar: "https://i.pravatar.cc/100?img=11"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        handle: "@elena.lifestyle",
        platform: "Instagram",
        content: "Infloura is like having a CFO and Strategy Lead in your pocket. The Growth Tracking feature instantly tells me if my Reels strategy is actually working.",
        avatar: "https://i.pravatar.cc/100?img=34"
    },
    {
        id: 4,
        name: "David Chen",
        handle: "@chen_codes",
        platform: "X (Twitter)",
        content: "The simulations are scarily accurate. It predicted my revenue dip in Q3 based on my engagement metrics, letting me pivot my content strategy just in time.",
        avatar: "https://i.pravatar.cc/100?img=60"
    },
    {
        id: 5,
        name: "Jessica Fox",
        handle: "@jessfit",
        platform: "TikTok",
        content: "Finally, a tool that respects the business side of being a creator. The AI insights alone are worth 10x the monthly subscription.",
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        id: 6,
        name: "Tom Barker",
        handle: "@tom_invests",
        platform: "YouTube",
        content: "If you are serious about making a living from your content, you need this dashboard. Period. It's the ultimate reality check and action plan combined.",
        avatar: "https://i.pravatar.cc/100?img=33"
    }
]

const firstColumn = testimonials.slice(0, 2)
const secondColumn = testimonials.slice(2, 4)
const thirdColumn = testimonials.slice(4, 6)

const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonials;
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ content, avatar, name, handle, platform }, i) => (
                                <motion.li
                                    key={`${index}-${i}`}
                                    aria-hidden={index === 1 ? "true" : "false"}
                                    tabIndex={index === 1 ? -1 : 0}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -8,
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className="p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.05)] max-w-sm w-full bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 cursor-default select-none group"
                                >
                                    <blockquote className="m-0 p-0">
                                        <p className="text-zinc-300 leading-relaxed font-normal m-0 text-sm">
                                            "{content}"
                                        </p>
                                        <footer className="flex items-center gap-4 mt-8">
                                            <img
                                                src={avatar}
                                                alt={`Avatar of ${name}`}
                                                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-purple-500/50 transition-all duration-300 ease-in-out"
                                            />
                                            <div className="flex flex-col">
                                                <cite className="font-semibold not-italic tracking-tight text-white mb-1">
                                                    {name}
                                                </cite>
                                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                                    <span>{handle}</span>
                                                    <span>•</span>
                                                    <span className="text-purple-400">{platform}</span>
                                                </div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.li>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.ul>
        </div>
    );
};

export function WallOfLove() {
    return (
        <section className="py-24 bg-[#030303] relative border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Join the community</h2>
                    <p className="text-zinc-400 text-lg mb-8">See what ambitious creators are saying about their Infloura experience.</p>
                    <div className="inline-flex items-center justify-center border border-white/10 py-1.5 px-5 rounded-full text-xs font-semibold tracking-wide uppercase text-zinc-400 bg-zinc-900">
                        Testimonials
                    </div>
                </div>

                <div
                    className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden"
                    role="region"
                    aria-label="Scrolling Testimonials"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
                </div>
            </div>
            {/* Background Glows for Depth */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        </section>
    )
}
