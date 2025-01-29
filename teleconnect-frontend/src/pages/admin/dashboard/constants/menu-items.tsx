import { House, Plus, FileText } from '@phosphor-icons/react';

export const menuItems = [
    {
        label: 'Home',
        icon: <House />,
        href: '/admin/dashboard/home',
    },
    {
        label: 'Novo Pacote',
        icon: <Plus />,
        href: '/admin/dashboard/new-package',
    },
    {
        label: 'Catálogo',
        icon: <FileText />,
        href: '/admin/dashboard/catalog',
    }
];