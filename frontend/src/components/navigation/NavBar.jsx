import  { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {  Menu, Transition } from '@headlessui/react'
import {Link} from "react-router-dom"
function NavBar() {
    const user = useSelector(state => state.user.user)
    const nav = user && (
        <div className="grid grid-cols-3">
            <Link to='' >Home</Link>
            <Link to='' >Friends</Link>
            <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ">
                    <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 w-8 h-8">
                        <span className="sr-only ">Open user menu</span>
                        <img
                        className="h-8 w-8 rounded-full"
                        src={`/images/agencyProfile/${user.profileImage ?? "defaultImage.png"}`}
                        alt=""
                        />
                    </Menu.Button>
                    </div>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                        {({ active }) => (
                            <Link
                            to="profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                            Your Profile
                            </Link>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            onClick={()=>{logout()}}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                            Sign out
                            </a>
                        )}
                        </Menu.Item>
                    </Menu.Items>
                    </Transition>
                </Menu>
                </div>
            </div>
        </div>
    )

    return (
        <div className='bg-white dark:bg-gray-800 px-4 py-3 m-0 text-gray-900 dark:text-gray-100'>
            <div className="grid grid-cols-4 ">
                <div className="col-span-3">
                    <Link to="/" >
                        <img src="" alt="logo" />
                    </Link>
                </div>
                <div className="col-span-1">
                    {nav}
                </div>
            </div>
        </div>
    )
}

export default NavBar