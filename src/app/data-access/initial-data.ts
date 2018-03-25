import * as Moment from 'moment';

export const defaultData =  [
  {
    _id: 'projekt-1',
    type: 'project',
    deleted: false,
    title: 'Pierwszy projekt',
    description: 'To pierwszy projekt w kontekście zarządzania zadaniami, który wykonasz jako część książki o komponentach Angulara 2.',
    tasks: [{
      type: 'task',
      nr: 1,
      position: 0,
      title: 'Zadanie 1',
      done: null,
      created: +Moment(Moment.now()).subtract(8, 'hours'),
      efforts: {
        estimated: 86400000,
        effective: 0
      }
    }, {
      type: 'task',
      nr: 2,
      position: 1,
      title: 'Zadanie 2',
      done: null,
      created: +Moment(Moment.now()).subtract(20, 'hours'),
      efforts: {
        estimated: 259200000,
        effective: 0
      }
    }, {
      type: 'task',
      nr: 3,
      position: 2,
      title: 'Zadanie 3',
      done: +Moment(Moment.now()).subtract(2, 'hours'),
      created: +Moment(Moment.now()).subtract(10, 'hours'),
      efforts: {
        estimated: 129600000,
        effective: 129600000
      }
    }, {
      type: 'task', nr: 4, position: 3, title: 'Zadanie 4', done: false, created: +Moment(Moment.now()).subtract(5, 'hours')
    }]
  }, {
    _id: 'projekt-2',
    type: 'project',
    deleted: false,
    title: 'Drugi projekt',
    description: 'To drugi projekt w kontekście zarządzania zadaniami, który wykonasz jako część książki o komponentach Angulara 2.',
    tasks: [
      {
        type: 'task',
        nr: 1,
        position: 0,
        title: 'Zadanie A',
        done: +Moment(Moment.now()).subtract(30, 'hours'),
        created: +Moment(Moment.now()).subtract(40, 'hours')
      },
      {
        type: 'task',
        nr: 2,
        position: 1,
        title: 'Zadanie B',
        done: +Moment(Moment.now()).subtract(15, 'hours'),
        created: +Moment(Moment.now()).subtract(32, 'hours')
      },
      {
        type: 'task',
        nr: 3,
        position: 2,
        title: 'Zadanie C',
        done: +Moment(Moment.now()).subtract(22, 'hours'),
        created: +Moment(Moment.now()).subtract(33, 'hours')
      },
      {
        type: 'task',
        nr: 4,
        position: 3,
        title: 'Zadanie D',
        done: +Moment(Moment.now()).subtract(5, 'hours'),
        created: +Moment(Moment.now()).subtract(16, 'hours')
      },
      {type: 'task', nr: 5, position: 4, title: 'Zadanie E', done: null, created: +Moment(Moment.now()).subtract(40, 'hours')}
    ]
  }, {
    _id: 'projekt-3',
    type: 'project',
    deleted: false,
    title: 'Trzeci projekt',
    description: 'To trzeci projekt w kontekście zarządzania zadaniami, który wykonasz jako część książki o komponentach Angulara 2.',
    tasks: [
      {type: 'task', nr: 1, position: 0, title: 'Zadanie pierwsze', done: null, created: +Moment(Moment.now()).subtract(2, 'hours')},
      {type: 'task', nr: 2, position: 1, title: 'Zadanie drugie', done: null, created: +Moment(Moment.now()).subtract(1.5, 'hours')},
      {
        type: 'task',
        nr: 3,
        position: 3,
        title: 'Zadanie trzecie',
        done: +Moment(Moment.now()).subtract(1, 'hours'),
        created: +Moment(Moment.now()).subtract(5, 'hours')
      }
    ]
  }, {
    type: 'activity',
    user: {
      name: 'Ty',
      pictureDataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMzExLjU0MXB4IiBoZWlnaHQ9IjMxMS41NDFweCIgdmlld0JveD0iMCAwIDMxMS41NDEgMzExLjU0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzExLjU0MSAzMTEuNTQxOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU1Ljc3MSwyNi4zMzFDNjkuNzQsMjYuMzMxLDAsOTYuMDcxLDAsMTgyLjEwMmMwLDM3LjQ4OCwxMy4yNSw3MS44ODMsMzUuMzE0LDk4Ljc2MQoJCQljMy40MDQtMjcuMjU2LDMwLjYyNy01MC4zMDgsNjguOC02MS4yMjVjMTMuOTQ2LDEyLjk5NCwzMS45NiwyMC44NzgsNTEuNjU2LDIwLjg3OGMxOS4yMzMsMCwzNi44OTQtNy40ODcsNTAuNjk4LTE5LjkzNgoJCQljMzguNTAzLDExLjg3MSw2NS4xNDEsMzYuMjcsNjYuMDE3LDY0LjYzYzI0LjI4NC0yNy40NzIsMzkuMDU2LTYzLjU1NSwzOS4wNTYtMTAzLjEwOAoJCQlDMzExLjU0MSw5Ni4wNzEsMjQxLjgwMSwyNi4zMzEsMTU1Ljc3MSwyNi4zMzF6IE0xNTUuNzcxLDIyMi4wNjljLTkuOTQ0LDAtMTkuMzE0LTIuNzMyLTI3LjYzNC03LjQ2NAoJCQljLTIwLjA1LTExLjQwOS0zMy44NTUtMzQuNzU2LTMzLjg1NS02MS43MTFjMC0zOC4xNDMsMjcuNTgzLTY5LjE3Niw2MS40ODktNjkuMTc2YzMzLjkwOSwwLDYxLjQ4OSwzMS4wMzMsNjEuNDg5LDY5LjE3NgoJCQljMCwyNy4zNjktMTQuMjM3LDUxLjAwNC0zNC43ODYsNjIuMjE1QzE3NC4zNzksMjE5LjUyMywxNjUuMzQ2LDIyMi4wNjksMTU1Ljc3MSwyMjIuMDY5eiIgZmlsbD0iIzQwNDA0MCIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo='
    },
    time: +Moment(Moment.now()).subtract(8, 'hours'),
    subject: 'projekt-1',
    category: 'tasks',
    title: 'Zadanie zostało zaktualizowane',
    message: 'Zadanie \'Utworzenie nowego zadania\' zostało uaktualnione w #projekt-1.',
    _id: 'ECEF8127-C237-9612-924B-2A087D6FACA4'
  }, {
    type: 'activity',
    user: {
      name: 'Ty',
      pictureDataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMzExLjU0MXB4IiBoZWlnaHQ9IjMxMS41NDFweCIgdmlld0JveD0iMCAwIDMxMS41NDEgMzExLjU0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzExLjU0MSAzMTEuNTQxOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU1Ljc3MSwyNi4zMzFDNjkuNzQsMjYuMzMxLDAsOTYuMDcxLDAsMTgyLjEwMmMwLDM3LjQ4OCwxMy4yNSw3MS44ODMsMzUuMzE0LDk4Ljc2MQoJCQljMy40MDQtMjcuMjU2LDMwLjYyNy01MC4zMDgsNjguOC02MS4yMjVjMTMuOTQ2LDEyLjk5NCwzMS45NiwyMC44NzgsNTEuNjU2LDIwLjg3OGMxOS4yMzMsMCwzNi44OTQtNy40ODcsNTAuNjk4LTE5LjkzNgoJCQljMzguNTAzLDExLjg3MSw2NS4xNDEsMzYuMjcsNjYuMDE3LDY0LjYzYzI0LjI4NC0yNy40NzIsMzkuMDU2LTYzLjU1NSwzOS4wNTYtMTAzLjEwOAoJCQlDMzExLjU0MSw5Ni4wNzEsMjQxLjgwMSwyNi4zMzEsMTU1Ljc3MSwyNi4zMzF6IE0xNTUuNzcxLDIyMi4wNjljLTkuOTQ0LDAtMTkuMzE0LTIuNzMyLTI3LjYzNC03LjQ2NAoJCQljLTIwLjA1LTExLjQwOS0zMy44NTUtMzQuNzU2LTMzLjg1NS02MS43MTFjMC0zOC4xNDMsMjcuNTgzLTY5LjE3Niw2MS40ODktNjkuMTc2YzMzLjkwOSwwLDYxLjQ4OSwzMS4wMzMsNjEuNDg5LDY5LjE3NgoJCQljMCwyNy4zNjktMTQuMjM3LDUxLjAwNC0zNC43ODYsNjIuMjE1QzE3NC4zNzksMjE5LjUyMywxNjUuMzQ2LDIyMi4wNjksMTU1Ljc3MSwyMjIuMDY5eiIgZmlsbD0iIzQwNDA0MCIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo='
    },
    time: +Moment(Moment.now()).subtract(30, 'hours'),
    subject: 'projekt-2',
    category: 'tasks',
    title: 'Zadanie zostało zaktualizowane',
    message: 'Zadanie \'Utworzenie nowego zadania\' zostało uaktualnione w #projekt-2.',
    _id: 'ECEF8127-C237-9612-924B-2A087D6FACA5'
  }, {
    type: 'activity',
    user: {
      name: 'Ty',
      pictureDataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMzExLjU0MXB4IiBoZWlnaHQ9IjMxMS41NDFweCIgdmlld0JveD0iMCAwIDMxMS41NDEgMzExLjU0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzExLjU0MSAzMTEuNTQxOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU1Ljc3MSwyNi4zMzFDNjkuNzQsMjYuMzMxLDAsOTYuMDcxLDAsMTgyLjEwMmMwLDM3LjQ4OCwxMy4yNSw3MS44ODMsMzUuMzE0LDk4Ljc2MQoJCQljMy40MDQtMjcuMjU2LDMwLjYyNy01MC4zMDgsNjguOC02MS4yMjVjMTMuOTQ2LDEyLjk5NCwzMS45NiwyMC44NzgsNTEuNjU2LDIwLjg3OGMxOS4yMzMsMCwzNi44OTQtNy40ODcsNTAuNjk4LTE5LjkzNgoJCQljMzguNTAzLDExLjg3MSw2NS4xNDEsMzYuMjcsNjYuMDE3LDY0LjYzYzI0LjI4NC0yNy40NzIsMzkuMDU2LTYzLjU1NSwzOS4wNTYtMTAzLjEwOAoJCQlDMzExLjU0MSw5Ni4wNzEsMjQxLjgwMSwyNi4zMzEsMTU1Ljc3MSwyNi4zMzF6IE0xNTUuNzcxLDIyMi4wNjljLTkuOTQ0LDAtMTkuMzE0LTIuNzMyLTI3LjYzNC03LjQ2NAoJCQljLTIwLjA1LTExLjQwOS0zMy44NTUtMzQuNzU2LTMzLjg1NS02MS43MTFjMC0zOC4xNDMsMjcuNTgzLTY5LjE3Niw2MS40ODktNjkuMTc2YzMzLjkwOSwwLDYxLjQ4OSwzMS4wMzMsNjEuNDg5LDY5LjE3NgoJCQljMCwyNy4zNjktMTQuMjM3LDUxLjAwNC0zNC43ODYsNjIuMjE1QzE3NC4zNzksMjE5LjUyMywxNjUuMzQ2LDIyMi4wNjksMTU1Ljc3MSwyMjIuMDY5eiIgZmlsbD0iIzQwNDA0MCIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo='
    },
    time: +Moment(Moment.now()).subtract(2, 'hours'),
    subject: 'projekt-3',
    category: 'tasks',
    title: 'Zadanie zostało zaktualizowane',
    message: 'Zadanie \'Utworzenie nowego zadania\' zostało uaktualnione w #projekt-3.',
    _id: 'ECEF8127-C237-9612-924B-2A087D6FACA6'
  }
];
