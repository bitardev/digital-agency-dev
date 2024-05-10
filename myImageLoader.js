'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://liadtech.fr/${src}?w=${width}&q=${quality || 75}`
}