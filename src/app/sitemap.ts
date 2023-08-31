import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://thislittlegoose.vercel.app',
            lastModified: new Date(),
        },
        {
            url: 'https://thislittlegoose.vercel.app/store',
            lastModified: new Date(),
        },
        {
            url: 'https://thislittlegoose.vercel.app/collections/cups',
            lastModified: new Date(),
        },
        {
            url: 'https://thislittlegoose.vercel.app/products/ravenna-cup',
            lastModified: new Date(),
        },
        {
            url: 'https://thislittlegoose.vercel.app/account',
            lastModified: new Date(),
        },
        {
            url: 'https://thislittlegoose.vercel.app/account/login',
            lastModified: new Date(),
        },
        {
            url: 'https://thislittlegoose.vercel.app/cart',
            lastModified: new Date(),
        },
    ]
}