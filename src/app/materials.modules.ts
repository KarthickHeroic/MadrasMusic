import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSidenavModule, MatInputModule, MatCheckboxModule, MatListModule, MatDividerModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatSidenavModule, MatInputModule, MatCheckboxModule, MatIconModule, MatListModule, MatDividerModule],
    exports: [MatButtonModule, MatSidenavModule, MatInputModule, MatCheckboxModule, MatIconModule, MatListModule, MatDividerModule]
})

export class MaterialModule {
}
