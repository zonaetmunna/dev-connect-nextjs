import React from 'react';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

// Example blog data (should be replaced with real data or API call)
const blogs = [
	{
		id: 1,
		title: 'How to Succeed as a Developer',
		date: '2025-08-01',
		author: 'Jane Doe',
		content: `Discover the key skills and mindset needed to thrive in the tech industry.\n\n1. Stay curious and keep learning.\n2. Build real projects.\n3. Network with other developers.\n4. Embrace feedback and iterate.`,
		image: '/placeholder.jpg',
	},
	{
		id: 2,
		title: 'Top 10 Frontend Tools in 2025',
		date: '2025-07-20',
		author: 'John Smith',
		content: `A rundown of the most popular and effective frontend tools for modern web development.\n\n- Next.js\n- Tailwind CSS\n- Vite\n- React Query\n- Zustand\n- ...and more!`,
		image: '/placeholder-logo.png',
	},
];

export default function BlogDetailPage({ params }: { params: { id: string } }) {
	const blog = blogs.find((b) => b.id === Number(params.id));
	if (!blog) return notFound();

	return (
		<div className='max-w-3xl mx-auto px-4 py-12'>
			<img src={blog.image} alt={blog.title} className='w-full h-64 object-cover rounded-lg mb-6' />
			<h1 className='text-4xl font-bold mb-2'>{blog.title}</h1>
			<p className='text-gray-500 text-sm mb-4'>
				By {blog.author} | {new Date(blog.date).toLocaleDateString()}
			</p>
			<div className='prose prose-lg text-gray-800'>
				{blog.content.split('\n').map((para, idx) => (
					<p key={idx}>{para}</p>
				))}
			</div>
		</div>
	);
}
