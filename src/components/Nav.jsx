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
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>

							<div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
								<img className="h-8" src="./img/cube-alt-2-svgrepo-com.svg" alt="Logo" />
								<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
												item.current ? 'text-pink-600' : 'text-gray-500 hover:text-gray-900',
												'rounded-md px-3 py-2 text-lg font-extrabold'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
									))}
								</div>
								<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
									<a href="./img/Mel_Avina-Beltran_DS_ Resume.pdf" className="px-3 py-2 text-lg font-extrabold text-center text-white bg-pink-600 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200" target="_blank">
										resume
									</a>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)
			}
		</Disclosure>

	);
}