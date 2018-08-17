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
    MatSliderModule,
    MatProgressBarModule

    
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
        MatFormFieldModule,
            MatSliderModule,
            MatProgressBarModule

        
            
        
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
        MatFormFieldModule,
            MatSliderModule,
            MatProgressBarModule
     
                   
 
    ]
})

export class MaterialModule {
}
