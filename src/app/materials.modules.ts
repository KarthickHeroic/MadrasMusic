import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';


import {
    MatButtonModule, 
    MatSidenavModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatDividerModule, 
    MatIconModule, 
    MatGridListModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,

    
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
        MatTabsModule,
        MatBottomSheetModule,
        MatFormFieldModule

        
            
        
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
        MatTabsModule,
        MatBottomSheetModule,
        MatFormFieldModule
     
                   
 
    ]
})

export class MaterialModule {
}
