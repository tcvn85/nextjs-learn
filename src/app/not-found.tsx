import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'))
const Footer = dynamic(() => import('@/components/footer'))

export default function NotFound() {
  return (
    <>
      <Header />
      <div>NotFound</div>
      <Footer />
    </>
  )
}
