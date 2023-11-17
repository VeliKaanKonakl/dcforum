import PostItem from "../post-item";

export const Main = () => {
    const mockData = [
        {
            title: 'Blockchain developer best practices on innovationchain',
            image: './post-item-img.png',
            tags: ['finance', 'blockchain', 'developer'],
            author: {
                name: 'Pavel Gvay',
                avatar: './avatar.png',
            },
            date: '3 weeks ago',
            views: '651,324',
            likes: '36,6545',
            comments: '56',
        },
        {
            title: 'The Future of Artificial Intelligence in Healthcare',
            image: './post-item-img.png',
            tags: ['artificial intelligence', 'healthcare', 'technology'],
            author: {
                name: 'Emily Smith',
                avatar: './avatar.png',
            },
            date: '2 months ago',
            views: '512,789',
            likes: '28,123',
            comments: '42',
        },
        {
            title: 'Introduction to React Hooks',
            image: './post-item-img.png',
            tags: ['react', 'javascript', 'web development'],
            author: {
                name: 'John Doe',
                avatar: './avatar.png',
            },
            date: '1 week ago',
            views: '421,567',
            likes: '18,765',
            comments: '30',
        },
        {
            title: 'Blockchain developer best practices on innovationchain',
            image: './post-item-img.png',
            tags: ['finance', 'blockchain', 'developer'],
            author: {
                name: 'Pavel Gvay',
                avatar: './avatar.png',
            },
            date: '3 weeks ago',
            views: '651,324',
            likes: '36,6545',
            comments: '56',
        },
        {
            title: 'The Future of Artificial Intelligence in Healthcare',
            image: './post-item-img.png',
            tags: ['artificial intelligence', 'healthcare', 'technology'],
            author: {
                name: 'Emily Smith',
                avatar: './avatar.png',
            },
            date: '2 months ago',
            views: '512,789',
            likes: '28,123',
            comments: '42',
        },
    ];

    return (
        <main className="flex flex-col items-center flex-1 w-full p-4 md:p-6 lg:p-0">
            <h1>Main</h1>

            <section className="flex flex-col">
                {mockData.map((post, index) => (
                    <PostItem key={index} post={post} />
                ))}
            </section>
        </main>
    )
}