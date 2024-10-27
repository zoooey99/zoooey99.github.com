import Link from 'next/link';
import NavbarGlobal from '@/components/nav-bar-global';
import FooterGlobal from '@/components/footer-global';

export default function stats(){
    return(
        <div>
            <NavbarGlobal/>
            <h1>
            hey? this is the stats page
            </h1>
            <Link href='/'> back back back</Link>

            <div className="flex justify-center mt-4 pb-8">
                <FooterGlobal/>
            </div>
        </div>
    )
}