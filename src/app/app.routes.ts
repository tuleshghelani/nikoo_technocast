import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
import { QmsComponent } from './pages/qms/qms.component';
import { InfrastructureComponent } from './pages/infrastructure/infrastructure.component';
import { AgricultureAndEarthMoversComponent } from './pages/all-product/agriculture-and-earth-movers/agriculture-and-earth-movers.component';
import { AutomotiveComponentsComponent } from './pages/all-product/automotive-components/automotive-components.component';
import { GearAndEngineeringComponentsComponent } from './pages/all-product/gear-and-engineering-components/gear-and-engineering-components.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'company-profile', component: CompanyProfileComponent },
    { path: 'qms', component: QmsComponent },
    { path: 'infrastructure', component: InfrastructureComponent },
    { path: 'product/agriculture-and-earth-movers', component: AgricultureAndEarthMoversComponent },
    { path: 'product/automotive-components', component: AutomotiveComponentsComponent },
    { path: 'product/gear-and-engineering-components', component: GearAndEngineeringComponentsComponent },
    { path: '**', redirectTo: '' }
];
