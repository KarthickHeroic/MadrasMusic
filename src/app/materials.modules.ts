import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule, 
    MatSidenavModule,
    MatInputModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatDividerModule, 
    MatIconModule, 
    MatGridListModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatTooltipModule,
    MatTabsModule,    
} from '@angular/material';

@NgModule({
    imports: 
    [MatButtonModule, 
        MatSidenavModule, 
        MatInputModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatListModule, 
        MatDividerModule, 
        MatGridListModule, 
        MatCardModule, 
        MatToolbarModule, 
        MatTooltipModule,
        MatTabsModule
        
    ],
    exports: 
    [MatButtonModule, 
        MatSidenavModule, 
        MatInputModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatListModule, 
        MatDividerModule, 
        MatGridListModule, 
        MatCardModule, 
        MatToolbarModule, 
        MatTooltipModule,
        MatTabsModule
        
    ]
})

export class MaterialModule {
}
