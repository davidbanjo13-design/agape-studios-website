# Logo Instructions

## How to Add Your Business Logo

1. **Prepare your logo:**
   - Save your logo as `agape-logo.png` (or `.jpg`, `.svg`)
   - Recommended size: 180px wide x 40px tall (or similar aspect ratio)
   - Ensure it has a transparent background for best results

2. **Upload your logo:**
   - Place your logo file in this directory: `/public/images/logo/`
   - Name it exactly: `agape-logo.png`

3. **Supported formats:**
   - PNG (recommended for transparency)
   - JPG (for photos)
   - SVG (for vector graphics)

4. **If you need to change the filename:**
   - Update the `src` path in `/src/components/layout/Navigation.tsx`
   - Line 30: Change `"/images/logo/agape-logo.png"` to your filename

## Current Setup
- The header is set to maintain 40px height (h-10)
- Logo will auto-scale to fit within 180px width
- Fallback text "Agape Studios" shows if logo fails to load
- Logo loads with priority for fast initial page load

## Testing
After adding your logo:
1. Refresh the page at http://localhost:3000
2. Your logo should appear in the header
3. If you see "Agape Studios" text, check the filename and path
