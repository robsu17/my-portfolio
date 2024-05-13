import { Icon } from '@iconify/react'

export const projectsData = [
  {
    id: 1,
    name: 'DT Money',
    description: 'Controlador de entradas e saídas',
    createdAt: 'Jun - Jul 2023',
    plataform: 'Web',
    stacks: [
      {
        id: 1,
        icon: <Icon icon="devicon:react" width={21} />,
      },
      {
        id: 2,
        icon: <Icon icon="devicon:typescript" width={21} />,
      },
    ],
    banner: `${window.location.pathname}/dt-money-banner.png`,
  },
  {
    id: 2,
    name: 'Ignite Shop',
    description: 'Mini ecommerce de roupas',
    createdAt: 'Ago - Ago 2023',
    plataform: 'Web',
    stacks: [
      {
        id: 1,
        icon: <Icon icon="devicon:react" width={21} />,
      },
      {
        id: 2,
        icon: <Icon icon="devicon:typescript" width={21} />,
      },
    ],
    banner: `${window.location.pathname}/ignite-shop-banner.png`,
  },
  {
    id: 3,
    name: 'Unite Summit',
    description: 'Aplicativo gerador de credencial',
    createdAt: 'Nov - Dec 2023',
    plataform: 'Mobile',
    stacks: [
      {
        id: 1,
        icon: <Icon icon="devicon:react" width={21} />,
      },
      {
        id: 2,
        icon: <Icon icon="devicon:typescript" width={21} />,
      },
    ],
    banner: `${window.location.pathname}/ignite-summit-banner.png`,
  },
]
