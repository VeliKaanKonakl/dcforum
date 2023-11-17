import React from 'react';

const PostItem = ({ post }) => {
    return (
        <article className="post-item flex flex-col md:flex-row items-center flex-1 w-full bg-[#262D34] rounded-2xl p-5 mt-10 gap-6 hover:bg-[#1b2024] cursor-pointer">
            <img src={post.image} alt="" className="w-full md:w-36 lg:w-40 rounded-2xl mr-4" />
            <div className="flex flex-col w-full">
                <header className="flex flex-col md:flex-row items-center justify-between">
                    <h2 className="text-xl font-semibold text-neutral-100 leading-relax flex-1 w-full text-center md:text-left md:mr-10">{post.title}</h2>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2C353D] hover:opacity-70 my-2 md:my-0">
                        <img src="./like.svg" alt="" className="w-4 h-4" />
                    </button>
                </header>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                    {post.tags.map((tag, index) => (
                        <button key={index} className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                            <span className="text-sm text-[#C5D0E6] font-semibold">{tag}</span>
                        </button>
                    ))}
                </div>
                <footer className="flex flex-col md:flex-row items-center justify-between mt-7 gap-6 text-center md:text-left">
                    <div className="flex items-center gap-x-3">
                        <img src={post.author.avatar} alt="" className="w-10 rounded-full" />
                        <div className="flex flex-col">
                            <span className="text-[#F4F6F8] text-sm font-semibold">{post.author.name}</span>
                            <time className="text-[#C5D0E6] text-xs" dateTime='22-10-2023'>{post.date}</time>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6 lg:gap-x-10">
                        <span className="text-sm text-[#C5D0E6]">{post.views} Views</span>
                        <span className="text-sm text-[#C5D0E6]">{post.likes} Likes</span>
                        <span className="text-sm text-[#C5D0E6]">{post.comments} comments</span>
                    </div>
                </footer>
            </div>
        </article>
    );
};

export default PostItem;
