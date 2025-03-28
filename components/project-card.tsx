'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    size?: 'small' | 'large';
  }>;
  layout: 'grid3' | 'grid4' | 'grid2' | 'custom-large';
}

export default function ProjectCard({ title, description, images, layout }: ProjectCardProps) {
  const gridClasses = {
    grid3: 'lg:grid-cols-3',
    grid4: 'lg:grid-cols-2',
    grid2: 'lg:grid-cols-2',
    'custom-large': 'lg:grid-cols-2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl mb-12"
    >
      <div className="mb-8 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h3>
        <p className="text-lg text-accent max-w-3xl mx-auto">{description}</p>
      </div>

      <div className={`grid gap-4 ${gridClasses[layout]}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group ${
              layout === 'custom-large' && index === 0
                ? 'lg:col-span-2 h-[500px]'
                : layout === 'grid3'
                ? 'h-80'
                : image.size === 'large'
                ? 'lg:col-span-2 h-80'
                : 'h-80'
            } rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/95 to-blue-800`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover object-center transition-transform duration-300 ${
                layout === 'custom-large'
                  ? 'scale-95 group-hover:scale-100'
                  : 'group-hover:scale-105'
              }`}
              style={{
                objectPosition:
                  layout === 'custom-large' ? 'center 45%' : 'center center',
              }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />

            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                <p className="text-sm text-white text-center font-medium drop-shadow-lg">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
