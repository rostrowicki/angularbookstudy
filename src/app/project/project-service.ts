import { Injectable, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { DataProvider } from '../data-access/data-provider';

@Injectable()
export class ProjectService {

    dataProvider: DataProvider;
    projects: any[];
    change: any;
    projectSubscription: any;

    constructor(dataProvider: DataProvider) {
        this.dataProvider = dataProvider;
        this.projects = [];
        this.change = new ReplaySubject(1);
        this.projectSubscription = this.dataProvider.getLiveChanges()
            .map((change) => change.doc)
            .filter((document) => document.type === 'project')
            .subscribe((changedProject) => {
                this.projects = this.projects.slice();
                const projectIndex = this.projects.findIndex(
                    (project) => project._id === changedProject._id);
                if (projectIndex === -1) {
                    this.projects.push(changedProject);
                } else {
                    this.projects.splice(projectIndex, 1, changedProject);
                }
                this.projects.sort((a, b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0);
                this.change.next(this.projects);
            });
    }
}
