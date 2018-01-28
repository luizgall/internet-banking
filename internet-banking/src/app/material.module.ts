import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule, MatPaginatorModule, MatSnackBarModule, MatCheckboxModule, MatListModule, MatDividerModule, MatTableModule, MatMenuModule, MatSlideToggleModule, MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		FlexLayoutModule,

		// Angular Material modules
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatTableModule,
		MatDividerModule,
		MatListModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatPaginatorModule,
		MatProgressSpinnerModule
	],
	exports: [
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatTableModule,
		MatDividerModule,
		MatListModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatPaginatorModule,
		MatProgressSpinnerModule
	]
})

export class AppMaterialModule {}
