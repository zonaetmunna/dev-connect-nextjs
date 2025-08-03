'use client';

import { useState } from 'react';

import DashboardFooter from '@/components/dashboard/dashboard-footer';
import DashboardHeader from '@/components/dashboard/dashboard-header';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDeveloper, setIsDeveloper] = useState(false);

	return (
		<div className='flex min-h-screen flex-col'>
			<DashboardHeader />
			<main className='flex-1  p-4 md:p-6'>{children}</main>
			<DashboardFooter />
		</div>
	);
}
