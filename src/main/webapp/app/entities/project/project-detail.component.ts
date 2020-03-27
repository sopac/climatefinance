import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';
import { PdfExportService } from '../../shared';

import { IProject } from 'app/shared/model/project.model';

@Component({
    selector: 'jhi-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.css']
})
export class ProjectDetailComponent implements OnInit {
    project: IProject;

    constructor(private dataUtils: JhiDataUtils, private activatedRoute: ActivatedRoute, private pdfService: PdfExportService) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ project }) => {
            this.project = project;
        });
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }

    exportPdf(element: HTMLElement) {
        this.pdfService.exportPdf(element, 'canvas', { pageOrientation: 'portrait' });
    }
}
