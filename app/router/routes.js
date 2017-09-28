import Instructions from '../components/Instructions.vue';
import Inventory from '../components/Inventory.vue';
import Grid from '../components/Grid.vue';

export const routes = [
  {
    path: '/app',
    component: Instructions,
  },
  {
    path: '/app/inventory',
    component: Inventory,
  },
  {
    path: '/app/grid',
    component: Grid,
  },
];
