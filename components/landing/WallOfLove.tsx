'use client'

import { motion } from "framer-motion"
import React from 'react'
import { useTranslations } from 'next-intl'

const TestimonialsColumn = (props: {
    className?: string;
    testimonials: any[];
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
    const t = useTranslations('Landing')
    const tTestimonials = useTranslations('Testimonials')
    
    // Get all testimonial items from translation file
    const testimonialIds = [0, 1, 2, 3, 4, 5];
    const items = testimonialIds.map(id => ({
        id,
        name: tTestimonials(`items.${id}.name`),
        handle: tTestimonials(`items.${id}.handle`),
        platform: tTestimonials(`items.${id}.platform`),
        content: tTestimonials(`items.${id}.content`),
        avatar: `https://i.pravatar.cc/100?img=${[5, 11, 34, 60, 47, 33][id]}`
    }));

    const firstColumn = items.slice(0, 2)
    const secondColumn = items.slice(2, 4)
    const thirdColumn = items.slice(4, 6)

    return (
        <section className="py-24 bg-[#030303] relative border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">{t('wallTitle')}</h2>
                    <p className="text-zinc-400 text-lg mb-8">{t('wallSub')}</p>
                    <div className="inline-flex items-center justify-center border border-white/10 py-1.5 px-5 rounded-full text-xs font-semibold tracking-wide uppercase text-zinc-400 bg-zinc-900">
                        {t('wallBadge')}
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
