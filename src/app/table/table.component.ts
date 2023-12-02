import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  data: any[] = [];
  filteredData: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchTerm: string = '';
  desiredPage: number = 1;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.authService.getLogInData().subscribe((result: any[]) => {
      this.data = result;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredData = this.data.filter(item =>
      item.email.split('@')[0].toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToPage() {
    if (this.desiredPage >= 1 && this.desiredPage <= this.totalPages) {
      this.currentPage = this.desiredPage;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredData.slice(startIndex, endIndex);
  }

  get disblebtn(): boolean {
    return this.currentPage >= this.totalPages
  }

  userName(email: string): string {
    const username = email.split('@')[0];
    return username;
  }
}
