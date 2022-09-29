import { FC } from 'react';
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'


interface MenuLinkProps {
    pageName: string,
    link: string,

}

const MenuLink: FC<MenuLinkProps> = ({pageName, link})  => {
    return(
            <Menu.Item>
                {({ active }) => (
                <Link href={`${link}`}>
                    <button className={`${active ? 'bg-black text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-black hover:text-white`}>
                        {pageName}
                    </button>
                </Link>
                )}
            </Menu.Item>
    )
}

export default MenuLink;