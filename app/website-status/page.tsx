import FooterGlobal from '@/components/footer-global';
import NavbarGlobal from '@/components/nav-bar-global';
import Link from 'next/link';
export default function projects(){
    return(
        <div>
            <NavbarGlobal/>

            <h1> WEBSITE STATUS PAGE </h1>
            <Link href="/">mom I don&apos;t like it here</Link>

            <FooterGlobal/>
        </div>
    )
}