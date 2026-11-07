"use client";

import * as React from "react";
import NextImage from "next/image";
import { imgSrc } from "@/lib/img";

// Drop-in replacement for next/image that applies the deployment base path to
// plain string srcs (next/image with unoptimized does not add basePath itself).
const Image = ({
  src,
  ...props
}: React.ComponentProps<typeof NextImage>) => (
  <NextImage {...props} src={typeof src === "string" ? imgSrc(src) : src} />
);
Image.displayName = "Image";

export default Image;
