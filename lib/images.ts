const BASE =
  "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image";

export type ImgSize = "landscape_16_9" | "portrait_4_3" | "square_hd";

/** 生成真实图片 URL（禁止占位图） */
export function img(prompt: string, size: ImgSize = "landscape_16_9"): string {
  return `${BASE}?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}
