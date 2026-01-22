# BASIQ - Men's Wear Brand

A modern, premium men's wear brand website built with Next.js, React, TypeScript, and Tailwind CSS. Featuring sophisticated collections, custom tailoring, and style consultation services.

## 🎯 Features

### Brand Showcase (`/`)
- ✅ Premium men's wear collections display
- ✅ Arabic RTL support with modern Egyptian Arabic
- ✅ BASIQ brand color system (#1F1F1F, #F7F7F7, #6B705C)
- ✅ Responsive design for all devices
- ✅ Beautiful animations and transitions

### Collections Display (`/products`)
- ✅ Dynamic product catalog from admin dashboard
- ✅ Product detail pages with image galleries
- ✅ WhatsApp integration for inquiries
- ✅ Search and filter functionality

### Admin Dashboard (`/dashboard`)
- ✅ Add/edit/delete products
- ✅ Image upload and management
- ✅ Product specifications and pricing
- ✅ Real-time product updates

---

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Access the Application

- **Home**: http://localhost:3000
- **Collections**: http://localhost:3000/products
- **Admin Dashboard**: http://localhost:3000/dashboard

---

## 📁 Project Structure

```
project/
├── app/
│   ├── api/products/route.ts        # Product API endpoints
│   ├── dashboard/page.tsx           # Admin dashboard
│   ├── products/page.tsx            # Collections display
│   ├── products/[id]/page.tsx       # Product details
│   └── page.tsx                     # Home page
├── components/
│   ├── ProductForm.tsx              # Product management form
│   ├── Header.tsx                   # Navigation (RTL)
│   ├── Hero.tsx                     # Brand showcase
│   ├── About.tsx                    # Brand story
│   ├── Services.tsx                 # Collections
│   ├── Products.tsx                 # Featured products
│   ├── Certifications.tsx           # Quality achievements
│   ├── Contact.tsx                  # Contact form
│   └── Footer.tsx                   # Footer (RTL)
├── lib/
│   ├── storage.ts                   # Product storage interface
│   └── utils.ts
└── public/                          # Static assets
```

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [QUICK_REFERENCE.md](QUICK_REFERENCE.md) | Quick reference card |
| [USAGE_GUIDE.md](USAGE_GUIDE.md) | Step-by-step user manual |
| [DASHBOARD_GUIDE.md](DASHBOARD_GUIDE.md) | Complete feature guide |
| [TECHNICAL_DOCS.md](TECHNICAL_DOCS.md) | Developer documentation |
| [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md) | Implementation checklist |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Full project overview |
| [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) | Architecture details |

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 15+** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible components
- **React Hooks** - State management

### Backend
- **Next.js API Routes** - Serverless functions
- **In-Memory Storage** (development) - Can be upgraded to any database

---

## 💾 Data Management

### Current Setup
Uses in-memory storage for development and demo purposes.

### Production Setup
Ready to integrate with:
- **MongoDB** + Mongoose
- **PostgreSQL** + Prisma
- **Supabase** (Firebase alternative)
- **Firebase** Firestore

Simply update `/lib/storage.ts` to connect to your database.

---

## 🎨 Design & UX

- ✅ **Premium Brand Identity** - BASIQ color system throughout
- ✅ **Fully RTL** - Arabic language with proper RTL layout
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Modern UI** - Tailwind CSS with custom animations
- ✅ **Accessible** - WCAG compliant components
- ✅ **Fast Performance** - Next.js optimization

---

## 🔐 Security

Current setup is suitable for development. Before production deployment:

- [ ] Add admin authentication (NextAuth.js)
- [ ] Use real database instead of in-memory storage
- [ ] Enable HTTPS
- [ ] Add rate limiting
- [ ] Validate and sanitize all inputs
- [ ] Implement CSRF protection

---

## 📱 How to Use

### Managing Collections (Admin)

1. Go to `/dashboard`
2. Click "إضافة" (Add) for new products
3. Upload product images
4. Fill in product details:
   - Product name (Arabic)
   - Description
   - Price
   - Specifications/features
5. Click "إضافة المنتج" (Add Product)
6. View in collections page

### Browsing Collections (Customers)

1. Visit home page to see featured collections
2. Go to `/products` for full catalog
3. Click on products for details
4. Use "استفسر الآن" (Inquire Now) for WhatsApp contact

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] View home page with BASIQ branding
- [ ] Test RTL layout and Arabic text
- [ ] Navigate to collections page
- [ ] Test product detail pages
- [ ] Add/edit/delete products via dashboard
- [ ] Test WhatsApp inquiry functionality
- [ ] Verify responsive design on mobile
- [ ] Check BASIQ color consistency

---

## 📦 Build & Deploy

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

---

## 🎯 Roadmap

### Completed ✅
- BASIQ brand transformation
- Arabic RTL implementation
- Product management system
- Collections showcase
- Responsive design
- BASIQ color system integration
- WhatsApp contact integration

### Coming Soon
- [ ] Product categories
- [ ] Advanced search and filtering
- [ ] Customer reviews system
- [ ] Size guide and recommendations
- [ ] Style consultation booking
- [ ] Order tracking system
- [ ] Email notifications

---

## 🤝 Contributing

This is a **premium men's wear brand website**. For modifications or feature requests, contact the development team.

---

## 📞 Support

- Check the documentation files for detailed information
- Look at the source code for implementation examples
- Review TypeScript types for proper API usage

---

## 📄 License

This project is the property of BASIQ Men's Wear Brand.

---

## 🎉 Summary

This is a **premium men's wear brand website** with:
- ✅ Complete BASIQ brand identity
- ✅ Arabic RTL support
- ✅ Product management system
- ✅ Beautiful, responsive UI
- ✅ Modern technology stack
- ✅ WhatsApp integration

**Ready to use!** Start with `pnpm dev` and visit the home page.

---

**Last Updated**: January 20, 2026
**Status**: ✅ BASIQ Brand Complete
**Version**: 2.0.0
