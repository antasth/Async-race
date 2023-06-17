import Table from './modules/table';

export class AppView {
    private table: Table;

    constructor() {
        this.table = new Table();
    }

    public drawTable() {
        this.table.drawTable();
    }
}

export default AppView;
