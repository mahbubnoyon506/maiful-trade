"use client";

import React from "react";
import { motion } from "motion/react";
import { type VariantProps, cva } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const MotionButton = motion.create("button");

// Inlined lightweight alternative to Shadcn's cn utility
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define the button variations using Class Variance Authority (CVA)
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs md:text-sm xl:text-lg font-medium px-3 py-1.5 md:px-5 md:py-3 tracking-widest uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        solid: "shadow-sm",
        outline: "border-1 bg-transparent",
        ghost: "bg-transparent",
      },
      colorScheme: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
    },
    // Compound variants seamlessly combine your variant types and color choices
    compoundVariants: [
      // Solid Variants
      {
        variant: "solid",
        colorScheme: "primary",
        className:
          "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
      },
      {
        variant: "solid",
        colorScheme: "secondary",
        className:
          "bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary",
      },
      {
        variant: "solid",
        colorScheme: "tertiary",
        className:
          "bg-tertiary text-white hover:bg-tertiary/90 focus-visible:ring-tertiary",
      },

      // Outline Variants
      {
        variant: "outline",
        colorScheme: "primary",
        className:
          "border-primary text-primary hover:bg-primary hover:text-white",
      },
      {
        variant: "outline",
        colorScheme: "secondary",
        className:
          "border-secondary text-secondary hover:bg-secondary hover:text-white",
      },
      {
        variant: "outline",
        colorScheme: "tertiary",
        className:
          "border-tertiary text-tertiary hover:bg-tertiary hover:text-white",
      },

      // Ghost Variants
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-primary hover:bg-primary/10",
      },
      {
        variant: "ghost",
        colorScheme: "secondary",
        className: "text-secondary hover:bg-secondary/10",
      },
      {
        variant: "ghost",
        colorScheme: "tertiary",
        className: "text-tertiary hover:bg-tertiary/10",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  className,
  variant,
  colorScheme,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const buttonProps = props as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    | "children"
    | "className"
    | "onClick"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
    | "onTransitionEnd"
    | "onDrag"
    | "onDragEnd"
    | "onDragEnter"
    | "onDragExit"
    | "onDragLeave"
    | "onDragOver"
    | "onDragStart"
    | "onDrop"
  >;

  return (
    <MotionButton
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={cn(buttonVariants({ variant, colorScheme, className }))}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </MotionButton>
  );
}
