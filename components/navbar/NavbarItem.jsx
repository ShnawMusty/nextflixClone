
import Link from 'next/link';

const NavbarItem = ({label, href}) => {
  return (
    <Link href={href}>
      <p className='text-white text-lg hover:text-gray-300 transition'>
        {label}
      </p>
    </Link>
  )
}

export default NavbarItem