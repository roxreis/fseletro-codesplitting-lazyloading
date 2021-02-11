import {lazy, Suspense} from 'react';


const Banner = lazy(() => import('../../code-splitting/Banner'));

export default function ViewHome() {
    return (
            <section className="section-home">
                <div className="banner-home">
                    <Suspense fallback={<h5 class="text-center -mt-5">carregando...</h5> }>
                        <Banner />
                    </Suspense>
                </div>
            </section>
    );
}