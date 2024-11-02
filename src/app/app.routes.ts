import {Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ColoursPageComponent} from './components/colours-page/colours-page.component';
import {TypographyPageComponent} from './components/typography-page/typography-page.component';
import {GridsPageComponent} from './components/grids-page/grids-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'colours',
    component: ColoursPageComponent
  },
  {
    path: 'typography',
    component: TypographyPageComponent
  },
  {
    path: 'grids',
    component: GridsPageComponent
  }
];
