# ParkVaahan Styling Guide

This document outlines the styling patterns and design system used throughout the ParkVaahan application.

## Color Scheme

### Primary Colors

- Primary Blue: `text-[#80b7f2]` - Used for accents, important text, and interactive elements
- Background Dark: `bg-[#151c2c]` - Main background color
- White Text: `text-white` - Used for primary headings
- Gray Text: `text-gray-300` - Used for body text and secondary content

### Background Effects

- Glass Effect Dark: `bg-white/5 border-white/10 backdrop-blur-xl`
- Glass Effect Hover: `hover:bg-white/10`
- Border Light: `border-white/10`
- Shadow: `shadow-lg` or `shadow-2xl`

## Typography

### Headings

```tsx
// Split-color heading pattern
<h2 className="text-4xl font-bold">
  <span className="text-white">First Part </span>
  <span className="text-[#80b7f2]">Second Part</span>
</h2>
```

### Body Text

- Regular Text: `text-gray-300 text-lg`
- Small Text: `text-sm text-gray-300`
- Medium Text: `text-base text-gray-300`

## Common Components

### Cards

```tsx
<Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-lg hover:bg-white/10 transition-all">
  <CardContent>// Content here</CardContent>
</Card>
```

### Badges/Pills

```tsx
<div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#80b7f2]">
  <span className="flex h-2 w-2 rounded-full bg-[#80b7f2] mr-2" />
  Badge Text
</div>
```

### Buttons

```tsx
<button className="bg-[#80b7f2] hover:bg-[#80b7f2]/80 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#80b7f2]/20">
  Button Text
</button>
```

### Form Elements

```tsx
// Input fields
<Input className="bg-white/5 border-white/10 text-gray-300 placeholder:text-gray-300/30 focus:border-[#80b7f2]/50 transition-all hover:bg-white/10" />

// Labels
<FormLabel className="text-[#80b7f2] font-medium">
  Label Text
</FormLabel>

// Select
<SelectTrigger className="bg-white/5 border-white/10 text-gray-300 focus:border-[#80b7f2]/50 transition-all hover:bg-white/10">
  <SelectValue />
</SelectTrigger>
```

## Section Layouts

### Header

```tsx
<header className="bg-[#151c2c]/95 backdrop-blur-xl fixed top-0 left-0 w-full z-50 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-8 py-4">// Content here</div>
</header>
```

### Content Sections

```tsx
<section className="py-8 md:py-16">
  <div className="max-w-7xl mx-auto px-8">// Content here</div>
</section>
```

## Common Patterns

### Glass Effect Container

```tsx
<div className="bg-white/5 border-white/10 backdrop-blur-xl shadow-lg">
  // Content here
</div>
```

### Section Headers

```tsx
<div className="text-center mb-12">
  <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#80b7f2] mb-6">
    <span className="flex h-2 w-2 rounded-full bg-[#80b7f2] mr-2" />
    Section Label
  </div>
  <h2 className="text-4xl font-bold mb-4">
    <span className="text-white">Title First Part </span>
    <span className="text-[#80b7f2]">Second Part</span>
  </h2>
  <p className="text-gray-300 text-lg max-w-3xl mx-auto">
    Description text here
  </p>
</div>
```

### Grid Layouts

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">// Grid items here</div>
```

## Responsive Design

### Breakpoints

- Mobile First: Default styles
- Tablet/Desktop: `md:` prefix (768px and above)
- Example: `text-sm md:text-base`

### Common Responsive Patterns

```tsx
// Text alignment
className = "text-center md:text-left";

// Spacing
className = "px-4 md:px-8";

// Grid columns
className = "grid-cols-1 md:grid-cols-2";

// Font sizes
className = "text-2xl md:text-4xl";
```

## Animation & Transitions

### Hover Effects

```tsx
className = "transition-all duration-200 hover:bg-white/10";
```

### Loading States

```tsx
<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
```

## Best Practices

1. Always use the defined color scheme for consistency
2. Maintain consistent spacing using the spacing scale
3. Use glass effects for elevated components
4. Implement hover states for interactive elements
5. Ensure proper contrast for text readability
6. Use responsive design patterns for all components
7. Maintain consistent padding/margin scales

## Container Widths

- Max Width: `max-w-7xl`
- Standard Padding: `px-8`
- Section Spacing: `py-8 md:py-16`
