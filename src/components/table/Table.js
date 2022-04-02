import {ExcelComponent} from '@core/ExcelComponent';
import {tableTemplate} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return tableTemplate(100)
  }
}
