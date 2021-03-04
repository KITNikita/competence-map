import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test-vps',
  templateUrl: './test-vps.component.html'
})
export class TestVpsComponent implements OnInit {

  res: string[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Array<string>>(`/api/test-vps`)
      .subscribe((result) => this.res = result);
  }

}
