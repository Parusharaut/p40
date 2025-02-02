import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/underdogs.png';

const navigation = [
  { name: 'Home', href: '/home', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'Walk Dogs', href: '/walkdogs', current: false },
  { name: 'Donate', href: 'https://fundraise.givesmart.com/f/4yx1/n?vid=1hjrg6', current: false },
  { name: 'Login', href: '/login', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ isLoggedIn, onLogout }) {
  return (
    <Disclosure as="nav" className="text-yellow-500 shadow-md "> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-10 ">
          <div className="flex items-center">
            <img
              alt="P40 Dog Logo"
              src={logo}
              className="h-12 w-auto mr-4 mb-12 "
            />
            <span className="text-yellow-500 text-3xl font-extrabold"></span>
          </div>

          <div className="hidden sm:flex sm:space-x-4 mb-4 text-base mb-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === 'Donate' ? '_blank' : '_self'}
                rel={item.name === 'Donate' ? 'noopener noreferrer' : ''}
                className={classNames(
                  item.current ? 'bg-white text-maroon-700' : 'text-white hover:bg-yellow-500 hover:text-red-950',
                  item.name === 'Donate'
                    ? 'bg-yellow-500 text-red-950 px-3 py-1 rounded-md text-lg font-bold shadow-md hover:bg-yellow-400'
                    : 'px-3 py-1 rounded-md text-lg font-bold'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}

            {isLoggedIn && (
              <button
                onClick={onLogout}
                className="px-3 py-1 bg-yellow-500 text-red-950 rounded-md text-lg font-bold shadow-md hover:bg-yellow-400"
              >
                Logout
              </button>
            )}
          </div>

          <div className="flex sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-1 rounded-md text-yellow-500 hover:bg-gray-300 focus:outline-none">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="px-4 pt-4 pb-4 space-y-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              target={item.name === 'Donate' ? '_blank' : '_self'}
              rel={item.name === 'Donate' ? 'noopener noreferrer' : ''}
              className={classNames(
                item.current ? 'bg-white text-yellow-500' : 'text-black hover:bg-gray-300',
                item.name === 'Donate'
                  ? 'bg-yellow-500 text-red-950 inline-block px-2 py-1 rounded-md text-xl font-semibold shadow-md hover:bg-yellow-400'
                  : 'block px-4 py-2 rounded-md text-xl font-semibold'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </DisclosureButton>
          ))}

          {isLoggedIn && (
            <button
              onClick={onLogout}
              className="w-full bg-yellow-500 text-red-950 px-3 py-1 rounded-md text-lg font-semibold shadow-md hover:bg-yellow-400"
            >
              Logout
            </button>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
