'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/types';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);

  const currentVariant = product.variants?.[selectedVariant];
  const currentPrice = currentVariant?.price ?? product.price;
  const currentWeight = currentVariant?.weight ?? product.unit;

  const whatsappUrl = buildWhatsAppUrl({
    productName: `${product.name} (${currentWeight})`,
    productPrice: currentPrice,
  });

  return (
    <article className="product-card bg-white rounded-2xl overflow-hidden shadow-md border border-cream-200 group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-cream-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/30 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isBestseller && (
            <span className="bg-saffron-500 text-white text-[10px] font-sans font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
              ⭐ Bestseller
            </span>
          )}
          {product.isPopular && (
            <span className="bg-maroon-600 text-white text-[10px] font-sans font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
              🔥 Popular
            </span>
          )}
          {product.badge && (
            <span className="bg-forest-500 text-white text-[10px] font-sans font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-maroon-700">{product.name}</h3>
          <p className="font-devanagari text-saffron-600 text-sm mt-0.5">{product.nameMarathi}</p>
        </div>

        <p className="text-maroon-600/70 text-sm font-body leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Variant selector */}
        {product.variants && product.variants.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v, i) => (
              <button
                key={v.weight}
                onClick={() => setSelectedVariant(i)}
                className={`text-xs font-sans font-semibold px-3 py-1.5 rounded-full border transition-all duration-150 ${
                  i === selectedVariant
                    ? 'bg-maroon-700 text-white border-maroon-700'
                    : 'bg-cream-50 text-maroon-600 border-cream-300 hover:border-maroon-400'
                }`}
              >
                {v.weight}
              </button>
            ))}
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="font-display text-2xl font-bold text-maroon-700">₹{currentPrice}</span>
            <span className="text-maroon-500/60 text-xs font-sans ml-1">/ {currentWeight}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-green-900/20 active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.85L0 24l6.335-1.524A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.006-1.368l-.36-.213-3.76.905.938-3.651-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Inquire
          </a>
        </div>
      </div>

      {/* Bottom ornament */}
      <div className="h-1 bg-gradient-to-r from-saffron-500 via-maroon-500 to-saffron-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}
