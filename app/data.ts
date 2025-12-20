// app/data.ts

export const SIZE_OPTIONS = [
    { id: '1ltr', label: '1 Litre', multiplier: 1.0 },
    { id: '4ltr', label: '4 Litres', multiplier: 3.8 },
    { id: '20ltr', label: '20 Litres', multiplier: 18.0 },
  ];
  
  export const FILTERS = [
    { id: 'all', label: 'All Colors', hex: '#E5E5E5' },
    { id: 'Reds', label: 'Reds', hex: '#B55233' },
    { id: 'Oranges', label: 'Oranges', hex: '#E27A1A' },
    { id: 'Yellows', label: 'Yellows', hex: '#FFD44D' },
    { id: 'Greens', label: 'Greens', hex: '#38A344' },
    { id: 'Blues', label: 'Blues', hex: '#A8C4E3' },
    { id: 'Violets', label: 'Violets', hex: '#B9AEDC' },
    { id: 'Pinks', label: 'Pinks', hex: '#F4C2C2' },
    { id: 'Neutrals', label: 'Neutrals', hex: '#D7D1C9' },
    { id: 'Browns', label: 'Browns', hex: '#8B5A2B' },
    { id: 'Whites', label: 'Whites', hex: '#F2EFE9' },
  ];
  
  export const BRAND_CONTENT = {
    ceramic: {
      id: 'ceramic',
      name: 'Ceramic Society (INT&EXT)',
      tagline: 'Soft walls. Calm spaces. Timeless elegance.',
      finishes: [
        {
          id: 'mineral-matt',
          label: 'Mineral Matt',
          title: 'Ceramic Society™ Matt Finish',
          price: 450,
          description: 'A premium matt interior paint with a smooth, refined surface that absorbs light beautifully.',
          details: {
            whatItDoes: ['Creates a smooth, even matt finish', 'Delivers excellent hiding & uniform coverage', 'Reduces glare for relaxed spaces', 'Early stain resistance'],
            whyDifferent: ['Nano-pigments for exceptional opacity', 'Anti bacterial property', 'Mineral-inspired colours with depth', 'Ultra-low VOC'],
            specs: { Finish: 'Matt', Coverage: '110–140 sq.ft/L', Coats: '2', DryTime: '30 min', Warranty: '7-year' }
          }
        },
        {
          id: 'high-gloss',
          label: 'High Gloss',
          title: 'Ceramic Society™ Glossy Finish',
          price: 480,
          description: 'A rich, reflective interior paint that brings colour to life. Crafted for bold interiors.',
          details: {
            whatItDoes: ['Delivers a smooth, luminous glossy finish', 'Enhances colour richness & clarity', 'Resists stains & furniture marks'],
            whyDifferent: ['Nano-resin technology for durability', 'High colour saturation', 'Ultra Low-VOC'],
            specs: { Finish: 'Glossy', Coverage: '100–130 sq.ft/L', Coats: '2', DryTime: '30 min', Warranty: '8-year' }
          }
        }
      ]
    },
    ellora: {
      id: 'ellora',
      name: 'ELLORA by elements(INTERIOR)',
      tagline: 'The purest expression of interior luxury.',
      finishes: [
        {
          id: 'matt',
          label: 'Matt',
          title: 'Ellora™ Pure Matt',
          price: 650,
          description: 'Luxury that does not announce itself. A soft, powdery matt finish.',
          details: {
            whatItDoes: ['Transforms walls into quietly expressive surfaces', 'Eliminates imperfections', 'Allows colour to appear richer'],
            whyDifferent: ['Mineral-first foundation', 'Nano-engineered particles', 'Intelligent film architecture'],
            specs: { Finish: 'Powder Matt', Coverage: '120–140 sq.ft/L', Coats: '2', Warranty: 'Lifetime' }
          }
        },
        {
          id: 'satin-silky',
          label: 'Satin/Silky',
          title: 'Ellora™ Silky Satin',
          price: 680,
          description: 'Smooth, tactile, gently luminous. Feels like silk on the wall.',
          details: {
            whatItDoes: ['Offers a gentle luminosity', 'Refined balance of warmth', 'Stain & mark resistance'],
            whyDifferent: ['Material Intelligence™ technology', 'Engineered for tactile luxury', 'Free from harsh chemicals'],
            specs: { Finish: 'Silky Satin', Coverage: '120–140 sq.ft/L', Coats: '2', Warranty: 'Lifetime' }
          }
        },
        {
          id: 'high-gloss',
          label: 'High Gloss',
          title: 'Ellora™ Mirror Gloss',
          price: 720,
          description: 'Deep colour, precise reflection. For interiors that make architectural statements.',
          details: {
            whatItDoes: ['Delivers precise reflection', 'Enhances architectural features', 'Creates depth'],
            whyDifferent: ['Advanced polymer matrix', 'Superior stain resistance', 'Long-lasting shine'],
            specs: { Finish: 'Mirror Gloss', Coverage: '120–140 sq.ft/L', Coats: '3', Warranty: 'Lifetime' }
          }
        }
      ]
    },
    minera: {
      id: 'minera',
      name: 'MINERA(EXTERIOR)',
      tagline: 'Graphene & quantum intelligence for enduring exteriors.',
      finishes: [
        {
          id: 'x05',
          label: 'X 05',
          title: 'Minera™ X5',
          price: 380,
          description: 'Reliable protection. Intelligent materials. 5-Year Performance Warranty.',
          details: {
            whatItDoes: ['Protects against rain and sun', 'Prevents algae and fungal growth', 'Maintains brightness'],
            whyDifferent: ['Graphene-reinforced durability', 'Hydrophobic surface', 'Improved UV resistance'],
            specs: { Finish: 'Matt', Warranty: '5-Year', Coverage: '60 sq.ft/L', IdealFor: 'Residential/Low-rise' }
          }
        },
        {
          id: 'x10',
          label: 'X 10',
          title: 'Minera™ X10',
          price: 520,
          description: 'Advanced weather intelligence. 10-Year Performance Warranty.',
          details: {
            whatItDoes: ['Superior water repellence', 'Reduced dirt pickup', 'Resists micro-cracks'],
            whyDifferent: ['Quantum-dot UV modulation', 'Graphene strength', 'Strong colour retention'],
            specs: { Finish: 'Low Sheen', Warranty: '10-Year', Coverage: '55 sq.ft/L', IdealFor: 'Villas/High-Rainfall' }
          }
        },
        {
          id: 'x15plus',
          label: 'X 15 PLUS',
          title: 'Minera™ X20',
          price: 750,
          description: 'Extreme resilience. Material intelligence perfected. 20-Year Warranty.',
          details: {
            whatItDoes: ['Maximum hydrophobicity', 'Outstanding crack-bridging', 'Superior algae resistance'],
            whyDifferent: ['High-density graphene architecture', 'Exceptional UV stability', 'Thermal movement tolerance'],
            specs: { Finish: 'Satin', Warranty: '20-Year', Coverage: '50 sq.ft/L', IdealFor: 'Coastal/Extreme' }
          }
        }
      ]
    },
    woods_metals: {
      id: 'woods_metals',
      name: 'WOODS&METALS',
      tagline: 'Enduring beauty for trim, doors, and details.',
      finishes: [
        {
          id: 'matt',
          label: 'MATT',
          title: 'W&M Enamel Matt',
          price: 350,
          description: 'A modern, flat finish for metal gates, wooden doors, and furniture.',
          details: {
            whatItDoes: ['Hides surface imperfections', 'Provides a modern look', 'Durable protection'],
            whyDifferent: ['Urethane-modified alkyd', 'Anti-rust inhibitors', 'Quick drying'],
            specs: { Finish: 'Matt', Usage: 'Wood & Metal', DryTime: '4 hrs', Warranty: '10-Year' }
          }
        },
        {
          id: 'satin',
          label: 'SATIN',
          title: 'W&M Enamel Satin',
          price: 370,
          description: 'A soft, buttery sheen that mimics the glow of hand-rubbed wax.',
          details: {
            whatItDoes: ['Resists fingerprints and scuffs', 'Easy to wipe clean', 'Subtle glow'],
            whyDifferent: ['Self-leveling agents', 'Flexible film technology', 'Yellowing resistant'],
            specs: { Finish: 'Satin', Usage: 'Wood & Metal', DryTime: '4 hrs', Warranty: '10-Year' }
          }
        }
      ]
    }
  };
  
  const RAW_COLORS = [
      // --- PINKS ---
      { name: "Baby’s Pink", hex: "#F4C2C2", family: "Pinks", story: "Tenderness made visible—soft, nurturing, and quietly reassuring. It brings a sense of care and emotional safety into interiors.", scientific: "Operates around 500–540 nm after light scattering. Reduces aggression and lowers stress." },
      { name: "Cotton Candy", hex: "#D77899", family: "Pinks", story: "Playful yet balanced—a nostalgic sweetness grounded by maturity. Adds joy without frivolity.", scientific: "Reflects light across 510–540 nm. Stimulates positive emotion and social warmth." },
      { name: "Rose Dew", hex: "#EFDCE6", family: "Pinks", story: "Captures the first light resting on petals at dawn—delicate, airy, and almost weightless.", scientific: "Softened red wavelengths around 500–530 nm. Diffuses light evenly to encourage openness." },
      { name: "Fuchsia Dream", hex: "#E15582", family: "Pinks", story: "Bold femininity with confidence—vivid, expressive, and unmistakably modern.", scientific: "Closer to 480–500 reflected pink-red light. Activates visual excitement." },
      { name: "Fire Truck", hex: "#B62615", family: "Pinks", story: "Intensity and urgency distilled into colour. Bold and commanding, it injects raw energy.", scientific: "Deep red spectrum around 620–640 nm. Elevates heart rate and alertness." },
      { name: "Stop Signal", hex: "#D73543", family: "Pinks", story: "Unmistakable and assertive—a colour designed to be noticed. Carries authority and clarity.", scientific: "Reflecting wavelengths near 620 nm. Stimulates action and decisiveness." },
      { name: "Crimson Velvet", hex: "#C43445", family: "Pinks", story: "Depth, luxury, and restraint combined. Inspired by ceremonial fabrics and rose petals at dusk.", scientific: "Selective reflection around 630–650 nm. Fosters intimacy and grounding." },
      { name: "Lotus Blush", hex: "#E6C5C2", family: "Pinks", story: "Softness rooted in purity—a calm, spiritual pink inspired by sacred petals.", scientific: "Gentle red diffusion near 510–540 nm. Encourages emotional balance." },
  
      // --- GREENS ---
      { name: "Nature’s Mood", hex: "#38A344", family: "Greens", story: "Growth made visible—fresh, vital, and deeply alive. Grounds interiors in renewal.", scientific: "Reflects wavelengths around 495–570 nm. Naturally restful for the eyes." },
      { name: "Morning Hush", hex: "#FFF4B2", family: "Greens", story: "Soft daylight filtered through leaves—a gentle bridge between green energy and yellow warmth.", scientific: "Reflected light near 560–580 nm. Enhances clarity and optimism." },
      { name: "Sage Poem", hex: "#9EA48A", family: "Greens", story: "Herbal, quiet, and wise—like dried leaves resting in sunlit kitchens.", scientific: "Mid-spectrum wavelengths around 520–550 nm. Reduces anxiety and supports grounding." },
      { name: "Jade Whisper", hex: "#7FAF9D", family: "Greens", story: "Fluid and reflective, inspired by polished stone and monsoon foliage.", scientific: "Sitting near 500–530 nm. Balances coolness with softness." },
      { name: "Pistachio Bloom", hex: "#B6D3A9", family: "Greens", story: "Gentle optimism—a pastel green that feels modern and calming.", scientific: "High reflectance around 520–550 nm. Fosters relaxation and visual comfort." },
      { name: "Surf Green", hex: "#88D8C0", family: "Greens", story: "Captures ocean foam and coastal air—fresh, playful, and open.", scientific: "Blue-green wavelengths around 490–510 nm. Encourages creativity and lightness." },
      { name: "Exotic Spa", hex: "#9ED9CC", family: "Greens", story: "Tranquillity engineered—cool, clean, and restorative.", scientific: "Diffuses light at 500–520 nm. Lowers stress and heart rate." },
      { name: "Forest Canopy", hex: "#2D4739", family: "Greens", story: "Deep shelter—quiet, shaded, and protective. Creates enveloping depth.", scientific: "Deep green wavelengths near 540–560 nm. Symbolises safety and endurance." },
      { name: "Limelight", hex: "#BFFF00", family: "Greens", story: "High-energy freshness—bold, electric, and youthful.", scientific: "Intense yellow-green light around 560 nm. Stimulates visual alertness." },
      { name: "Mint Mirage", hex: "#BFD8C4", family: "Greens", story: "Cooling and airy, like shade on a summer afternoon.", scientific: "Balanced reflectance around 500–520 nm. Promotes calm focus." },
      { name: "Olive Anthem", hex: "#8B8C65", family: "Greens", story: "Earthy and grounded—a green touched by dust and sun.", scientific: "Muted reflectance near 540–560 nm. Enhances stability and maturity." },
      { name: "Deep Teal", hex: "#014D4E", family: "Greens", story: "Sophistication rooted in depth—modern, aquatic, and architectural.", scientific: "Narrow blue-green wavelengths around 480–500 nm. Inspires focus and intelligence." },
  
      // --- REDS & TERRACOTTAS ---
      { name: "Terracotta Flame", hex: "#B55233", family: "Reds", story: "Carries the warmth of kiln-fired clay. Feels grounded and timeless.", scientific: "610–630 nm red-orange wavelength stimulates warmth." },
      { name: "Jaipur Rouge", hex: "#A33E2A", family: "Reds", story: "Heritage walls at sunset.", scientific: "600 nm depth." },
      { name: "Desert Rose", hex: "#C1695B", family: "Reds", story: "Poetry of dusty winds and dried petals.", scientific: "590–610 nm balances warmth and calm." },
      { name: "Clay Ember", hex: "#B15A3D", family: "Reds", story: "Rain meets baked earth.", scientific: "600 nm warmth." },
      { name: "Vermilion Echo", hex: "#E34234", family: "Reds", story: "Ritual and celebration.", scientific: "620–635 nm energy." },
      { name: "Coral Chant", hex: "#E27D60", family: "Reds", story: "Coastal freshness.", scientific: "580–600 nm optimism." },
      { name: "Heartfire", hex: "#8B1A1A", family: "Reds", story: "Deep garnet red.", scientific: "Absorbs light, 650 nm depth." },
      { name: "Reef Bloom", hex: "#FF7F6A", family: "Reds", story: "Tropical coral reefs.", scientific: "580–600 nm vitality." },
  
      // --- ORANGES ---
      { name: "Marigold Muse", hex: "#E27A1A", family: "Oranges", story: "Festive mornings and saffron light.", scientific: "590–620 nm creativity." },
      { name: "Burnt Saffron", hex: "#CC5803", family: "Oranges", story: "Temple lamps and spices.", scientific: "600 nm strength." },
      { name: "Sunset Resin", hex: "#B85B1F", family: "Oranges", story: "Tree sap catching light.", scientific: "580–600 nm comfort." },
      { name: "Copper Verse", hex: "#B66B33", family: "Oranges", story: "Polished utensils.", scientific: "Near 600 nm warmth." },
  
      // --- YELLOWS ---
      { name: "Canary Song", hex: "#FFD44D", family: "Yellows", story: "Sunlight in a quiet room.", scientific: "570–590 nm alertness." },
      { name: "Golden Dusk", hex: "#E2B144", family: "Yellows", story: "Fading light over dunes.", scientific: "580 nm warmth." },
      { name: "Turmeric Aura", hex: "#E8B923", family: "Yellows", story: "Sacred vibrancy.", scientific: "580 nm clarity." },
      { name: "Mango Spirit", hex: "#FFA62B", family: "Yellows", story: "Tropical joy.", scientific: "585–600 nm happiness." },
      { name: "Saharan Glow", hex: "#FFD77F", family: "Yellows", story: "Soft desert sand.", scientific: "570–590 nm calm." },
      { name: "First Light", hex: "#FFA24A", family: "Yellows", story: "Sunrise captured in pigment.", scientific: "580–600 nm motivation." },
      { name: "Land of Dry", hex: "#FFD77F", family: "Yellows", story: "Parched desert earth.", scientific: "580 nm stability." },
  
      // --- BLUES ---
      { name: "Sky Fragment", hex: "#A8C4E3", family: "Blues", story: "The colour of distance.", scientific: "470–490 nm openness." },
      { name: "Indigo Verse", hex: "#264B8A", family: "Blues", story: "Dye vats of Kutch.", scientific: "445–460 nm depth." },
      { name: "Cerulean Drift", hex: "#6BAED6", family: "Blues", story: "Open skies meeting calm seas.", scientific: "480 nm brightness." },
      { name: "River Mist", hex: "#7DAFC4", family: "Blues", story: "Flowing water.", scientific: "480–490 nm calm." },
      { name: "Deep Harbour", hex: "#234E70", family: "Blues", story: "Ocean at twilight.", scientific: "460 nm authority." },
      { name: "Steel Horizon", hex: "#6C7A89", family: "Blues", story: "Storm clouds meeting concrete.", scientific: "Balanced reflectance." },
      { name: "Peacock Plume", hex: "#0F52BA", family: "Blues", story: "Iridescent feathers.", scientific: "450 nm clarity." },
      { name: "Powder Sky", hex: "#C3DAE3", family: "Blues", story: "Coastal air.", scientific: "480–500 nm lightness." },
      { name: "Deep Imprint", hex: "#1A1A2E", family: "Blues", story: "Ink pressed into paper.", scientific: "440 nm focus." },
      { name: "Urban Mist", hex: "#708090", family: "Blues", story: "Denim skies.", scientific: "Stabilises lighting." },
      { name: "True Steel", hex: "#4682B4", family: "Blues", story: "Industrial design.", scientific: "470 nm reliability." },
      { name: "Frozen Silence", hex: "#003366", family: "Blues", story: "Polar seas.", scientific: "440–450 nm contemplation." },
      { name: "Midnight Tempo", hex: "#2C5DAA", family: "Blues", story: "Electric energy.", scientific: "460–470 nm intensity." },
      { name: "Shadow Blue", hex: "#1A1A2E", family: "Blues", story: "Night and water.", scientific: "Introspection." },
  
      // --- VIOLETS ---
      { name: "Lilac Memory", hex: "#B9AEDC", family: "Violets", story: "Old books and lavender.", scientific: "400-420 nm calm." },
      { name: "Plum Dusk", hex: "#674172", family: "Violets", story: "Fruit ripening in silence.", scientific: "Low-reflectance depth." },
      { name: "Berry Smoke", hex: "#8E5572", family: "Violets", story: "Crushed mulberries.", scientific: "Red-violet creativity." },
      { name: "Mauve Thread", hex: "#A1869E", family: "Violets", story: "Heritage textiles.", scientific: "Balanced wavelength." },
      { name: "Twilight Chant", hex: "#5A4A75", family: "Violets", story: "Between blue and night.", scientific: "Intellectual clarity." },
      { name: "Royal Whisper", hex: "#473259", family: "Violets", story: "Velvet’s muted luxury.", scientific: "Absorbs light." },
      { name: "Misty Lilac", hex: "#C9B4D5", family: "Violets", story: "Lavender at dawn.", scientific: "High-reflectance airy." },
      { name: "Violet Joy", hex: "#BFA2E0", family: "Violets", story: "Spring garden.", scientific: "High-frequency energy." },
  
      // --- NEUTRALS ---
      { name: "Limestone Haze", hex: "#D7D1C9", family: "Neutrals", story: "Ancient walls.", scientific: "Balanced reflectance." },
      { name: "River Clay", hex: "#BEB4A3", family: "Neutrals", story: "Wet stone.", scientific: "Brown-grey warmth." },
      { name: "Dune Path", hex: "#D3C6B5", family: "Neutrals", story: "Soft desert sands.", scientific: "High reflectance." },
      { name: "Fog Veil", hex: "#C9CBCF", family: "Neutrals", story: "Morning mist.", scientific: "Cool-spectrum." },
      { name: "Ash Tone", hex: "#B2ABA2", family: "Neutrals", story: "Stillness after fire.", scientific: "Mid-range wavelength." },
      { name: "Cloud Still", hex: "#D9D9D9", family: "Neutrals", story: "Overcast daylight.", scientific: "High reflectance." },
      { name: "Pewter Echo", hex: "#A8A39D", family: "Neutrals", story: "Hand-cast metal.", scientific: "Low-reflectance." },
      { name: "Concrete Poem", hex: "#9C9A96", family: "Neutrals", story: "Modern architecture.", scientific: "Mid-to-low reflectance." },
      { name: "Silver Quiet", hex: "#C1C3C8", family: "Neutrals", story: "Metal and mist.", scientific: "Blue-grey brightness." },
      { name: "Graphite Trace", hex: "#5F5F60", family: "Neutrals", story: "Pencil lines.", scientific: "Low-wavelength focus." },
      { name: "Silent Stone", hex: "#7D7F7D", family: "Neutrals", story: "Carved monoliths.", scientific: "Even spectral balance." },
      { name: "Charcoal Luxe", hex: "#2A2A2A", family: "Neutrals", story: "Natural charcoal.", scientific: "Low-light depth." },
      { name: "Platinum Mist", hex: "#E0E0E0", family: "Neutrals", story: "Brushed metal.", scientific: "High reflectivity." },
      { name: "Pearl Dew", hex: "#F6F4EC", family: "Neutrals", story: "Moisture on petals.", scientific: "Disperses light." },
  
      // --- BROWNS ---
      { name: "Soil Song", hex: "#8B5A2B", family: "Browns", story: "Freshly-wetted earth.", scientific: "Red-brown absorption." },
      { name: "Burnt Timber", hex: "#4B2E14", family: "Browns", story: "Charred wood.", scientific: "Sculpts shadows." },
      { name: "Wine Harvest", hex: "#5A2A27", family: "Browns", story: "Crushed grapes.", scientific: "Red-violet warmth." },
      { name: "Sand Whisper", hex: "#D5C8B4", family: "Browns", story: "Sun-softened beige.", scientific: "High reflectance." },
      { name: "Sandstone Beige", hex: "#D9C6A5", family: "Browns", story: "Heritage forts.", scientific: "Enhances texture." },
      { name: "Ivory Mist", hex: "#EDE7DA", family: "Browns", story: "Delicate tusks.", scientific: "Promotes spaciousness." },
      { name: "Linen Calm", hex: "#E8E1CF", family: "Browns", story: "Woven fibers.", scientific: "Diffuses light." },
      { name: "Shell Tone", hex: "#F4EBD0", family: "Browns", story: "Coastal shells.", scientific: "Brightens spaces." },
      { name: "Coconut Husk", hex: "#9D8063", family: "Browns", story: "Tropical neutral.", scientific: "Mid-warm range." },
  
      // --- WHITES ---
      { name: "Chalk Poem", hex: "#F2EFE9", family: "Whites", story: "Chalk dust.", scientific: "Spreads light evenly." },
      { name: "Blush Whisper", hex: "#E6C5C2", family: "Whites", story: "Scandinavian elegance.", scientific: "Warm-red undertone." },
      { name: "Wild Pink", hex: "#FF69B4", family: "Whites", story: "Bougainvillea.", scientific: "High-energy bounce." }
  ];
  
  export const ALL_COLORS = RAW_COLORS.map((c, i) => ({ ...c, id:i }));
  