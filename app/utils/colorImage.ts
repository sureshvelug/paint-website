// app/utils/colorImages.ts

const SIZE = "3840x2160"; // 4K

export function getInteriorImage(colorName: string, family: string) {
  return `https://source.unsplash.com/${SIZE}/?interior,wall,paint,modern,${encodeURIComponent(
    colorName
  )},${family}`;
}

export function getExteriorImage(colorName: string, family: string) {
  return `https://source.unsplash.com/${SIZE}/?exterior,house,architecture,paint,${encodeURIComponent(
    colorName
  )},${family}`;
}
