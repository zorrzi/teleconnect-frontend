import { redirect, RouteObject } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './dashboard/nested/home/homepage';
import { LandingPage } from './landingpage/landingpage';
import { Login } from './login/loginUser';
import { Signup } from './signup/signupUser';
import { ProdutosBase } from "./produtos/ProdutosBase";
import { ProdutosPessoa } from "./produtos/pessoa/ProdutosPessoa";
import { ProdutosEmpresa } from "./produtos/empresa/ProdutosEmpresa.tsx";
import { PrePagoPage } from "./produtos/pessoa/nested/Pre_Pago/Pre_Pago.tsx";
import { PosPagoPage } from "./produtos/pessoa/nested/Pos_pago/Pos_Pago.tsx";
import { InternetFibraPage } from "./produtos/pessoa/nested/Internet_Fibra/InternetFibraPage.tsx";
import { TelefoneFixoPage } from "./produtos/pessoa/nested/Telefone_Fixo/TelefoneFixoPage.tsx";
import { InternetFibraEmpresa } from "./produtos/empresa/nested/internet_fibra/InternetFibraEmpresa";
import { TelefoneFixoEmpresa } from "./produtos/empresa/nested/telefone_fixo/TelefoneFixoEmpresa.tsx";


const routes: RouteObject[] = [
    {
        path: "user/landingpage",
        element: <LandingPage />,
        id: "landingpage",
    },
    {
        path: "user/login",
        element: <Login />,
        id: "login",

    },
    {
        path: "user/signup",
        element: <Signup />,
        id: "signup",

    },
    {
        path: "user/produtos",
        element: <ProdutosBase />, // 📌 Página base
        children: [
            {   path: "empresa", 
                element: <ProdutosEmpresa />, 
                id: "produtos-empresa", 
                children: [
                    { index: true, loader: () => redirect("fibra") }, // 🔥 Redireciona para pré-pago
                    { path: "fibra", element: <InternetFibraEmpresa />, id: "fibra" },
                    { path: "fixo", element: <TelefoneFixoEmpresa />, id: "fixo" },
                ]
            },
            { 
                path: "pessoa", 
                element: <ProdutosPessoa />, 
                id: "produtos-pessoa",
                children: [
                    { index: true, loader: () => redirect("pre-pago") }, // 🔥 Redireciona para pré-pago
                    { path: "pre-pago", element: <PrePagoPage />, id: "pre-pago" },
                    { path: "pos-pago", element: <PosPagoPage />, id: "pos-pago" },
                    { path: "internet-fibra", element: <InternetFibraPage />, id: "internet-fibra" },
                    { path: "telefone-fixo", element: <TelefoneFixoPage />, id: "telefone-fixo" },
                ]
            },        ],
    },
];

export default routes;
