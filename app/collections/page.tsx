'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Star, Droplets, Sun, Shield, Search, X, Check, BookOpen, Lightbulb, Package, Minus, Plus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// IMPORTANT: Ensure this path matches where you saved your context file
import { useCart } from '../context/CartContext'; 

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- 1. UI COMPONENTS ---

const Toast = ({ message, isVisible, onClose }: { message: string, isVisible: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 bg-stone-900 text-white px-6 py-10 rounded-md shadow-2xl min-w-[320px]"
        >
          <div className="bg-emerald-500 rounded-full p-1 text-stone-900 shrink-0">
             <Check size={14} strokeWidth={3} />
          </div>
          <div className="flex-1">
             <p className="text-sm font-bold tracking-wide">{message}</p>
          </div>
          <button onClick={onClose} className="text-stone-500 hover:text-white transition-colors">
             <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- 2. DATA CONSTANTS ---

const SIZE_OPTIONS = [
  { id: '1ltr', label: '1 Litre', multiplier: 0.28 },
  { id: '4ltr', label: '4 Litres', multiplier: 1.0 }, // Base Price Reference
  { id: '20ltr', label: '20 Litres', multiplier: 4.5 },
];

const FILTERS = [
  { id: 'all', label: 'All Colors', hex: '#E5E5E5' },
  { id: 'Reds', label: 'Reds', hex: '#B55233' },
  { id: 'Oranges', label: 'Oranges', hex: '#E27A1A' },
  { id: 'Yellows', label: 'Yellows', hex: '#FFD44D' },
  { id: 'Greens', label: 'Greens', hex: '#B7CBB2' },
  { id: 'Blues', label: 'Blues', hex: '#8EB9D4' },
  { id: 'Purples', label: 'Purples', hex: '#674172' },
  { id: 'Neutrals', label: 'Neutrals', hex: '#D7D1C9' },
  { id: 'Browns', label: 'Browns', hex: '#8B5A2B' },
  { id: 'Whites', label: 'Whites', hex: '#F2EFE9' },
  { id: 'Accents', label: 'Accents', hex: '#FF69B4' },
];

const BRAND_CONTENT = {
  ceramic: {
    id: 'ceramic',
    name: 'Ceramic Society™',
    tagline: 'Soft walls. Calm spaces. Timeless elegance.',
    finishes: [
      {
        id: 'mineral-matt',
        name: 'Mineral Matt',
        label: 'Mineral Matt',
        title: 'Ceramic Society™ Mineral Matt',
        price: 85,
        description: 'A premium mineral-based matt finish that offers a deep, non-reflective elegance for sophisticated interiors.',
        details: {
          whatItDoes: [ 'Creates a deep, non-reflective surface', 'Hides wall imperfections perfectly', 'Delivers rich, consistent colour' ],
          whyDifferent: [ 'Ceramic microspheres for durability', 'Velvet-touch texture', 'Ultra-low VOC' ],
          specs: { Finish: 'Dead Matt', Coverage: '120 sq.ft / L', Coats: '2', DryTime: '30 min', Warranty: '7-year' }
        }
      },
      {
        id: 'high-gloss',
        name: 'High Gloss',
        label: 'High Gloss',
        title: 'Ceramic Society™ High Gloss',
        price: 95,
        description: 'A mirror-like high gloss finish that reflects light beautifully, adding drama and durability to any space.',
        details: {
          whatItDoes: [ 'Reflects light to brighten spaces', 'Highly washable and stain resistant', 'Creates a glass-like premium look' ],
          whyDifferent: [ 'High-resin solids for depth', 'Scuff-resistant technology', 'Vibrant colour retention' ],
          specs: { Finish: 'High Gloss', Coverage: '100 sq.ft / L', Coats: '2', DryTime: '45 min', Warranty: '8-year' }
        }
      }
    ]
  },
  ellora: {
    id: 'ellora',
    name: 'Ellora by Elements',
    tagline: 'The purest expression of interior luxury.',
    finishes: [
      {
        id: 'matt',
        name: 'Matt',
        label: 'Matt',
        title: 'Ellora™ Pure Matt',
        price: 110,
        description: 'Luxury that does not announce itself. A soft, powdery matt finish that feels like natural fabric.',
        details: {
          whatItDoes: [ 'Absorbs light for a calm atmosphere', 'Enhances colour purity', 'Zero reflection' ],
          whyDifferent: [ 'Rare mineral pigmentation', 'Breathable film', 'Zero-VOC' ],
          specs: { Finish: 'Powder Matt', Coverage: '130 sq.ft / L', Coats: '2', DryTime: '1 hr', Warranty: 'Lifetime' }
        }
      },
      {
        id: 'satin-silky',
        name: 'Satin / Silky',
        label: 'Satin / Silky',
        title: 'Ellora™ Silky Satin',
        price: 118,
        description: 'The perfect balance between matt and gloss. A silky, pearl-like sheen that glows softly under light.',
        details: {
          whatItDoes: [ 'Offers a subtle, pearl-like glow', 'Easier to clean than matt', 'Softens sharp room angles' ],
          whyDifferent: [ 'Silk-polymer emulsion', 'Light-diffusing technology', 'Stain-guard shield' ],
          specs: { Finish: 'Soft Satin', Coverage: '125 sq.ft / L', Coats: '2', DryTime: '45 min', Warranty: 'Lifetime' }
        }
      },
      {
        id: 'high-gloss',
        name: 'High Gloss',
        label: 'High Gloss',
        title: 'Ellora™ Mirror Gloss',
        price: 125,
        description: 'An ultra-reflective, lacquer-like finish for feature walls and statement spaces.',
        details: {
          whatItDoes: [ 'Creates a wet-look mirror finish', 'Maximizes light in dark rooms', 'Extreme durability' ],
          whyDifferent: [ 'Nano-lacquer technology', 'Self-leveling smoothness', 'Hard-coat protection' ],
          specs: { Finish: 'Mirror Gloss', Coverage: '110 sq.ft / L', Coats: '3', DryTime: '2 hrs', Warranty: 'Lifetime' }
        }
      }
    ]
  },
  minera: {
    id: 'minera',
    name: 'Minera™ Exterior',
    tagline: 'Nature. Strength. Timeless Protection.',
    finishes: [
      {
        id: 'x05',
        name: 'X 05',
        label: 'X 05',
        title: 'Minera™ X 05 Shield',
        price: 140,
        description: 'Essential exterior protection with advanced weather resistance and anti-algal properties.',
        details: {
          whatItDoes: [ 'Protects against rain and sun', 'Prevents algae and fungal growth', 'Maintains brightness' ],
          whyDifferent: [ 'Standard UV protection', 'Breathable polymer', 'Cost-effective durability' ],
          specs: { Finish: 'Matt', Warranty: '5 Years', Coverage: '60 sq.ft / L', Coats: '2', 'Rain Guard': 'Standard' }
        }
      },
      {
        id: 'x10',
        name: 'X 10',
        label: 'X 10',
        title: 'Minera™ X 10 Advanced',
        price: 165,
        description: 'Advanced exterior shield with crack-bridging technology and dust resistance.',
        details: {
          whatItDoes: [ 'Bridges hairline cracks', 'Repels dust and dirt', 'Enhanced waterproofing' ],
          whyDifferent: [ 'Elastomeric mid-coat', 'Dust-Guard technology', 'High UV reflection' ],
          specs: { Finish: 'Low Sheen', Warranty: '10 Years', Coverage: '55 sq.ft / L', Coats: '2', 'Rain Guard': 'Advanced' }
        }
      },
      {
        id: 'x15plus',
        name: 'X 15 Plus',
        label: 'X 15 PLUS',
        title: 'Minera™ X 15 Plus Ultimate',
        price: 190,
        description: 'The ultimate exterior fortification. Heat-reflective, structural-grade protection for extreme climates.',
        details: {
          whatItDoes: [ 'Reduces indoor temperature', 'Waterproofs completely', 'Self-cleaning surface' ],
          whyDifferent: [ 'Nano-ceramic heat barrier', 'Cross-linked polymers', 'Carbon-fiber reinforcement' ],
          specs: { Finish: 'Satin', Warranty: '15 Years', Coverage: '50 sq.ft / L', Coats: '3', 'Rain Guard': 'Ultimate' }
        }
      }
    ]
  },
  woods_metals: {
    id: 'woods_metals',
    name: 'Woods & Metals',
    tagline: 'Enduring beauty for trim, doors, and details.',
    finishes: [
      {
        id: 'matt',
        name: 'Matt',
        label: 'Matt',
        title: 'W&M Enamel Matt',
        price: 90,
        description: 'A modern, flat finish for metal gates, wooden doors, and furniture. Sleek and understated.',
        details: {
          whatItDoes: [ 'Provides a flat, non-shiny finish', 'Hides surface grain/imperfections', 'Tough and scratch resistant' ],
          whyDifferent: [ 'Urethane-modified alkyd', 'Anti-rust inhibitors', 'Quick drying' ],
          specs: { Finish: 'Matt', Usage: 'Wood & Metal', Coats: '2', DryTime: '4 hrs', RustProtection: 'High' }
        }
      },
      {
        id: 'satin',
        name: 'Satin',
        label: 'Satin',
        title: 'W&M Enamel Satin',
        price: 98,
        description: 'A soft, buttery sheen that mimics the glow of hand-rubbed wax. Elegant and durable.',
        details: {
          whatItDoes: [ 'Resists fingerprints and scuffs', 'Easy to wipe clean', 'Subtle glow highlights detailing' ],
          whyDifferent: [ 'Self-leveling agents', 'Flexible film technology', 'Yellowing resistant' ],
          specs: { Finish: 'Satin', Usage: 'Wood & Metal', Coats: '2', DryTime: '4 hrs', RustProtection: 'High' }
        }
      }
    ]
  }
};

const ALL_COLORS = [
  // REDS
  { name: "Terracotta Flame", hex: "#B55233", family: "Reds", story: "Terracotta Flame carries the warmth of handmade clay, the kind shaped by centuries of Indian potters who mould earth into life. It feels grounded, ancient, and beautifully imperfect—like a wall kissed by sun and history.", scientific: "Sitting around 610–630 nm, this red-orange wavelength stimulates warmth, creativity, and emotional grounding. Its reflectance absorbs harsher wavelengths, giving interiors a calm, matte warmth." },
  { name: "Jaipur Rouge", hex: "#A33E2A", family: "Reds", story: "A tribute to Jaipur’s fading evening light, this red carries the soul of ancient fort walls—sun-baked, storied, and noble. In interiors, Jaipur Rouge feels both royal and raw, giving your walls a sense of heritage without heaviness.", scientific: "With wavelengths around 600 nm, this red triggers emotional richness and depth. Its moderate absorption reduces visual glare, making large surfaces feel cosy and grounded." },
  { name: "Desert Rose", hex: "#C1695B", family: "Reds", story: "Desert Rose is the poetry of dusty winds and dried petals—delicate, muted, and quietly romantic. It softens any space with a blush of earth, giving interiors a sun-warmed calmness.", scientific: "A red–pink hybrid around 590–610 nm, this wavelength balances warmth and softness. Its mid-level reflectivity enhances depth without overpowering a room." },
  { name: "Clay Ember", hex: "#B15A3D", family: "Reds", story: "Clay Ember captures the moment rain touches baked earth—the colour shift, the aroma, the renewal. It brings that primal comfort indoors—warm, soulful, and freshly alive.", scientific: "Its warm spectrum sits around 600 nm, stimulating comfort and grounding. Medium absorption creates a soft, firelit effect on walls." },
  { name: "Vermilion Echo", hex: "#E34234", family: "Reds", story: "Inspired by sindoor and festival colours, Vermilion Echo is bold yet deeply cultural. It brings a ritualistic energy to walls—sacred, celebratory, and full of life.", scientific: "A high-energy wavelength around 620–635 nm, this red accelerates attention and emotional warmth. It is stimulating, dramatic, and energising." },
  { name: "Coral Chant", hex: "#E27D60", family: "Reds", story: "Coral Chant blends modern vibrance with coastal tenderness. It feels like holiday light—warm, playful, and airy. On walls, it adds a fresh contemporary glow, uplifting even the smallest spaces.", scientific: "This coral sits around 580–600 nm, blending the psychological comfort of red with the cheerfulness of orange. Its reflectivity brightens interiors subtly." },
  { name: "Heartfire", hex: "#8B1A1A", family: "Reds", story: "A deep, garnet red with the richness of temple textiles and ceremonial art. Heartfire is intense, elegant, and dramatic—perfect for spaces seeking a sense of depth and luxury.", scientific: "Absorbing most light except for wavelengths around 650 nm, this deep red creates a cocooning visual field. Psychologically, dark reds symbolise strength, grounding, and intimacy." },
  { name: "Reef Bloom", hex: "#FF7F6A", family: "Reds", story: "Reef Bloom captures the shimmering coral reefs of tropical coasts. It’s fresh, spirited, and delightfully modern—like sun-filtered water dancing on colour.", scientific: "With wavelengths from 580–600 nm, this coral-pink enhances feelings of joy and vitality. Its high reflectivity creates a gentle luminosity." },

  // ORANGES
  { name: "Marigold Muse", hex: "#E27A1A", family: "Oranges", story: "Marigold Muse captures the festive pulse of Indian mornings—petals strung into garlands, doorways glowing in saffron light. It brings a celebratory warmth into interiors, reminding you of joyous rituals and sunlit verandas.", scientific: "At 590–620 nm, warm orange wavelengths stimulate creativity, cheerfulness, and social connection. High luminance makes rooms feel lively and open." },
  { name: "Burnt Saffron", hex: "#CC5803", family: "Oranges", story: "Burnt Saffron carries the quiet strength of temple lamps and the sacred depth of traditional spices. It feels ancient yet minimal, earthy yet luminous.", scientific: "With strong wavelengths around 600 nm, this orange activates emotional warmth without overstimulation. Its medium-dark value reduces glare, creating a grounded visual field." },
  { name: "Sunset Resin", hex: "#B85B1F", family: "Oranges", story: "Sunset Resin is the colour of tree sap catching the last light—amber, rustic, and quietly radiant. It brings a craftsman’s authenticity into interiors, making spaces feel tactile and lived-in.", scientific: "This amber-orange sits around 580–600 nm, a spectrum associated with comfort and warmth. Its low reflectance adds softness, perfect for moody, intimate spaces." },
  { name: "Copper Verse", hex: "#B66B33", family: "Oranges", story: "Copper Verse is inspired by polished utensils passed from one generation to the next—warm, metallic, beautifully aged. On walls, it feels like poetry written in metal.", scientific: "Copper tones carry wavelengths near 600 nm, but with brown undertones that absorb excess brightness. This creates a warm, enveloping atmosphere." },

  // YELLOWS
  { name: "Canary Song", hex: "#FFD44D", family: "Yellows", story: "Like the first sunlight breaking into a quiet room, Canary Song fills spaces with gentle happiness. It feels like a painted morning—hopeful, fresh, and full of clarity.", scientific: "At 570–590 nm, yellow wavelengths enhance alertness and lift mood. High reflectivity makes spaces appear larger and brighter." },
  { name: "Golden Dusk", hex: "#E2B144", family: "Yellows", story: "Golden Dusk is the moment when evening light softens into amber over desert dunes. Warm, muted, and contemplative, this shade adds a nostalgic glow to interiors.", scientific: "This muted yellow sits around 580 nm, offering warmth without the intensity of brighter yellows. Its reduced luminance creates calmness and emotional ease." },
  { name: "Turmeric Aura", hex: "#E8B923", family: "Yellows", story: "Inspired by the sacred vibrancy of turmeric, this shade radiates auspicious energy. Turmeric Aura is bold yet balanced—perfect for uplifting spaces with a soft spiritual glow.", scientific: "With wavelengths near 580 nm, this bright yellow stimulates cognitive clarity. Its vivid saturation reflects light strongly, making interiors feel alive and active." },
  { name: "Mango Spirit", hex: "#FFA62B", family: "Yellows", story: "Mango Spirit is tropical joy bottled into colour. Sweet, sunny, and refreshing, it brings the lush vibrance of ripe mangoes to your walls.", scientific: "An orange-yellow at 585–600 nm, this shade heightens feelings of happiness and sociability. Its medium-high luminosity expands visual space." },
  { name: "Saharan Glow", hex: "#FFD77F", family: "Yellows", story: "Soft as drifting desert sand, Saharan Glow captures the amber haze of Moroccan evenings. Gentle and dreamy, it adds a warm, sandy diffused calm to interiors.", scientific: "This pale yellow lies at 570–590 nm, offering subtle brightness with low visual aggression. High LRV softens shadows and enhances serenity." },
  { name: "First Light", hex: "#FFA24A", family: "Yellows", story: "First Light is the colour of a rising sun—radiant, hopeful, and quietly courageous. It transforms rooms into spaces filled with new beginnings.", scientific: "At 580–600 nm, this bright yellow-orange energises cognitive activity and encourages social warmth." },
  { name: "Land of Dry", hex: "#FFD77F", family: "Yellows", story: "Land of Dry mimics the warmth of parched desert earth—simple, minimal, beautifully natural. It introduces a grounded neutrality while still bringing gentle warmth.", scientific: "With wavelengths around 580 nm, this muted yellow has a calming effect compared to vivid yellows. Its sandy reflectivity creates gentle, diffused interiors." },

  // GREENS
  { name: "Misty Sage", "hex": "#B7CBB2", "family": "Greens", "story": "Misty Sage is a breath of early-morning air drifting through dew-covered leaves. Soft, herbal, and quietly grounding.", "scientific": "With wavelengths around ~535 nm, Misty Sage reflects a gentle mid-green spectrum that reduces eye fatigue and promotes emotional clarity." },
  { name: "Mineral Coast Green", "hex": "#8BAA91", "family": "Greens", "story": "Mineral Coast Green embodies the muted elegance of sea-washed stones and coastal vegetation. It feels organic, sophisticated and timeless.", "scientific": "Its mid-range green wavelength stabilises visual perception, offering a soothing environment without oversaturation." },
  { name: "Heritage Olive", "hex": "#6B7F65", "family": "Greens", "story": "Heritage Olive carries the wisdom of old forests and the richness of ancient landscapes. This deep olive tone brings a cultivated, European charm to interiors.", "scientific": "With wavelengths around ~560 nm, Heritage Olive absorbs enough light to feel cocooning while still offering a warm green undertone." },
  { name: "Alpine Mint", "hex": "#DFF2E1", "family": "Greens", "story": "Alpine Mint is crisp, pure, and invigorating — inspired by the cool freshness of high-altitude air.", "scientific": "Scientifically, its short-wavelength green spectrum enhances visual purity and increases perceived room brightness." },
  { name: "Evergreen Coast", "hex": "#4E6F5A", "family": "Greens", "story": "Evergreen Coast captures the depth of ocean forests — lush, dramatic, and mysteriously calming.", "scientific": "Scientifically, its lower light reflectance combined with ~555 nm wavelengths creates a rich, enveloping atmosphere that feels secure and steady." },
  { name: "Jade Valley", "hex": "#9CC9A5", "family": "Greens", "story": "Jade Valley is inspired by the serene clarity of jade stones and moss-covered streams. Its cool, airy presence refreshes interiors without overpowering them.", "scientific": "Its clean mid-green wavelengths offer comfort and visual ease, ideal for long-term use in living rooms and lounges." },
  { name: "Olive Drift", "hex": "#A5B79E", "family": "Greens", "story": "Olive Drift is a beautifully softened olive tone — earthy, muted, and naturally sophisticated.", "scientific": "With wavelengths around ~550 nm, this shade reflects a mellow light signature that reduces visual sharpness and encourages relaxation." },
  { name: "Forest Canopy", "hex": "#3C5442", "family": "Greens", "story": "Forest Canopy brings the deep tranquility of towering woodlands indoors. Rich, shadowed, and wonderfully grounding.", "scientific": "Its strong green wavelengths absorb excess brightness, creating a cocooning, retreat-like environment." },

  // BLUES
  { name: "Deepwater Blue", hex: "#003F5C", family: "Blues", story: "Deepwater Blue draws its mystery from the silent weight of the ocean trenches — a colour that feels ancient, endless and deeply grounding.", scientific: "Scientifically, blue wavelengths (~450–495 nm) are among the shorter visible spectrum, which is why this shade visually recedes, giving an illusion of expanded space." },
  { name: "Horizon Mist", hex: "#8EB9D4", family: "Blues", story: "Horizon Mist is inspired by the distant line where sky dissolves into air — the softest moment before dawn fully awakens.", scientific: "With wavelengths sitting in the mid-blue range (~470 nm), this colour reflects more light than deeper shades, creating a diffused, serene brightness." },
  { name: "Icebound Blue", hex: "#D9ECF9", family: "Blues", story: "As crisp as untouched morning frost, Icebound Blue captures the purity of winter light. Its whisper-soft tone brightens any room, giving an aura of cleanliness.", scientific: "Scientifically, the high reflectance of light blue wavelengths increases perceived illumination, allowing rooms to feel fresher and more spacious." },
  { name: "Sapphire Smoke", hex: "#3C5A73", family: "Blues", story: "Sapphire Smoke blends jewel-tone depth with a muted fogginess, creating a shade that feels both rich and refined.", scientific: "Psychologically, muted blues foster deep concentration and emotional steadiness, making them excellent for creative studios." },
  { name: "Ocean Atlas", hex: "#4A90A4", family: "Blues", story: "Ocean Atlas is inspired by cartographic blues used in vintage nautical maps — a colour that evokes exploration, travel and timeless adventure.", scientific: "With wavelengths in the ~480 nm range, it sits visually between calmness and vibrancy, creating a harmonious balance." },
  { name: "Baltic Coast", hex: "#1A4B63", family: "Blues", story: "A tribute to the dramatic northern shoreline, Baltic Coast is a deep, cool blue that brings quiet strength into interiors.", scientific: "Psychologically, darker blues trigger feelings of stability and introspection, ideal for grounding active or cluttered rooms." },
  { name: "Cloudline Blue", hex: "#BFD7EA", family: "Blues", story: "Cloudline Blue captures the airy softness that wraps the sky moments before a gentle rain. It introduces softness and quiet optimism to rooms.", scientific: "Its lighter wavelength range reflects a high percentage of light, bringing openness and an uplifting mood." },
  { name: "Monarch Blue", hex: "#355C7D", family: "Blues", story: "Monarch Blue is inspired by the velvet shadows of palaces at dusk — regal, quiet and timelessly elegant.", scientific: "With wavelengths around ~470 nm, Monarch Blue absorbs enough light to feel intimate while still offering a gentle reflective glow." },
  { name: "Polar Current", hex: "#A7CCE8", family: "Blues", story: "As refreshing as glacial meltwater, Polar Current brings crisp brightness and a sense of modern purity.", scientific: "Scientifically, the shorter wavelengths of this pale-blue range scatter light efficiently, producing a cool, airy atmosphere." },
  { name: "Tidal Grey-Blue", hex: "#6E8FAF", family: "Blues", story: "Tidal Grey-Blue sits where blue meets shadow — a beautifully balanced, stormy coastal tone. Its muted character gives interiors a meditative, grown-up feel.", scientific: "With wavelengths that sit between mid-blue and muted greys, this shade softens light and reduces visual noise." },
  { name: "Arctic Shell", hex: "#E6F3FA", family: "Blues", story: "Arctic Shell captures the crisp whiteness of ice lit by the softest blue tint. It brings purity and elegant simplicity to interiors.", scientific: "With very high light reflectance and short wavelengths, Arctic Shell enhances spaciousness and visual clarity." },
  { name: "Blue Opal", hex: "#9DC2C9", family: "Blues", story: "Inspired by the luminous glow of opaline gemstones, Blue Opal blends sea-mist softness with jewel-bright purity.", scientific: "Scientifically, wavelengths in the 480–490 nm region reflect a soothing, balanced spectrum of light, reducing strain and evoking wellness." },
  { name: "Celestial Drift", hex: "#C7DEF1", family: "Blues", story: "Celestial Drift is the colour of sky-washed daylight — soft, hopeful, weightless. It creates interiors filled with openness and clarity.", scientific: "Its lighter blue wavelengths reflect soft illumination, enhancing perceived ceiling height and spaciousness." },
  { name: "Northern Harbour", hex: "#2C536F", family: "Blues", story: "Northern Harbour reflects the deep-weathered blues of Scandinavian coasts — strong, steady and beautifully moody.", scientific: "Scientifically, short wavelengths combined with high absorption create a cocoon-like visual experience that makes rooms feel enveloped." },
  { name: "Serene Fjord", hex: "#7DAEC4", family: "Blues", story: "Serene Fjord draws inspiration from the calm waters cupped between mountains — still, reflective and majestic.", scientific: "Its wavelengths (~480 nm) deliver a balanced coolness that refreshes without overwhelming the senses." },
  { name: "Deep Harbour", hex: "#234E70", family: "Blues", story: "Deep Harbour captures the mysterious calm of the ocean at twilight. It brings a profound, grounding presence to a room, evocative of maritime depth and stability.", scientific: "A low-reflectance, deep blue (approx 460-480 nm) that absorbs light to create an intimate, introspective atmosphere. It reduces visual noise and promotes deep focus." },
  { name: "Denim Drift", hex: "#708090", family: "Blues", story: "Denim Drift is the ultimate versatile grey-blue, inspired by the timeless comfort of worn denim. It shifts beautifully with the light, feeling fresh in the morning and cozy at night.", scientific: "A desaturated blue-grey with balanced warm and cool notes. Its mutability allows it to act as a neutral background that enhances other colors without competing." },
  { name: "Jazz Blue", hex: "#2C5D87", family: "Blues", story: "Rhythmic and soulful, Jazz Blue brings a cool, melodic energy to interiors. It feels like a clear night sky or a deep, flowing melody that opens up a space.", scientific: "Sitting in the mid-blue spectrum, this shade balances stimulation with calm. Its cool temperature visually recedes, making smaller rooms appear more spacious." },

  // VIOLETS & PURPLES
  { name: "Lilac Memory", hex: "#B9AEDC", family: "Purples", story: "A nostalgic shade that recalls the soft, papery texture of old books and the gentle scent of dried lavender pressed between pages.", scientific: "This muted violet wavelength (around 400-420 nm) is complex, blending calm-inducing blue with a hint of red's warmth, fostering quiet contemplation." },
  { name: "Plum Dusk", hex: "#674172", family: "Purples", story: "The color of fruit ripening in silence, this deep plum shade holds the quiet, sophisticated sweetness of a garden at twilight.", scientific: "A low-reflectance purple that absorbs most light, creating a velvety, cocooning effect. It’s a shade that encourages introspection and calm." },
  { name: "Berry Smoke", hex: "#8E5572", family: "Purples", story: "A complex, smoky purple that sits between sweet and somber. It evokes the rich, moody tones of crushed mulberries and blackberries.", scientific: "This red-violet shade stimulates creativity while maintaining a grounded, sophisticated feel, balancing energy and calm." },
  { name: "Mauve Thread", hex: "#A1869E", family: "Purples", story: "Inspired by the dusty, elegant tones of heritage textiles and hand-spun thread, this mauve is both timeless and modern.", scientific: "A mid-tone purple with grey undertones, it has a balanced wavelength that is easy on the eyes and creates a serene, harmonious atmosphere." },
  { name: "Twilight Chant", hex: "#5A4A75", family: "Purples", story: "This shade captures the mystical moment between blue and true night, a deep and spiritual color that feels like a quiet chant.", scientific: "A blue-violet that combines the intellectual clarity of blue with the spiritual introspection of purple, ideal for spaces of focus and meditation." },
  { name: "Royal Whisper", hex: "#473259", family: "Purples", story: "A muted, shadowy purple that speaks of velvet’s understated luxury. It's regal without shouting, sophisticated without being cold.", scientific: "This deep purple absorbs light and creates a sense of depth and intimacy. Psychologically, it’s associated with wisdom and luxury." },
  { name: "Misty Lilac", hex: "#C9B4D5", family: "Purples", story: "A dreamy, modern neutral that feels like a hazy field of lavender at dawn. It’s soft, romantic, and endlessly versatile.", scientific: "A high-reflectance lilac that bounces light to make spaces feel larger and more airy, while its violet undertone adds a touch of creative energy." },
  { name: "Violet Joy", hex: "#BFA2E0", family: "Purples", story: "A bright, clear hyacinth violet that captures the uninhibited joy of a spring garden in full bloom. It is energetic, optimistic, and pure.", scientific: "A high-frequency violet wavelength that is visually stimulating and associated with creativity and youthful energy. It adds a vibrant, uplifting pop to any space." },

  // NEUTRALS
  { name: "Limestone Haze", hex: "#D7D1C9", family: "Neutrals", story: "Limestone Haze is the colour of ancient walls weathered by centuries of sun and silence. Soft, chalky, and beautifully architectural.", scientific: "Its balanced reflectance distributes light evenly, minimizing glare and enhancing room softness." },
  { name: "River Clay", hex: "#BEB4A3", family: "Neutrals", story: "River Clay carries the grounded warmth of wet stone collected along riverside ghats. It’s earthy yet refined, offering a natural sense of belonging to interiors.", scientific: "The brown-grey wavelength blend helps soften harsh lighting and creates a harmonious, organic atmosphere." },
  { name: "Dune Path", hex: "#D3C6B5", family: "Neutrals", story: "Dune Path travels across soft desert sands, capturing the quiet beauty of sun-kissed grains. This gentle beige-grey feels weightless and spacious.", scientific: "With high reflectance and warm-leaning wavelengths, Dune Path softens shadows and expands visual space." },
  { name: "Fog Veil", hex: "#C9CBCF", family: "Neutrals", story: "Fog Veil captures the mood of morning mist settling over quiet rooftops. Cool, silvery, and ethereal, it creates a calming atmosphere.", scientific: "Scientifically, its cool-spectrum wavelengths reflect light evenly, giving interiors a soft, diffused glow." },
  { name: "Ash Tone", hex: "#B2ABA2", family: "Neutrals", story: "Ash Tone embodies the stillness after a fading fire — warm, muted, and gently textured. It carries the sophistication of volcanic minerals.", scientific: "With balanced mid-range wavelengths, Ash Tone offers low visual fatigue, making it ideal for long hours spent indoors." },
  { name: "Cloud Still", hex: "#D9D9D9", family: "Neutrals", story: "Cloud Still floats between white and grey — a calm, diffused tone reminiscent of overcast daylight.", scientific: "Its high reflectance distributes natural light beautifully while avoiding stark whiteness." },
  { name: "Pewter Echo", hex: "#A8A39D", family: "Neutrals", story: "Pewter Echo carries the quiet elegance of hand-cast metal and artisanal objects. This slightly warm grey exudes understated luxury.", scientific: "With low-reflectance wavelengths and a soft-neutral spectrum, it absorbs just enough light to create intimate, sophisticated spaces." },
  { name: "Concrete Poem", hex: "#9C9A96", family: "Neutrals", story: "Concrete Poem is inspired by the disciplined geometry of modern architecture. Structured, refined, and quietly strong.", scientific: "Its mid-to-low reflectance stabilises light, making colours and textures in the room appear more defined." },
  { name: "Silver Quiet", hex: "#C1C3C8", family: "Neutrals", story: "Silver Quiet embodies the meeting of metal and mist — cool, reflective, and airy. It brings a technological sleekness balanced by gentle softness.", scientific: "With high reflectivity in the blue-grey spectrum, it enhances brightness while maintaining cool precision." },
  { name: "Graphite Trace", hex: "#5F5F60", family: "Neutrals", story: "Graphite Trace is the colour of pencil lines and mineral-rich stone — deep, precise, and wonderfully stable.", scientific: "Its low-wavelength reflectance absorbs light softly, preventing glare and sharpening room contrasts." },
  { name: "Silent Stone", hex: "#7D7F7D", family: "Neutrals", story: "Silent Stone is a medium grey inspired by carved monoliths standing still through wind and time. It feels solid, dependable, and deeply architectural.", scientific: "Scientifically, its even spectral balance prevents colour distortion and enhances material textures." },
  { name: "Charcoal Luxe", hex: "#2A2A2A", family: "Neutrals", story: "Charcoal Luxe is bold, dramatic, and intensely refined — a luxury deep tone with the richness of natural charcoal.", scientific: "Its low-light reflectance absorbs brightness, creating depth and sculpting the room’s geometry." },
  { name: "Platinum Mist", hex: "#E0E0E0", family: "Neutrals", story: "Platinum Mist feels like brushed metal softened into light. It’s modern, minimal, and perfectly balanced — neither warm nor cold, but effortlessly neutral.", scientific: "With high reflectivity, it brightens spaces while maintaining a contemporary mood." },
  { name: "Pearl Dew", hex: "#F6F4EC", family: "Neutrals", story: "Pearl Dew carries the softness of early-morning moisture resting on petals. It’s a delicate off-white with a whisper of warmth.", scientific: "Its high reflectance disperses light lightly and evenly, preventing harsh highlights." },

  // BROWNS
  { name: "Soil Song", hex: "#8B5A2B", family: "Browns", story: "Soil Song is the colour of freshly-wetted earth after the first rain — rich, grounding, and deeply nostalgic.", scientific: "Its longer red-brown wavelengths absorb excess brightness, giving interiors a natural, matte calm." },
  { name: "Burnt Timber", hex: "#4B2E14", family: "Browns", story: "Burnt Timber echoes the charred elegance of fire-kissed wood — a dark, smoky brown that whispers strength and resilience.", scientific: "Its low-wavelength reflectance absorbs light gently, sculpting shadows that make spaces feel intimate and luxurious." },
  { name: "Wine Harvest", hex: "#5A2A27", family: "Browns", story: "Wine Harvest carries the richness of crushed grapes, aged barrels, and the quiet hum of autumn vineyards.", scientific: "The red-violet wavelengths in this shade stimulate warmth while maintaining a deep, soothing undertone." },
  { name: "Sand Whisper", hex: "#D5C8B4", family: "Browns", story: "Sand Whisper is a pale, sun-softened desert beige — gentle, airy, and calming like the hush of wind over dunes.", scientific: "Its high reflectance gently lifts light within a space without overwhelming it." },
  { name: "Sandstone Beige", hex: "#D9C6A5", family: "Browns", story: "Sandstone Beige mirrors the warmth of carved heritage forts and sun-lit stone. It’s natural, grounding, and quietly majestic.", scientific: "Scientifically, its mid-range wavelength blend enhances surface textures and adds dimension." },
  { name: "Ivory Mist", hex: "#EDE7DA", family: "Browns", story: "Ivory Mist is the whisper of delicate tusks, pale shells, and dusted sunlight. It’s soft, elegant, and luminous.", scientific: "Its high reflectance promotes spaciousness and enhances natural daylight." },
  { name: "Linen Calm", hex: "#E8E1CF", family: "Browns", story: "Linen Calm captures the quiet beauty of woven natural fibers — simple, honest, and effortlessly serene.", scientific: "With warm-neutral wavelengths, it diffuses indoor light smoothly, making spaces feel soft and breathable." },
  { name: "Shell Tone", hex: "#F4EBD0", family: "Browns", story: "Shell Tone holds the balanced warmth of coastal shells and soft sand. It brings a peaceful, beach-house tranquillity to interiors.", scientific: "With high reflectance and warm undertones, it brightens spaces while keeping them cosy." },
  { name: "Coconut Husk", hex: "#9D8063", family: "Browns", story: "Coconut Husk is a warm, tropical neutral inspired by nature’s toughest shell. It’s earthy and versatile.", scientific: "Its mid-warm wavelength range softens artificial lighting, making interiors feel naturally lit." },

  // WHITES
  { name: "Chalk Poem", hex: "#F2EFE9", family: "Whites", story: "Chalk Poem feels like a wall touched by the hands of artisans — soft, powdery, and beautifully imperfect.", scientific: "With its high reflectance and subtle warm wavelengths, Chalk Poem spreads light evenly, creating a serene, contemplative atmosphere." },
  { name: "Lotus Blush", hex: "#F4B6B8", family: "Whites", story: "Lotus Blush carries the gentle warmth of blooming petals floating on still water — soft, hopeful, and emotionally soothing.", scientific: "The red-mid wavelength content creates a comforting glow without overwhelming the eye." },
  { name: "Blush Whisper", hex: "#E6C5C2", family: "Whites", story: "Blush Whisper is Scandinavian elegance distilled into a colour — airy, pale, and delicately feminine.", scientific: "Scientifically, its warm-red undertone gently absorbs harsh light, leaving rooms wrapped in a diffused, velvety glow." },
  { name: "Wild Pink", hex: "#FF69B4", family: "Whites", story: "Wild Pink is playful, bold, and joyfully alive — the electric pop of bougainvillea on a sunny day.", scientific: "Its vibrant high-energy wavelengths bounce light dynamically, making interiors feel animated and full of movement." },
  { name: "Platinum Mist", hex: "#E0E0E0", family: "Whites", story: "Platinum Mist is the essence of modern minimalism — crisp, balanced, and quietly sophisticated.", scientific: "With a strong neutral wavelength balance, it reflects light cleanly while keeping the atmosphere sleek and restrained." },
  { name: "Butterveil", hex: "#F3EEE6", family: "Whites", story: "Soft as churned cream, Butterveil adds a delicate, savory warmth to walls. It feels like a hug of light—gentle, nurturing, and incredibly soft.", scientific: "A high-LRV off-white with subtle yellow-orange undertones. It softens harsh daylight and makes artificial lighting feel warmer and more inviting." },
  { name: "Desert Linen", hex: "#EADFCC", family: "Whites", story: "Inspired by raw fabrics bleaching in the sun, Desert Linen is an earthy, textural neutral. It brings the quiet simplicity of woven cloth into modern interiors.", scientific: "With a balanced beige-grey spectral curve, this color reflects light evenly, reducing eye strain and creating a natural, organic backdrop." },
  { name: "Lemon Grain", hex: "#F5E7AA", family: "Whites", story: "Lemon Grain carries the faint, sweet scent of summer wheat and citrus. It is a whisper of yellow that makes a room feel perpetually sunlit and cheerful.", scientific: "A pale yellow-white that maximizes light scattering. Its subtle chromaticity (near 570 nm) lifts mood without the visual fatigue of saturated yellows." },
  { name: "Harvest Moon", hex: "#E6B88A", family: "Whites", story: "Harvest Moon glows with the muted apricot tones of an autumn evening. It brings a cozy, harvest-time warmth that feels abundant and restful.", scientific: "An orange-based neutral that bridges the gap between warm earth tones and light pastels. It adds perceived thermal warmth to cool, north-facing rooms." },
  { name: "Morning Rose", hex: "#F6D2D1", family: "Whites", story: "Like the first blush of dawn on a white wall, Morning Rose is tender and romantic. It introduces a fragile, floral softness that feels airy and dreamlike.", scientific: "A high-value tint of red-violet. It adds a psychological sensation of softness and care, often used to create tranquil, compassionate environments." },
  { name: "Vermilion Echo (Neutral)", hex: "#D6BFA4", family: "Whites", story: "A muted echo of earth tones, this shade is the color of dried clay and ancient stone. It grounds a space with a sense of history and natural stability.", scientific: "A mid-tone beige with lowered saturation. Its neutral wavelength response makes it an excellent anchor color that stabilizes brighter accents." },
  { name: "Whisper Moss", hex: "#D8DFD4", family: "Whites", story: "Whisper Moss is the color of stillness—a faint, misty green that recalls early morning dew. It brings a breath of fresh, cool air into any room.", scientific: "A very pale green-grey. Green wavelengths (approx 550 nm) are the easiest for the human eye to process, making this an exceptionally restful background color." },
  { name: "Sky Fragment", hex: "#D6E2EB", family: "Whites", story: "A broken piece of a perfect summer sky, captured on your wall. Sky Fragment is airy, expansive, and infinitely calm, lifting the ceiling of any room.", scientific: "A cool white with blue undertones. It visually expands space by mimicking the atmospheric scattering of outdoor light (Rayleigh scattering effect)." },
  { name: "Cloud Linen", hex: "#D8DFD4", family: "Whites", story: "Cloud Linen marries the texture of fabric with the weightlessness of vapor. It is a clean, crisp grey-green that feels both organized and ethereal.", scientific: "Identical in tone to soft natural light, this shade has a balanced spectral distribution that provides a clean, neutral canvas for interior furnishings." },
  { name: "Haze Bloom", hex: "#D6E2EB", family: "Whites", story: "Haze Bloom captures the purple-blue drift of distant mountains. It is a mystical, soft color that adds depth and a quiet, contemplative mood.", scientific: "A cool, high-value violet-blue. It absorbs warm light frequencies, helping to cool down 'hot' rooms with excessive direct sunlight." },

  // ACCENTS
  { name: "Whispered Memory", hex: "#D3C6B2", family: "Accents", story: "Whispered Memory feels like stepping into an old library where time moves slower — faded parchment, heritage walls, and the soft warmth of forgotten letters.", scientific: "Scientifically, its balanced wavelength mix softens shadows and creates a classic, timeless look in any room." },
  { name: "Morning Hush", hex: "#B2FF05", family: "Accents", story: "Morning Hush is the quiet brightness of early sunrise over fresh fields — an uplifting yellow-green that carries the optimism of a new day.", scientific: "Scientifically, its bright high-frequency wavelengths energise space, making it perfect for kitchens, studios, or children’s play areas." },
  { name: "Terracotta Veil", hex: "#E0B79F", family: "Accents", story: "Terracotta Veil is a soft clay blush — the gentler, more refined cousin of terracotta. It holds the warmth of pottery, the comfort of earthen textures.", scientific: "Its warm red-orange wavelengths create a flattering glow on skin and surfaces." }

].map((c, i) => ({ ...c, id: `col-${i}` }));

export default function App() {
  const [view, setView] = useState('library'); 
  const [selectedColor, setSelectedColor] = useState<any>(null);

  const handleColorSelect = (color: any) => {
    setSelectedColor(color);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">
      <AnimatePresence mode='wait'>
        {view === 'library' ? (
          <LibraryView key="library" onSelect={handleColorSelect} />
        ) : (
          <ProductPage key="product" color={selectedColor} onBack={() => setView('library')} />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- 4. VIEW COMPONENTS ---

const LibraryView = ({ onSelect }: { onSelect: (c: any) => void }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColors = useMemo(() => {
    return ALL_COLORS.filter(color => {
      const matchesFilter = activeFilter === 'all' || color.family === activeFilter;
      const matchesSearch = color.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-24 pb-20"
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
        {/* Filter Rail */}
        <div className="w-full md:w-64 shrink-0 md:sticky md:top-32 md:h-[calc(100vh-10rem)] flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-serif text-stone-900 mb-2">Palette</h1>
            <p className="text-xs text-stone-500 uppercase tracking-widest">{filteredColors.length} Pigments</p>
          </div>
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
            <input 
              type="text" placeholder="Search shade..."
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-stone-400 rounded-sm placeholder:text-stone-400"
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="space-y-2 overflow-y-auto pr-2 scrollbar-hide max-h-full">
            {FILTERS.map((f) => (
              <button key={f.id} onClick={() => setActiveFilter(f.id)} className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all group hover:bg-stone-50", activeFilter === f.id ? "bg-stone-100" : "")}>
                <span className={cn("w-6 h-6 rounded-full border border-stone-200 shadow-sm relative", f.id === 'all' ? "bg-white" : "")} style={f.id !== 'all' ? { backgroundColor: f.hex } : {}}>
                   {f.id === 'all' && <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-stone-400">ALL</span>}
                </span>
                <span className={cn("text-sm font-medium transition-colors", activeFilter === f.id ? "text-stone-900" : "text-stone-500 group-hover:text-stone-800")}>{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Grid */}
        <div className="flex-1">
           <div className="mb-6 flex items-center justify-between border-b border-stone-100 pb-4">
              <h2 className="text-xl font-serif text-stone-900">{activeFilter === 'all' ? 'All Colors' : `The ${activeFilter} Collection`}</h2>
              {activeFilter !== 'all' && <button onClick={() => setActiveFilter('all')} className="text-xs text-stone-400 hover:text-stone-900 flex items-center gap-1"><X size={12}/> Clear Filter</button>}
           </div>
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10">
              {filteredColors.map((color) => (
                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={color.id} onClick={() => onSelect(color)} className="group cursor-pointer flex flex-col gap-3">
                   <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-sm border border-stone-100 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                      <div className="absolute inset-0 shadow-inner pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <span className="bg-white/90 backdrop-blur-sm text-stone-900 px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-sm rounded-full">View Shade</span>
                      </div>
                   </div>
                   <div className="px-1"><h3 className="text-sm font-bold text-stone-900">{color.name}</h3><p className="text-[10px] text-stone-400 uppercase tracking-widest font-medium">{color.family}</p></div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductPage = ({ color, onBack }: { color: any, onBack: () => void }) => {
  const [activeBrand, setActiveBrand] = useState<keyof typeof BRAND_CONTENT>('ceramic');
  const [activeFinishId, setActiveFinishId] = useState(BRAND_CONTENT['ceramic'].finishes[0].id);
  const [selectedSize, setSelectedSize] = useState('4ltr');
  const [quantity, setQuantity] = useState(1);
  
  // TOAST STATE
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // GLOBAL CART HOOK
  const { addToCart } = useCart();

  const brandData = BRAND_CONTENT[activeBrand];
  
  // Safe finish retrieval (in case switching brands causes a mismatch in IDs)
  const finishData = brandData.finishes.find(f => f.id === activeFinishId) || brandData.finishes[0];
  
  const sizeOption = SIZE_OPTIONS.find(s => s.id === selectedSize) || SIZE_OPTIONS[1];

  // Calculate Price: Base * Size Multiplier
  const unitPrice = Math.round(finishData.price * sizeOption.multiplier);
  const totalPrice = unitPrice * quantity;

  const handleBrandChange = (brandId: keyof typeof BRAND_CONTENT) => {
    setActiveBrand(brandId);
    // Reset to the first finish of the new brand to avoid invalid IDs
    setActiveFinishId(BRAND_CONTENT[brandId].finishes[0].id);
  };

  const handleAddToCart = () => {
    addToCart({
      productId: color.id,
      name: color.name,
      brand: activeBrand,
      finish: finishData.label,
      price: unitPrice,
      hex: color.hex,
      size: sizeOption.label,
      qty: quantity
    });

    setToastMessage(`Added ${quantity} x ${color.name} (${sizeOption.label}) to your bag.`);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000); 
  };

  const HERO_IMG = "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const TEXTURE_IMG = "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white relative">
      
      <Toast message={toastMessage} isVisible={toastVisible} onClose={() => setToastVisible(false)} />

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Visuals */}
        <div className="w-full lg:w-[60%] bg-stone-50 relative">
           <button onClick={onBack} className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all">
              <ArrowLeft size={14} /> Library
           </button>
           <div className="flex flex-col gap-1 p-1 lg:p-4">
              <div className="relative w-full aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm">
                 <img src={HERO_IMG} className="w-full h-full object-cover" alt="Room" />
                 <div className="absolute inset-0 mix-blend-multiply opacity-30 transition-colors duration-700" style={{ backgroundColor: color?.hex || '#ccc' }} />
              </div>
              <div className="relative w-full aspect-video overflow-hidden rounded-sm">
                 <img src={TEXTURE_IMG} className="w-full h-full object-cover" alt="Texture" />
                 <div className="absolute inset-0 mix-blend-multiply opacity-20 transition-colors duration-700" style={{ backgroundColor: color?.hex || '#ccc' }} />
              </div>
           </div>
        </div>

        {/* Right Details */}
        <div className="w-full lg:w-[40%] bg-white px-8 md:px-12 py-12 lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto border-l border-stone-100 flex flex-col">
            <div className="mb-auto">
                <span className="text-amber-800 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Premium Finish</span>
                <h1 className="text-5xl font-serif text-stone-900 leading-[1] mb-2">{color?.name || 'Selected Color'}</h1>
                <p className="text-stone-400 text-sm mb-10">{finishData.title}</p>

                {/* 1. BRAND SELECTION */}
                <div className="mb-8">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 block">1. Choose Brand / Usage</label>
                  <div className="flex flex-wrap gap-2 border-b border-stone-100 pb-4">
                     {Object.values(BRAND_CONTENT).map((brand) => (
                       <button 
                          key={brand.id} 
                          onClick={() => handleBrandChange(brand.id as keyof typeof BRAND_CONTENT)} 
                          className={cn(
                             "text-xs px-3 py-2 rounded-md transition-all font-medium border", 
                             activeBrand === brand.id 
                                ? "bg-stone-100 border-stone-300 text-stone-900" 
                                : "bg-white border-transparent text-stone-400 hover:text-stone-600 hover:bg-stone-50"
                          )}
                        >
                         {brand.name}
                       </button>
                     ))}
                  </div>
                </div>

                {/* 2. FINISH SELECTION */}
                <div className="mb-8">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 block">2. Select Finish</label>
                   <div className="flex flex-wrap gap-2">
                      {brandData.finishes.map((finish) => (
                        <button key={finish.id} onClick={() => setActiveFinishId(finish.id)} className={cn("px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300", activeFinishId === finish.id ? "bg-stone-900 text-white border-stone-900 shadow-lg scale-105" : "bg-white text-stone-500 border-stone-200 hover:border-stone-400")}>
                          {finish.label}
                        </button>
                      ))}
                   </div>
                </div>

                {/* 3. SIZE SELECTION */}
                <div className="mb-10">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2"><Package size={12}/> 3. Select Size</label>
                   <div className="grid grid-cols-3 gap-3">
                      {SIZE_OPTIONS.map((size) => (
                        <button 
                          key={size.id} 
                          onClick={() => setSelectedSize(size.id)} 
                          className={cn(
                            "flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200", 
                            selectedSize === size.id 
                              ? "bg-stone-50 border-stone-900 ring-1 ring-stone-900" 
                              : "border-stone-200 hover:border-stone-400"
                          )}
                        >
                          <span className={cn("text-xs font-bold uppercase mb-1", selectedSize === size.id ? "text-stone-900" : "text-stone-500")}>{size.label}</span>
                          <span className="text-[10px] text-stone-400">${Math.round(finishData.price * size.multiplier)}</span>
                        </button>
                      ))}
                   </div>
                </div>

                {/* 4. QUANTITY SELECTION */}
                <div className="mb-8">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 block">4. Quantity</label>
                  <div className="flex items-center gap-4">
                     <div className="flex items-center border border-stone-200 rounded-full p-1">
                        <button 
                           onClick={() => setQuantity(Math.max(1, quantity - 1))}
                           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
                        >
                           <Minus size={14} />
                        </button>
                        <span className="w-12 text-center text-sm font-bold text-stone-900">{quantity}</span>
                        <button 
                           onClick={() => setQuantity(quantity + 1)}
                           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
                        >
                           <Plus size={14} />
                        </button>
                     </div>
                     <p className="text-xs text-stone-400">Total: <strong className="text-stone-900">${totalPrice}</strong></p>
                  </div>
                </div>

                <div className="border-t border-stone-100 pt-8 mt-4">
                   <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-3xl font-serif text-stone-900">${totalPrice}</p>
                        <p className="text-xs text-stone-500 mt-1">{sizeOption.label} · {quantity} Unit(s)</p>
                      </div>
                      <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full border border-stone-200 shadow-sm" style={{ backgroundColor: color?.hex }} /><span className="text-xs font-bold uppercase">{color?.name}</span></div>
                   </div>

                   <button 
                     onClick={handleAddToCart}
                     className="w-full bg-stone-900 text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-transform active:scale-[0.98] mb-3"
                   >
                     Add to Cart
                   </button>
                   <button className="w-full bg-stone-100 text-stone-900 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">Order Peel & Stick Sample</button>
                </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-stone-100 grid grid-cols-3 gap-4 text-center">
                <div><Droplets className="w-4 h-4 mx-auto mb-2 text-stone-400" /><span className="text-[10px] font-bold uppercase block text-stone-900">Washable</span></div>
                <div><Sun className="w-4 h-4 mx-auto mb-2 text-stone-400" /><span className="text-[10px] font-bold uppercase block text-stone-900">Low VOC</span></div>
                <div><Shield className="w-4 h-4 mx-auto mb-2 text-stone-400" /><span className="text-[10px] font-bold uppercase block text-stone-900">{finishData.details.specs.Warranty ? String(finishData.details.specs.Warranty).split(' ')[0] : 'Lifetime'}</span></div>
            </div>
        </div>
      </div>
      <div className="bg-white border-t border-stone-200">
         <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
            <AnimatePresence mode="wait">
              <motion.div key={`${activeBrand}-${activeFinishId}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-7">
                     <span className="text-amber-700 font-serif italic text-2xl mb-6 block">{brandData.tagline}</span>
                     <div className="mb-12">
                       <h2 className="text-4xl font-bold text-stone-900 mb-6 leading-tight">{color.name}</h2>
                       <div className="flex flex-col gap-8">
                         {color.story && (
                           <div>
                             <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2"><BookOpen size={16} /> Story</h3>
                             <p className="text-lg text-stone-600 leading-relaxed font-serif">{color.story}</p>
                           </div>
                         )}
                         {color.scientific && (
                           <div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
                             <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2"><Lightbulb size={16} /> The Science of Mood</h3>
                             <p className="text-sm text-stone-700 leading-relaxed">{color.scientific}</p>
                           </div>
                         )}
                       </div>
                     </div>

                     <div className="mb-12">
                       <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 flex items-center gap-2"><CheckCircle2 size={16} /> What it does</h3>
                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {finishData.details.whatItDoes.map((item, i) => (<li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed border-l-2 border-stone-100 pl-4">{item}</li>))}
                       </ul>
                     </div>
                     
                     <div className="bg-stone-50 p-8 rounded-lg">
                       <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 flex items-center gap-2"><Star size={16} /> Why it's different</h3>
                       <ul className="space-y-3">{finishData.details.whyDifferent.map((item, i) => (<li key={i} className="text-stone-800 text-base font-medium">{item}</li>))}</ul>
                     </div>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="sticky top-12">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-8 pb-2 border-b border-stone-200">Technical Specifications</h3>
                      <div className="space-y-6">
                        {Object.entries(finishData.details.specs).map(([key, value]) => (
                          <div key={key} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 pb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-stone-400 w-32">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="text-sm font-semibold text-stone-900 text-right">{value as string}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </motion.div>
            </AnimatePresence>
         </div>
      </div>
    </motion.div>
  );
};
