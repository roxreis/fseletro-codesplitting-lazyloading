import Categorias from '../../Components/Categorias/Categorias';
import { Spinner } from 'react-bootstrap';
import {lazy, Suspense} from 'react';
import '../../css/style.css';

const Produtos = lazy(() => import('../../code-splitting/Produto'));



export default function ViewProdutos() {

    return (

            <section className="section-produtos">  
                <Categorias />
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <Suspense maxDuration={1000} fallback={<h5 class="text-center -mt-5">carregando...</h5> }>
                    <Produtos />
                </Suspense>
                </div>
            </section>

    );
}