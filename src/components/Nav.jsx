import { Fragment, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const navigation = [
	{ name: 'home', href: '/', current: false },
	{ name: 'education', href: '/education', current: false },
	{ name: 'projects', href: '/projects', current: false },
	{ name: 'experience', href: '/experience', current: false },
	{ name: 'leadership', href: '/leadership', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState(location.pathname);

	// Update current path when location changes
	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location.pathname]);

	// Update current property based on the current path
	useEffect(() => {
		navigation.forEach((item) => {
			item.current = item.href === currentPath;
		});
	}, [currentPath]);

	return (
		<Disclosure as="nav" className="flex items-center justify-between flex-wrap bg-pink-500 p-6">
			{({ open }) => (
				<>
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<span className="font-semibold text-xl tracking-tight">Mel Avina-Beltran</span>
					</div>

					<div className="block lg:hidden">
						<Disclosure.Button className="flex items-center px-3 py-2 border rounded text-pink-200 border-pink-400 hover:text-white hover:border-white">
							<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
						</Disclosure.Button>
					</div>

					<div className="text-lg lg:flex-grow text-pink-200">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={classNames(
									item.current ? 'text-pink-200' : 'hover:text-white',
									'text-lg font-bold mr-4'
								)}
								aria-current={item.current ? 'page' : undefined}
							>
								{item.name}
							</a>
						))}
					</div>
					<div>
						<a href="./img/6 Mel Avina-Beltran  Resume.pdf" className="inline-block text-lg px-4 py-2 font-bold leading-none border rounded text-white border-white hover:border-transparent lowercase hover:text-pink-500 hover:bg-white mt-4 lg:mt-0" target="_blank">
							Resume
						</a>
					</div>
				</>
			)}
		</Disclosure>
	);
}
