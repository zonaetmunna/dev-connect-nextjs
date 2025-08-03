import React from 'react';

export default function BlogPage() {
	// Placeholder blog data
	const blogs = [
		{
			id: 1,
			title: 'How to Succeed as a Developer',
			date: '2025-08-01',
			author: 'Jane Doe',
			excerpt: 'Discover the key skills and mindset needed to thrive in the tech industry.',
			image: '/placeholder.jpg',
		},
		{
			id: 2,
			title: 'Top 10 Frontend Tools in 2025',
			date: '2025-07-20',
			author: 'John Smith',
			excerpt:
				'A rundown of the most popular and effective frontend tools for modern web development.',
			image: '/placeholder-logo.png',
		},
		// Add more blog posts as needed
	];

	return (
		<div className='max-w-5xl mx-auto px-4 py-12'>
			<h1 className='text-4xl font-bold mb-8 text-center'>Our Blog</h1>
			<div className='grid gap-8 md:grid-cols-2'>
				{blogs.map((blog) => (
					<div
						key={blog.id}
						className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
						<img src={blog.image} alt={blog.title} className='w-full h-48 object-cover' />
						<div className='p-6'>
							<h2 className='text-2xl font-semibold mb-2'>{blog.title}</h2>
							<p className='text-gray-500 text-sm mb-4'>
								By {blog.author} | {new Date(blog.date).toLocaleDateString()}
							</p>
							<p className='mb-4 text-gray-700'>{blog.excerpt}</p>
							<button className='inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>
								Read More
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
