import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ToasterService {

    constructor(private snackBar: MatSnackBar) {}

    showToaster(msg: string, alertType?: string) {
        this.snackBar.open(msg, 'Fechar', {
			duration: 5000,
            panelClass: alertType,
            verticalPosition: 'top'
        });
    }
}
