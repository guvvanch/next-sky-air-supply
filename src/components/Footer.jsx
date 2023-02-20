import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about-us' },
  { title: 'Contact', url: '/contact-us' },
  { title: 'Products', url: '/products' },
]

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-16">
          <img src="/logo.jpeg" className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              {navItems.map((item, idx) => (
                <NavLink key={idx} href={item.url}>
                  {item.title}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Sky Air Supply Ltd. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
