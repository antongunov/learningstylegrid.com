import Grid from '../components/Grid.vue';
import Instructions from '../components/Instructions.vue';
import Inventory from '../components/Inventory.vue';

export const routes = [
  {
    path: '/app/instructions',
    component: Instructions,
  },
  {
    path: '/app/inventory/sentence-:sentenceNumber',
    component: Inventory,
    props: ({ params }) => ({
      sentenceNumber: Number.parseInt(params.sentenceNumber, 10),
    }),
  },
  {
    path: '/app/inventory',
    redirect: '/app/inventory/sentence-1',
  },
  {
    path: '/app/grid',
    component: Grid,
  },
  {
    path: '/app',
    redirect: '/app/instructions',
  }
];
